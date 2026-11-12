const MCQ_BATCH_3 = [
  [
    "Foundations",
    "Programming basics",
    "Easy",
    "In JavaScript, what is the result of typeof []?",
    [
      "array",
      "object",
      "list",
      "undefined"
    ],
    1,
    "Arrays are objects in JavaScript; use Array.isArray(value) to test specifically for arrays."
  ],
  [
    "Foundations",
    "Programming basics",
    "Medium",
    "What does destructuring do in JavaScript?",
    [
      "Deletes object properties",
      "Extracts values from arrays or objects into variables",
      "Converts code to JSON",
      "Freezes an object"
    ],
    1,
    "Destructuring provides concise syntax for unpacking values from arrays and properties from objects."
  ],
  [
    "Foundations",
    "Programming basics",
    "Hard",
    "A function closes over a variable declared with let inside a loop. Why can each callback observe a different value when the loop uses let?",
    [
      "let creates a fresh binding for each iteration",
      "let is global",
      "Callbacks execute synchronously",
      "The variable is copied into a string"
    ],
    0,
    "A per-iteration lexical binding is created for let in a loop, so closures can retain distinct values."
  ],
  [
    "Foundations",
    "Git and terminal",
    "Easy",
    "Which command shows the current working directory?",
    [
      "pwd",
      "ls",
      "cd",
      "mkdir"
    ],
    0,
    "pwd prints the path of the current working directory."
  ],
  [
    "Foundations",
    "Git and terminal",
    "Medium",
    "You staged the wrong file. Which command unstages it without deleting its edits?",
    [
      "git reset HEAD path",
      "git clean -fd",
      "git checkout -- path",
      "git rm path"
    ],
    0,
    "git reset HEAD path removes the file from the index while leaving the working-tree changes."
  ],
  [
    "Foundations",
    "Git and terminal",
    "Hard",
    "A commit was made locally but has not been pushed. Which command safely edits its message?",
    [
      "git amend",
      "git commit --amend",
      "git reset --hard",
      "git rebase --onto"
    ],
    1,
    "git commit --amend replaces the latest local commit; avoid amending commits already shared without coordination."
  ],
  [
    "Foundations",
    "How the web works",
    "Easy",
    "What does DNS primarily translate?",
    [
      "Domain names to IP addresses",
      "HTML to CSS",
      "Passwords to hashes",
      "HTTP to HTTPS"
    ],
    0,
    "DNS resolves domain names to records such as IP addresses."
  ],
  [
    "Foundations",
    "How the web works",
    "Medium",
    "What is the purpose of the TLS handshake?",
    [
      "Choose page layout",
      "Establish secure session parameters and authenticate the server",
      "Compress HTML",
      "Assign a MAC address"
    ],
    1,
    "The handshake negotiates cryptographic parameters and establishes keys, typically authenticating the server certificate."
  ],
  [
    "Foundations",
    "How the web works",
    "Hard",
    "Why can a browser reuse a TCP/TLS connection for multiple HTTP requests?",
    [
      "HTTP/1.1 keep-alive and HTTP/2 multiplexing support connection reuse",
      "DNS stores response bodies",
      "HTML requires it",
      "Cookies open sockets"
    ],
    0,
    "Persistent connections avoid repeated connection setup; HTTP/2 can multiplex streams over one connection."
  ],
  [
    "DSA",
    "Big-O and complexity",
    "Easy",
    "What is the time complexity of scanning every element in an unsorted array once?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    2,
    "A single pass performs work proportional to the number of elements."
  ],
  [
    "DSA",
    "Big-O and complexity",
    "Medium",
    "If an algorithm has two nested loops each running n times, what is its typical time complexity?",
    [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2n)"
    ],
    2,
    "The inner work is repeated n times for each of n outer iterations."
  ],
  [
    "DSA",
    "Big-O and complexity",
    "Hard",
    "An algorithm performs n work, then n/2, then n/4, continuing geometrically. What is the total asymptotic work?",
    [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    1,
    "The geometric series n+n/2+n/4+... is bounded by a constant multiple of n."
  ],
  [
    "DSA",
    "Arrays and strings",
    "Easy",
    "Which operation usually requires shifting elements in a dynamic array?",
    [
      "Read by index",
      "Append at available capacity",
      "Insert at the beginning",
      "Read its length"
    ],
    2,
    "Inserting at the beginning shifts existing elements to make room."
  ],
  [
    "DSA",
    "Arrays and strings",
    "Medium",
    "You need the maximum sum of a contiguous subarray in one pass. Which algorithmic pattern is a standard choice?",
    [
      "Kadane's algorithm",
      "Binary search",
      "Dijkstra's algorithm",
      "Union-find"
    ],
    0,
    "Kadane's algorithm tracks the best subarray ending at each position and the global best."
  ],
  [
    "DSA",
    "Arrays and strings",
    "Hard",
    "A string must be checked for palindrome status while ignoring punctuation and case. What is an efficient approach?",
    [
      "Sort the characters",
      "Use two pointers, skipping non-alphanumeric characters and comparing normalized characters",
      "Build every substring",
      "Use BFS"
    ],
    1,
    "Two pointers move inward while skipping irrelevant characters, requiring linear time and constant extra space."
  ],
  [
    "DSA",
    "Hash maps",
    "Medium",
    "What is a hash collision?",
    [
      "Two keys map to the same bucket or hash value",
      "A key is deleted",
      "A table becomes sorted",
      "A value is encrypted"
    ],
    0,
    "Different keys can map to the same location; collision-resolution strategies handle this."
  ],
  [
    "DSA",
    "Hash maps",
    "Hard",
    "When using a hash map to find two-sum pairs in one pass, why check the complement before inserting the current value?",
    [
      "To avoid matching an element with itself",
      "To sort the map",
      "To prevent integer overflow always",
      "To reduce the target"
    ],
    0,
    "Checking first prevents using the same index twice when the complement equals the current value."
  ],
  [
    "DSA",
    "Stacks and queues",
    "Easy",
    "Which data structure follows last-in, first-out order?",
    [
      "Queue",
      "Stack",
      "Heap",
      "Graph"
    ],
    1,
    "A stack removes the most recently added item first."
  ],
  [
    "DSA",
    "Stacks and queues",
    "Medium",
    "Which data structure is commonly used to evaluate balanced parentheses?",
    [
      "Stack",
      "Queue",
      "Trie",
      "Disjoint set"
    ],
    0,
    "Opening brackets are pushed and matched when closing brackets are encountered."
  ],
  [
    "DSA",
    "Stacks and queues",
    "Hard",
    "A queue is implemented with two stacks. What is the amortized time complexity of enqueue and dequeue?",
    [
      "O(n) each",
      "O(1) each amortized",
      "O(log n) each",
      "O(n log n) each"
    ],
    1,
    "Each element moves between stacks at most once, giving amortized constant time per operation."
  ],
  [
    "DSA",
    "Trees",
    "Easy",
    "How many children can a binary tree node have at most?",
    [
      "One",
      "Two",
      "Three",
      "Unlimited"
    ],
    1,
    "A binary tree node has at most a left and a right child."
  ],
  [
    "DSA",
    "Trees",
    "Medium",
    "Which traversal of a binary search tree visits keys in sorted order?",
    [
      "Preorder",
      "Inorder",
      "Postorder",
      "Level order"
    ],
    1,
    "Inorder traversal visits left subtree, node, then right subtree."
  ],
  [
    "DSA",
    "Trees",
    "Hard",
    "What is the height of a balanced binary search tree with n nodes, asymptotically?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    1,
    "A balanced tree has height proportional to log n, enabling efficient search."
  ],
  [
    "DSA",
    "Graphs",
    "Easy",
    "What does an edge represent in a graph?",
    [
      "A vertex label",
      "A connection between vertices",
      "A traversal stack",
      "A sorting key"
    ],
    1,
    "Edges encode relationships or connections between vertices."
  ],
  [
    "DSA",
    "Graphs",
    "Medium",
    "Which algorithm finds shortest paths from one source when all edge weights are non-negative?",
    [
      "Dijkstra's algorithm",
      "DFS",
      "Kruskal's algorithm",
      "Topological sort"
    ],
    0,
    "Dijkstra repeatedly finalizes the nearest unsettled vertex and relaxes outgoing edges."
  ],
  [
    "DSA",
    "Graphs",
    "Hard",
    "Why does Dijkstra's algorithm fail with negative-weight edges?",
    [
      "It cannot store negative numbers",
      "A later negative edge can improve a distance already finalized",
      "It requires a tree",
      "It only works on directed graphs"
    ],
    1,
    "Negative edges break the greedy assumption that a finalized shortest distance cannot later improve."
  ],
  [
    "DSA",
    "Recursion and dynamic programming",
    "Easy",
    "What must a recursive function have to avoid unbounded recursion?",
    [
      "A base case",
      "A global variable",
      "A sorted array",
      "A database"
    ],
    0,
    "A base case stops recursion for sufficiently small or terminal inputs."
  ],
  [
    "DSA",
    "Recursion and dynamic programming",
    "Medium",
    "What distinguishes tabulation from memoization?",
    [
      "Tabulation is usually bottom-up; memoization caches recursive results",
      "Tabulation always uses recursion",
      "Memoization sorts the input",
      "There is no distinction"
    ],
    0,
    "Tabulation fills states iteratively, while memoization commonly caches results from recursive calls."
  ],
  [
    "DSA",
    "Recursion and dynamic programming",
    "Hard",
    "A DP solution has n states and each state considers up to k previous states. What is its time complexity?",
    [
      "O(n)",
      "O(k)",
      "O(nk)",
      "O(2^n)"
    ],
    2,
    "Evaluating up to k transitions for each of n states yields O(nk) time."
  ],
  [
    "Web & Backend",
    "HTML semantics",
    "Easy",
    "Which attribute provides alternative text for an informative image?",
    [
      "title",
      "alt",
      "srcset",
      "role"
    ],
    1,
    "The alt attribute supplies a text alternative for users who cannot see the image."
  ],
  [
    "Web & Backend",
    "HTML semantics",
    "Medium",
    "When should a button use type=\"button\" inside a form?",
    [
      "When it should not submit the form",
      "When it must submit the form",
      "Only for links",
      "Never"
    ],
    0,
    "A button inside a form defaults to submit in HTML; type=button prevents accidental submission."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Easy",
    "Which CSS property controls the space inside an element's border?",
    [
      "margin",
      "padding",
      "outline",
      "gap"
    ],
    1,
    "Padding is the inner spacing between content and border."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Medium",
    "A two-column layout should collapse to one column on narrow screens. Which tool is commonly used?",
    [
      "A media query",
      "A CSS comment",
      "A pseudo-element only",
      "A font-face rule"
    ],
    0,
    "Media queries apply layout rules at viewport breakpoints."
  ],
  [
    "Web & Backend",
    "CSS layout",
    "Hard",
    "Why can minmax(0, 1fr) help prevent grid children from forcing overflow?",
    [
      "It disables grid",
      "It allows the track's minimum size to shrink below its min-content contribution",
      "It fixes all images",
      "It removes padding"
    ],
    1,
    "The explicit zero minimum permits the fractional track to shrink rather than being constrained by min-content sizing."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Easy",
    "Which browser API selects an element by its CSS selector?",
    [
      "document.querySelector",
      "window.fetchAll",
      "localStorage.query",
      "history.select"
    ],
    0,
    "document.querySelector returns the first matching element or null."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Medium",
    "What is event delegation?",
    [
      "Attaching one handler to a common ancestor and handling bubbled child events",
      "Creating one event per pixel",
      "Disabling propagation globally",
      "Polling the DOM repeatedly"
    ],
    0,
    "Delegation uses event bubbling to handle events from multiple descendants with one ancestor listener."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Hard",
    "Why should user-provided text generally be inserted with textContent rather than innerHTML?",
    [
      "textContent is always faster",
      "It avoids interpreting the text as HTML markup, reducing injection risk",
      "innerHTML cannot update text",
      "textContent encrypts input"
    ],
    1,
    "textContent treats input as text, while innerHTML parses markup and can create cross-site scripting risks."
  ],
  [
    "Web & Backend",
    "React",
    "Easy",
    "Which hook stores local component state in a function component?",
    [
      "useState",
      "useMemo",
      "useRef",
      "useContext"
    ],
    0,
    "useState adds state and a setter to a function component."
  ],
  [
    "Web & Backend",
    "React",
    "Medium",
    "Why should state updates that depend on previous state use a functional updater?",
    [
      "It forces a render twice",
      "It receives the latest queued state value",
      "It disables batching",
      "It mutates state directly"
    ],
    1,
    "A functional updater avoids stale captured values when updates are queued or batched."
  ],
  [
    "Web & Backend",
    "React",
    "Hard",
    "What is a common consequence of putting a newly created object in an effect dependency array on every render?",
    [
      "The effect may rerun each render because object identity changes",
      "React ignores it",
      "The object becomes immutable",
      "The component unmounts"
    ],
    0,
    "Dependency comparison uses identity for objects, so a fresh object reference is considered changed."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Easy",
    "Which status code indicates an unauthorized or unauthenticated request?",
    [
      "200",
      "301",
      "401",
      "503"
    ],
    2,
    "401 indicates missing or invalid authentication credentials."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Medium",
    "What does idempotency mean for an HTTP operation?",
    [
      "It always returns JSON",
      "Repeating the same request has the same intended effect as doing it once",
      "It cannot fail",
      "It must be encrypted"
    ],
    1,
    "Idempotent operations can be repeated without accumulating additional intended effects."
  ],
  [
    "Web & Backend",
    "HTTP APIs",
    "Hard",
    "A client retries a payment request after a timeout. What design helps prevent charging twice?",
    [
      "Random request paths",
      "An idempotency key stored and checked by the server",
      "Longer CSS transitions",
      "A GET request with a body"
    ],
    1,
    "The server records the idempotency key and returns the original result for duplicate submissions."
  ],
  [
    "Web & Backend",
    "Authentication",
    "Easy",
    "What is the purpose of a session cookie?",
    [
      "Store the entire database",
      "Let the browser present a session identifier on later requests",
      "Compile JavaScript",
      "Replace a password hash"
    ],
    1,
    "A session cookie typically carries an opaque identifier that the server maps to session state."
  ],
  [
    "Web & Backend",
    "Authentication",
    "Medium",
    "Why use the HttpOnly cookie attribute?",
    [
      "Prevent JavaScript from reading the cookie",
      "Make the cookie public",
      "Allow cross-site requests always",
      "Increase cookie size"
    ],
    0,
    "HttpOnly reduces exposure to scripts running in the page, though it does not prevent every XSS impact."
  ],
  [
    "Web & Backend",
    "Security",
    "Hard",
    "Why is parameterized SQL safer than concatenating user input into a query?",
    [
      "It makes queries shorter",
      "It separates query structure from values, preventing input from becoming SQL syntax",
      "It encrypts the database",
      "It removes the need for authorization"
    ],
    1,
    "Bound parameters treat user input as data rather than executable SQL syntax."
  ],
  [
    "Data & Systems",
    "SQL",
    "Easy",
    "Which SQL statement adds a new row to a table?",
    [
      "UPDATE",
      "INSERT",
      "ALTER",
      "SELECT"
    ],
    1,
    "INSERT adds rows to a table."
  ],
  [
    "Data & Systems",
    "SQL",
    "Medium",
    "What is the purpose of a LEFT JOIN?",
    [
      "Return only matching rows from both sides",
      "Keep every row from the left table and include matching right-side data",
      "Delete unmatched rows",
      "Sort both tables"
    ],
    1,
    "A LEFT JOIN preserves all left-side rows, filling right-side columns with NULL when no match exists."
  ],
  [
    "Data & Systems",
    "SQL",
    "Hard",
    "Why can SELECT * be undesirable in a frequently used production query?",
    [
      "It is invalid SQL",
      "It fetches unnecessary columns and can increase I/O and couple code to schema changes",
      "It always disables indexes",
      "It creates duplicate rows"
    ],
    1,
    "Selecting only needed columns reduces data transfer and makes query dependencies explicit."
  ],
  [
    "Data & Systems",
    "Databases",
    "Easy",
    "What is a primary key?",
    [
      "A column or set of columns that uniquely identifies each row",
      "A backup file",
      "A query plan",
      "A password"
    ],
    0,
    "A primary key enforces unique, non-null row identity."
  ],
  [
    "Data & Systems",
    "Databases",
    "Medium",
    "What is a foreign key used for?",
    [
      "Compress a table",
      "Enforce a relationship to a key in another or the same table",
      "Encrypt a column",
      "Order query results"
    ],
    1,
    "Foreign keys enforce referential integrity between related rows."
  ],
  [
    "Data & Systems",
    "Databases",
    "Hard",
    "What is a potential downside of adding many indexes to a write-heavy table?",
    [
      "Reads become impossible",
      "Writes require maintaining each relevant index, increasing write cost",
      "Rows lose primary keys",
      "Transactions are disabled"
    ],
    1,
    "Indexes speed some reads but must be updated on inserts, updates and deletes."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Medium",
    "What is a dirty read?",
    [
      "Reading uncommitted data written by another transaction",
      "Reading an old backup",
      "Reading a NULL",
      "Reading from an index"
    ],
    0,
    "A dirty read exposes changes that may later be rolled back."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Hard",
    "What is a deadlock in a database?",
    [
      "A query returns no rows",
      "Transactions wait on each other's locks in a cycle",
      "A server has no disk",
      "A table has no index"
    ],
    1,
    "A lock cycle prevents each transaction from proceeding until the database detects and breaks the deadlock."
  ],
  [
    "Data & Systems",
    "Caching",
    "Easy",
    "What does a cache store?",
    [
      "Frequently reused data for faster access",
      "Only source code",
      "DNS zones only",
      "Encrypted passwords only"
    ],
    0,
    "A cache retains copies of data to reduce latency or load on the source."
  ],
  [
    "Data & Systems",
    "Caching",
    "Hard",
    "A cache-aside application misses a key. What is the usual next step?",
    [
      "Return a random value",
      "Read from the backing store, populate the cache, then return the value",
      "Delete the database",
      "Disable future reads"
    ],
    1,
    "On a miss, the application loads from the source and stores the result in the cache."
  ],
  [
    "Data & Systems",
    "Queues",
    "Medium",
    "Why should a queue consumer be designed to handle duplicate messages?",
    [
      "Queues always deliver exactly once",
      "Many queue systems provide at-least-once delivery, so processing may repeat",
      "Duplicates improve ordering",
      "Consumers cannot fail"
    ],
    1,
    "At-least-once delivery can redeliver messages; idempotent processing prevents duplicate side effects."
  ],
  [
    "Data & Systems",
    "Docker",
    "Easy",
    "What is the difference between an image and a container?",
    [
      "An image is a template; a container is a running or created instance",
      "They are identical",
      "A container builds the image registry",
      "An image is a network"
    ],
    0,
    "Images are immutable package templates from which containers are instantiated."
  ],
  [
    "Data & Systems",
    "Docker",
    "Medium",
    "Why use a multi-stage Docker build?",
    [
      "To run two databases",
      "To keep build tools out of the final runtime image",
      "To disable caching",
      "To expose every port"
    ],
    1,
    "Multi-stage builds copy only required artifacts into a smaller final image."
  ],
  [
    "Data & Systems",
    "Testing and CI/CD",
    "Easy",
    "What does a continuous integration pipeline commonly run after a code change?",
    [
      "Only a marketing email",
      "Automated checks such as linting and tests",
      "A database deletion",
      "A production rollback by default"
    ],
    1,
    "CI automates validation so defects are found before changes are merged or released."
  ],
  [
    "Data & Systems",
    "Testing and CI/CD",
    "Hard",
    "A flaky test passes and fails without code changes. What is the best response?",
    [
      "Ignore it forever",
      "Investigate and remove nondeterminism rather than repeatedly rerunning blindly",
      "Delete all tests",
      "Mark every build successful"
    ],
    1,
    "Flaky tests undermine trust in CI; identify timing, shared-state or environment causes and make the test deterministic."
  ],
  [
    "Capstone",
    "System design",
    "Easy",
    "What is a functional requirement?",
    [
      "A description of what the system should do",
      "A CPU benchmark only",
      "A deployment region",
      "A coding style rule"
    ],
    0,
    "Functional requirements describe system behavior and capabilities."
  ],
  [
    "Capstone",
    "System design",
    "Medium",
    "Why draw a sequence diagram for a request flow?",
    [
      "To choose brand colors",
      "To show interactions and message order between components over time",
      "To replace tests",
      "To calculate salaries"
    ],
    1,
    "Sequence diagrams make call order, boundaries and dependencies visible."
  ],
  [
    "Capstone",
    "System design",
    "Hard",
    "A service has a single database bottleneck. Which approach should be considered before adding complex sharding?",
    [
      "Measure query patterns and optimize indexes, queries and connection usage",
      "Rewrite every service",
      "Remove backups",
      "Disable transactions"
    ],
    0,
    "Measure first; query tuning and connection management may solve the bottleneck with far less complexity."
  ],
  [
    "Capstone",
    "Testing and release",
    "Medium",
    "What is a rollback plan?",
    [
      "A list of new features",
      "A defined way to restore a previous working release if deployment fails",
      "A database schema diagram",
      "A user survey"
    ],
    1,
    "A rollback plan reduces recovery time when a release causes problems."
  ],
  [
    "Capstone",
    "Security and code review",
    "Hard",
    "A reviewer sees an API endpoint trusting a userId from the request body. What should they verify?",
    [
      "The button color",
      "The server derives or validates identity and authorization rather than trusting client-supplied identity",
      "The JSON has four spaces",
      "The route name is short"
    ],
    1,
    "Authorization must be enforced server-side using authenticated identity and resource permissions."
  ],
  [
    "Job Readiness",
    "Resume and portfolio",
    "Easy",
    "Which resume bullet is generally strongest?",
    [
      "Worked on an app",
      "Built a searchable catalog with filters and documented the deployment",
      "Know JavaScript",
      "Responsible for coding"
    ],
    1,
    "Specific actions, scope and evidence make a project bullet more informative."
  ],
  [
    "Job Readiness",
    "Resume and portfolio",
    "Medium",
    "Why quantify a project result only when you can support the number?",
    [
      "Numbers always look better",
      "Credible evidence is more useful than invented metrics",
      "ATS requires every bullet to have a number",
      "It replaces a portfolio"
    ],
    1,
    "Accurate metrics build trust; unsupported claims can undermine credibility."
  ],
  [
    "Job Readiness",
    "Behavioral interviews",
    "Easy",
    "What does STAR stand for in behavioral interviews?",
    [
      "Situation, Task, Action, Result",
      "Scope, Test, Apply, Review",
      "Start, Think, Ask, Reply",
      "System, Tool, API, Route"
    ],
    0,
    "STAR structures an answer around context, responsibility, actions and outcome."
  ],
  [
    "Job Readiness",
    "Behavioral interviews",
    "Medium",
    "When describing a team project, what should you make especially clear?",
    [
      "Only the team name",
      "Your own contribution and how you collaborated",
      "Every teammate's private details",
      "The number of meetings only"
    ],
    1,
    "Interviewers need to distinguish your work while understanding how you worked with others."
  ],
  [
    "Job Readiness",
    "Coding interviews",
    "Easy",
    "Why should you test edge cases after writing a solution?",
    [
      "To make code longer",
      "To check behavior on boundaries and unusual valid inputs",
      "To avoid explaining complexity",
      "To guarantee acceptance"
    ],
    1,
    "Edge cases expose assumptions that typical examples may not reveal."
  ],
  [
    "Job Readiness",
    "Coding interviews",
    "Hard",
    "An interviewer challenges your approach with a constraint change. What is the strongest response?",
    [
      "Defend the original answer regardless",
      "Restate the new constraint, discuss its impact and adapt the trade-offs",
      "Stop communicating",
      "Change languages immediately"
    ],
    1,
    "A strong candidate reasons transparently about how constraints change algorithmic or design choices."
  ],
  [
    "Job Readiness",
    "System design",
    "Medium",
    "Why estimate traffic and storage before choosing an architecture?",
    [
      "To avoid writing requirements",
      "To size components and expose likely bottlenecks",
      "To choose a logo",
      "To eliminate monitoring"
    ],
    1,
    "Rough estimates inform capacity, storage, bandwidth and scaling decisions."
  ],
  [
    "Job Readiness",
    "Job search",
    "Easy",
    "What is a useful first step when targeting a role?",
    [
      "Send the same resume everywhere",
      "Compare the role requirements with your evidence and identify gaps",
      "Apply without reading the description",
      "Remove project links"
    ],
    1,
    "Mapping requirements to evidence helps tailor applications and focus learning."
  ],
  [
    "Job Readiness",
    "Job search",
    "Medium",
    "What makes a networking message more effective?",
    [
      "A long generic biography",
      "A concise context, specific reason for reaching out and respectful request",
      "An urgent demand for referral",
      "An attachment with passwords"
    ],
    1,
    "Personalized, concise outreach gives the recipient context and an easy way to respond."
  ]
];
