/* =========================================================
   Rich project detail, keyed by data-proj.
   Read by the project modal in main.js (window.PROJECT_DETAILS).
   Any project NOT listed here falls back to its card content.
   Section bodies accept light inline HTML (<strong>, <a>).
   ========================================================= */
window.PROJECT_DETAILS = {

  /* ---------------- PodcastIQ (Type 1: AI & Agentic build) -------------- */
  podcastiq: {
    category: 'AI & Agentic Systems',
    title: 'PodcastIQ',
    summary: 'An AI podcast intelligence platform that makes audio as searchable and verifiable as text: a 9-agent system over a Snowflake warehouse and a Neo4j knowledge graph, with temporal claim tracking and hybrid fact-checking.',
    meta: 'Course project (DAMG 7374, Northeastern, Spring 2026) · Team of 3 · 11-week build',
    sections: [
      { title: 'Overview',
        body: 'PodcastIQ indexes 290+ episodes across 25 channels, then layers a 9-agent system over the data so a user can search by concept, compare how experts disagree, watch claims evolve over time, and fact-check assertions against the live web. The novel part is combining vector search with graph traversal (GraphRAG) plus a temporal layer that catches when a prediction is later revised or contradicted.' },
      { title: 'Problem',
        body: 'Over 5 million podcasts exist, but audio is unsearchable: you cannot Ctrl+F a 2-hour conversation. Insights stay buried, claims go unchecked, and finding one discussion means listening to whole episodes. The users are engineers, researchers, and students who want the answer, not the airtime.' },
      { title: 'Goals and metrics',
        body: '<strong>North Star:</strong> time to a trusted, sourced answer. <strong>Supporting KPIs:</strong> search latency under 5s (p95), 100% embedding coverage, 5,000+ claims extracted, and high router intent accuracy. Achieved: 13,807 searchable chunks at 100% coverage, 8,660 attributed claims, 243 claim-evolution pairs, and a 10,610-node / 27,807-edge graph.' },
      { title: 'How it works',
        body: 'A Router agent (llama3.1-8b) classifies each query into one of 8 intents and dispatches to a specialist: Search and Summarization for retrieval (Cortex Search over 768-dim embeddings), Knowledge Graph for Cypher over Neo4j, Temporal for claim drift, Fact-Check for a 3-stage verification, plus Comparison, Recommendation, and Insight. A two-tier speaker attribution step (title parsing, then LLM inference with confidence scoring) tags every claim with who said it, no audio diarization needed.' },
      { title: 'Tech stack',
        body: 'Snowflake (warehouse plus Cortex LLMs llama3.1-8b/70b and arctic-embed-m), Cortex Search, Neo4j Community, LangGraph, Brave Search API, DBT, Streamlit, and the YouTube Transcript API. Orchestration via Apache Airflow.' },
      { title: 'Evaluation',
        body: 'A 6-part evaluation suite: router accuracy across 48 queries (95.8%), retrieval Precision@1/3/8 and MRR with an LLM relevance judge, generation quality via ROUGE and BERTScore (F1 0.774) plus faithfulness and groundedness judging, end-to-end latency per agent (mean and p95), projected cost (about $0.0012 per query), and domain KPIs for corpus coverage.' },
      { title: 'Challenges and tradeoffs',
        body: 'Original extraction clustered in late 2025, so the temporal layer was thin. A time-stratified re-extraction added 36 episodes spanning 2022 to 2024 to give claims room to drift. Hybrid fact-checking resolves 60 to 70% of claims with a free LLM pre-filter before spending limited Brave Search budget, which kept the whole project under the credit cap.' }
    ]
  },

  /* ---------------- CourtVision AI (Type 1: AI & Agentic build) --------- */
  courtvision: {
    category: 'AI & Agentic Systems',
    title: 'CourtVision AI',
    summary: 'An AI basketball coaching assistant that scouts opponents with live stats, breaks down game film, and simulates interactive games. A 3-agent system on Gemini 2.5, built at the Google Frontiers Hackathon.',
    meta: 'Google Frontiers Hackathon 2026 · Team Token Titans · deployed on Cloud Run',
    sections: [
      { title: 'Overview',
        body: 'CourtVision AI gives a coach one assistant for three jobs usually scattered across sites and a whiteboard: scouting, film study, and game planning. Three Gemini agents share intelligence, so a weakness the Scout finds flows straight into the game the Simulator runs.' },
      { title: 'Problem',
        body: 'Coaches spend hundreds of hours on film, stats, and game plans across fragmented tools, with no single assistant that reasons across all three. CourtVision unifies scout, analyze, and simulate into one grounded workflow.' },
      { title: 'Goals and metrics',
        body: 'Goal: get a coach from question to a defensible game plan in minutes, with every answer grounded and rated. Confidence scores ride on every scout response based on source quality, and the simulator obeys hard constraints: it never plays injured players, scores only rise, and the clock only falls.' },
      { title: 'How it works (3 agents + A2A)',
        body: '<strong>Scout:</strong> Gemini 2.5 Flash with Google Search grounding, multi-turn memory; returns an answer plus sources, a confidence score, and suggested follow-ups. <strong>Game Tape Analyzer:</strong> Gemini 2.5 Pro with vision reads a YouTube game and breaks down schemes by timestamp. <strong>Simulator:</strong> Gemini 2.5 Flash in JSON mode generates play-by-play that a 2D court animates, and the coach can intervene (zone, full-court press, timeout) so the next possessions react. <strong>Agent-to-agent:</strong> the Scout compiles a tactical brief into a shared intel store the Simulator reads at tip-off.' },
      { title: 'Tech stack',
        body: 'Gemini 2.5 Flash and Pro via the google-genai SDK, FastAPI backend with in-memory sessions, Google Search grounding, React with Tailwind on the front end, all deployed on Google Cloud Run within a $25 credit budget.' },
      { title: 'The demo moment',
        body: 'The full loop, live: scout Duke, send the intel to the simulator, then watch a coach call full-court press and see the exact turnovers the Scout predicted from Duke\'s young guards. That single moment exercises grounded search, agent-to-agent hand-off, real stats, and human-in-the-loop control at once.' }
    ]
  },

  /* ---------------- Student Housing Platform (Product build) ------------ */
  'student-housing': {
    category: 'Product Builds & Community',
    title: 'Student Housing Platform',
    summary: 'A full product cycle to fix Boston\'s broken student-housing search, grounded in market research and 100+ stakeholder interviews.',
    meta: 'Northeastern Product Club · Market analysis & product design',
    sections: [
      { title: 'The market',
        body: 'Boston student housing is a <strong>$2.5B market</strong>, yet the search itself is fragmented, opaque, and stressful. I ran market research and surveyed <strong>100+ stakeholders</strong> (students, landlords, and university staff) to map their journeys and find where the process actually breaks down.' },
      { title: 'The problem',
        body: 'Synthesizing the research surfaced <strong>10 recurring pain points</strong> across the housing journey, from discovery and trust to paperwork and move-in. The common thread: students spend enormous time searching with very little signal, and no single tool serves the end-to-end journey.' },
      { title: 'The solution',
        body: 'I designed a differentiated platform that <strong>outperformed 5 competitors</strong> on the dimensions that mattered most to students, and modeled a <strong>45% improvement in operational efficiency</strong> over the status quo.' },
      { title: 'The business case',
        body: 'I built a model projecting <strong>$500K in annual value</strong>, driven by a <strong>75% faster housing search</strong>, and presented it to university leadership to make the case for the platform.' }
    ]
  },

  /* ---------------- Recruiter Outreach App (Product build) -------------- */
  'recruiter-app': {
    category: 'Product Builds & Community',
    title: 'Recruiter Outreach App',
    summary: 'I ran my own job search like a product: a local app that imports recruiter contacts, personalizes outreach, sends paced emails from Gmail, then tracks replies and auto-schedules follow-ups.',
    meta: 'Self-built · FastAPI + SQLite + Gmail API',
    sections: [
      { title: 'Overview',
        body: 'Instead of copy-pasting cold emails, I built the entire outreach pipeline as software that runs on my own machine. Contacts and history live in a local SQLite file, and the AI key is held in memory only, never written to disk.' },
      { title: 'The problem',
        body: 'Job-search outreach is a leaky, manual funnel: you copy-paste emails, lose track of who replied, forget to follow up, and never get a clear view of what is actually working.' },
      { title: 'How it works',
        body: '<strong>Import</strong> contacts (file, paste, or manual), then <strong>auto-enrich</strong> each one (guessing name, company, and recruiter type from the email). <strong>Review and approve</strong>, then the app <strong>sends personalized emails</strong> from Gmail, paced across 8am to 4pm under a daily cap and a warm-up ramp. It then <strong>polls for replies and bounces</strong> and <strong>auto-schedules Day-5 and Day-10 follow-ups</strong>, skipping weekends and US holidays. A reply cancels that contact\'s remaining follow-ups.' },
      { title: 'Tech stack',
        body: 'FastAPI and Jinja2 for the app, SQLModel over SQLite for data, APScheduler for paced sending, the Gmail API (OAuth) for delivery and reply tracking, and optional OpenAI polish for light tailoring of high-priority emails.' },
      { title: 'The PM angle',
        body: 'I treated my own search as a product with a funnel: contacts to sent to replied. Follow-ups act as a retention loop, and reply and bounce tracking is the feedback signal that tells me which segments and templates convert.' }
    ]
  },

  /* ---------------- Husky Happs (Product build) ------------------------- */
  'husky-happs': {
    category: 'Product Builds & Community',
    title: 'Husky Happs',
    summary: 'A campus events app that aggregates every university and club event into one feed for undergraduate and graduate students.',
    meta: 'Product concept & design · Northeastern',
    sections: [
      { title: 'The problem',
        body: 'Campus events are scattered across emails, flyers, club pages, and separate portals, so students miss things they would have loved to attend and clubs struggle to reach the right audience.' },
      { title: 'The idea',
        body: 'Husky Happs pulls university and club events into a single, filterable feed built for both undergraduate and graduate students, so discovery becomes one place instead of ten.' },
      { title: 'The approach',
        body: 'I scoped the product around discovery and relevance: a unified event feed, filters by audience and interest, and a path for clubs to publish once and reach everyone.' }
    ]
  },

  /* ---------------- InclusivEd (Product strategy / accessibility) ------- */
  inclusived: {
    category: 'Product Strategy & Accessibility',
    title: 'InclusivEd',
    summary: 'A cognitive-accessibility redesign concept for Coursera. Online learning fails neurodivergent learners not because they cannot learn, but because it is designed for one type of brain.',
    meta: 'Graduate product strategy · Cognitive-first design',
    sections: [
      { title: 'The problem',
        body: '<strong>20% of learners are neurodivergent</strong>, only <strong>12% complete online courses</strong>, and many stitch together up to <strong>5 separate apps</strong> just to finish one course. This is not a motivation problem, it is a cognitive-design failure.' },
      { title: 'The cognitive mismatch',
        body: 'Platforms assume sustained attention, linear content consumption, and strong self-management, a neurotypical model. The reality for many learners is cognitive overload, constant rewatching and pausing, fragmented tools, and executive dysfunction, which drives low completion and disengagement.' },
      { title: 'Research',
        body: 'I used empathy mapping and affinity mapping to synthesize research into four themes: <strong>cognitive overload, executive function, sensory stress, and patchwork solutions</strong>. Card sorting then revealed the fix for navigation: move from academic labels (Syllabus, Modules) to functional actions (<strong>Do, Review, Support</strong>).' },
      { title: 'The learners',
        body: 'Three personas anchored the work: <strong>Aarav, 22</strong> (ADHD, the overloaded achiever), <strong>Maya, 29</strong> (dyslexia, the meticulous comprehender), and <strong>Jon, 25</strong> (autistic, the pattern-seeking learner), each with distinct cognitive needs.' },
      { title: 'Cognitive-first methodology',
        body: 'A 9-step approach: identify failure, define reality by cognitive profile, study coping behaviors, evaluate the journey, synthesize pain, design load-reducing interventions, prioritize with <strong>MoSCoW and RICE</strong>, define success (completion uplift and engagement), and scale across B2C and institutional adoption.' },
      { title: 'Strategy (SWOT)',
        body: 'Strengths (global brand, vast library, university partners) sit against weaknesses (one-size-fits-all UX, high dropout, cognitive overload). The opportunity is large: the neurodivergent market, AI personalization, and B2B accessibility needs, with niche accessible platforms and legal-compliance risk as the threats.' }
    ]
  },

  /* ---------------- Salesforce CRM Metrics (Product metrics) ------------ */
  salesforce: {
    category: 'Product Metrics & Strategy',
    title: 'Salesforce CRM Metrics',
    summary: 'A product-management critique of CRM dashboards: do activity metrics like calls logged and emails sent actually measure value, or just visible effort? A diagnosis, plus a redesigned measurement framework.',
    meta: 'Solo analysis · Product Metrics (Northeastern, 2026)',
    sections: [
      { title: 'The question',
        body: 'Easy-to-measure is not the same as valuable. Salesforce dashboards surface calls logged, emails sent, and opportunities updated, but enterprise value lives in closed deals, revenue, and durable relationships that take months to appear. So which is the CRM really measuring?' },
      { title: 'Diagnosis: activity vs value',
        body: 'The current signals mostly track <strong>observable activity</strong>, a weak proxy for outcomes. This is <strong>Goodhart\'s Law</strong> in action: once "calls logged" becomes the target, reps optimize the number, not the deal. Leading indicators (outreach) get mistaken for lagging outcomes (revenue).' },
      { title: 'Frameworks applied',
        body: 'I applied <strong>leading vs lagging indicators</strong>, <strong>proxy-metric risk</strong>, and the <strong>Balanced Scorecard</strong> (Kaplan &amp; Norton) to separate the operational drivers of performance from the outcomes they are meant to predict.' },
      { title: 'The risks if unaddressed',
        body: 'Three strategic risks: <strong>distorted strategy</strong> (the pipeline looks healthy when it is not), <strong>eroded customer relationships</strong> (volume over trust), and a <strong>culture</strong> that rewards visible effort over results.' },
      { title: 'The proposition',
        body: 'Three moves to realign measurement with value: <strong>(1) rebalance toward outcomes</strong> (deal conversion rate, revenue, average deal size, retention); <strong>(2) add pipeline-quality metrics</strong> (qualification scores, probability-weighted value, deal velocity, engaged stakeholders); and <strong>(3) integrate relationship outcomes</strong> (retention, expansion revenue, satisfaction).' }
    ]
  },

'netflix': {
    category: 'Growth & Market Strategy',
    title: "Netflix's Gaming Gambit",
    summary: "Netflix moved into mobile and cloud gaming not to win the console wars, but to deepen engagement and harden retention against churn. I analyzed whether gaming is a real moat or an expensive feature.",
    meta: 'Subscription engagement, retention economics',
    sections: [
      { title: 'The situation', body: 'Netflix saturated its core market and faced its first subscriber decline in over a decade as password sharing and streaming competition bit. Gaming, launched bundled into the existing subscription at no extra cost, was framed as the next engagement frontier after film and TV.' },
      { title: 'The strategic question', body: 'Is gaming a <strong>retention engine</strong> that lowers churn on the core subscription, or a distraction from the content flywheel that funds everything? I treated this as an engagement bet, not a games-revenue bet.' },
      { title: 'Analysis: the real job to be done', body: 'Using <strong>Jobs to be Done</strong>, the subscriber hires Netflix to fill discretionary time without friction. Games extend share of that time and, critically, attack churn: every incremental engaged hour reduces the probability a member cancels. The unit economics work only if gaming lifts retention enough to cover studio and licensing spend, since there is no direct game revenue.' },
      { title: 'The moat question', body: 'Netflix has distribution and IP (Stranger Things, Squid Game) but no native gaming moat: no controller install base, no developer ecosystem, no cloud-latency advantage versus Microsoft, Sony, or Valve. Bundling is the edge, not gameplay, so the defensibility lives in the subscription, not the games.' },
      { title: 'Tradeoffs', body: 'Gaming competes for capital and leadership attention against the content slate that is the proven retention driver. Cloud gaming adds heavy infrastructure cost and latency risk; mobile-first keeps spend disciplined but caps the ambition to casual play, where engagement-per-dollar is uncertain.' },
      { title: 'My recommendation', body: 'I would keep gaming <strong>bundled, mobile-first, and IP-led</strong>, instrumented against a single north-star metric: churn reduction among players versus non-players. Greenlight expensive cloud gaming only after that retention lift is proven, and treat licensed IP games as a marketing flywheel for the shows rather than a standalone P&L.' }
    ]
  },
  'spotify': {
    category: 'Growth & Market Strategy',
    title: "Spotify's Podcast Pivot",
    summary: "Spotify spent over a billion dollars buying podcast studios and exclusives to escape the structural margin trap of music streaming. I analyzed whether owning audio could break its dependence on the labels.",
    meta: 'Gross margin, platform economics',
    sections: [
      { title: 'The situation', body: 'Spotify built the largest music streaming business in the world but on rented land: roughly two-thirds of revenue flows back to rights holders, leaving thin gross margin and almost no pricing power against Universal, Sony, and Warner. Podcasts (Gimlet, Anchor, The Ringer, the Joe Rogan exclusive) were the escape route.' },
      { title: 'The strategic question', body: 'Can Spotify shift from a <strong>pass-through music utility</strong> into a higher-margin audio platform it actually owns, and does that change its leverage over the labels?' },
      { title: 'Analysis: Porter and the margin trap', body: 'Through <strong>Porter</strong>, the music business has brutal supplier power: the labels own the catalog Spotify cannot live without. Owning podcast content sidesteps that supplier entirely, so each podcast minute carries far better economics than a streamed song, and it opens ad-supported monetization beyond the music subscription.' },
      { title: 'The platform play', body: 'The deeper bet is a <strong>two-sided audio platform</strong>: tools like Anchor lower creator friction, exclusives buy reach, and an ad marketplace monetizes attention the labels never touched. If podcasts and audiobooks pull listening time off music, blended gross margin rises and Spotify gains negotiating leverage in the next label renewal.' },
      { title: 'Tradeoffs', body: 'Big upfront content and acquisition spend pressures near-term profitability, and expensive exclusives can underdeliver on the listening hours they were meant to move. Exclusivity also fights discoverability, while non-exclusive licensing builds the catalog faster but hands rivals the same content.' },
      { title: 'My takeaway', body: 'The pivot is sound because it attacks the right constraint, <strong>supplier power</strong>, not just growth. I would de-emphasize costly exclusivity in favor of broad creator tooling plus an ad and audiobook marketplace, judging success by gross-margin expansion and the share of listening hours that sit outside label-controlled music.' }
    ]
  },
  'adobe-figma': {
    category: 'Competitive Strategy',
    title: "Adobe × Figma",
    summary: "Adobe agreed to pay roughly 20 billion dollars for Figma, then walked away under regulatory pressure. I analyzed why a profitable incumbent would pay that much for a smaller rival, and what the collapse left exposed.",
    meta: 'Platform shift, build vs buy vs neutralize',
    sections: [
      { title: 'The situation', body: 'Figma reinvented design as a multiplayer, browser-native, collaborative workflow and won the next generation of product teams, exactly the segment Adobe XD was built to defend and failed to hold. Adobe responded with the largest acquisition offer in its history.' },
      { title: 'The strategic question', body: 'Was this <strong>build, buy, or neutralize</strong>? Adobe had tried to build (XD) and lost, so the real question was whether to buy the platform shift or watch it erode the Creative Cloud franchise from the collaborative layer up.' },
      { title: 'Analysis: the moat under attack', body: 'Adobe&apos;s moat is workflow lock-in across creative professionals, but Figma attacked from a different vector: <strong>collaboration as the product</strong>, with network effects that compound as whole teams adopt a shared file. That is a classic disruption-from-below pattern that incumbents rarely out-feature, which is why buying looked cheaper than fighting.' },
      { title: 'Why the price made sense to Adobe', body: 'The premium was less about Figma&apos;s revenue and more about <strong>neutralizing a category-defining threat</strong> and acquiring the collaborative architecture XD never delivered. For an incumbent, removing the disruptor and absorbing its network effect can be worth far more than the target&apos;s standalone economics.' },
      { title: 'Tradeoffs and the collapse', body: 'Regulators in the UK and EU read the deal the same way the market did: as eliminating a direct competitor, and the acquisition was abandoned with a one-billion-dollar breakup fee. That left Adobe facing the original problem with a stronger, better-capitalized, now-independent Figma.' },
      { title: 'My takeaway', body: 'When a rival is winning on a structural shift you cannot copy, acquisition is rational but increasingly <strong>blocked by antitrust</strong>, so it is not a reliable strategy. My recommendation for Adobe post-collapse: compete on the shift directly, rebuild collaboration as a first-class primitive rather than a feature, and defend the professional workflows where its real lock-in still holds.' }
    ]
  },
  'zara': {
    category: 'Competitive Strategy',
    title: "Zara vs Shein",
    summary: "Zara perfected fast fashion with a vertically integrated, store-led model; Shein went ultra-fast and data-native, designing to real-time demand. I analyzed the speed-versus-circularity collision reshaping the category.",
    meta: 'Vertical integration, data-driven supply chains',
    sections: [
      { title: 'The situation', body: 'Inditex built Zara on speed-to-shelf: nearshore production, small batches, and frequent drops that turn the store into a live demand sensor. Shein compressed that cycle further with an on-demand, micro-batch, digitally-native model that tests thousands of styles a week and scales only what sells.' },
      { title: 'The strategic question', body: 'Is Zara&apos;s advantage, <strong>fast fashion</strong>, structurally undercut by Shein&apos;s <strong>ultra-fast, data-driven</strong> model, and does the rising cost of sustainability reset who wins?' },
      { title: 'Analysis: two operating models', body: 'Through a <strong>value-chain</strong> lens, Zara optimizes for speed plus brand and physical retail experience, carrying inventory risk but capturing full-price sell-through. Shein pushes inventory risk almost to zero with real-time demand signals and a long tail of suppliers, trading brand and store experience for price and assortment velocity.' },
      { title: 'The moat comparison', body: 'Zara&apos;s moat is integrated logistics, brand equity, and prime retail real estate; Shein&apos;s is a <strong>data and supplier-network flywheel</strong> that gets sharper with every click. Shein wins on price and newness; Zara wins on quality perception, immediacy of physical retail, and a brand that can credibly move toward circularity.' },
      { title: 'Tradeoffs: speed vs circularity', body: 'Ultra-fast volume collides head-on with sustainability: regulatory scrutiny, import-tariff exposure, and consumer backlash on waste are mounting against the disposable model. Circularity (resale, recycled inputs, durability) raises cost and slows the cycle, the opposite of what made ultra-fast cheap.' },
      { title: 'My recommendation', body: 'For Inditex I would not race Shein to the bottom on price; I would lean into <strong>brand plus circularity as differentiation</strong>, using the integrated supply chain to lead on resale, recycled materials, and durable quality. Regulation is converting sustainability from a cost into a moat, and Zara is better positioned than a pure ultra-fast player to own that ground.' }
    ]
  },
  'amazon': {
    category: 'Org Design & Agile',
    title: "Amazon Two-Pizza Teams",
    summary: "Amazon kept teams small enough to feed with two pizzas to preserve speed and ownership as it scaled. I analyzed why constraining team size is really a bet on autonomy, interfaces, and accountability.",
    meta: 'Autonomy, ownership, organizational scaling',
    sections: [
      { title: 'The situation', body: 'As Amazon scaled, coordination overhead threatened to slow the very velocity that built it. The response was structural: keep teams small (the two-pizza rule), give each end-to-end ownership of a service, and let them ship independently.' },
      { title: 'The strategic question', body: 'How do you preserve <strong>startup-speed autonomy</strong> inside a large organization without descending into coordination chaos? Small teams are the visible rule; the real design problem is the interfaces between them.' },
      { title: 'Analysis: communication cost and ownership', body: 'This is <strong>Conway&apos;s Law</strong> turned into strategy. Communication links grow combinatorially with team size, so capping headcount caps overhead, and pairing it with single-threaded ownership means one team owns a problem end to end, with clear accountability and no diffusion of responsibility.' },
      { title: 'Why it works: APIs as contracts', body: 'Small teams only scale if they integrate through <strong>well-defined service interfaces</strong> rather than meetings. The famous API-mandate is the other half of the model: teams stay autonomous because they consume each other&apos;s services through hardened contracts, which is also what enabled AWS to become a product.' },
      { title: 'Tradeoffs', body: 'Autonomy risks duplicated effort, fragmented user experience, and local optimization that misses the global picture. It demands real engineering maturity (services, ownership, on-call) and strong mechanisms, leadership principles, narratives, metrics, to keep many small teams pointed the same way.' },
      { title: 'My takeaway', body: 'Team size is not the lesson; the lesson is <strong>autonomy bounded by clear interfaces and single-threaded ownership</strong>. I would adopt two-pizza teams only alongside the contracts and accountability that make them safe, otherwise small teams just produce small silos.' }
    ]
  },
  'ing': {
    category: 'Org Design & Agile',
    title: "ING Agile Banking",
    summary: "ING restructured its retail bank into squads, tribes, and chapters, importing the Spotify model into a regulated incumbent. I analyzed whether an agile operating model can survive compliance, legacy systems, and scale.",
    meta: 'Operating-model transformation, regulated industry',
    sections: [
      { title: 'The situation', body: 'Facing digital-native competition and rising customer expectations, ING reorganized its headquarters from traditional departments into <strong>squads</strong> (small cross-functional teams), <strong>tribes</strong> (collections of squads on a domain), and <strong>chapters</strong> (functional skill lines), explicitly borrowing the Spotify model.' },
      { title: 'The strategic question', body: 'Can an agile operating model built for a software company work inside a <strong>regulated, legacy-heavy bank</strong>, where the cost of a mistake is regulatory, not just a rolled-back release?' },
      { title: 'Analysis: structure follows strategy', body: 'The bet is that customer experience is now the competitive battleground, so the org must be reshaped around customer journeys, not banking functions. Cross-functional squads collapse hand-offs between product, IT, and operations; chapters preserve deep expertise and consistent standards so autonomy does not fragment quality, a deliberate answer to <strong>Conway&apos;s Law</strong>.' },
      { title: 'Why banking is harder than streaming', body: 'A music app can ship and roll back; a bank carries <strong>compliance, risk, and legacy core systems</strong> that resist independent deployment. Squad autonomy has to coexist with governance, audit trails, and shared platforms, which is exactly where naive copies of the Spotify model break.' },
      { title: 'Tradeoffs', body: 'The model trades managerial control and predictability for speed and ownership, and demands a hard cultural shift from hierarchy to trust. Copying labels (squads, tribes) without the underlying autonomy, funding model, and platform investment yields agile theater rather than agile outcomes.' },
      { title: 'My recommendation', body: 'I would treat the structure as <strong>necessary but not sufficient</strong>: pair it with continuous delivery on modernized platforms, embedded risk and compliance inside squads rather than as a downstream gate, and leadership behavior change. Agile in a bank succeeds only when autonomy is matched by engineering and governance maturity, not when the org chart is merely relabeled.' }
    ]
  },
  'toyota': {
    category: 'Operations & Supply Chain',
    title: 'Toyota Semiconductor Resilience',
    summary: 'Toyota weathered the 2021 chip shortage better than most rivals because it had already turned a past disaster into a standing policy. The lesson is not "hold more inventory," it is "know exactly which parts to hold more inventory of."',
    meta: 'Toyota, 2011 to 2021',
    sections: [
      { title: 'The situation', body: 'When the global semiconductor shortage hit the auto industry in 2021, most automakers idled plants and slashed forecasts. Toyota, the company most associated with <strong>just-in-time</strong>, kept building longer than peers because it was sitting on a deliberate buffer of critical chips.' },
      { title: 'The core question', body: 'How does a company famous for ruthless inventory minimization end up holding the right safety stock at exactly the right time? The answer reframes the whole JIT debate.' },
      { title: 'Analysis: just-in-time vs just-in-case', body: 'After the 2011 Tohoku earthquake exposed Toyota&apos;s fragility in semiconductors, it ran a real <strong>root-cause</strong> review and amended its Business Continuity Plan to require suppliers to stockpile two to six months of chips for parts with long lead times and few alternate sources. This was not a retreat from JIT; it was a <strong>selective</strong> shift to just-in-case for a narrow class of high-risk components.' },
      { title: 'Tradeoffs', body: 'Carrying buffer stock ties up cash and warehouse space and offends lean orthodoxy, so the discipline is in <strong>segmentation</strong>: apply just-in-case only where lead time is long, substitutes are scarce, and a stockout halts the line. Treating every part this way would have erased Toyota&apos;s cost advantage.' },
      { title: 'My takeaway', body: 'The durable insight is that resilience is a <strong>portfolio decision</strong>, not a global setting. As a PM I would map every input on two axes, supply concentration and stockout cost, and spend buffer capital only in the top-right quadrant, exactly as Toyota institutionalized after learning the hard way in 2011.' }
    ]
  },
  'tsmc': {
    category: 'Operations & Supply Chain',
    title: 'TSMC Geographic Expansion',
    summary: 'TSMC builds the most advanced chips in the world almost entirely on one island, which is simultaneously its greatest efficiency and the single largest concentration risk in the global economy.',
    meta: 'TSMC, Arizona / Japan / Germany buildout',
    sections: [
      { title: 'The situation', body: 'TSMC manufactures the overwhelming majority of the world&apos;s leading-edge logic chips, and historically nearly all of that capacity sat in Taiwan. Customer and government pressure has pushed it to open fabs in Arizona, Kumamoto in Japan, and Dresden in Germany.' },
      { title: 'The core question', body: 'Is geographic diversification actually de-risking the supply chain, or is it paying a large premium to relocate a problem that the underlying ecosystem will not let you move?' },
      { title: 'Analysis: concentration risk vs cluster economics', body: 'The Taiwan cluster is cheap and fast because the talent, suppliers, and tacit process knowledge are all co-located, which is also the textbook definition of <strong>concentration risk</strong>: one geopolitical or seismic event threatens global supply. Overseas fabs reduce that single point of failure but inherit higher costs, thinner local talent pools, and a generation-lagging node mix.' },
      { title: 'Tradeoffs', body: 'Customers and governments are effectively buying <strong>insurance</strong> through subsidies, accepting higher unit cost and slower ramps in exchange for sovereignty and continuity of supply. The hard truth is that the most advanced R&D and leading nodes remain anchored in Taiwan, so diversification today is partial redundancy, not true independence.' },
      { title: 'My recommendation', body: 'I would frame this to stakeholders as <strong>resilience as a paid option</strong>, not a free lunch: the premium is justified for a strategic input, but only if you measure progress by node parity and ecosystem depth abroad, not by ribbon-cuttings. Until a self-sufficient supplier ecosystem exists outside Taiwan, the concentration risk is mitigated, not solved.' }
    ]
  },
  'ikea': {
    category: 'Operations & Supply Chain',
    title: 'IKEA Red Sea Disruption',
    summary: 'When Red Sea attacks forced ships to reroute around Africa, IKEA absorbed weeks of added transit without the empty-shelf panic that hit lighter-footprint competitors. Buffer inventory and a flat, predictable assortment did the quiet work.',
    meta: 'IKEA, Red Sea / Suez disruption',
    sections: [
      { title: 'The situation', body: 'Attacks on shipping in the Red Sea pushed carriers to divert around the Cape of Good Hope, adding roughly ten to fourteen days of transit and squeezing capacity on the Asia-to-Europe lane that IKEA depends on heavily.' },
      { title: 'The core question', body: 'How does a high-volume, ocean-dependent retailer keep shelves stocked when its primary maritime corridor effectively closes overnight?' },
      { title: 'Analysis: resilience through redundancy and buffers', body: 'IKEA&apos;s exposure is structural, since flat-pack furniture is bulky, low-margin per cubic meter, and almost entirely moved by sea, so air freight is not a realistic fallback. Its <strong>resilience</strong> came from <strong>redundancy</strong>: large distribution-center buffer stock, multiple sourcing regions, and reallocating inventory across markets to cushion the lead-time shock rather than chase it in real time.' },
      { title: 'Tradeoffs', body: 'The same buffer inventory that smooths a disruption is a drag on working capital and warehouse cost in calm periods, which is the recurring <strong>efficiency vs resilience</strong> tension. IKEA can afford it because a relatively stable, slow-moving assortment makes its demand far more forecastable than fashion or electronics, so safety stock rarely becomes dead stock.' },
      { title: 'My takeaway', body: 'The transferable lesson is that <strong>product architecture determines supply-chain options</strong>: predictable, long-lifecycle SKUs let you pre-position inventory and treat a lane closure as a delay rather than a crisis. I would pair that with diversified port and routing flexibility so the buffer buys time to reroute instead of just covering the gap.' }
    ]
  },
  'target': {
    category: 'Operations & Supply Chain',
    title: 'Target Inventory Collapse',
    summary: 'Target went from chasing stockouts to drowning in the wrong inventory in under a year. It is a textbook bullwhip story, and a warning about reacting to a demand signal that has already reversed.',
    meta: 'Target, 2022 markdown crisis',
    sections: [
      { title: 'The situation', body: 'In 2022 Target was caught with a glut of bulky, discretionary goods like furniture and home decor just as consumer demand swung back toward services and essentials, forcing aggressive markdowns and order cancellations that crushed margins.' },
      { title: 'The core question', body: 'Was this a one-off bad bet, or a predictable failure mode of how the company translated pandemic demand signals into purchase orders?' },
      { title: 'Analysis: the bullwhip effect', body: 'This is a clean <strong>bullwhip effect</strong>: pandemic surge plus stockout fear plus long Asia lead times led Target to over-order to protect availability, so when demand normalized the in-transit pipeline kept arriving against collapsing sell-through. Small swings in end demand were amplified into large swings in orders because the planning system anchored on the most recent, abnormal trend.' },
      { title: 'Tradeoffs', body: 'The instinct to never miss a sale pushes buyers toward more inventory and earlier orders, but in long-lead, discretionary categories that same instinct converts a demand softening into a <strong>markdown</strong> liability. The real tension is responsiveness vs commitment: you cannot un-order goods that are already on the water.' },
      { title: 'My recommendation', body: 'Fix the demand-planning loop, not the buyers: shorten the signal by weighting leading indicators and category-level mix shifts over trailing sales, and add <strong>postponement</strong> and shorter-lead sourcing for discretionary lines so commitments are smaller and later. I would also separate planning for stable essentials from volatile discretionary goods, because one forecasting policy cannot serve both.' }
    ]
  },
  'boeing': {
    category: 'Operations & Supply Chain',
    title: 'Boeing 737 MAX',
    summary: 'The 737 MAX crisis was not fundamentally a software bug; it was the predictable output of an organization that let schedule and cost pressure quietly override its own safety culture. MCAS was the symptom.',
    meta: 'Boeing 737 MAX, 2018 to 2019',
    sections: [
      { title: 'The situation', body: 'To answer the Airbus A320neo quickly and cheaply, Boeing re-engined an aging airframe and added <strong>MCAS</strong>, a flight-control system that, fed by a single sensor and underexplained to pilots, drove two crashes and a worldwide grounding.' },
      { title: 'The core question', body: 'Why would a company whose entire brand is safety ship a system with a single point of failure and minimal pilot disclosure? The technical defect is downstream of that question.' },
      { title: 'Analysis: safety culture and regulatory capture', body: 'A proper <strong>root-cause</strong> analysis lands on organization, not code: a commercial mandate to avoid pilot retraining created pressure to keep MCAS invisible, while the FAA&apos;s reliance on Boeing-employed delegates to self-certify reflects <strong>regulatory capture</strong>. The single-sensor design was a decision a healthy <strong>safety culture</strong> would have escalated and blocked.' },
      { title: 'Tradeoffs', body: 'The competitive logic was real: matching Airbus on timeline and avoiding costly simulator training were worth billions in orders, so the incentives all pointed toward minimizing the change. The flaw was treating safety review as a constraint to be managed around rather than an authority that can stop the program.' },
      { title: 'My takeaway', body: 'Organizational <strong>resilience</strong> depends on whoever owns safety having real veto power that schedule pressure cannot override, plus independent oversight that is not paid by the entity it regulates. As a PM I read this as a governance failure: when the function meant to say no reports into the function paid to ship, the no never happens.' }
    ]
  },
  'spacex': {
    category: 'Org Design & Agile',
    title: 'SpaceX Hardware Development',
    summary: 'SpaceX treated rockets like software, shipping, failing, and iterating in public while traditional aerospace optimized for never failing at all. The interesting part is when each culture is actually right.',
    meta: 'SpaceX, iterative hardware development',
    sections: [
      { title: 'The situation', body: 'SpaceX develops vehicles like Starship by building, flying, and intentionally pushing prototypes to failure, gathering flight data fast rather than perfecting designs on paper first. Legacy aerospace primes optimize for exhaustive analysis and a successful first flight.' },
      { title: 'The core question', body: 'When does a fast, <strong>fail-forward</strong> iteration loop beat traditional aerospace&apos;s analyze-everything rigor, and where would copying it be reckless?' },
      { title: 'Analysis: iteration speed vs cost of failure', body: 'This is an <strong>agile vs waterfall</strong> bet applied to hardware: SpaceX shortens the build-test-learn loop so each failure buys real data cheaply, which works because vertical integration and in-house manufacturing make a new prototype fast and relatively cheap to produce. The whole model hinges on driving the <strong>cost and cycle time of one iteration</strong> low enough that learning by failing is rational.' },
      { title: 'Tradeoffs', body: 'Fail-forward is powerful when failures are uncrewed, cheap to replace, and produce information you cannot get by analysis, but it is irresponsible when a failure is catastrophic, irreversible, or kills people. That is exactly why SpaceX still runs rigorous, conservative processes for <strong>crewed</strong> Dragon flights: the iteration culture is scoped to where failure is affordable.' },
      { title: 'My takeaway', body: 'The transferable principle is not "move fast and blow things up," it is <strong>match your process to your cost of failure and speed of iteration</strong>. As a PM I would push hard for cheap, fast loops in low-stakes domains and deliberately switch to high-rigor, low-iteration discipline the moment failures become irreversible or unsafe.' }
    ]
  },
  'lyft': {
    category: 'UX Design & Testing',
    title: 'Lyft Redesign',
    summary: 'A UX redesign reimagining the Lyft rider experience, from the moment intent forms to the moment the ride arrives.',
    meta: 'Self-directed UX case study',
    sections: [
      { title: 'The problem', body: 'Ride-hailing interfaces carry a lot of cognitive load at exactly the moments riders are most stressed or in motion. I wanted to reexamine where the existing flow added friction: confirming pickup, understanding wait and cost, and feeling confident the right car was coming.' },
      { title: "Who it's for", body: 'I centered the work on everyday riders booking on the go, including first-time users and people in unfamiliar areas. My goal was a flow that felt obvious without a learning curve, on a small screen and often one-handed.' },
      { title: 'Research & discovery', body: 'My approach was to map the end-to-end rider journey, audit the current screens heuristically, and surface the highest-friction steps. I explored where information hierarchy, defaults, and confirmation moments could be tightened to reduce hesitation.' },
      { title: 'The design', body: 'I focused on a cleaner intent-to-confirmation path: clearer pickup and destination entry, more legible pricing and ETA, and stronger feedback during matching and arrival. Each decision aimed to remove a step or a doubt rather than add features.' },
      { title: "What I'd measure", body: 'I would treat <strong>time-to-confident-booking</strong> and drop-off between request and confirmation as the core signals, alongside task-success and error rates in usability testing. I would also watch perceived clarity through post-task feedback rather than relying on speed alone.' }
    ]
  },
  'hm': {
    category: 'UX Design & Testing',
    title: 'H&M',
    summary: 'A UX case study for the H&M e-commerce shopping experience, focused on turning browsing into confident purchase decisions.',
    meta: 'Self-directed UX case study',
    sections: [
      { title: 'The problem', body: 'Fashion e-commerce asks shoppers to judge fit, style, and value from images and copy alone. I looked at where the H&M shopping flow created doubt: discovery, product understanding, and the path from cart to checkout.' },
      { title: "Who it's for", body: 'I framed the work around browsing-led shoppers who arrive without a fixed item in mind, as well as intent-driven shoppers hunting for something specific. Both need to move from interest to confidence quickly.' },
      { title: 'Research & discovery', body: 'My approach was to walk the core journeys, audit product detail and filtering experiences, and note where shoppers would stall or second-guess. I explored how navigation, filtering, and product information shaped confidence to buy.' },
      { title: 'The design', body: 'I prioritized clearer product information, more useful filtering and sorting, and a checkout path with fewer surprises. The intent was to make fit, price, and availability easier to assess before commitment.' },
      { title: "What I'd measure", body: 'I would look at <strong>add-to-cart and checkout completion</strong> as outcome signals, with task-success and time-on-task from usability testing as diagnostics. I would also track where users abandon to learn whether the blocker is information, trust, or flow.' }
    ]
  },
  'wilson': {
    category: 'UX Design & Testing',
    title: 'Wilson',
    summary: 'A UX design and usability case study for a Wilson sports mobile app, connecting gear, play, and improvement in one place.',
    meta: 'Self-directed UX case study',
    sections: [
      { title: 'The problem', body: 'Sports brands often separate the product from the player journey, so engagement ends at purchase. I explored how a mobile app could keep athletes connected to their gear, their progress, and the brand beyond the transaction.' },
      { title: "Who it's for", body: 'I centered the work on recreational and aspiring competitive athletes who care about both equipment and improvement. The aim was an experience that felt useful to a weekend player and a serious one alike.' },
      { title: 'Research & discovery', body: 'My approach was to define the core jobs an athlete-facing app should serve, then test concept and structure against them. I explored navigation and feature priority through usability sessions to see what genuinely earned a place on screen.' },
      { title: 'The design', body: 'I focused on a clear information architecture and a few well-defined entry points rather than a crowded feature set. Each decision aimed to make the most-used actions fast and the value of the app obvious on first open.' },
      { title: "What I'd measure", body: 'I would treat <strong>repeat engagement and task-success in usability testing</strong> as my primary signals, plus completion rates on key flows. I would also gather qualitative feedback on whether the app felt worth returning to.' }
    ]
  },
  'evenza': {
    category: 'UX Design & Testing',
    title: 'Evenza',
    summary: 'UX design for Evenza, an events product that helps people discover, decide on, and attend the right events.',
    meta: 'Self-directed UX case study',
    sections: [
      { title: 'The problem', body: 'Event discovery is easy to start and hard to finish: people find options but stall on choosing, coordinating, and committing. I framed Evenza around closing that gap between interest and attendance.' },
      { title: "Who it's for", body: 'I designed for people deciding how to spend limited free time, often alongside friends. They need quick ways to evaluate options and a low-friction path from finding an event to actually going.' },
      { title: 'Research & discovery', body: 'My approach was to map the discover-to-attend journey and identify where decisions break down: too many options, unclear details, or coordination overhead. I explored how surfacing the right information at the right moment could ease that choice.' },
      { title: 'The design', body: 'I focused on a discovery experience that filters down to relevant options quickly and an event view that answers the practical questions up front. The intent was to make committing to an event feel simple rather than effortful.' },
      { title: "What I'd measure", body: 'I would track the <strong>discover-to-save-to-attend funnel</strong> as my core measure of whether the product moves people toward action. In testing I would watch task-success on finding and committing to an event, plus where users drop off.' }
    ]
  },
  'tripmate': {
    category: 'UX Design & Testing',
    title: 'TripMate',
    summary: 'UX design for TripMate, a travel-companion app that supports travelers across planning and the trip itself.',
    meta: 'Self-directed UX case study',
    sections: [
      { title: 'The problem', body: 'Travel tools tend to be strong at planning and weak in the moment, leaving travelers juggling apps once the trip starts. I framed TripMate around supporting the whole arc, from planning to on-the-ground decisions.' },
      { title: "Who it's for", body: 'I designed for travelers who want structure without rigidity, including those traveling in groups who need to stay aligned. The aim was something useful both at the desk while planning and on a phone mid-trip.' },
      { title: 'Research & discovery', body: 'My approach was to separate the distinct needs of the planning phase and the in-trip phase, then design for both without overloading either. I explored how itinerary, coordination, and quick reference could coexist cleanly.' },
      { title: 'The design', body: 'I focused on a clear split between planning and live trip modes, with the most time-sensitive information easiest to reach on the go. Each decision aimed to reduce app-switching and keep the next step obvious.' },
      { title: "What I'd measure", body: 'I would look at <strong>active use during a trip, not just before it</strong>, as the signal that the companion role is working. In usability testing I would measure task-success on both planning and in-trip flows and gather feedback on perceived helpfulness.' }
    ]
  },
  'mbta': {
    category: 'Growth & Market Strategy',
    title: 'MBTA Student Pass',
    summary: 'A growth and market strategy case for a discounted student transit pass for the MBTA in Boston.',
    meta: 'Product strategy case study',
    sections: [
      { title: 'The problem', body: 'Students are a high-volume, price-sensitive segment whose ridership is shaped heavily by cost and convenience. I framed the work around whether a discounted student pass could grow sustainable ridership without simply giving away revenue.' },
      { title: "Who it's for", body: 'The primary audience is Boston-area students balancing tight budgets against frequent transit needs, with the MBTA as the stakeholder weighing growth against subsidy cost. I treated it as a two-sided strategy serving both.' },
      { title: 'Research & discovery', body: 'My approach was to size the student segment, examine pricing and adoption barriers, and benchmark how comparable transit systems structure student programs. I explored where a discount drives net-new ridership versus where it discounts existing trips.' },
      { title: 'The strategy', body: 'I framed a pass concept around the trade-off between adoption, per-ride economics, and long-term rider habit formation. The intent was a structure that lowers the barrier for students while protecting the agency on unit economics.' },
      { title: "What I'd measure", body: 'I would define success through <strong>net-new ridership and student adoption rate</strong> rather than raw pass sales, paired with revenue-per-rider to guard against cannibalization. I would also watch retention into non-discounted ridership over time.' }
    ]
  },
  'resmail': {
    category: 'Operations & Supply Chain',
    title: 'ResMail Processing Crisis',
    summary: 'A product and operations case study resolving a package and mail processing crisis under acute volume strain.',
    meta: 'Operations case study',
    sections: [
      { title: 'The problem', body: 'A mail and package operation was overwhelmed: volume outpaced processing capacity, creating backlogs, delays, and frustrated recipients. I framed the work around diagnosing the bottleneck and stabilizing throughput before redesigning the process.' },
      { title: "Who it's for", body: 'The stakeholders were the operations staff doing the processing and the recipients waiting on time-sensitive packages. I balanced relieving immediate pressure on staff against restoring a reliable experience for recipients.' },
      { title: 'Research & discovery', body: 'My approach was to map the intake-to-pickup flow, locate where work piled up, and separate symptoms from root cause. I explored whether the constraint was intake, sorting, notification, or pickup, since each implies a different fix.' },
      { title: 'The solution', body: 'I framed both a short-term triage to clear the backlog and a longer-term process change to keep capacity ahead of demand. The intent was to fix flow at the true constraint rather than add effort everywhere at once.' },
      { title: "What I'd measure", body: 'I would track <strong>processing throughput and backlog size against incoming volume</strong> as the core health signals, plus time from arrival to recipient pickup. I would also watch staff workload to confirm the fix is sustainable, not just fast.' }
    ]
  },
  'move-in': {
    category: 'Operations & Supply Chain',
    title: 'Move-In Weekend Coordination',
    summary: 'Operational coordination for a university residence move-in weekend, a high-stakes event compressed into a few hours.',
    meta: 'Operations case study',
    sections: [
      { title: 'The problem', body: 'Move-in concentrates thousands of arrivals, vehicles, and volunteers into a narrow window, where small coordination gaps cascade into long waits and gridlock. I framed the work around orchestrating people, space, and timing under a hard deadline.' },
      { title: "Who it's for", body: 'The work serves arriving students and families who want a smooth first day, alongside staff and volunteers running the operation. My aim was to reduce chaos for both the served and the serving sides.' },
      { title: 'Research & discovery', body: 'My approach was to model the arrival flow, identify likely chokepoints such as parking, unloading, and elevator access, and plan staggering to smooth demand. I explored where scheduling and signage could prevent congestion before it formed.' },
      { title: 'The solution', body: 'I framed a coordinated plan covering arrival scheduling, staffing at chokepoints, and clear wayfinding so each family always knew the next step. The intent was to spread load over time and keep movement continuous rather than bursty.' },
      { title: "What I'd measure", body: 'I would treat <strong>average wait and unload time, plus peak congestion at chokepoints</strong> as the operational signals of success. I would also gather family and volunteer feedback to capture experience quality, not just throughput.' }
    ]
  },

};
