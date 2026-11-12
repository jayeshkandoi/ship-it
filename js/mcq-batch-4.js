const MCQ_BATCH_4 = [
  [
    "Foundations",
    "Data types and collections",
    "Easy",
    "Which JavaScript value represents an intentional absence of an object value?",
    [
      "undefined",
      "null",
      "NaN",
      "false"
    ],
    1,
    "null is commonly used to represent an intentional absence of a value."
  ],
  [
    "Foundations",
    "Data types and collections",
    "Medium",
    "What does Object.freeze(obj) do at the top level?",
    [
      "Deep-freezes every nested object",
      "Prevents adding, removing or changing own properties on the object",
      "Serializes the object",
      "Makes all values private"
    ],
    1,
    "Object.freeze is shallow; nested objects need separate freezing if required."
  ],
  [
    "Foundations",
    "Data types and collections",
    "Hard",
    "Why can using an object as a Map key be useful compared with a plain object property?",
    [
      "Map keys can be objects and preserve key identity",
      "Map keys are always strings",
      "Map automatically sorts keys",
      "Map serializes itself to SQL"
    ],
    0,
    "Map supports arbitrary key types and compares object keys by identity."
  ],
  [
    "Foundations",
    "Programming basics",
    "Easy",
    "Which statement exits the current loop immediately?",
    [
      "continue",
      "break",
      "return type",
      "case"
    ],
    1,
    "break terminates the nearest enclosing loop or switch."
  ],
  [
    "Foundations",
    "Programming basics",
    "Medium",
    "What is the difference between == and === in JavaScript?",
    [
      "No difference",
      "== may coerce types; === compares without type coercion",
      "=== compares strings only",
      "== is always safer"
    ],
    1,
    "Strict equality avoids the implicit type conversions performed by loose equality."
  ],
  [
    "Foundations",
    "Programming basics",
    "Hard",
    "What does the JavaScript event loop coordinate?",
    [
      "Only CSS rendering",
      "Execution of queued tasks and microtasks around the call stack",
      "Database indexing",
      "Git commits"
    ],
    1,
    "The event loop coordinates when queued callbacks and microtasks run as the call stack becomes available."
  ],
  [
    "DSA",
    "Linked lists",
    "Easy",
    "What does a singly linked-list node usually store?",
    [
      "Only an array index",
      "A value and a reference to the next node",
      "A file path",
      "A sorted key only"
    ],
    1,
    "A singly linked-list node stores data and a next pointer/reference."
  ],
  [
    "DSA",
    "Linked lists",
    "Medium",
    "What is the time complexity of inserting a node at the head of a singly linked list?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    0,
    "Head insertion changes a small fixed number of references."
  ],
  [
    "DSA",
    "Linked lists",
    "Hard",
    "How can Floyd's tortoise-and-hare algorithm detect a cycle in a linked list?",
    [
      "Sort all nodes",
      "Move two pointers at different speeds and check whether they meet",
      "Use binary search",
      "Count nodes recursively only"
    ],
    1,
    "If a cycle exists, the faster pointer eventually laps the slower pointer."
  ],
  [
    "DSA",
    "Heaps and priority queues",
    "Easy",
    "Which element is at the root of a min-heap?",
    [
      "Largest element",
      "Smallest element",
      "Most recently inserted element",
      "Random element"
    ],
    1,
    "A min-heap maintains each parent value no greater than its children."
  ],
  [
    "DSA",
    "Heaps and priority queues",
    "Medium",
    "What is the typical time complexity of extracting the minimum from a binary min-heap?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    1,
    "After removing the root, heapify-down follows the tree height, which is logarithmic."
  ],
  [
    "DSA",
    "Heaps and priority queues",
    "Hard",
    "Why is a heap useful for maintaining the k largest values in a stream?",
    [
      "A min-heap of size k keeps the current threshold at its root",
      "It sorts all values in constant time",
      "It stores only strings",
      "It avoids comparisons"
    ],
    0,
    "A size-k min-heap lets you discard values below the current kth-largest threshold."
  ],
  [
    "DSA",
    "Sorting",
    "Easy",
    "Which sorting algorithm repeatedly selects the smallest remaining element?",
    [
      "Selection sort",
      "Merge sort",
      "Heap sort",
      "Counting sort"
    ],
    0,
    "Selection sort selects the next minimum and places it in its final position."
  ],
  [
    "DSA",
    "Sorting",
    "Medium",
    "What is the average time complexity of quicksort with reasonably balanced partitions?",
    [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    2,
    "Balanced partitioning gives logarithmic recursion depth with linear work per level."
  ],
  [
    "DSA",
    "Sorting",
    "Hard",
    "When can counting sort outperform comparison sorts?",
    [
      "When keys are integers in a reasonably small range",
      "When every value is a unique object",
      "When input is infinitely long",
      "When comparisons are free"
    ],
    0,
    "Counting sort exploits a bounded key range and can run in O(n+k) time."
  ],
  [
    "DSA",
    "Searching",
    "Easy",
    "What must generally be true before using binary search on an array?",
    [
      "The array is sorted",
      "The array contains strings",
      "The array has even length",
      "The array has no duplicates"
    ],
    0,
    "Binary search relies on sorted order to discard half the remaining search space."
  ],
  [
    "DSA",
    "Searching",
    "Medium",
    "What is the time complexity of binary search on a sorted array?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    1,
    "Each comparison halves the remaining search interval."
  ],
  [
    "DSA",
    "Searching",
    "Hard",
    "In a rotated sorted array with distinct values, how can modified binary search proceed?",
    [
      "Always scan linearly",
      "Identify which half is sorted and decide whether the target lies in it",
      "Sort the array on every step",
      "Use DFS"
    ],
    1,
    "At least one half remains sorted, allowing the search interval to be reduced."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Easy",
    "Which event fires when a user submits a form?",
    [
      "click only",
      "submit",
      "hover",
      "resize"
    ],
    1,
    "The submit event fires when a form is submitted by button, keyboard or script."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Medium",
    "Why call event.preventDefault() in a form submit handler?",
    [
      "To stop all JavaScript",
      "To prevent the browser's default form navigation or submission behavior",
      "To remove the form",
      "To clear localStorage"
    ],
    1,
    "preventDefault cancels the default action so the handler can perform custom validation or submission."
  ],
  [
    "Web & Backend",
    "JavaScript in browser",
    "Hard",
    "Why is aborting an outdated fetch useful when a user quickly changes a search query?",
    [
      "It guarantees server rollback",
      "It prevents stale requests from needlessly completing and updating the UI",
      "It caches every response",
      "It changes HTTP to HTTPS"
    ],
    1,
    "AbortController can cancel the client-side request and help avoid stale results winning a race."
  ],
  [
    "Web & Backend",
    "React",
    "Easy",
    "What does lifting state up mean?",
    [
      "Moving shared state to a common ancestor",
      "Moving CSS into HTML",
      "Deleting child components",
      "Saving state to a server always"
    ],
    0,
    "A common parent can own state needed by multiple child components and pass it through props."
  ],
  [
    "Web & Backend",
    "React",
    "Medium",
    "When is useMemo most appropriate?",
    [
      "For every variable",
      "To cache an expensive derived calculation when dependencies are unchanged",
      "To replace useState",
      "To make API calls automatically"
    ],
    1,
    "useMemo can avoid repeating expensive calculations, but should be used when there is a meaningful performance need."
  ],
  [
    "Web & Backend",
    "React",
    "Hard",
    "What problem can an effect cleanup function solve for a subscription?",
    [
      "It makes the subscription global",
      "It unsubscribes the previous listener when dependencies change or the component unmounts",
      "It forces a full page reload",
      "It serializes props"
    ],
    1,
    "Cleanup prevents stale subscriptions and resource leaks across effect lifecycles."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Easy",
    "What is npm primarily used for in a Node.js project?",
    [
      "Managing packages and scripts",
      "Rendering CSS",
      "Managing DNS",
      "Creating database indexes"
    ],
    0,
    "npm installs dependencies and runs project scripts."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Medium",
    "Why should a CPU-heavy synchronous task be avoided on the Node.js event loop?",
    [
      "It blocks the event loop and delays other requests",
      "It increases CSS specificity",
      "It changes JSON types",
      "It improves concurrency"
    ],
    0,
    "Long synchronous work prevents the event loop from processing other callbacks."
  ],
  [
    "Web & Backend",
    "Node.js",
    "Hard",
    "What is a common way to handle untrusted input in an Express route?",
    [
      "Trust the TypeScript type only",
      "Validate and normalize input at the server boundary",
      "Render it as HTML directly",
      "Store it before validation"
    ],
    1,
    "Runtime validation is required because client input can violate compile-time assumptions."
  ],
  [
    "Web & Backend",
    "REST APIs",
    "Easy",
    "Which HTTP method is commonly used to partially update a resource?",
    [
      "GET",
      "PATCH",
      "TRACE",
      "OPTIONS"
    ],
    1,
    "PATCH applies partial modifications to a resource."
  ],
  [
    "Web & Backend",
    "REST APIs",
    "Medium",
    "Why should an API return consistent error response shapes?",
    [
      "To increase payload size",
      "To make client error handling predictable",
      "To prevent all errors",
      "To avoid status codes"
    ],
    1,
    "Consistent error structures simplify client logic, logging and debugging."
  ],
  [
    "Web & Backend",
    "REST APIs",
    "Hard",
    "A REST API supports pagination over a rapidly changing dataset. Why can cursor pagination be preferable to offset pagination?",
    [
      "It always returns fewer fields",
      "It can provide more stable continuation when rows are inserted or removed",
      "It removes the need for indexes",
      "It guarantees global ordering automatically"
    ],
    1,
    "A cursor based on a stable ordering key avoids many offset-shift problems under concurrent changes."
  ],
  [
    "Web & Backend",
    "Security",
    "Easy",
    "What is cross-site scripting (XSS)?",
    [
      "An attacker injects script that runs in another user's browser context",
      "A database backup",
      "A DNS lookup",
      "A Git merge conflict"
    ],
    0,
    "XSS occurs when untrusted content is executed as script in a trusted page."
  ],
  [
    "Web & Backend",
    "Security",
    "Medium",
    "Why should authorization be checked on every protected server operation?",
    [
      "The frontend can be modified or bypassed",
      "CSS cannot hide buttons",
      "Cookies expire instantly",
      "Browsers cannot send headers"
    ],
    0,
    "Client-side controls are not security boundaries; the server must enforce access on every request."
  ],
  [
    "Web & Backend",
    "Security",
    "Hard",
    "What does a Content Security Policy help mitigate?",
    [
      "All SQL injection",
      "Some injection and data-exfiltration risks by restricting allowed content sources",
      "All phishing emails",
      "Disk failure"
    ],
    1,
    "CSP restricts resource and script execution sources, helping reduce the impact of some XSS attacks."
  ],
  [
    "Data & Systems",
    "SQL",
    "Easy",
    "Which clause sorts query results?",
    [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "HAVING"
    ],
    1,
    "ORDER BY sorts rows by one or more expressions."
  ],
  [
    "Data & Systems",
    "SQL",
    "Medium",
    "What does COUNT(*) count?",
    [
      "Only non-null values in one column",
      "Rows in the result group",
      "Distinct tables",
      "Indexes"
    ],
    1,
    "COUNT(*) counts rows, including rows with NULL values in columns."
  ],
  [
    "Data & Systems",
    "SQL",
    "Hard",
    "Why should pagination queries include a deterministic ORDER BY with a unique tie-breaker?",
    [
      "To make rows encrypted",
      "To avoid unstable page boundaries when sort values tie",
      "To remove indexes",
      "To force a table scan"
    ],
    1,
    "A unique ordering makes page boundaries predictable when multiple rows share the primary sort value."
  ],
  [
    "Data & Systems",
    "Databases",
    "Easy",
    "What does database normalization aim to reduce?",
    [
      "Data redundancy and update anomalies",
      "Network latency only",
      "The number of users",
      "Query syntax"
    ],
    0,
    "Normalization organizes relationships to reduce unnecessary duplication and anomalies."
  ],
  [
    "Data & Systems",
    "Databases",
    "Medium",
    "What is a composite index?",
    [
      "An index over multiple columns",
      "A backup of two databases",
      "A table with two rows",
      "A query with two joins"
    ],
    0,
    "A composite index stores an ordered key made from multiple columns."
  ],
  [
    "Data & Systems",
    "Databases",
    "Hard",
    "Why does column order matter in a typical B-tree composite index?",
    [
      "The leftmost prefix often determines which query predicates can efficiently use the index",
      "Columns are randomly reordered",
      "Only the last column is searchable",
      "It affects only display formatting"
    ],
    0,
    "Many database engines can efficiently use leading columns of a composite B-tree index."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Easy",
    "What does the D in ACID stand for?",
    [
      "Durability",
      "Dependency",
      "Distribution",
      "Deletion"
    ],
    0,
    "Durability means committed changes survive failures according to the database's guarantees."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Medium",
    "What is optimistic concurrency control?",
    [
      "Assume conflicts are rare and detect them when committing updates",
      "Lock every row forever",
      "Never validate writes",
      "Run every transaction twice"
    ],
    0,
    "Optimistic approaches allow work to proceed and verify versions or conflicts at commit time."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Hard",
    "What is the purpose of a transaction isolation level?",
    [
      "Define which concurrent transaction effects may be visible",
      "Choose the database logo",
      "Set disk capacity",
      "Encrypt network packets"
    ],
    0,
    "Isolation levels define visibility and anomaly guarantees for concurrent transactions."
  ],
  [
    "Data & Systems",
    "Caching",
    "Easy",
    "What does TTL mean for a cache entry?",
    [
      "Time to live",
      "Total table length",
      "Transaction lock",
      "Transport layer link"
    ],
    0,
    "TTL defines how long a cached entry remains valid before expiration."
  ],
  [
    "Data & Systems",
    "Caching",
    "Medium",
    "What is cache stampede?",
    [
      "Many requests simultaneously recompute the same expired or missing cache entry",
      "A database schema migration",
      "A slow CSS animation",
      "A queue with no messages"
    ],
    0,
    "A stampede can overload the backing service when many callers miss the same key at once."
  ],
  [
    "Data & Systems",
    "Queues",
    "Easy",
    "What is a message producer?",
    [
      "A component that sends messages to a queue or broker",
      "A component that only reads messages",
      "A database index",
      "A load balancer"
    ],
    0,
    "Producers publish messages for consumers to process."
  ],
  [
    "Data & Systems",
    "Queues",
    "Hard",
    "Why use a dead-letter queue?",
    [
      "To permanently hide failed work",
      "To isolate messages that repeatedly fail so they can be inspected or retried deliberately",
      "To guarantee ordering",
      "To replace application logs"
    ],
    1,
    "Dead-letter queues preserve problematic messages for diagnosis and controlled recovery."
  ],
  [
    "Data & Systems",
    "Docker",
    "Medium",
    "Why should secrets generally not be baked into a Docker image?",
    [
      "Images may be shared or inspected, exposing embedded secrets",
      "Docker cannot store text",
      "Secrets slow CSS",
      "Images are always private"
    ],
    0,
    "Build artifacts can be distributed widely; inject secrets securely at runtime instead."
  ],
  [
    "Data & Systems",
    "Observability",
    "Easy",
    "Which signal records discrete events such as an error with contextual fields?",
    [
      "Logs",
      "CPU cores",
      "CSS variables",
      "DNS zones"
    ],
    0,
    "Logs capture timestamped events and context useful for investigation."
  ],
  [
    "Data & Systems",
    "Observability",
    "Medium",
    "What does a latency percentile such as p95 describe?",
    [
      "The average request time",
      "A threshold at or below which 95% of observations fall",
      "The slowest request only",
      "The number of requests"
    ],
    1,
    "p95 is a tail-latency measure, not the average or maximum."
  ],
  [
    "Data & Systems",
    "Observability",
    "Hard",
    "Why are distributed traces useful in a microservice architecture?",
    [
      "They show a request's path and timing across service boundaries",
      "They replace all metrics",
      "They guarantee zero latency",
      "They compile each service"
    ],
    0,
    "Traces connect spans across services to reveal where a distributed request spends time."
  ],
  [
    "Capstone",
    "Architecture and system design",
    "Easy",
    "What is a non-functional requirement?",
    [
      "A quality attribute such as availability or latency",
      "A button click behavior",
      "A user story title",
      "A database row"
    ],
    0,
    "Non-functional requirements describe qualities and constraints such as performance, reliability and security."
  ],
  [
    "Capstone",
    "Architecture and system design",
    "Medium",
    "Why separate a service into modules with clear boundaries?",
    [
      "To increase coupling",
      "To make responsibilities and change impact easier to reason about",
      "To avoid tests",
      "To force one file per feature"
    ],
    1,
    "Clear boundaries reduce accidental coupling and make components easier to maintain and test."
  ],
  [
    "Capstone",
    "Architecture and system design",
    "Hard",
    "When is a modular monolith a sensible starting architecture?",
    [
      "When a small team needs clear internal boundaries without distributed-system overhead",
      "Only when there are thousands of services",
      "When data consistency is irrelevant",
      "When no testing is needed"
    ],
    0,
    "A modular monolith offers separation of concerns while keeping deployment and operations simpler than microservices."
  ],
  [
    "Capstone",
    "Project delivery",
    "Medium",
    "What should a good MVP deliberately exclude?",
    [
      "The core user problem",
      "Nonessential features that do not validate the main assumption",
      "Basic reliability",
      "The primary workflow"
    ],
    1,
    "An MVP limits scope to the smallest useful version that tests the product's key assumption."
  ],
  [
    "Capstone",
    "Project delivery",
    "Hard",
    "A feature request expands project scope late in development. What is the best response?",
    [
      "Add it immediately without review",
      "Assess user value, risk and timeline, then explicitly renegotiate scope or defer it",
      "Remove all tests",
      "Hide the change"
    ],
    1,
    "Scope changes should be evaluated against goals and capacity, then communicated clearly."
  ],
  [
    "Job Readiness",
    "Coding interviews",
    "Medium",
    "Why explain the time and space complexity of a solution?",
    [
      "It proves the code compiles",
      "It communicates scalability trade-offs and resource costs",
      "It replaces correctness",
      "It avoids edge cases"
    ],
    1,
    "Complexity analysis shows how a solution behaves as input size grows."
  ],
  [
    "Job Readiness",
    "Coding interviews",
    "Hard",
    "You discover a bug while explaining your solution in an interview. What should you do?",
    [
      "Conceal it",
      "State the issue, use a failing example and correct the reasoning",
      "Restart without explanation",
      "Blame the interviewer"
    ],
    1,
    "Transparent debugging demonstrates problem-solving and communication."
  ],
  [
    "Job Readiness",
    "System design",
    "Easy",
    "What is horizontal scaling?",
    [
      "Adding more instances or machines",
      "Increasing RAM in one machine only",
      "Removing replicas",
      "Reducing log levels"
    ],
    0,
    "Horizontal scaling adds instances to share workload."
  ],
  [
    "Job Readiness",
    "System design",
    "Medium",
    "What is a load balancer responsible for?",
    [
      "Distributing requests across backend instances",
      "Compiling source code",
      "Managing user passwords",
      "Replacing application tests"
    ],
    0,
    "Load balancers route incoming traffic among available backend targets."
  ],
  [
    "Job Readiness",
    "System design",
    "Hard",
    "Why might a read replica improve database read capacity but not solve every scaling issue?",
    [
      "It can offload reads, but replication lag and write bottlenecks remain",
      "It removes all consistency concerns",
      "It doubles write throughput automatically",
      "It replaces backups"
    ],
    0,
    "Read replicas distribute reads but introduce lag and do not increase primary write capacity."
  ],
  [
    "Job Readiness",
    "Behavioral interviews",
    "Medium",
    "How should you discuss a project failure in an interview?",
    [
      "Claim nothing went wrong",
      "Explain context, your actions, learning and what you changed afterward",
      "Blame a teammate",
      "Avoid the outcome"
    ],
    1,
    "A reflective answer shows accountability and learning rather than defensiveness."
  ],
  [
    "Job Readiness",
    "Job search",
    "Hard",
    "A role asks for a tool you have not used professionally. What is a credible way to address it?",
    [
      "Claim years of experience",
      "Be transparent and connect adjacent skills with a small demonstrable project",
      "Remove all relevant skills",
      "Invent a certification"
    ],
    1,
    "Honesty plus evidence of transferable skills is stronger than unsupported claims."
  ]
];
