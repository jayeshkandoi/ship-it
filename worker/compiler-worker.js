// Ship It Compiler API — deploy as a Cloudflare Worker.
 // Optional Worker secrets/vars:
 // JUDGE0_URL (defaults to https://ce.judge0.com)
 // JUDGE0_AUTH_TOKEN (only if your Judge0 instance requires it)
 // ALLOWED_ORIGIN (defaults to https://jayeshkandoi.github.io)
const LANGUAGES=new Set([50,54,62,63,71]);
const corsHeaders=origin=>({
 "Access-Control-Allow-Origin":origin,
 "Access-Control-Allow-Methods":"POST, OPTIONS",
 "Access-Control-Allow-Headers":"Content-Type",
 "Vary":"Origin"
});
const json=(data,status,headers)=>new Response(JSON.stringify(data),{status,headers:{...headers,"Content-Type":"application/json; charset=utf-8"}});
export default {
 async fetch(request,env){
  const allowed=env.ALLOWED_ORIGIN||"https://jayeshkandoi.github.io";
  const origin=request.headers.get("Origin")||"";
  const headers=corsHeaders(allowed);
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers});
  if(origin!==allowed)return json({error:"Origin not allowed."},403,headers);
  const url=new URL(request.url);
  if(url.pathname!=="/run"||request.method!=="POST")return json({error:"Use POST /run."},404,headers);
  let body;try{body=await request.json()}catch{return json({error:"Request body must be valid JSON."},400,headers)}
  const language_id=Number(body.language_id),source_code=String(body.source_code||""),stdin=String(body.stdin||"");
  if(!LANGUAGES.has(language_id))return json({error:"Unsupported language."},400,headers);
  if(!source_code.trim())return json({error:"Source code is empty."},400,headers);
  if(source_code.length>50000||stdin.length>10000)return json({error:"Code limit is 50 KB and stdin limit is 10 KB."},413,headers);
  const base=(env.JUDGE0_URL||"https://ce.judge0.com").replace(/\/$/,"");
  const auth=env.JUDGE0_AUTH_TOKEN?{"X-Auth-Token":env.JUDGE0_AUTH_TOKEN}:{};
  try{
   const submitted=await fetch(base+"/submissions?base64_encoded=false&wait=false",{method:"POST",headers:{"Content-Type":"application/json",...auth},body:JSON.stringify({language_id,source_code,stdin,cpu_time_limit:5,wall_time_limit:10,memory_limit:128000})});
   const created=await submitted.json();
   if(!submitted.ok||!created.token)return json({error:created.error||"Could not submit code to Judge0."},502,headers);
   let result=null;
   for(let attempt=0;attempt<20;attempt++){
    await new Promise(resolve=>setTimeout(resolve,700));
    const poll=await fetch(base+"/submissions/"+encodeURIComponent(created.token)+"?base64_encoded=false&fields=stdout,stderr,compile_output,message,status,time,memory",{headers:auth});
    if(!poll.ok)throw new Error("Could not retrieve execution result.");
    result=await poll.json();
    if(result.status&&result.status.id>2)break;
   }
   if(!result||!result.status||result.status.id<=2)return json({error:"Execution is taking longer than expected. Please run again."},504,headers);
   return json(result,200,headers);
  }catch(error){return json({error:error.message||"Compiler service unavailable."},502,headers)}
 }
};