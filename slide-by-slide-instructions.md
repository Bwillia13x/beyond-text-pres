Below is a paste-ready **master prompt** for Claude Opus to begin building the red-teaming deck inside your existing GitHub/repo design template.

## Claude Opus build prompt

You are working inside an existing presentation/design repo that will be **overwritten and rebuilt** into a new presentation titled:

**Red-Teaming Assignments: Designing for Valid Learning Evidence in the AI Era**

Your job is to use the repo’s existing visual/design system as the starting template, then replace the current presentation content with a new **18-slide** presentation based on the structure below.

This is **not** a rough outline task.
You are to begin the actual creation/build process inside the repo.

## First, do this before editing anything

1. Inspect the repo structure and determine:

   * where slide content currently lives
   * how slides are represented
   * where theme tokens, layout components, typography, spacing, backgrounds, and reusable visual primitives are defined
   * whether there are existing speaker notes, metadata, or content JSON/TS/MD files
2. Preserve the **design language and component system** unless something is clearly broken.
3. Overwrite the current presentation content with the red-teaming presentation.
4. Keep the build elegant, minimal, and intellectually serious.
5. Do not turn this into a flashy AI-tech marketing deck.

## Design goals

The final presentation should feel:

* premium
* intellectually rigorous
* calm, dark-academic / strategy / research oriented
* visually clean and modern
* serious enough for a university conference audience
* diagram-first where useful
* not overloaded with text
* not gimmicky
* not corporate-cheesy

The audience is:

* university faculty
* educational developers
* academic leaders
* postsecondary teaching/learning professionals

Tone:

* academically serious
* plain-English where possible
* strategically sharp
* non-alarmist
* anti-hype
* but still forceful and unsettling where needed

## Core thesis of the presentation

We have entered a new era in postsecondary education because frontier AI is no longer merely a text generator at the edge of academic work. It is increasingly a persistent, tool-using, workflow-shaping environment capable of completing substantial portions of the digital artifact production and workflow execution that universities have historically treated as evidence of student competence. Therefore, artifact-only inference is weakening, and assignments must be stress-tested — red-teamed — against current AI workflow conditions.

## Build constraints

* Stick to the exact slide order below for now.
* Do not add speculative filler slides.
* Do not add a “wow AI” spectacle slide.
* Do not add a separate future-forecast slide.
* Keep the opening compressed and disciplined.
* Use diagrams, layouts, callouts, and visual hierarchy to reduce wall-of-text density.
* Speaker-note-level nuance can be implied in structure, but slides themselves should remain concise.

## Required output from you

1. Inspect repo and summarize how the current deck is structured.
2. Map each of the 18 slides below to the repo’s slide implementation format.
3. Build/replace the presentation slide-by-slide.
4. Where helpful, create supporting diagrams, layout blocks, iconography, or minimal visual systems directly in the repo.
5. If content files are separate from slide components, update both appropriately.
6. At the end, provide:

   * final file tree of changed files
   * concise summary of what you changed
   * any design decisions you made
   * any unresolved questions only if absolutely necessary

## Important content rule

Do not invent a different thesis.
Do not drift into generic “AI in education” content.
Do not moralize about cheating.
Do not overuse benchmark charts or product screenshots.
This deck is about the **assessment consequences of frontier AI capability and workflow compression**.

# Slide-by-slide build instructions

## Slide 1 — Title

Title:
**Red-Teaming Assignments: Designing for Valid Learning Evidence in the AI Era**

Purpose:
Open with seriousness and clarity. This should feel like the beginning of a research-informed conference talk, not a workshop handout.

On-slide content:

* title
* subtitle or short kicker optional:
  “Why artifact quality is no longer enough”

Visual direction:

* minimal opening slide
* strong title typography
* subtle background treatment
* no clutter

---

## Slide 2 — Why start with capability?

Title:
**Why begin with capability?**

Core message:
Before discussing policy, integrity, or redesign, the audience must first accept the core premise: frontier AI can already perform a large share of the artifact production and workflow execution that postsecondary education has historically treated as evidence of student competence.

On-slide content:
Use 2–3 short points, not a paragraph:

* Assessment assumptions depend on what systems can now do
* If we understate capability, we understate the problem
* The issue is no longer just AI-generated text

Visual direction:

* clean explanatory slide
* perhaps one left-right structure: “old conversation” vs “required starting point”

---

## Slide 3 — Frontier AI today: models, environments, workflows

Title:
**Frontier AI today: models, environments, workflows**

Core message:
Multiple state-of-the-art systems now converge on a shared pattern:

* stronger reasoning
* multimodality
* tool use
* persistent context
* longer task horizons
* project-based / agentic workflow environments

Include examples at a high level:

* GPT-5.2 / Codex
* Claude Opus 4.6 / Claude Code
* Gemini 3.1 Pro / NotebookLM

Also briefly indicate adjacent ecosystem expansion:

* spreadsheet-native AI
* browser-integrated agents
* project memory
* subagents / skills / automations

Important:
This slide must **not** become a product safari.

Visual direction:

* one disciplined capability map or ecosystem matrix
* perhaps columns: models / environment features / educational relevance

---

## Slide 4 — Why this matters to postsecondary education

Title:
**Why this matters to postsecondary education**

Core message:
Much of postsecondary work is computer-mediated artifact production:

* essays
* policy memos
* literature syntheses
* spreadsheets
* slide decks
* coding tasks
* data analysis
* visuals
* presentations

These systems increasingly operate across all of those task classes.

Key line:
**The real challenge is not just AI-generated text. It is AI-mediated workflow.**

Visual direction:

* one clear translation slide from capability to institutional significance
* avoid too many tiny examples
* show “capability frontier” flowing into “artifact classes universities assess”

---

## Slide 5 — Threshold claim

Title:
**A threshold has been crossed**

Core message:
We have crossed a threshold where frontier AI can now produce or substantially mediate much of the artifact work that higher education has traditionally used as evidence of learning.

Supporting line:
This is not a prevalence claim about every student or every course. It is a threshold claim about what is now practically possible.

Visual direction:

* bold claim slide
* sparse, high-impact
* perhaps one central statement with two short clarifying subpoints

---

## Slide 6 — Illustrative exploit scenario: the multi-syllabus thought experiment

Title:
**Illustrative exploit scenario: the multi-syllabus thought experiment**

Core message:
Introduce a vivid but disciplined thought experiment:
A student externalizes each course into its own persistent AI project on day one.

Important:
Frame this explicitly as:

* an illustrative threshold-case
* not a prevalence claim
* not a tutorial
* not a recommendation

Visual direction:

* begin the exploit sequence
* likely one diagrammatic slide with 4–5 course blocks feeding into AI project environments

---

## Slide 7 — The setup: day-one workflow compression

Title:
**Day-one workflow compression**

Core message:
Each course gets its own persistent project environment.
Student uploads:

* syllabus
* rubric
* LMS materials
* readings
* slides
* exemplar formats

Within each project:

* subagents branch into different functions
* synthesis
* schedule mapping
* deliverable drafting
* revision
* slide/spreadsheet/code support
* deadline tracking

Projects run in parallel across the semester.

Visual direction:
This slide should make strong use of diagramming.
Use the handwritten logic I described:

* Course 1 → subagents A/B/C/D
* Course 2 → subagents A/B/C
* Course 3 → subagents A/B/C
  with parallel arrows / branching structures

This slide is important. Spend time making it visually clear.

---

## Slide 8 — What the exploit demonstrates

Title:
**What the exploit demonstrates**

Core message:
The real shock is not speed alone.
It is the possibility of artifact completion without corresponding understanding.

Use careful phrasing:
Do **not** overclaim that literally all coursework in all settings can be completed perfectly in 1–2 hours.
Instead say something like:

* semester-long artifact production can now be radically compressed
* planning, synthesis, drafting, formatting, and revision can be externalized
* learning is no longer reliably coupled to output quality

Visual direction:

* interpretive slide
* perhaps “what appears” vs “what may actually have happened”
* the emotional/intellectual hinge of the exploit section

---

## Slide 9 — The old inference is breaking

Title:
**The old inference is breaking**

Core message:
For much of modern higher education, the finished artifact functioned as a workable proxy for the understanding behind it.
Under current conditions, that inference weakens.

On-slide framing:
A polished artifact may now reflect:

* deep understanding
* shallow acceptance of AI-generated work
* careful orchestration
* some combination of the above

Visual direction:

* simple inference diagram
* artifact → understanding relationship breaking down

---

## Slide 10 — The verification paradox

Title:
**The verification paradox**

Core message:
AI is often most useful exactly where students are least equipped to verify what it produces.

Plain-English line:
**Capability expands fastest where auditability is weakest.**

This is a conceptually central slide.
It should feel sharp and memorable.

Visual direction:

* one strong concept visualization
* maybe leverage vs auditability crossing or diverging
* keep it elegant

---

## Slide 11 — Red-teaming as the practical response

Title:
**So what can we do? Red-team the assignment.**

Core message:
Red-teaming means stress-testing assignments against current AI workflow conditions to see whether they still produce valid evidence of learning.

This is the pivot from diagnosis to action.

Visual direction:

* a pivot slide
* perhaps “given these dynamics” → “practical response”
* less dense than surrounding slides

---

## Slide 12 — The four red-team questions

Title:
**Four red-team questions**

Required on-slide content:

1. What is the assignment actually trying to make visible?
2. What kind of AI participation is it vulnerable to?
3. Where does the verification paradox appear?
4. What new evidence would restore stronger inference?

Visual direction:

* use strong four-part structure
* this should feel like the beginning of a usable framework
* perhaps quadrant / stack / numbered cards

---

## Slide 13 — Example: generic essay

Title:
**Example: the generic essay**

Use a simple example:
“Write a 1,500-word essay on the impact of AI on higher education.”

Show why it is vulnerable:

* broad
* generic
* highly text-compressible
* weak on situatedness
* easy to produce plausible output without deep understanding

Visual direction:

* before-state slide
* preferably with vulnerability annotations

---

## Slide 14 — Example redesign

Title:
**Minimum-viable redesign**

Redesigned version should show:

* more situatedness
* stakeholder tradeoffs
* one rejected alternative
* uncertainty / confidence awareness
* stronger evidence of reasoning

Use something close to:
“Using three course concepts and two stakeholder perspectives, propose a policy for AI use in first-year assessment at this institution. Include one rejected alternative, justify your tradeoffs, and explain where your confidence is lowest.”

Visual direction:

* side-by-side before / after
* show how little needs to change to significantly improve durability

---

## Slide 15 — Student self-red-teaming

Title:
**A second move: teach students to red-team themselves**

Core message:
A mature AI-era assessment strategy should not only red-team assignments against AI.
It should also teach students to use AI to red-team their own assumptions, evidence, and reasoning under human judgment.

Possible supporting prompts on-slide:

* What assumption is weakest?
* What would be hardest to defend orally?
* What claim is under-evidenced?
* What breaks in a new case?

Visual direction:

* distinguish professor-side and student-side red-teaming
* this should feel developmental, not punitive

---

## Slide 16 — Participant activity

Title:
**Try it: red-team one of your own assignments**

On-slide content:
Short activity prompts:

* What is it really trying to reveal?
* How could AI participate in producing it?
* Where is verification weakest?
* What one redesign move would improve the evidence?

Visual direction:

* workshop slide
* clean and usable
* do not overdesign

---

## Slide 17 — Debrief

Title:
**What patterns emerge?**

Purpose:
Create a debrief slide that helps surface repeated patterns:

* generic prompts
* invisible process
* over-rewarding polish
* weak contextualization
* poor transfer
* weak oral defensibility

Visual direction:

* light structure for discussion
* perhaps 4–6 likely patterns as placeholders

---

## Slide 18 — Final takeaway

Title:
**The goal is not AI-proofing.
The goal is stronger evidence of learning.**

Core message:
Assessment must now respond to changed workflow conditions, not just changed output quality.

Visual direction:

* strong final slide
* minimal
* memorable closing

# Additional build instructions

## Visual consistency

* Keep typography consistent across all slides
* Reuse recurring visual primitives where possible
* Use a restrained palette
* Prefer elegant diagrams over clip-art or screenshots
* Avoid generic AI iconography unless extremely abstract and tasteful

## Content density

* Keep slides concise
* Speaker-note-level nuance should be implied structurally, not dumped onto slides
* Use text sparingly but intelligently

## Diagrams to create if needed

You may create custom diagrams for:

* capability → workflow → assessment consequence
* multi-syllabus exploit branching structure
* artifact-only inference breakdown
* verification paradox
* four red-team questions
* before / after assignment redesign

## What I want from you after building

At the end, provide:

1. the updated file tree
2. a concise summary of what you changed
3. any recommended next iteration targets
4. any places where design constraints in the repo limited the ideal implementation

Begin now by inspecting the repo and mapping this 18-slide structure into the existing presentation system.

```

A cleaner way to use this with Claude is to paste the prompt above, then immediately attach one short follow-up message:

“Prioritize Slides 1–10 first. Build those fully before moving on.”

That will keep the first pass focused on the opening arc rather than spreading effort too thin.
```
