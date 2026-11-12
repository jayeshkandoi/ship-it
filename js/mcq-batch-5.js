const MCQ_BATCH_5 = [
  [
    "Foundations",
    "Git workflows",
    "Easy",
    "Which command creates a new Git branch and switches to it?",
    [
      "git branch -d feature",
      "git switch -c feature",
      "git merge feature",
      "git status -b"
    ],
    1,
    "git switch -c creates the branch and checks it out."
  ],
  [
    "Foundations",
    "Git workflows",
    "Medium",
    "What does git cherry-pick do?",
    [
      "Copies a selected commit onto the current branch",
      "Deletes all remote branches",
      "Combines every branch",
      "Rewrites the repository URL"
    ],
    0,
    "Cherry-pick applies the changes introduced by a selected commit."
  ],
  [
    "Foundations",
    "Git workflows",
    "Hard",
    "A merge conflict occurs. What should you do before completing the merge?",
    [
      "Delete the repository",
      "Resolve conflict markers, test the result, then stage resolved files",
      "Force push immediately",
      "Reset the remote branch"
    ],
    1,
    "Conflicted files need deliberate resolution and validation before the merge commit."
  ],
  [
    "Foundations",
    "Command line",
    "Easy",
    "Which command lists files in the current directory on common Unix-like systems?",
    [
      "pwd",
      "ls",
      "touch",
      "grep"
    ],
    1,
    "ls lists directory contents."
  ],
  [
    "Foundations",
    "Command line",
    "Medium",
    "What does grep -R \"TODO\" src/ do?",
    [
      "Renames src",
      "Searches recursively for TODO in src",
      "Deletes TODO comments",
      "Compiles source files"
    ],
    1,
    "The -R option makes grep search recursively through directories."
  ],
  [
    "Foundations",
    "Command line",
    "Hard",
    "Why is quoting a shell variable such as \"$file\" important when it may contain spaces?",
    [
      "It encrypts the variable",
      "It prevents word splitting and pathname expansion",
      "It changes file permissions",
      "It makes the command recursive"
    ],
    1,
    "Quoting preserves the variable expansion as one argument."
  ],
  [
    "Foundations",
    "Networking basics",
    "Easy",
    "Which protocol is commonly used to transfer web pages?",
    [
      "HTTP",
      "SMTP",
      "SSH",
      "NTP"
    ],
    0,
    "HTTP is the application protocol used for web communication."
  ],
  [
    "Foundations",
    "Networking basics",
    "Medium",
    "What does a 404 HTTP response mean?",
    [
      "Server error",
      "Resource not found",
      "Request succeeded",
      "Authentication required"
    ],
    1,
    "404 indicates that the requested resource was not found."
  ],
  [
    "Foundations",
    "Networking basics",
    "Hard",
    "What is the purpose of a reverse proxy?",
    [
      "Route client requests to backend servers and often handle TLS or caching",
      "Replace source control",
      "Compile CSS",
      "Store browser bookmarks"
    ],
    0,
    "A reverse proxy sits in front of servers and can route, secure and optimize incoming traffic."
  ],
  [
    "Foundations",
    "Accessibility",
    "Easy",
    "Which HTML attribute associates a label with a form input by ID?",
    [
      "for",
      "target",
      "href",
      "name"
    ],
    0,
    "The label's for attribute matches the input's id."
  ],
  [
    "Foundations",
    "Accessibility",
    "Medium",
    "Why should interactive controls be reachable by keyboard?",
    [
      "It reduces HTML size",
      "Some users navigate without a mouse, and keyboard access is a core accessibility requirement",
      "It makes all pages load faster",
      "It disables focus"
    ],
    1,
    "Keyboard operability supports users who rely on keyboards or assistive technologies."
  ],
  [
    "Foundations",
    "Accessibility",
    "Hard",
    "When should ARIA be preferred over native semantic HTML?",
    [
      "Always",
      "When native HTML cannot express the needed semantics or behavior",
      "For every paragraph",
      "To replace all buttons"
    ],
    1,
    "Native elements provide built-in semantics and behavior; ARIA supplements gaps rather than replacing them."
  ],
  [
    "DSA",
    "Bit manipulation",
    "Easy",
    "What is the result of 5 & 3 in binary bitwise AND?",
    [
      "1",
      "2",
      "3",
      "7"
    ],
    0,
    "0101 AND 0011 equals 0001, which is decimal 1."
  ],
  [
    "DSA",
    "Bit manipulation",
    "Medium",
    "How can you test whether a positive integer n is a power of two using bit operations?",
    [
      "n & (n - 1) equals 0, with n greater than 0",
      "n | 1 equals 0",
      "n + 1 equals 0",
      "n % 3 equals 0"
    ],
    0,
    "A power of two has exactly one set bit, so clearing its lowest set bit yields zero."
  ],
  [
    "DSA",
    "Bit manipulation",
    "Hard",
    "What does x ^ x evaluate to for an integer bit pattern?",
    [
      "x",
      "0",
      "1",
      "-x"
    ],
    1,
    "XOR of identical bit patterns clears every bit."
  ],
  [
    "DSA",
    "Greedy algorithms",
    "Easy",
    "What is a greedy algorithm?",
    [
      "An algorithm that makes a locally optimal choice at each step",
      "An algorithm that always tries every permutation",
      "An algorithm that uses no memory",
      "An algorithm that only sorts"
    ],
    0,
    "Greedy methods commit to locally best choices, when a proof shows those choices lead to a global optimum."
  ],
  [
    "DSA",
    "Greedy algorithms",
    "Medium",
    "For the classic activity-selection problem, which greedy choice is optimal?",
    [
      "Choose the activity that finishes earliest",
      "Choose the activity that starts latest",
      "Choose the longest activity",
      "Choose randomly"
    ],
    0,
    "Selecting the earliest finishing compatible activity leaves the most room for later activities."
  ],
  [
    "DSA",
    "Greedy algorithms",
    "Hard",
    "Why must a greedy strategy be justified rather than assumed correct?",
    [
      "Local choices do not always produce a global optimum",
      "Greedy algorithms cannot terminate",
      "Greedy algorithms only work on graphs",
      "Greedy algorithms require recursion"
    ],
    0,
    "A proof such as an exchange argument or cut property is needed to establish correctness."
  ],
  [
    "DSA",
    "Backtracking",
    "Easy",
    "What is backtracking commonly used for?",
    [
      "Exploring choices and undoing a choice when it cannot lead to a solution",
      "Only array indexing",
      "Compressing files",
      "Balancing network traffic"
    ],
    0,
    "Backtracking searches a decision space while pruning paths that cannot succeed."
  ],
  [
    "DSA",
    "Backtracking",
    "Medium",
    "In a permutation generator, why remove a chosen value after the recursive call returns?",
    [
      "To restore the state for the next branch",
      "To sort the result",
      "To make recursion infinite",
      "To free the call stack"
    ],
    0,
    "Undoing the choice restores the path state so other candidates can be explored."
  ],
  [
    "DSA",
    "Backtracking",
    "Hard",
    "What is a key difference between backtracking and dynamic programming?",
    [
      "Backtracking explores candidate paths; DP reuses results of overlapping subproblems",
      "DP always uses less memory",
      "Backtracking cannot use recursion",
      "They are identical"
    ],
    0,
    "Dynamic programming avoids repeated subproblem work by storing reusable states."
  ],
  [
    "DSA",
    "Tries",
    "Easy",
    "What kind of data is a trie particularly useful for storing?",
    [
      "Strings and prefixes",
      "Floating-point matrices only",
      "Images only",
      "Network packets only"
    ],
    0,
    "Tries organize keys by shared prefixes, making prefix queries efficient."
  ],
  [
    "DSA",
    "Tries",
    "Medium",
    "What is the typical lookup complexity in a trie for a word of length L?",
    [
      "O(1) regardless of length",
      "O(L)",
      "O(n²)",
      "O(log L)"
    ],
    1,
    "Lookup follows one edge per character, so work is proportional to key length."
  ],
  [
    "DSA",
    "Tries",
    "Hard",
    "What is a common memory trade-off of a trie compared with a hash map?",
    [
      "Tries can use more nodes and pointers but support prefix operations naturally",
      "Tries always use less memory",
      "Tries cannot store words",
      "Hash maps support prefix lookup more directly"
    ],
    0,
    "Trie nodes and child links can consume significant memory, especially with sparse alphabets."
  ],
  [
    "DSA",
    "Union-find",
    "Easy",
    "What problem does disjoint-set union solve?",
    [
      "Maintaining groups of connected elements",
      "Sorting strings",
      "Finding shortest weighted paths",
      "Parsing HTML"
    ],
    0,
    "Disjoint-set union tracks membership in connected components or equivalence classes."
  ],
  [
    "DSA",
    "Union-find",
    "Medium",
    "What do path compression and union by rank achieve together?",
    [
      "Near-constant amortized operations",
      "O(n²) operations",
      "Stable sorting",
      "Constant memory regardless of n"
    ],
    0,
    "The combination gives an inverse-Ackermann amortized time per operation."
  ],
  [
    "DSA",
    "Union-find",
    "Hard",
    "Why is DSU useful in Kruskal's minimum spanning tree algorithm?",
    [
      "It detects whether adding an edge would connect vertices already in the same component",
      "It sorts edge weights",
      "It calculates shortest paths",
      "It stores adjacency matrices"
    ],
    0,
    "DSU efficiently checks whether an edge would create a cycle between already-connected components."
  ],
  [
    "Web & Backend",
    "HTML semantics",
    "Easy",
    "Which element is intended for a self-contained composition such as a blog post?",
    [
      "article",
      "span",
      "br",
      "meta"
    ],
    0,
    "The article element represents a self-contained composition that could be distributed independently."
  ],
  [
    "Web & Backend",
    "HTML semantics",
    "Medium",
    "What is the purpose of the defer attribute on a classic external script?",
    [
      "Execute the script after document parsing, preserving order among deferred scripts",
      "Run before HTML parsing",
      "Load the script only on hover",
      "Turn JavaScript into a module"
    ],
    0,
    "Deferred classic scripts download in parallel and execute after parsing, in document order."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Easy",
    "Which unit is relative to the root element's font size?",
    [
      "em",
      "rem",
      "vw",
      "px"
    ],
    1,
    "rem is based on the root element's font size."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Medium",
    "What does position: sticky generally do?",
    [
      "Keeps an element in normal flow until a scroll threshold, then sticks within its containing block",
      "Removes an element from layout permanently",
      "Always fixes it to the viewport",
      "Makes it a grid container"
    ],
    0,
    "Sticky positioning behaves relatively until the configured inset threshold is reached."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Hard",
    "Why might z-index not work as expected on an element?",
    [
      "A stacking context or positioning context changes how stacking is ordered",
      "CSS ignores all integers",
      "The element is too colorful",
      "The browser needs a database"
    ],
    0,
    "Stacking contexts are isolated; a child cannot out-rank elements outside its parent stacking context."
  ],
  [
    "Web & Backend",
    "JavaScript async",
    "Easy",
    "Which keyword pauses an async function until a promise settles?",
    [
      "wait",
      "await",
      "defer",
      "yield"
    ],
    1,
    "await suspends the async function's continuation until the promise settles."
  ],
  [
    "Web & Backend",
    "JavaScript async",
    "Medium",
    "What is the difference between Promise.all and Promise.allSettled?",
    [
      "allSettled reports each outcome; all rejects when an input rejects",
      "allSettled cancels promises",
      "all sorts results",
      "There is no difference"
    ],
    0,
    "Promise.allSettled waits for every input and returns fulfilled or rejected status for each."
  ],
  [
    "Web & Backend",
    "JavaScript async",
    "Hard",
    "Why can an unhandled promise rejection cause production problems?",
    [
      "Failures may be silently missed or trigger runtime-level handling, leaving operations incomplete",
      "Promises consume all RAM immediately",
      "It changes HTTP status codes automatically",
      "It prevents browser rendering"
    ],
    0,
    "Rejections should be handled deliberately so failures are logged, surfaced or recovered from."
  ],
  [
    "Web & Backend",
    "React",
    "Easy",
    "What is the purpose of a React Fragment?",
    [
      "Group children without adding an extra DOM element",
      "Fetch API data",
      "Add CSS to the body",
      "Create a route"
    ],
    0,
    "Fragments let components return multiple sibling elements without an extra wrapper node."
  ],
  [
    "Web & Backend",
    "React",
    "Medium",
    "Why should an effect not be used to derive a value that can be calculated during render?",
    [
      "It adds an unnecessary render cycle and synchronization complexity",
      "It prevents JSX",
      "It disables props",
      "It always leaks memory"
    ],
    0,
    "Derived values should usually be computed directly from props or state during rendering."
  ],
  [
    "Web & Backend",
    "React",
    "Hard",
    "What can cause an effect to capture stale state in an interval callback?",
    [
      "The callback closes over values from the render when the effect was created",
      "React converts state to CSS",
      "The interval changes the component key",
      "JSX prevents closures"
    ],
    0,
    "A long-lived callback can retain an old render's values; functional state updates or correct dependencies can avoid this."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Easy",
    "Which Node.js module provides file-system operations?",
    [
      "fs",
      "http2only",
      "dom",
      "style"
    ],
    0,
    "The built-in fs module provides file and directory operations."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Medium",
    "What is middleware in an Express application?",
    [
      "A function in the request-response processing chain",
      "A CSS preprocessor",
      "A database table",
      "A browser extension"
    ],
    0,
    "Middleware can inspect or modify requests, responses and pass control to later handlers."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Hard",
    "Why should an Express error-handling middleware have four parameters?",
    [
      "Express identifies the signature (err, req, res, next) as error middleware",
      "It makes the function asynchronous",
      "It enables CORS automatically",
      "It validates JSON"
    ],
    0,
    "The four-argument signature distinguishes error-handling middleware from regular middleware."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Easy",
    "Which header commonly indicates the media type of a request body?",
    [
      "Content-Type",
      "Accept-Language",
      "Host-Name",
      "Cache-Key"
    ],
    0,
    "Content-Type describes the representation format of the message body."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Medium",
    "What does the Accept header communicate?",
    [
      "The response media types the client can process",
      "The request password",
      "The server's CPU model",
      "The user's screen size"
    ],
    0,
    "Accept participates in content negotiation by expressing preferred response media types."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Hard",
    "Why should a server validate uploaded file content rather than trusting the filename extension?",
    [
      "Extensions are user-controlled and can misrepresent the actual file type",
      "Extensions are encrypted",
      "Browsers always remove extensions",
      "File names are unique"
    ],
    0,
    "A filename suffix is not proof of file contents; validate content and enforce safe upload handling."
  ],
  [
    "Web & Backend",
    "Authentication",
    "Easy",
    "What is multi-factor authentication?",
    [
      "Using two or more different factor categories to verify identity",
      "Using two passwords of the same type",
      "Logging in twice",
      "Changing usernames"
    ],
    0,
    "MFA combines independent factors such as knowledge, possession or inherence."
  ],
  [
    "Web & Backend",
    "Authentication",
    "Medium",
    "Why should access tokens have limited lifetimes?",
    [
      "To reduce the window of abuse if a token is compromised",
      "To make users type passwords on every click",
      "To avoid HTTPS",
      "To increase token size"
    ],
    0,
    "Short-lived access tokens limit how long a stolen token remains useful."
  ],
  [
    "Web & Backend",
    "Security",
    "Hard",
    "What is the principle of least privilege?",
    [
      "Give users and services only the permissions needed for their tasks",
      "Give everyone administrator rights",
      "Disable all authentication",
      "Share one account"
    ],
    0,
    "Least privilege reduces the damage possible if an account or service is compromised."
  ],
  [
    "Data & Systems",
    "SQL",
    "Easy",
    "Which SQL command changes existing row values?",
    [
      "UPDATE",
      "INSERT",
      "CREATE",
      "DROP"
    ],
    0,
    "UPDATE modifies values in existing rows."
  ],
  [
    "Data & Systems",
    "SQL",
    "Medium",
    "What does GROUP BY do?",
    [
      "Groups rows with matching values for aggregation",
      "Sorts all rows alphabetically",
      "Deletes duplicates from a table",
      "Creates a primary key"
    ],
    0,
    "GROUP BY forms groups that aggregate functions can summarize."
  ],
  [
    "Data & Systems",
    "SQL",
    "Hard",
    "Why can applying a function to an indexed column in a WHERE clause reduce index usefulness?",
    [
      "It may prevent a direct index range lookup unless a matching expression index exists",
      "It encrypts the index",
      "It removes the table",
      "It makes SQL invalid"
    ],
    0,
    "A function on the column can make a normal index less directly usable; expression indexes or rewritten predicates may help."
  ],
  [
    "Data & Systems",
    "Databases",
    "Easy",
    "What is a database migration?",
    [
      "A versioned change to database schema or data",
      "A query result",
      "A network cable",
      "A cache entry"
    ],
    0,
    "Migrations record and apply controlled database changes over time."
  ],
  [
    "Data & Systems",
    "Databases",
    "Medium",
    "What is database replication?",
    [
      "Maintaining copies of data on multiple database nodes",
      "Removing old rows",
      "Compressing SQL syntax",
      "Renaming a column"
    ],
    0,
    "Replication copies data changes from one database node to another."
  ],
  [
    "Data & Systems",
    "Databases",
    "Hard",
    "What is a schema migration compatibility problem during rolling deployments?",
    [
      "Old and new application versions may run simultaneously against different schema expectations",
      "SQL cannot run during deployment",
      "Indexes disappear automatically",
      "Backups are invalid"
    ],
    0,
    "Expand-and-contract migrations maintain compatibility while application instances are upgraded gradually."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Easy",
    "What is a commit in a database transaction?",
    [
      "Make the transaction's changes durable according to database guarantees",
      "Undo all changes",
      "Lock the database forever",
      "Create a new table"
    ],
    0,
    "COMMIT successfully ends a transaction and persists its changes."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Medium",
    "What is a phantom read?",
    [
      "A repeated predicate query returns a different set of rows due to concurrent changes",
      "A row has no primary key",
      "A query is cached",
      "A transaction has no writes"
    ],
    0,
    "Phantom reads involve new or removed rows matching a previously executed search condition."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Hard",
    "Why can serializable isolation reduce concurrency?",
    [
      "The database must prevent outcomes that cannot be explained by a serial execution",
      "It disables indexes",
      "It removes all reads",
      "It forces every query to be sequential in every engine"
    ],
    0,
    "Serializable guarantees may require extra locking, validation or transaction retries to prevent anomalies."
  ],
  [
    "Data & Systems",
    "Caching",
    "Medium",
    "What is write-through caching?",
    [
      "Writes update the cache and backing store as part of the write path",
      "Writes only update cache forever",
      "Reads bypass cache",
      "Cache entries never expire"
    ],
    0,
    "Write-through keeps cache and backing store updated together, trading write latency for freshness."
  ],
  [
    "Data & Systems",
    "Queues",
    "Medium",
    "What is message ordering in a queue?",
    [
      "The sequence in which messages are delivered or processed",
      "The order of source files",
      "The order of database columns",
      "The priority of log levels"
    ],
    0,
    "Ordering guarantees vary by broker, partition and consumer configuration."
  ],
  [
    "Data & Systems",
    "Queues",
    "Hard",
    "Why use a transactional outbox when publishing events after a database update?",
    [
      "It atomically records the state change and event intent in one database transaction",
      "It sends emails faster",
      "It removes the need for consumers",
      "It guarantees network delivery without retries"
    ],
    0,
    "An outbox avoids the dual-write gap by persisting the event alongside the business change, then publishing asynchronously."
  ],
  [
    "Data & Systems",
    "Docker",
    "Easy",
    "Which command commonly starts services defined in a Docker Compose file?",
    [
      "docker compose up",
      "docker image prune",
      "docker login",
      "docker history"
    ],
    0,
    "docker compose up creates and starts the configured services."
  ],
  [
    "Data & Systems",
    "Docker",
    "Hard",
    "Why run a container as a non-root user when possible?",
    [
      "To reduce the impact of a container compromise",
      "To make images larger",
      "To disable networking",
      "To avoid health checks"
    ],
    0,
    "Least privilege inside containers reduces the permissions available to an attacker."
  ],
  [
    "Data & Systems",
    "Observability",
    "Medium",
    "What is an SLI?",
    [
      "A measured indicator of service behavior, such as request success rate",
      "A deployment branch",
      "A source-code license",
      "A storage engine"
    ],
    0,
    "Service level indicators quantify user-relevant service performance or reliability."
  ],
  [
    "Data & Systems",
    "Observability",
    "Hard",
    "What is an error budget in SRE practice?",
    [
      "The tolerated unreliability implied by a service-level objective",
      "A budget for developer laptops",
      "The maximum log file size",
      "A count of open bugs"
    ],
    0,
    "An error budget represents the amount of unreliability allowed by the SLO over its measurement window."
  ],
  [
    "Capstone",
    "Architecture and system design",
    "Medium",
    "Why introduce an API boundary between a frontend and backend?",
    [
      "To define a stable contract between independently implemented parts",
      "To remove all network latency",
      "To eliminate authentication",
      "To avoid data validation"
    ],
    0,
    "An API contract clarifies request and response shapes and separates implementation details."
  ],
  [
    "Capstone",
    "Architecture and system design",
    "Hard",
    "A service needs to handle a sudden traffic spike. Which combination is a reasonable first response?",
    [
      "Load shedding, bounded queues, autoscaling and caching where appropriate",
      "Unlimited retries and unbounded queues",
      "Disable health checks",
      "Store all requests in browser localStorage"
    ],
    0,
    "Protecting capacity requires controlling overload, buffering safely and scaling within resource limits."
  ],
  [
    "Capstone",
    "Testing and release",
    "Easy",
    "What is an integration test?",
    [
      "A test that checks interactions between components or systems",
      "A test of one isolated expression only",
      "A design mockup",
      "A deployment region"
    ],
    0,
    "Integration tests verify that multiple parts work together across an interface."
  ],
  [
    "Capstone",
    "Testing and release",
    "Hard",
    "Why should a deployment health check verify application readiness rather than only process existence?",
    [
      "A running process may not yet be able to serve requests correctly",
      "Process IDs are secret",
      "It improves CSS",
      "It makes a database immutable"
    ],
    0,
    "Readiness checks help route traffic only to instances able to handle requests."
  ],
  [
    "Job Readiness",
    "Resume and portfolio",
    "Easy",
    "What should a portfolio project README explain?",
    [
      "What the project does and how to run it",
      "Only the author's favorite color",
      "Private access tokens",
      "Unrelated job listings"
    ],
    0,
    "A clear README helps reviewers understand the project, setup and key decisions."
  ],
  [
    "Job Readiness",
    "Behavioral interviews",
    "Medium",
    "How can you answer a question about disagreement with a teammate?",
    [
      "Describe the issue, how you listened and resolved it, and the outcome",
      "Say the teammate was always wrong",
      "Avoid giving any context",
      "Reveal confidential details"
    ],
    0,
    "A constructive answer demonstrates collaboration, communication and respect."
  ],
  [
    "Job Readiness",
    "Coding interviews",
    "Hard",
    "You have two possible solutions: one simpler but slower, one faster but complex. How should you choose in an interview?",
    [
      "Discuss constraints, expected input sizes and trade-offs before choosing",
      "Always choose the most complex solution",
      "Never mention complexity",
      "Choose randomly"
    ],
    0,
    "The right solution depends on constraints; articulating trade-offs is part of the evaluation."
  ],
  [
    "Job Readiness",
    "System design",
    "Medium",
    "What is eventual consistency?",
    [
      "Replicas may temporarily differ but converge if updates stop and propagation succeeds",
      "Every read is always strongly consistent",
      "A database has no transactions",
      "Data is never replicated"
    ],
    0,
    "Eventual consistency permits temporary divergence while promising convergence under suitable conditions."
  ],
  [
    "Job Readiness",
    "Job search",
    "Hard",
    "How should you prioritize skill gaps for a target role?",
    [
      "Focus on recurring high-priority requirements and build evidence through projects or practice",
      "Study every technology equally",
      "Ignore role descriptions",
      "Collect certificates without practice"
    ],
    0,
    "Prioritization should reflect role relevance and demonstrable evidence, not trend chasing."
  ]
];
