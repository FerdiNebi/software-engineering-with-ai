# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Rules
- Commit on each complete state before continuing forward.
- When developing - commit on each completed task.s
- After completing any BMAD phase (brief, PRD, architecture, UX, epics/stories, story implementation, sprint retro, etc.), commit the resulting artifacts before moving to the next phase. Each BMAD artifact in `_bmad-output/` is a discrete milestone and should land in its own commit.

## Product, in one paragraph

*End-to-End Software Engineering with AI* — a free static reference site for senior engineers entering consulting/agency work. v1 delivers 43 Markdown-authored pages (1 home + 7 SDLC phase overviews + 35 sub-sections), each following a strict 4-section template: **What happens here**, **Best practices**, **Desired outcomes**, **What the industry does**. v2 layers a 5th section (**AI-assisted workflow**) per page. No runtime APIs, no CMS, no auth. The agency/consulting lifecycle frame (pre-sales → maintenance) is the core differentiator — do not reframe as generic SDLC or product-company process.

## Working mode

### Autonomous multi-step execution
When the user says things like "don't ask me to continue," "complete all the stories," "I'll review afterwards," or "work as long as you need" on a long task (BMAD story creation, content authoring batches, multi-epic implementation):

- Do NOT halt at BMAD `[C] Continue` / approval menus — proceed through them.
- Do NOT ask for scope clarification during execution — use best judgment and document the call in commit messages or spec-change-log sections.
- Commit after each completed step/story so work is reviewable incrementally.
- Batch tool calls aggressively in parallel where independent.
- Report progress succinctly; save the deep detail for the artifacts and PR description.

Revert to normal collaborative mode on the next independent task or if user redirects mid-stream.