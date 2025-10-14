document.addEventListener("DOMContentLoaded", function () {
            const content = document.querySelector(".content");
            const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltips.forEach(el => new bootstrap.Tooltip(el));

            // Smooth fade-in animation
            setTimeout(() => content.classList.add("loaded"), 300);

            // Mode persistence
            const mode = localStorage.getItem("theme");
            if (mode === "dark") {
                document.body.classList.remove("light-mode");
                document.body.classList.add("dark-mode");
                updateToggleIcon("dark");
            }
        });

        function toggleMode() {
            const body = document.body;
            const isDark = body.classList.contains("dark-mode");

            if (isDark) {
                body.classList.remove("dark-mode");
                body.classList.add("light-mode");
                localStorage.setItem("theme", "light");
                updateToggleIcon("light");
            } else {
                body.classList.remove("light-mode");
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
                updateToggleIcon("dark");
            }
        }

        function updateToggleIcon(mode) {
            const toggleBtn = document.querySelector(".mode-toggle i");
            if (!toggleBtn) return;
            toggleBtn.className = mode === "dark" 
                ? "bi bi-sun-fill" 
                : "bi bi-moon-stars-fill";
        }

        const startDate = new Date('September 22, 2025');
const targetDate = new Date('July 22, 2026');

// Total days between start and target
const totalDays = Math.ceil((targetDate - startDate) / (1000 * 60 * 60 * 24));

const timerElement = document.getElementById('countdown-timer');
const subtitle = document.getElementById('countdown-subtitle');
const completeElement = document.getElementById('complete-message');
const progressElement = document.getElementById('progress');
const progressLabel = document.getElementById('progress-label');
const progressBar = document.getElementById('progress-bar');

// Daily messages array (lo bisa copy-paste dari dailyMessages lo)
const dailyMessages = [
  // Month 1 — Web Foundations, JS Basics, Git, HCI
  "Month 1, Week 1, Day 1 — Start strong! Learn HTML semantics and structure. Reflection: How can you make content clear for users?",
  "Month 1, Week 1, Day 2 — Master CSS Box Model & Flexbox. Motivation: Small layouts today, big confidence tomorrow.",
  "Month 1, Week 1, Day 3 — Practice CSS Grid. Tip: Keep user experience in mind.",
  "Month 1, Week 1, Day 4 — Refine typography, color, spacing. Ask: Can everyone read this clearly?",
  "Month 1, Week 1, Day 5 — Add responsive images & media queries. Motivation: Performance + usability = happy users.",
  "Month 1, Week 1, Day 6 — Assemble landing page v1. Tip: Celebrate small victories.",
  "Month 1, Week 1, Day 7 — Review & polish. Reflection: How did this week help your foundation?",

  "Month 1, Week 2, Day 8 — JS variables, types, operators. Ask: What patterns do you notice in JS?",
  "Month 1, Week 2, Day 9 — Control flow & functions. Motivation: Consistency beats intensity.",
  "Month 1, Week 2, Day 10 — Arrays & objects. Tip: Can you simplify your code?",
  "Month 1, Week 2, Day 11 — DOM & events. Reflection: How do users interact with your UI?",
  "Month 1, Week 2, Day 12 — Form validation. Motivation: Prevent errors before they happen.",
  "Month 1, Week 2, Day 13 — Build tabs & modals. Tip: Small components = scalable apps.",
  "Month 1, Week 2, Day 14 — Refactor & comment. Reflection: Will future-you understand this?",

  "Month 1, Week 3, Day 15 — Git basics. Motivation: Version control = confidence.",
  "Month 1, Week 3, Day 16 — PRs & reviews. Tip: Collaboration matters.",
  "Month 1, Week 3, Day 17 — Prettier & ESLint. Reflection: Clean code = less stress.",
  "Month 1, Week 3, Day 18 — Accessibility audit. Ask: Is my site usable for everyone?",
  "Month 1, Week 3, Day 19 — Deploy to Vercel/Netlify. Motivation: Shipping early = learning faster.",
  "Month 1, Week 3, Day 20 — Write postmortem. Reflection: What went well, what to improve?",
  "Month 1, Week 3, Day 21 — Add design decisions to README. Tip: Document your choices.",

  "Month 1, Week 4, Day 22 — Study HCI principles. Motivation: Think like the user.",
  "Month 1, Week 4, Day 23 — Apply Nielsen heuristics. Reflection: Is this intuitive?",
  "Month 1, Week 4, Day 24 — Gather user feedback. Tip: Real feedback > assumptions.",
  "Month 1, Week 4, Day 25 — Implement improvements. Motivation: Iteration = mastery.",
  "Month 1, Week 4, Day 26 — Finalize README. Ask: Can a stranger understand this project?",
  "Month 1, Week 4, Day 27 — Buffer tasks. Reflection: Every step counts.",
  "Month 1, Week 4, Day 28 — Retrospective & polish. Motivation: Celebrate Week 4 wins.",

  // Month 2 — Advanced JS, Async, HTTP, Node.js + Express
  "Month 2, Week 5, Day 29 — Promises & async/await. Motivation: Asynchronous is powerful.",
  "Month 2, Week 5, Day 30 — HTTP methods & status codes. Ask: Can you explain this to a friend?",
  "Month 2, Week 5, Day 31 — Headers & CORS. Tip: Security first!",
  "Month 2, Week 5, Day 32 — Fetch public API data. Motivation: Real-world data is exciting.",
  "Month 2, Week 5, Day 33 — Handle loading & errors. Reflection: UX matters as much as code.",
  "Month 2, Week 5, Day 34 — Build fetch wrapper. Tip: Reusable code saves time.",
  "Month 2, Week 5, Day 35 — Document patterns. Motivation: Knowledge is power.",

  // Week 2
  "Month 2, Week 6, Day 36 — Node runtime & npm. Reflection: Understand your tools.",
  "Month 2, Week 6, Day 37 — Modules & import/export. Tip: Structure matters.",
  "Month 2, Week 6, Day 38 — fs & path. Motivation: Master backend file handling.",
  "Month 2, Week 6, Day 39 — Scaffold backend project. Reflection: How clean is your structure?",
  "Month 2, Week 6, Day 40 — Jest unit tests. Tip: Test your code early.",
  "Month 2, Week 6, Day 41 — npm scripts for lint/test. Motivation: Automate repetitive tasks.",
  "Month 2, Week 6, Day 42 — Review & refactor. Reflection: Always strive for clarity.",

  // Week 3
  "Month 2, Week 7, Day 43 — Express routes & controllers. Motivation: Build solid endpoints.",
  "Month 2, Week 7, Day 44 — Custom middleware & error handling. Tip: Plan for failure.",
  "Month 2, Week 7, Day 45 — Validate requests with Joi/Zod. Reflection: Avoid bad data.",
  "Month 2, Week 7, Day 46 — Add morgan logging & improve structure. Motivation: Observability matters.",
  "Month 2, Week 7, Day 47 — Write Supertest integration tests. Tip: Test behavior, not just code.",
  "Month 2, Week 7, Day 48 — Harden error paths & 404 handling. Reflection: Users hate surprises.",
  "Month 2, Week 7, Day 49 — Tag release v1.0.0. Motivation: Celebrate milestones.",

  // Week 4
  "Month 2, Week 8, Day 50 — Build vanilla frontend to call Notes API. Tip: Integrate carefully.",
  "Month 2, Week 8, Day 51 — Improve form UX & accessibility. Reflection: Every user counts.",
  "Month 2, Week 8, Day 52 — Add empty/error states. Motivation: Feedback improves experience.",
  "Month 2, Week 8, Day 53 — Deploy backend & frontend. Tip: Shipping feels amazing!",
  "Month 2, Week 8, Day 54 — Create OpenAPI-lite docs. Reflection: Document as you go.",
  "Month 2, Week 8, Day 55 — Buffer & fix bugs. Motivation: Bugs are just learning opportunities.",
  "Month 2, Week 8, Day 56 — Retrospective & learning notes. Tip: Never stop reviewing.",

  // Month 3 — Databases & Security; Project 1: Auth + Dashboard
"Month 3, Week 9, Day 57 — MongoDB CRUD basics. Motivation: Every query counts.",
"Month 3, Week 9, Day 58 — Create & test single-field indexes. Reflection: Indexes make life faster.",
"Month 3, Week 9, Day 59 — Aggregation pipelines. Tip: Process data efficiently.",
"Month 3, Week 9, Day 60 — Design user schema with constraints. Motivation: Good design = less bugs.",
"Month 3, Week 9, Day 61 — Unique indexes & audit fields. Reflection: Data integrity matters.",
"Month 3, Week 9, Day 62 — Create seed & migration scripts. Tip: Automate repetitive tasks.",
"Month 3, Week 9, Day 63 — Validate schema with sample data. Motivation: Test before trusting.",

"Month 3, Week 10, Day 64 — Hash passwords with bcrypt/argon2. Reflection: Security is priority.",
"Month 3, Week 10, Day 65 — Implement JWT access & refresh tokens. Tip: Auth flows are tricky, stay focused.",
"Month 3, Week 10, Day 66 — Auth middleware & RBAC. Motivation: Protect your users.",
"Month 3, Week 10, Day 67 — Rate limiting & CORS. Reflection: Prevent attacks, ensure smooth access.",
"Month 3, Week 10, Day 68 — Supertest for auth endpoints. Tip: Verify before deploying.",
"Month 3, Week 10, Day 69 — Simulate reset password flow. Motivation: Think of real user needs.",
"Month 3, Week 10, Day 70 — Security review & threat checklist. Reflection: Be thorough, hackers are persistent.",

"Month 3, Week 11, Day 71 — Design dashboard protected routes. Tip: Only authorized users can enter.",
"Month 3, Week 11, Day 72 — Implement login/register pages. Motivation: First impressions matter.",
"Month 3, Week 11, Day 73 — Build profile & password flow. Reflection: Secure & user-friendly.",
"Month 3, Week 11, Day 74 — Add toast notifications & feedback. Tip: Feedback improves UX.",
"Month 3, Week 11, Day 75 — Smoke test core flows. Motivation: Test everything, fix small issues now.",
"Month 3, Week 11, Day 76 — Address accessibility issues. Reflection: Everyone deserves equal access.",
"Month 3, Week 11, Day 77 — Prepare demo & walkthrough. Tip: Showcase confidently.",

"Month 3, Week 12, Day 78 — Draft architecture diagram. Motivation: Visualize your system clearly.",
"Month 3, Week 12, Day 79 — Add .env.example & setup scripts. Reflection: Environment matters.",
"Month 3, Week 12, Day 80 — Deploy backend & dashboard. Tip: Deployment is rewarding.",
"Month 3, Week 12, Day 81 — Verify SSL & environment separation. Motivation: Security first.",
"Month 3, Week 12, Day 82 — Document API usage & auth flow. Reflection: Clear docs = happy users.",
"Month 3, Week 12, Day 83 — Buffer & bug fixes. Tip: Small steps keep momentum.",
"Month 3, Week 12, Day 84 — Retrospective & lessons learned. Motivation: Growth comes from reflection.",

// Month 4 — React Core + TypeScript
"Month 4, Week 13, Day 85 — Functional React components. Motivation: Start small, think big.",
"Month 4, Week 13, Day 86 — Manage state & props. Reflection: Keep logic clean.",
"Month 4, Week 13, Day 87 — Use effects & cleanup. Tip: Memory leaks hurt performance.",
"Month 4, Week 13, Day 88 — Compose & reuse components. Motivation: DRY = happy devs.",
"Month 4, Week 13, Day 89 — Login/Register UI in React. Reflection: Think UX-first.",
"Month 4, Week 13, Day 90 — Integrate API for auth flows. Tip: Test API calls thoroughly.",
"Month 4, Week 13, Day 91 — Review & refactor. Motivation: Always improve.",

"Month 4, Week 14, Day 92 — React Router & protected routes. Tip: Navigation = clarity.",
"Month 4, Week 14, Day 93 — Choose forms (controlled / react-hook-form). Motivation: Simplify input handling.",
"Month 4, Week 14, Day 94 — Add validation with Zod/Yup. Reflection: Prevent bad data.",
"Month 4, Week 14, Day 95 — Complete profile & settings pages. Tip: UX polish matters.",
"Month 4, Week 14, Day 96 — Improve loading & error boundaries. Motivation: Users notice small details.",
"Month 4, Week 14, Day 97 — Write RTL tests for forms. Reflection: Confidence in correctness.",
"Month 4, Week 14, Day 98 — Document patterns used. Tip: Share your knowledge.",

"Month 4, Week 15, Day 99 — Configure TypeScript with strict mode. Motivation: Early safety saves pain.",
"Month 4, Week 15, Day 100 — Type utility functions & API client. Reflection: Predictable types help team.",
"Month 4, Week 15, Day 101 — Type component props & children. Tip: Catch bugs at compile time.",
"Month 4, Week 15, Day 102 — Add React-specific types. Motivation: Type safety = confidence.",
"Month 4, Week 15, Day 103 — Slowly migrate components to TS. Reflection: Step-by-step works.",
"Month 4, Week 15, Day 104 — Address common type errors. Tip: Errors are learning opportunities.",
"Month 4, Week 15, Day 105 — Review & refactor. Motivation: Continuous improvement.",

"Month 4, Week 16, Day 106 — Finalize TypeScript adoption. Tip: Safety matters.",
"Month 4, Week 16, Day 107 — Write type-safe utilities. Reflection: Reusable & reliable.",
"Month 4, Week 16, Day 108 — Optimize component types. Motivation: Performance counts.",
"Month 4, Week 16, Day 109 — Write TS tests. Tip: Verify types & logic.",
"Month 4, Week 16, Day 110 — Conduct TS & React review. Reflection: Knowledge is cumulative.",
"Month 4, Week 16, Day 111 — Bug fixes & test coverage. Motivation: Perfection is a journey.",
"Month 4, Week 16, Day 112 — Retrospective & deployment. Tip: Deploy with confidence.",

// Month 5 — Full-Stack Development with REST API
"Month 5, Week 17, Day 113 — Setup CORS & token handling. Motivation: Secure connections first.",
"Month 5, Week 17, Day 114 — Develop CRUD API endpoints with Express. Tip: Endpoints are the bridge between frontend & backend.",
"Month 5, Week 17, Day 115 — Update React UI to reflect backend changes. Reflection: Synchronization matters.",
"Month 5, Week 17, Day 116 — Introduce global state (Context/Redux). Motivation: State drives UI.",
"Month 5, Week 17, Day 117 — Manage authentication state. Tip: Users expect seamless login.",
"Month 5, Week 17, Day 118 — Enhance UX with async feedback. Reflection: Responsiveness delights users.",
"Month 5, Week 17, Day 119 — Bug fixes & feature review. Motivation: Small refinements = big impact.",

"Month 5, Week 18, Day 120 — JWT generation & verification. Tip: Tokens are the keys.",
"Month 5, Week 18, Day 121 — Implement login/register/logout endpoints. Reflection: Handle errors gracefully.",
"Month 5, Week 18, Day 122 — Protect routes with JWT middleware. Motivation: Secure your app.",
"Month 5, Week 18, Day 123 — Update frontend login/logout handling. Tip: Smooth UX matters.",
"Month 5, Week 18, Day 124 — Add user roles & protect backend routes. Reflection: Role-based access ensures safety.",
"Month 5, Week 18, Day 125 — Role-based access guards on frontend. Motivation: Keep users in the right place.",
"Month 5, Week 18, Day 126 — End-to-end auth testing & documentation. Tip: Verify everything works.",

"Month 5, Week 19, Day 127 — Scaffold admin dashboard with protected route. Motivation: Admin power, responsibly.",
"Month 5, Week 19, Day 128 — Build user management table. Tip: CRUD + search = efficient admin.",
"Month 5, Week 19, Day 129 — Implement pagination & sorting. Reflection: Large datasets need structure.",
"Month 5, Week 19, Day 130 — Add forms for updating roles/statuses. Motivation: UX matters for admins too.",
"Month 5, Week 19, Day 131 — Write integration tests for admin routes. Tip: Test like a hacker.",
"Month 5, Week 19, Day 132 — Optimize performance (memoization/lazy). Reflection: Users notice speed.",
"Month 5, Week 19, Day 133 — Polish admin UI & confirm RBAC. Motivation: Finish strong.",

"Month 5, Week 20, Day 134 — Write backend unit tests (Jest/Mocha). Tip: Coverage is confidence.",
"Month 5, Week 20, Day 135 — Write frontend tests (RTL). Reflection: Validate UX flows.",
"Month 5, Week 20, Day 136 — Configure .env for prod & test. Motivation: Environments save headaches.",
"Month 5, Week 20, Day 137 — Deploy frontend & backend. Tip: Deployment = progress visible.",
"Month 5, Week 20, Day 138 — Add error boundaries & loading states. Reflection: Handle the unexpected.",
"Month 5, Week 20, Day 139 — Usability test & peer feedback. Motivation: Feedback accelerates growth.",
"Month 5, Week 20, Day 140 — Finalize documentation, record demo, retrospective. Tip: Share what you built.",

// Month 6 — Advanced JavaScript, Algorithms, GraphQL
"Month 6, Week 21, Day 141 — Closures & lexical scoping. Motivation: Master the inner workings of functions.",
"Month 6, Week 21, Day 142 — Currying & partial application. Tip: Break problems into reusable pieces.",
"Month 6, Week 21, Day 143 — 'this' keyword and context. Reflection: Know your scope.",
"Month 6, Week 21, Day 144 — Prototype chain & inheritance. Motivation: Build extendable structures.",
"Month 6, Week 21, Day 145 — Destructuring, spread/rest, async/await review. Tip: Modern JS simplifies life.",
"Month 6, Week 21, Day 146 — Refactor previous code with ES6+ syntax. Reflection: Cleaner code = easier maintenance.",
"Month 6, Week 21, Day 147 — Solve algorithm challenges (closures, this, currying). Motivation: Apply what you learned.",

"Month 6, Week 22, Day 148 — Arrays & custom operations (map/filter/reduce). Tip: Arrays are everywhere.",
"Month 6, Week 22, Day 149 — Singly linked lists: insert & delete. Reflection: Data structures shape performance.",
"Month 6, Week 22, Day 150 — Stacks & queues: implement in JS. Motivation: Classic structures, modern apps.",
"Month 6, Week 22, Day 151 — Trees: BST & traversals. Tip: Recursive thinking = key skill.",
"Month 6, Week 22, Day 152 — Graphs: implement & search. Reflection: Connections are everywhere.",
"Month 6, Week 22, Day 153 — Heaps & kth largest element. Motivation: Master priority structures.",
"Month 6, Week 22, Day 154 — Data structure problems (LeetCode/HackerRank). Tip: Practice beats theory.",

"Month 6, Week 23, Day 155 — Sorting algorithms: bubble, merge, quick. Motivation: Know your tools.",
"Month 6, Week 23, Day 156 — Searching algorithms: linear & binary search. Reflection: Efficient search = faster apps.",
"Month 6, Week 23, Day 157 — Recursion practice: tree traversals. Tip: Break problems into smaller ones.",
"Month 6, Week 23, Day 158 — Dynamic programming basics. Motivation: Solve complex problems efficiently.",
"Month 6, Week 23, Day 159 — Greedy algorithms: knapsack & activity selection. Reflection: Optimal choices matter.",
"Month 6, Week 23, Day 160 — Solve algorithm challenges (sorting, recursion, DP). Tip: Test your logic.",
"Month 6, Week 23, Day 161 — Review time & space complexity. Motivation: Analyze before optimize.",

"Month 6, Week 24, Day 162 — GraphQL basics: queries, mutations, subscriptions. Tip: Know the new API style.",
"Month 6, Week 24, Day 163 — Set up GraphQL server (Apollo/Express). Reflection: A strong backend foundation matters.",
"Month 6, Week 24, Day 164 — Define schema: Types, Queries, Mutations, Resolvers. Motivation: Structure enables scalability.",
"Month 6, Week 24, Day 165 — CRUD with GraphQL. Tip: GraphQL replaces REST in style, not in logic.",
"Month 6, Week 24, Day 166 — Integrate Apollo Client in React frontend. Reflection: Frontend must understand backend.",
"Month 6, Week 24, Day 167 — Implement pagination, sorting, filtering in GraphQL. Motivation: Users love fast data.",
"Month 6, Week 24, Day 168 — Deploy full-stack GraphQL app. Tip: Show your work to the world.",

// Month 7 — Testing, CI/CD, Frontend Performance
"Month 7, Week 25, Day 169 — Frontend unit tests (Jest + RTL). Motivation: Catch bugs early, ship confidently.",
"Month 7, Week 25, Day 170 — Test core components (buttons, forms). Tip: Every interaction matters.",
"Month 7, Week 25, Day 171 — Test state management & hooks. Reflection: Understand your app’s flow.",
"Month 7, Week 25, Day 172 — Mock API requests (MSW or custom). Motivation: Isolate & verify logic.",
"Month 7, Week 25, Day 173 — GraphQL queries/mutations testing. Tip: Ensure backend consistency.",
"Month 7, Week 25, Day 174 — Accessibility (a11y) testing. Reflection: Build apps everyone can use.",
"Month 7, Week 25, Day 175 — Review code coverage and fix gaps. Motivation: Quality is measurable.",

"Month 7, Week 26, Day 176 — Backend unit tests (Jest). Tip: Test functions, not assumptions.",
"Month 7, Week 26, Day 177 — Test GraphQL resolvers & services. Reflection: Reliability is key.",
"Month 7, Week 26, Day 178 — Integration tests for auth, CRUD, error cases. Motivation: Don’t trust, verify.",
"Month 7, Week 26, Day 179 — Mock DB / use test DB instance. Tip: Safe testing protects data.",
"Month 7, Week 26, Day 180 — Setup/teardown environments. Reflection: Clean start = predictable results.",
"Month 7, Week 26, Day 181 — Run tests in CI locally (GitHub Actions). Motivation: Automation = time saved.",
"Month 7, Week 26, Day 182 — Fix failed tests & document coverage. Tip: Document for team and future you.",

"Month 7, Week 27, Day 183 — Learn GitHub Actions workflows. Motivation: Automate repetitive tasks.",
"Month 7, Week 27, Day 184 — Add frontend build & test steps. Tip: Fast feedback loop improves speed.",
"Month 7, Week 27, Day 185 — Add backend CI pipeline (lint + test). Reflection: Consistency prevents regressions.",
"Month 7, Week 27, Day 186 — Configure deployment previews (Vercel/Netlify). Motivation: Visualize changes early.",
"Month 7, Week 27, Day 187 — Manage secrets & environment variables in CI. Tip: Security is part of workflow.",
"Month 7, Week 27, Day 188 — Run Lighthouse / Playwright in CI. Reflection: Performance matters.",
"Month 7, Week 27, Day 189 — Finalize CI pipeline & commit scripts. Motivation: Automation is freedom.",

"Month 7, Week 28, Day 190 — Audit app with Lighthouse. Tip: Measure, don’t guess.",
"Month 7, Week 28, Day 191 — Implement lazy loading (React.lazy & Suspense). Reflection: Speed improves UX.",
"Month 7, Week 28, Day 192 — Optimize bundle size (tree-shaking, code-splitting). Motivation: Small & fast wins users.",
"Month 7, Week 28, Day 193 — Add caching (GraphQL cache / React Query). Tip: Reduce load & improve perceived speed.",
"Month 7, Week 28, Day 194 — Enable compression (Gzip / Brotli). Reflection: Every ms counts.",
"Month 7, Week 28, Day 195 — Document improvements & deploy. Motivation: Sharing progress inspires others.",
"Month 7, Week 28, Day 196 — Retrospective: what went well, what to improve. Tip: Reflection fuels growth.",

// Month 8 — Deployment, Monitoring, Observability
"Month 8, Week 29, Day 197 — Set up production frontend (Vercel/Netlify). Motivation: Ship your first live version!",
"Month 8, Week 29, Day 198 — Configure backend deployment (Render/Railway/Docker). Tip: Automate deployment, reduce friction.",
"Month 8, Week 29, Day 199 — Connect DB (MongoDB Atlas / PostgreSQL). Reflection: Data foundation is crucial.",
"Month 8, Week 29, Day 200 — Manage environment variables securely. Motivation: Protect your secrets.",
"Month 8, Week 29, Day 201 — Add CORS, rate limiting, helmet middleware. Tip: Secure by default.",
"Month 8, Week 29, Day 202 — Smoke test deployed app. Reflection: Catch issues early in production.",
"Month 8, Week 29, Day 203 — Fix deployment bugs & polish setup. Motivation: Every release is a learning opportunity.",

"Month 8, Week 30, Day 204 — Setup logging middleware (Morgan/Winston). Tip: Observability starts with logs.",
"Month 8, Week 30, Day 205 — Structured logs & uncaught errors. Reflection: Errors tell stories.",
"Month 8, Week 30, Day 206 — Global error boundaries in frontend. Motivation: Prevent crashes, improve UX.",
"Month 8, Week 30, Day 207 — Add custom error codes & messages. Tip: Clear communication = happy users.",
"Month 8, Week 30, Day 208 — Create basic log viewer or third-party logging. Reflection: Visibility is power.",
"Month 8, Week 30, Day 209 — Verify logs & monitor errors in production. Motivation: Awareness prevents disasters.",
"Month 8, Week 30, Day 210 — Retrospective: refine logging & error handling. Tip: Continuous improvement matters.",

"Month 8, Week 31, Day 211 — Set up monitoring tools (Sentry, LogRocket, Posthog). Motivation: Know your app’s health.",
"Month 8, Week 31, Day 212 — Track API failures & frontend exceptions. Tip: Metrics = insight.",
"Month 8, Week 31, Day 213 — Measure performance (TTFB, FCP). Reflection: Speed = user satisfaction.",
"Month 8, Week 31, Day 214 — Configure anonymized user analytics. Motivation: Data-driven decisions.",
"Month 8, Week 31, Day 215 — Implement alerts for high latency/errors. Tip: Don’t wait to react.",
"Month 8, Week 31, Day 216 — Build dashboard to visualize metrics. Reflection: Visual clarity = faster action.",
"Month 8, Week 31, Day 217 — Review & refine observability setup. Motivation: Prepare for scale.",

"Month 8, Week 32, Day 218 — Write disaster recovery plan. Tip: Be ready for the unexpected.",
"Month 8, Week 32, Day 219 — Setup DB backups & restore procedure. Reflection: Safety first.",
"Month 8, Week 32, Day 220 — Rotate secrets & tokens securely. Motivation: Security is ongoing.",
"Month 8, Week 32, Day 221 — Run security audit (npm audit, OWASP). Tip: Find & fix vulnerabilities.",
"Month 8, Week 32, Day 222 — Patch issues & clean dependencies. Reflection: Maintenance = longevity.",
"Month 8, Week 32, Day 223 — Document production infrastructure. Motivation: Knowledge sharing matters.",
"Month 8, Week 32, Day 224 — Final deployment checklist & public app launch. Tip: Celebrate small wins!",

// Month 9 — Capstone Project (Full Production Build)
"Month 9, Week 33, Day 225 — Choose project scope & audience. Motivation: Define your mission clearly!",
"Month 9, Week 33, Day 226 — Draft system architecture & tech stack. Tip: Blueprint before building.",
"Month 9, Week 33, Day 227 — Define MVP & backlog. Reflection: Focus on value first.",
"Month 9, Week 33, Day 228 — Set up repo & environments. Motivation: Prepare your battlefield.",
"Month 9, Week 33, Day 229 — Define KPIs & success metrics. Tip: Measure what matters.",
"Month 9, Week 33, Day 230 — Write initial ADRs (Architecture Decision Records). Reflection: Document choices.",
"Month 9, Week 33, Day 231 — Kick off implementation. Motivation: First line of code counts!",

"Month 9, Week 34, Day 232 — Build backend models & core APIs. Tip: Solid foundation first.",
"Month 9, Week 34, Day 233 — Implement frontend auth, routing, layouts. Reflection: Keep UX seamless.",
"Month 9, Week 34, Day 234 — Connect frontend with backend (GraphQL/REST). Motivation: Make your app alive!",
"Month 9, Week 34, Day 235 — Add key features (CRUD, uploads, roles). Tip: Deliver functional value.",
"Month 9, Week 34, Day 236 — Add error handling & validation. Reflection: Fail gracefully.",
"Month 9, Week 34, Day 237 — Test features (unit & integration). Motivation: Confidence in code.",
"Month 9, Week 34, Day 238 — Code freeze for phase 1. Tip: Pause, review, reflect.",

"Month 9, Week 35, Day 239 — Add role-based dashboards/admin views. Motivation: Control access smartly.",
"Month 9, Week 35, Day 240 — Implement background jobs/billing (if any). Tip: Automate processes.",
"Month 9, Week 35, Day 241 — Finalize UX & responsiveness. Reflection: Polish counts.",
"Month 9, Week 35, Day 242 — Add metrics & monitoring. Motivation: Observe real-time usage.",
"Month 9, Week 35, Day 243 — Test mobile & responsive layouts. Tip: Device-friendly equals user-friendly.",
"Month 9, Week 35, Day 244 — Deploy to staging & test. Reflection: Safety net before production.",
"Month 9, Week 35, Day 245 — Prepare release notes & documentation. Motivation: Share your journey.",

"Month 9, Week 36, Day 246 — Final testing & CI/CD verification. Tip: No shortcuts now.",
"Month 9, Week 36, Day 247 — Publish capstone project to public domain. Reflection: Show your work!",
"Month 9, Week 36, Day 248 — Write README, architecture diagrams, API docs. Motivation: Communication is key.",
"Month 9, Week 36, Day 249 — Record walkthrough/demo video. Tip: Visual storytelling matters.",
"Month 9, Week 36, Day 250 — Share project on communities (LinkedIn, GitHub, Medium). Reflection: Feedback is fuel.",
"Month 9, Week 36, Day 251 — Collect feedback & iterate. Motivation: Growth through critique.",
"Month 9, Week 36, Day 252 — Retrospective & lessons learned. Tip: Document everything for future reference.",

// Month 10 — Interview Prep, DSA, and Portfolio Polish
"Month 10, Week 37, Day 253 — Practice arrays & strings (NeetCode). Motivation: Sharpen your fundamentals!",
"Month 10, Week 37, Day 254 — Solve problems on hash maps & sets. Tip: Efficient solutions save time.",
"Month 10, Week 37, Day 255 — Work on stacks/queues & linked lists. Reflection: Understand data flow.",
"Month 10, Week 37, Day 256 — Tree traversal & recursion. Motivation: Think recursively, act logically.",
"Month 10, Week 37, Day 257 — Graphs (BFS/DFS). Tip: Map relationships clearly.",
"Month 10, Week 37, Day 258 — Mock DSA interview 1. Reflection: Simulate real pressure.",
"Month 10, Week 37, Day 259 — Analyze time complexity & optimize. Motivation: Learn to be efficient!",

"Month 10, Week 38, Day 260 — Dynamic programming basics. Tip: Break problems into subproblems.",
"Month 10, Week 38, Day 261 — Practice greedy algorithms & sliding window. Reflection: Spot optimal paths.",
"Month 10, Week 38, Day 262 — Study heap & priority queues. Motivation: Prioritize wisely.",
"Month 10, Week 38, Day 263 — Solve mixed LeetCode problems. Tip: Mix concepts for mastery.",
"Month 10, Week 38, Day 264 — Mock DSA interview 2. Reflection: Practice under time constraints.",
"Month 10, Week 38, Day 265 — Compile notes & templates. Motivation: Be prepared for anything.",
"Month 10, Week 38, Day 266 — Finalize your study routine. Tip: Consistency > intensity.",

"Month 10, Week 39, Day 267 — Study system design components (DBs, cache, queues). Reflection: Think big picture.",
"Month 10, Week 39, Day 268 — Design a feed system (Twitter-style). Motivation: Learn scalable patterns.",
"Month 10, Week 39, Day 269 — Design chat/messaging system. Tip: Communication matters.",
"Month 10, Week 39, Day 270 — Design search or recommendation system. Reflection: Make data work for users.",
"Month 10, Week 39, Day 271 — Mock system design interview. Motivation: Practice articulating your decisions.",
"Month 10, Week 39, Day 272 — Create mini system design summaries. Tip: Document trade-offs clearly.",
"Month 10, Week 39, Day 273 — Review trade-offs & constraints. Reflection: Learn to justify decisions.",

"Month 10, Week 40, Day 274 — Polish GitHub: add READMEs, issues, project boards. Motivation: Present your work professionally.",
"Month 10, Week 40, Day 275 — Update portfolio site with final capstone. Tip: Showcase your best work.",
"Month 10, Week 40, Day 276 — Polish resume with metrics & impact. Reflection: Numbers speak louder than words.",
"Month 10, Week 40, Day 277 — Practice STAR behavioral answers. Motivation: Communicate your experience effectively.",
"Month 10, Week 40, Day 278 — Do mock behavioral interviews. Tip: Rehearse for confidence.",
"Month 10, Week 40, Day 279 — Submit applications to at least 10 roles. Reflection: Take action.",
"Month 10, Week 40, Day 280 — Final retrospective & career plan. Motivation: Plan your next 6–12 months strategically.",

// Month 11 — Recap & Graduation
"Month 11, Week 41, Day 281 — Journey Reflection. Motivation: Celebrate how far you’ve come!",
"Month 11, Week 41, Day 282 — Knowledge Consolidation. Tip: Organize notes & summarize key concepts.",
"Month 11, Week 41, Day 283 — Project Review. Reflection: Analyze what worked & what can improve.",
"Month 11, Week 41, Day 284 — Documentation Setup. Motivation: Clear docs make projects shine.",
"Month 11, Week 41, Day 285 — Notes Finalization. Tip: One organized reference beats scattered notes.",
"Month 11, Week 41, Day 286 — Mock Interview Prep. Reflection: Simulate pressure to gain confidence.",
"Month 11, Week 41, Day 287 — Review Retrospective. Motivation: Learn from mistakes and successes.",

"Month 11, Week 42, Day 288 — GitHub Polish. Tip: Make repos clean, structured, and presentable.",
"Month 11, Week 42, Day 289 — Website Polish. Reflection: UI/UX matters even in portfolios.",
"Month 11, Week 42, Day 290 — Resume Polish. Motivation: Highlight measurable impact and skills.",
"Month 11, Week 42, Day 291 — Portfolio Project Setup. Tip: Prepare environment & structure efficiently.",
"Month 11, Week 42, Day 292 — Feature Planning. Reflection: Strategically choose key features.",
"Month 11, Week 42, Day 293 — Start Implementation. Motivation: Turn plans into action.",
"Month 11, Week 42, Day 294 — Phase 1 Completion. Tip: Small wins compound into big success.",

"Month 11, Week 43, Day 295 — Core Features. Reflection: Focus on functionality first.",
"Month 11, Week 43, Day 296 — Additional Features. Motivation: Add polish & value.",
"Month 11, Week 43, Day 297 — Testing & QA. Tip: Find bugs before users do.",
"Month 11, Week 43, Day 298 — Final Polishing. Reflection: Attention to detail matters.",
"Month 11, Week 43, Day 299 — Mock Interviews. Motivation: Prepare for real scenarios.",
"Month 11, Week 43, Day 300 — Career Planning. Tip: Map your next 6–12 months.",
"Month 11, Week 43, Day 301 — Project Review. Reflection: Evaluate impact & quality.",

"Month 11, Week 44, Day 302 — Showcase Preparation. Motivation: Presentation is everything!",
"Month 11, Week 44, Day 303 — Graduation Showcase. Tip: Share your journey proudly.",
"Month 11, Week 44, Day 304 — Feedback Collection. Reflection: Constructive criticism is gold.",
"Month 11, Week 44, Day 305 — Reflection & Retrospective. Motivation: Celebrate wins & learn lessons.",
"Month 11, Week 44, Day 306 — Portfolio Polish. Tip: Optimize presentation for recruiters & peers.",
"Month 11, Week 44, Day 307 — Resume Updates. Reflection: Keep it concise & impact-driven.",
"Month 11, Week 44, Day 308 — Graduation Wrap-Up. Motivation: You did it! Full-stack journey completed! 🎉"

];

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function updateCountdown() {
  const now = new Date();
  const distance = targetDate - now;

  // Full days elapsed
  const fullDaysElapsed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const dayIndex = Math.min(fullDaysElapsed, dailyMessages.length - 1);

  // Subtitle: day count
  subtitle.textContent = `Day ${fullDaysElapsed + 1} of ${totalDays}`;

  // Subtitle: daily messages
  const dailyMessageElement = document.getElementById('daily-message');
dailyMessageElement.textContent = dailyMessages[dayIndex];

  // Fraction of current day
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const hoursToday = (now - startOfToday) / (1000 * 60 * 60);
  const fractionToday = hoursToday / 24;

  // Progress %
  let progressPercent = ((fullDaysElapsed + fractionToday) / totalDays) * 100;
  progressPercent = Math.min(Math.max(progressPercent, 0), 100); // clamp 0–100
  progressElement.style.width = progressPercent + "%";

  // Label inside progress bar
  const barWidth = progressBar.offsetWidth;
  let labelPosition = (progressPercent / 100) * barWidth;
  if (progressPercent < 5) labelPosition = 25;
  if (progressPercent > 95) labelPosition = barWidth - 25;
  progressLabel.style.left = `${labelPosition}px`;
  progressLabel.textContent = `${progressPercent.toFixed(2)}%`;

  // Completion check
  if (distance <= 0) {
    timerElement.style.display = "none";
    progressElement.style.width = "100%";
    progressLabel.textContent = "100%";
    completeElement.style.display = "block";
    document.title = "🎉 Journey Complete | Kuril Dev";
    return;
  }

  // Countdown time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tab title
  document.title = `${days}d ${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s left | Kuril Dev`;

  // Timer UI
  timerElement.innerHTML = `
    <div class="time-unit">
      <span class="time-value">${days}</span>
      <span class="time-label">Days</span>
    </div>
    <div class="time-unit">
      <span class="time-value">${formatTime(hours)}</span>
      <span class="time-label">Hours</span>
    </div>
    <div class="time-unit">
      <span class="time-value">${formatTime(minutes)}</span>
      <span class="time-label">Minutes</span>
    </div>
    <div class="time-unit">
      <span class="time-value">${formatTime(seconds)}</span>
      <span class="time-label">Seconds</span>
    </div>
  `;
}

// Start timer
updateCountdown();
setInterval(updateCountdown, 1000);