/* Shared store, rewards, and themes. Keys: "<stage>-<topic>", "<stage>-quiz", "p<pattern>-<problem>", "r<concept>", "g<lang>-<n>". */
const COUNTS=[5,5,5,5,5,5];
const NAMES=["Rookie","Coder","Builder","Debugger","Architect","Engineer","Wizard","Legend"];
const PRAISE=["Nice. One step closer.","That’s real progress.","Small steps add up.","You showed up. That counts.","Look at you go.","Another one down."];
const wt=k=>/^\d-quiz$/.test(k)?50:/^\d-\d$/.test(k)?20:/^p\d+-\d+$/.test(k)?10:/^r\d+$/.test(k)?15:/^f\d+-\d+$/.test(k)?8:/^g/.test(k)?5:0;
const st=L=>50*L*(L-1),lvOf=x=>{let l=1;while(x>=st(l+1))l++;return l},nm=l=>NAMES[Math.min(l,NAMES.length)-1];
const Store={k:"shipit-progress",d:{},
init(){try{this.d=JSON.parse(localStorage.getItem(this.k)||"{}")}catch(e){this.d={}}},
save(){try{localStorage.setItem(this.k,JSON.stringify(this.d))}catch(e){}},
get(k){return !!this.d[k]},
set(k,v){const was=!!this.d[k];this.d[k]=v;if(v)this.touch();this.save();if(v&&!was)Rewards.gain(k)},
day(){return new Date().toISOString().slice(0,10)},
gap(a,b){return Math.round((new Date(a)-new Date(b))/864e5)},
touch(){const t=this.day(),l=this.d.__last;if(l===t)return;this.d.__streak=l&&this.gap(t,l)===1?(this.d.__streak||0)+1:1;this.d.__best=Math.max(this.d.__best||0,this.d.__streak);this.d.__last=t},
streak(){const l=this.d.__last;return l&&this.gap(this.day(),l)<=1?(this.d.__streak||0):0},
stage(i){let c=0;for(let j=0;j<COUNTS[i];j++)if(this.d[i+"-"+j])c++;return c},
total(){return COUNTS.reduce((a,_,i)=>a+this.stage(i),0)}};
Store.init();
const BADGES=[
["first","First step","Complete any step",s=>s.xp>0],
["s3","On a roll","Reach a 3-day streak",()=>(Store.d.__best||0)>=3],
["s7","One week strong","Reach a 7-day streak",()=>(Store.d.__best||0)>=7],
["found","Toolbox ready","Finish all Foundations topics",()=>Store.stage(0)===5],
["half","Halfway there","Finish 15 roadmap steps",()=>Store.total()>=15],
["p10","Warm-up","Solve 10 practice problems",s=>s.pc>=10],
["p30","Problem solver","Solve 30 practice problems",s=>s.pc>=30],
["rev","Polyglot","Finish all 12 language concepts",s=>s.rc>=12],
["quiz","Quiz ace","Pass the DSA checkpoint quiz",()=>Store.get("1-quiz")],
["fc","Memory machine","Master 20 flashcards",s=>s.fc>=20],
["lv5","Level 5","Reach level 5",s=>s.lv>=5]];
const Toast={q:[],busy:false,say(t){this.q.push(t);if(!this.busy)this.next()},next(){const t=this.q.shift();if(!t){this.busy=false;return}this.busy=true;let el=document.getElementById("toast");if(!el){el=document.createElement("div");el.id="toast";el.className="toast";el.setAttribute("role","status");document.body.appendChild(el)}el.textContent=t;el.classList.add("show");setTimeout(()=>{el.classList.remove("show");setTimeout(()=>this.next(),250)},2200)}};
function confetti(){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;const c=["var(--accent)","var(--warm)","var(--ok)","#f472b6","#60a5fa"];for(let i=0;i<36;i++){const p=document.createElement("i");p.className="cf";p.style.cssText=`left:${Math.random()*100}%;background:${c[i%5]};--dx:${(Math.random()*160-80)|0}px;animation-delay:${Math.random()*.3}s`;document.body.appendChild(p);setTimeout(()=>p.remove(),2300)}}
/* Importance: 1-5 editorial estimate of how often a topic comes up in interviews and real work. Not official statistics. */
const IMP_LABEL=["","Rarely asked","Sometimes asked","Asked regularly","Asked very often","Asked almost everywhere"];
const IMP_NOTE="Editorial estimate from commonly reported interview patterns, not official statistics. Big-tech and small-company interviews differ.";
const IMPS=[[5,5,4,3,4],[5,5,4,5,4],[4,4,4,5,4],[5,4,3,3,4],[3,4,3,2,3],[5,3,5,4,5]];
const IMPP=[[5,"Shows up in a huge share of easy and medium questions, and it is the usual first optimization."],[4,"Common warm-up in phone screens, especially on sorted arrays and strings."],[4,"The standard tool for substring and subarray questions."],[3,"Parentheses matching is a classic; harder stack questions are rarer."],[4,"Asked on its own and hidden inside \u201cminimum that works\u201d problems."],[3,"Fewer jobs use it daily, but reverse, merge and cycle questions are interview staples."],[5,"Near the top of every list. Expect at least one tree question in most loops."],[3,"Appears as top-K and scheduling problems. Know it, but it is rarely the main event."],[4,"BFS and DFS on grids and dependencies come up often at mid and senior levels."],[3,"Asked at stronger companies; usually one subsets or permutations problem."],[4,"Big-tech favourite and often the hardest round, but many companies skip it."]];
const Imp={
meter(n,full){return`<span class="imp" role="img" aria-label="${IMP_LABEL[n]}, ${n} out of 5"><span class="mt">${[1,2,3,4,5].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("")}</span>${full===false?"":`<span class="il">${IMP_LABEL[n]}</span>`}</span>`}};
const escH=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
/* Weekly XP: counts each item once per week, so un-ticking and re-ticking cannot farm points. */
const Week={
mon(){const d=new Date(Store.day()+"T00:00:00Z"),o=(d.getUTCDay()+6)%7;d.setUTCDate(d.getUTCDate()-o);return d.toISOString().slice(0,10)},
add(k){const m=this.mon(),w=Store.d.__wk;if(!w||w.m!==m)Store.d.__wk={m:m,k:{}};Store.d.__wk.k[k]=true;Store.save()},
xp(){const w=Store.d.__wk;if(!w||w.m!==this.mon())return 0;let x=0;for(const k in w.k)x+=wt(k);return x}};
/* Squad: no server. Progress is packed into a code a friend can paste in. */
const Squad={pre:"SHIPIT1.",
id(){if(!Store.d.__id){Store.d.__id=(Math.random().toString(36)+"00000000").slice(2,10);Store.save()}return Store.d.__id},
name(){return Store.d.__name||""},
setName(n){Store.d.__name=String(n).trim().slice(0,20);Store.save()},
me(){const r=Rewards.snap(),e=Store.d.__badges||{};return{v:1,i:this.id(),n:this.name()||"Me",x:r.xp,w:Week.xp(),s:Store.streak(),t:Store.total(),p:r.pc,b:Object.keys(e).length,d:Store.day()}},
code(){return this.pre+btoa(unescape(encodeURIComponent(JSON.stringify(this.me()))))},
parse(c){try{const mt=String(c).match(/SHIPIT1\.([A-Za-z0-9+\/]+={0,2})/);if(!mt)return null;c=mt[1];const o=JSON.parse(decodeURIComponent(escape(atob(c)))),n=v=>Math.max(0,Math.min(1e6,Math.floor(+v)||0));
if(!o||o.v!==1||typeof o.i!=="string"||!/^[a-z0-9]{4,12}$/.test(o.i))return null;
return{v:1,i:o.i,n:String(o.n||"Friend").replace(/[\u0000-\u001f]/g,"").slice(0,20)||"Friend",x:n(o.x),w:n(o.w),s:n(o.s),t:Math.min(30,n(o.t)),p:n(o.p),b:n(o.b),d:/^\d{4}-\d{2}-\d{2}$/.test(o.d)?o.d:Store.day()}}catch(e){return null}},
friends(){return Store.d.__friends||{}},
add(f){if(f.i===this.id())return"self";const all=Store.d.__friends=Store.d.__friends||{},old=all[f.i];all[f.i]=f;Store.save();return old?"updated":"added"},
remove(i){if(Store.d.__friends){delete Store.d.__friends[i];Store.save()}},
link(){return location.href.split("#")[0].replace(/[^\/]*$/,"")+(location.pathname.indexOf("/stages/")>-1?"":"stages/")+"squad.html#join="+this.code()}};
const Rewards={
snap(){let xp=0,pc=0,rc=0,fc=0;for(const k in Store.d){if(Store.d[k]!==true)continue;xp+=wt(k);if(/^p\d+-\d+$/.test(k))pc++;if(/^r\d+$/.test(k))rc++;if(/^f\d+-\d+$/.test(k))fc++}return{xp,pc,rc,fc,lv:lvOf(xp)}},
check(say){const s=this.snap(),e=Store.d.__badges=Store.d.__badges||{};let n=false;BADGES.forEach(b=>{if(!e[b[0]]&&b[3](s)){e[b[0]]=true;n=true;if(say)Toast.say("Badge unlocked: "+b[1])}});if(n)Store.save();return n},
gain(k){const w=wt(k);if(!w)return;Week.add(k);const s=this.snap();
Toast.say("+"+w+" XP · "+PRAISE[Math.floor(Math.random()*PRAISE.length)]);let party=false;
if(s.lv>lvOf(s.xp-w)){Toast.say("Level up! You’re now level "+s.lv+": "+nm(s.lv));party=true}
const m=k.match(/^(\d)-(\d|quiz)$/);
if(m){if(m[2]==="quiz"){Toast.say("Checkpoint passed!");party=true}else if(Store.stage(+m[1])===COUNTS[+m[1]]){Toast.say("Stage "+(+m[1]+1)+" complete!");party=true}}
if(this.check(true))party=true;this.pill();if(party)confetti()},
pill(){const s=this.snap(),b=document.getElementById("xpbtn");if(b)b.textContent="Lv "+s.lv+" · "+s.xp+" XP"},
open(){this.check(false);const s=this.snap(),c=st(s.lv),n=st(s.lv+1),e=Store.d.__badges||{},k=BADGES.filter(b=>e[b[0]]).length;
const o=document.createElement("div");o.className="ovl";
o.innerHTML=`<div class="card modal" role="dialog" aria-modal="true" aria-label="Rewards"><div class="t-top"><h2 style="margin:0">Level ${s.lv}: ${nm(s.lv)}</h2><button class="ghost" id="cl">Close</button></div><p class="sub" style="margin-top:8px">${s.xp} XP · ${n-s.xp} to level ${s.lv+1}</p><div class="bar"><i style="width:${Math.round((s.xp-c)/(n-c)*100)}%"></i></div><p class="note">Streak: ${Store.streak()} days · Best: ${Store.d.__best||0} days</p><h3>Badges (${k} of ${BADGES.length})</h3><div class="bgrid">${BADGES.map(b=>`<div class="bdg ${e[b[0]]?"on":""}"><b>${e[b[0]]?"★":"○"} ${b[1]}</b><p>${b[2]}</p></div>`).join("")}</div><h3>How you earn XP</h3><p class="note">Roadmap topic 20 · Checkpoint quiz 50 · Language concept 15 · Practice problem 10 · Flashcard mastered 8 · Gotcha 5</p></div>`;
document.body.appendChild(o);const kd=e=>{if(e.key==="Escape")x()},x=()=>{o.remove();document.removeEventListener("keydown",kd)};document.addEventListener("keydown",kd);
o.addEventListener("click",e=>{if(e.target===o||e.target.id==="cl")x()});o.querySelector("#cl").focus()}};
const THEMES=[["cinema","Cinema","#e50914","#141414"],["midnight","Midnight","#6ea8ff","#0e1423"]];
const Theme={pop:null,
toggle(){if(this.pop){this.close();return}Lofi.close();const cur=document.documentElement.dataset.theme||"cinema",p=document.createElement("div");p.className="pop";p.setAttribute("role","group");p.setAttribute("aria-label","Choose a theme");
p.innerHTML=`<b>Choose a look</b><div class="swg">${THEMES.map(t=>`<button class="sw" data-th="${t[0]}" aria-pressed="${t[0]===cur}"><span style="background:linear-gradient(135deg,${t[3]} 50%,${t[2]} 50%)"></span>${t[1]}</button>`).join("")}</div>`;
p.onclick=e=>{const b=e.target.closest("[data-th]");if(!b)return;this.set(b.dataset.th);p.querySelectorAll("[data-th]").forEach(x=>x.setAttribute("aria-pressed",x===b))};
document.body.appendChild(p);this.pop=p;setTimeout(()=>{this.out=e=>{if(!p.contains(e.target)&&e.target.id!=="thbtn")this.close()};document.addEventListener("click",this.out)},0)},
close(){if(this.pop){this.pop.remove();this.pop=null;document.removeEventListener("click",this.out)}},
set(id){document.documentElement.dataset.theme=id;try{localStorage.setItem("shipit-theme",id)}catch(e){}}};
document.addEventListener("keydown",e=>{if(e.key==="Escape")Theme.close()});
function paintStreak(){const s=Store.streak(),e=document.getElementById("streak");if(e)e.textContent=s?s+"-day streak":"Start a streak today";Rewards.pill()}
/* Lofi music: generated live with Web Audio. No audio files, so nothing to download or license. */
const Lofi={
M:{chill:{n:"Chill",bpm:72,drums:1,rain:0,sw:.14,ch:[[[50,57,60,64],38],[[53,59,62,64],43],[[52,55,59,62],36],[[55,59,60,64],45]]},
rainy:{n:"Rainy day",bpm:64,drums:1,rain:1,sw:.18,ch:[[[53,57,60,64],41],[[52,55,59,62],40],[[53,57,60,64],38],[[52,55,59,64],36]]},
focus:{n:"Deep focus",bpm:60,drums:0,rain:0,sw:0,ch:[[[52,55,59,62],36],[[52,55,60,64],45],[[53,57,60,64],41],[[55,59,62,64],43]]}},
s:{on:false,mood:"chill",vol:.5,rain:false},live:false,ctx:null,iv:null,pop:null,nt:0,step:0,
load(){try{const o=JSON.parse(localStorage.getItem("shipit-music")||"{}");if(o&&typeof o==="object"){if(this.M[o.mood])this.s.mood=o.mood;if(typeof o.vol==="number")this.s.vol=Math.max(0,Math.min(1,o.vol));this.s.rain=!!o.rain;this.s.on=!!o.on}}catch(e){}},
save(){try{localStorage.setItem("shipit-music",JSON.stringify(this.s))}catch(e){}},
init(){if(this.ctx)return true;const C=window.AudioContext||window.webkitAudioContext;if(!C)return false;
const x=this.ctx=new C(),n=x.sampleRate*2;
const comp=x.createDynamicsCompressor();comp.connect(x.destination);
this.out=x.createGain();this.out.gain.value=this.s.vol*this.s.vol;this.out.connect(comp);
const lp=x.createBiquadFilter();lp.type="lowpass";lp.frequency.value=2600;lp.Q.value=.5;lp.connect(this.out);
this.bus=x.createGain();this.bus.connect(lp);
const d=x.createDelay(1);d.delayTime.value=.42;const fb=x.createGain();fb.gain.value=.28;const df=x.createBiquadFilter();df.type="lowpass";df.frequency.value=1500;const wet=x.createGain();wet.gain.value=.25;
this.bus.connect(d);d.connect(df);df.connect(fb);fb.connect(d);df.connect(wet);wet.connect(lp);
const b=x.createBuffer(1,n,x.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;this.nb=b;
const c=x.createBuffer(1,n,x.sampleRate),ca=c.getChannelData(0);for(let i=0;i<n;i++)ca[i]=Math.random()<.0002?Math.random()*2-1:0;
const cs=x.createBufferSource();cs.buffer=c;cs.loop=true;const chp=x.createBiquadFilter();chp.type="highpass";chp.frequency.value=1200;const cg=x.createGain();cg.gain.value=.12;cs.connect(chp);chp.connect(cg);cg.connect(this.out);cs.start();
const rs=x.createBufferSource();rs.buffer=b;rs.loop=true;const rb=x.createBiquadFilter();rb.type="bandpass";rb.frequency.value=1800;rb.Q.value=.4;this.rg=x.createGain();this.rg.gain.value=0;rs.connect(rb);rb.connect(this.rg);this.rg.connect(this.out);rs.start();
return true},
note(m,t,dur,v){const x=this.ctx,f=440*Math.pow(2,(m-69)/12);
[["sine",0,1],["triangle",5,.35]].forEach(o=>{const q=x.createOscillator(),g=x.createGain();q.type=o[0];q.frequency.value=f;q.detune.value=o[1]+(Math.random()*6-3);
g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v*o[2],t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);q.connect(g);g.connect(this.bus);q.start(t);q.stop(t+dur+.05)})},
bass(m,t,dur){const x=this.ctx,q=x.createOscillator(),g=x.createGain();q.type="triangle";q.frequency.value=440*Math.pow(2,(m-69)/12);
g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.2,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+dur);q.connect(g);g.connect(this.bus);q.start(t);q.stop(t+dur+.05)},
kick(t,v){const x=this.ctx,q=x.createOscillator(),g=x.createGain();q.frequency.setValueAtTime(120,t);q.frequency.exponentialRampToValueAtTime(42,t+.12);
g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.28);q.connect(g);g.connect(this.bus);q.start(t);q.stop(t+.3)},
noise(t,dur,f,type,v){const x=this.ctx,q=x.createBufferSource(),fl=x.createBiquadFilter(),g=x.createGain();q.buffer=this.nb;fl.type=type;fl.frequency.value=f;
g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);q.connect(fl);fl.connect(g);g.connect(this.bus);q.start(t,Math.random());q.stop(t+dur+.02)},
tick(){const x=this.ctx;if(!x)return;const m=this.M[this.s.mood],sp=60/m.bpm/2;
while(this.nt<x.currentTime+.2){const st=this.step%32,c=m.ch[st>>3],p=st&7,t=this.nt+((p&1)?sp*m.sw:0)+(Math.random()*.012-.006);
if(p===0){c[0].forEach((n,i)=>this.note(n,t+i*.018,m.drums?2.4:3.8,m.drums?.07:.06));this.bass(c[1],t,sp*3)}
if(m.drums){if(p===5){c[0].forEach((n,i)=>this.note(n,t+i*.014,1.1,.045))}
if(p===0||p===5)this.kick(t,p?.35:.55);if(p===6)this.bass(c[1],t,sp*1.6);
if(p===2||p===6)this.noise(t,.16,1800,"bandpass",.22);this.noise(t,.04,7000,"highpass",.05*((p&1)?.6:1)*(.7+Math.random()*.3))}
if([1,3,4,7].indexOf(p)>-1&&Math.random()<(m.drums?.22:.14))this.note(c[0][Math.floor(Math.random()*4)]+12,t,1.4,.05);
this.nt+=sp;this.step++}},
async play(){if(!this.init()){this.ui(true);return}const x=this.ctx;try{await x.resume()}catch(e){}
this.s.on=true;this.live=true;this.save();this.nt=x.currentTime+.1;this.step=0;clearInterval(this.iv);this.iv=setInterval(()=>this.tick(),25);this.rain();this.ui();this.paint()},
pause(){clearInterval(this.iv);this.iv=null;if(this.ctx)this.ctx.suspend();this.s.on=false;this.live=false;this.save();this.ui();this.paint()},
rain(){if(this.rg)this.rg.gain.setTargetAtTime(this.s.rain?.1:0,this.ctx.currentTime,.5)},
setVol(v){this.s.vol=v;this.save();if(this.out)this.out.gain.setTargetAtTime(v*v,this.ctx.currentTime,.05)},
setMood(id){if(!this.M[id])return;this.s.mood=id;this.s.rain=!!this.M[id].rain;this.save();if(this.ctx){this.step=0;this.nt=this.ctx.currentTime+.1;this.rain()}this.paint()},
ui(fail){const b=document.getElementById("mubtn");if(!b)return;b.textContent=fail?"♪ Not supported":this.live?"♪ Playing":this.s.on?"♪ Resume":"♪ Music";b.setAttribute("aria-pressed",this.live)},
arm(){if(!this.s.on||this.live)return;const go=e=>{if(e.target&&e.target.closest&&e.target.closest("#mubtn,.pop"))return;document.removeEventListener("click",go);document.removeEventListener("keydown",go);if(!this.live&&this.s.on)this.play()};
document.addEventListener("click",go);document.addEventListener("keydown",go)},
paint(){if(!this.pop)return;const s=this.s;
this.pop.innerHTML=`<b>Lofi study music</b><p class="note" style="margin:4px 0 12px">Made live in your browser. No ads, nothing to download.</p><button class="btn" data-lo="play" style="width:100%">${this.live?"Pause":s.on?"▶ Resume":"▶ Play"}</button><div class="chips" style="margin:14px 0 10px">${Object.keys(this.M).map(k=>`<button class="chip" data-mood="${k}" aria-pressed="${k===s.mood}">${this.M[k].n}</button>`).join("")}<button class="chip" data-lo="rain" aria-pressed="${s.rain}">Rain</button></div><label for="lovol" style="padding:0;font-weight:700">Volume</label><input type="range" id="lovol" min="0" max="1" step=".01" value="${s.vol}" style="width:100%;accent-color:var(--accent)"><p class="fine">If you open another page, tap anywhere there and the music comes back.</p>`},
toggle(){if(this.pop){this.close();return}if(typeof Theme!=="undefined")Theme.close();
const p=document.createElement("div");p.className="pop";p.setAttribute("role","group");p.setAttribute("aria-label","Lofi music");p.style.width="290px";
p.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
if(b.dataset.lo==="play")this.live?this.pause():this.play();
else if(b.dataset.lo==="rain"){this.s.rain=!this.s.rain;this.save();this.rain();this.paint()}
else if(b.dataset.mood)this.setMood(b.dataset.mood)});
p.addEventListener("input",e=>{if(e.target.id==="lovol")this.setVol(+e.target.value)});
document.body.appendChild(p);this.pop=p;this.paint();
setTimeout(()=>{this.outc=e=>{if(!e.target.isConnected)return;if(!p.contains(e.target)&&!(e.target.closest&&e.target.closest("#mubtn,[data-act=music]")))this.close()};document.addEventListener("click",this.outc)},0)},
close(){if(this.pop){this.pop.remove();this.pop=null;document.removeEventListener("click",this.outc)}}};
Lofi.load();
document.addEventListener("keydown",e=>{if(e.key==="Escape")Lofi.close()});
window.addEventListener("pagehide",()=>{clearInterval(Lofi.iv);if(Lofi.ctx)try{Lofi.ctx.close()}catch(e){}});
(function(){const top=document.querySelector(".top");if(!top)return;const t=document.createElement("span");t.className="tools";
t.innerHTML=`<a class="mini" href="${location.pathname.indexOf("/stages/")>-1?"":"stages/"}squad.html">Squad</a><button class="mini" id="mubtn" aria-haspopup="true" aria-pressed="false">♪ Music</button><button class="mini" id="xpbtn" aria-haspopup="dialog"></button><button class="mini" id="thbtn" aria-haspopup="true">Theme</button>`;top.appendChild(t);
t.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.id==="xpbtn")Rewards.open();else if(b.id==="mubtn")Lofi.toggle();else Theme.toggle()});Rewards.pill();Lofi.ui();Lofi.arm()})();
function mountTimer(el){let tot=900,left=900,t=null;
el.innerHTML=`<div class="card timer"><div class="t-top"><b>Focus timer</b><span class="chips" style="margin:0">${[10,15,25].map(m=>`<button class="chip" data-m="${m}" aria-pressed="${m==15}">${m} min</button>`).join("")}</span></div><div class="t-time" id="tt">15:00</div><div class="bar"><i id="tb"></i></div><button class="btn" id="ts">Start</button><p class="note" id="tn" style="margin-top:12px">One small thing. Phone away, one tab open.</p></div>`;
const tt=el.querySelector("#tt"),tb=el.querySelector("#tb"),ts=el.querySelector("#ts"),tn=el.querySelector("#tn");
function draw(){tt.textContent=String(Math.floor(left/60)).padStart(2,"0")+":"+String(left%60).padStart(2,"0");tb.style.width=((tot-left)/tot*100)+"%"}
function stop(){clearInterval(t);t=null;ts.textContent="Start"}
ts.onclick=()=>{if(t){stop();return}if(left<=0)left=tot;ts.textContent="Pause";tn.textContent="You’re doing it. Just this one thing.";
t=setInterval(()=>{left--;draw();if(left<=0){stop();tn.textContent="Time’s up. Great work. Take a 3-minute break before the next one."}},1000)};
el.onclick=e=>{const b=e.target.closest("[data-m]");if(!b)return;stop();tot=left=b.dataset.m*60;el.querySelectorAll("[data-m]").forEach(x=>x.setAttribute("aria-pressed",x===b));draw()};
draw()}
