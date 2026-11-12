const MCQ_BATCH_2 = [
  [
    "Foundations",
    "HTML semantics",
    "Easy",
    "Which element represents the main content of a document?",
    [
      "<section>",
      "<main>",
      "<aside>",
      "<footer>"
    ],
    1,
    "The main element identifies the dominant content of the page."
  ],
  [
    "Foundations",
    "HTML semantics",
    "Medium",
    "Why should a form control have an associated label?",
    [
      "To change its font",
      "To improve accessible naming and clickable area",
      "To submit it twice",
      "To make it required"
    ],
    1,
    "Labels give controls accessible names and make the label clickable."
  ],
  [
    "Foundations",
    "CSS layout",
    "Easy",
    "Which CSS layout system is designed primarily for one-dimensional rows or columns?",
    [
      "Grid",
      "Flexbox",
      "Float",
      "Position"
    ],
    1,
    "Flexbox is intended for arranging items along one main axis."
  ],
  [
    "Foundations",
    "CSS layout",
    "Medium",
    "What does box-sizing:border-box change?",
    [
      "Margins are included in width",
      "Padding and border are included in declared width and height",
      "Content is hidden",
      "Elements become inline"
    ],
    1,
    "With border-box, declared dimensions include content, padding and border."
  ],
  [
    "Foundations",
    "JavaScript async",
    "Easy",
    "What does Promise.all return when all supplied promises fulfil?",
    [
      "The first value only",
      "An array of results in input order",
      "A stream",
      "A callback"
    ],
    1,
    "Promise.all fulfils with an array preserving the input order."
  ],
  [
    "Foundations",
    "JavaScript async",
    "Medium",
    "What happens when one promise passed to Promise.all rejects?",
    [
      "All promises are cancelled",
      "The aggregate promise rejects",
      "The rejection is ignored",
      "It retries automatically"
    ],
    1,
    "Promise.all rejects as soon as one input rejects; it does not cancel the others."
  ],
  [
    "Foundations",
    "Git workflows",
    "Medium",
    "What is the purpose of a pull request?",
    [
      "Delete a branch",
      "Propose and review changes before merging",
      "Encrypt commits",
      "Install dependencies"
    ],
    1,
    "Pull requests provide a place to review, discuss and validate proposed changes."
  ],
  [
    "Foundations",
    "Networking basics",
    "Easy",
    "Which protocol secures HTTP traffic using encryption?",
    [
      "FTP",
      "SSH",
      "TLS",
      "SMTP"
    ],
    2,
    "HTTPS uses TLS to protect data in transit."
  ],
  [
    "DSA",
    "Arrays and strings",
    "Easy",
    "What is the time complexity of reading an array element by index?",
    [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    0,
    "Array indexing provides direct access in constant time."
  ],
  [
    "DSA",
    "Arrays and strings",
    "Medium",
    "Which technique is useful for finding a pair in a sorted array with a target sum?",
    [
      "Two pointers",
      "Depth-first search",
      "Heapify",
      "Topological sort"
    ],
    0,
    "Two pointers can move inward based on whether the current sum is too small or large."
  ],
  [
    "DSA",
    "Hash maps",
    "Easy",
    "What is the average lookup time of a well-designed hash table?",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    1,
    "Hash tables provide average constant-time lookup, though worst cases can be linear."
  ],
  [
    "DSA",
    "Stacks and queues",
    "Medium",
    "Which data structure is most suitable for breadth-first search?",
    [
      "Stack",
      "Queue",
      "Binary search tree",
      "Hash set"
    ],
    1,
    "BFS explores nodes in layers using a first-in, first-out queue."
  ],
  [
    "DSA",
    "Trees",
    "Easy",
    "In a binary search tree, values in the left subtree are typically what relative to the node?",
    [
      "Greater",
      "Smaller",
      "Always equal",
      "Unrelated"
    ],
    1,
    "The BST ordering rule places smaller values in the left subtree."
  ],
  [
    "DSA",
    "Graphs",
    "Medium",
    "What does a topological ordering require?",
    [
      "An undirected graph",
      "A directed acyclic graph",
      "A complete graph",
      "A weighted tree"
    ],
    1,
    "A DAG can be ordered so every directed edge points forward in the ordering."
  ],
  [
    "DSA",
    "Sorting",
    "Medium",
    "Which comparison sort has guaranteed O(n log n) worst-case time and is stable in its standard form?",
    [
      "Quick sort",
      "Merge sort",
      "Selection sort",
      "Bubble sort"
    ],
    1,
    "Merge sort has O(n log n) time and is stable when merged appropriately."
  ],
  [
    "DSA",
    "Dynamic programming",
    "Hard",
    "What is the key idea behind memoization?",
    [
      "Recompute every state",
      "Store results of solved subproblems",
      "Sort input first",
      "Use only constant memory"
    ],
    1,
    "Memoization caches subproblem results to avoid repeated work."
  ],
  [
    "Web & Backend",
    "HTTP and APIs",
    "Easy",
    "Which HTTP method is conventionally used to retrieve a resource?",
    [
      "POST",
      "GET",
      "PATCH",
      "DELETE"
    ],
    1,
    "GET requests retrieve representations of resources."
  ],
  [
    "Web & Backend",
    "HTTP and APIs",
    "Medium",
    "What does HTTP status code 201 indicate?",
    [
      "No content",
      "Created",
      "Unauthorized",
      "Not found"
    ],
    1,
    "201 Created indicates the request succeeded and created a resource."
  ],
  [
    "Web & Backend",
    "React",
    "Easy",
    "What is a React prop?",
    [
      "A component input passed by its parent",
      "A database table",
      "A CSS selector",
      "A browser event loop"
    ],
    0,
    "Props pass data and configuration from a parent component to a child."
  ],
  [
    "Web & Backend",
    "React",
    "Medium",
    "Why should React list items have stable keys?",
    [
      "To style the list",
      "To help React track item identity across updates",
      "To encrypt item values",
      "To force full page reloads"
    ],
    1,
    "Keys help reconciliation identify which items were added, removed or reordered."
  ],
  [
    "Web & Backend",
    "Authentication",
    "Medium",
    "Why should passwords be stored using a password hashing function?",
    [
      "To make them reversible",
      "To avoid storing plaintext passwords",
      "To share them between users",
      "To shorten usernames"
    ],
    1,
    "Password hashes reduce the damage from a database leak; use a slow, salted password hashing algorithm."
  ],
  [
    "Web & Backend",
    "Security",
    "Hard",
    "What is the primary purpose of a CSRF token?",
    [
      "Prevent SQL syntax errors",
      "Prove a state-changing request originated from an authorized page context",
      "Compress request bodies",
      "Replace HTTPS"
    ],
    1,
    "CSRF tokens help defend against forged cross-site requests using a victim's authenticated session."
  ],
  [
    "Data & Systems",
    "SQL",
    "Easy",
    "Which SQL clause filters rows before grouping?",
    [
      "ORDER BY",
      "WHERE",
      "HAVING",
      "LIMIT"
    ],
    1,
    "WHERE filters input rows before grouping and aggregation."
  ],
  [
    "Data & Systems",
    "SQL",
    "Medium",
    "Which clause filters grouped results using an aggregate condition?",
    [
      "WHERE",
      "FROM",
      "HAVING",
      "JOIN"
    ],
    2,
    "HAVING filters groups after GROUP BY, often using aggregate expressions."
  ],
  [
    "Data & Systems",
    "Databases",
    "Medium",
    "What is the main purpose of a database index?",
    [
      "Guarantee no duplicates",
      "Speed up selected queries",
      "Encrypt every row",
      "Replace transactions"
    ],
    1,
    "Indexes can speed reads but consume storage and add write-maintenance cost."
  ],
  [
    "Data & Systems",
    "Transactions",
    "Hard",
    "What does atomicity mean in ACID?",
    [
      "Transactions are isolated by default",
      "A transaction happens entirely or not at all",
      "Data is always encrypted",
      "Reads never block"
    ],
    1,
    "Atomicity ensures partial transaction effects are not committed."
  ],
  [
    "Data & Systems",
    "Caching",
    "Medium",
    "What is a cache invalidation problem?",
    [
      "Choosing a font",
      "Keeping cached data consistent with changing source data",
      "Compressing images",
      "Balancing CPU cores"
    ],
    1,
    "Invalidation is difficult because cached copies can become stale after source updates."
  ],
  [
    "Data & Systems",
    "Docker",
    "Easy",
    "What is a Docker image?",
    [
      "A running process only",
      "A packaged template used to create containers",
      "A virtual network cable",
      "A source-control branch"
    ],
    1,
    "An image contains the filesystem and metadata used to instantiate containers."
  ],
  [
    "Capstone",
    "Testing",
    "Easy",
    "What does a unit test usually verify?",
    [
      "The entire production network",
      "A small unit of code in isolation",
      "Only page load speed",
      "User identity"
    ],
    1,
    "Unit tests focus on a small function, method or component with controlled dependencies."
  ],
  [
    "Capstone",
    "Deployment",
    "Medium",
    "Why use a staging environment?",
    [
      "To replace version control",
      "To validate a release in a production-like environment before users receive it",
      "To store passwords in code",
      "To skip monitoring"
    ],
    1,
    "Staging provides a safer place to validate deployment behavior before production."
  ],
  [
    "Job Readiness",
    "Interview practice",
    "Medium",
    "If you cannot solve an interview problem immediately, what is a useful next step?",
    [
      "Stay silent",
      "Clarify assumptions and explain a simple baseline approach",
      "Claim it is impossible",
      "Change the question"
    ],
    1,
    "A clear baseline and discussion of trade-offs show structured problem solving."
  ],
  [
    "Job Readiness",
    "System design",
    "Hard",
    "Why might a system use a message queue between services?",
    [
      "To remove all failures",
      "To decouple producers and consumers and absorb bursts",
      "To make requests synchronous",
      "To avoid storing data"
    ],
    1,
    "Queues buffer work and decouple service timing, though they introduce delivery and ordering considerations."
  ]
];
