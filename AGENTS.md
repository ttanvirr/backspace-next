<!-- BEGIN:nextjs-agent-rules -->

## Project Overview

This project is a landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

The primary goal is to reproduce the supplied design reference as accurately as reasonably possible while maintaining clean, maintainable, and responsive code.

## General Instructions

- Inspect the existing codebase before making changes.
- Preserve the existing project structure and established conventions unless a change is necessary.
- Read `docs/design-spec.md` before implementing or modifying page sections.
- Read `docs/implementation-plan.md` before working on planned implementation tasks.
- Do not replace working code or rewrite unrelated files unnecessarily.
- Explain significant implementation decisions and trade-offs.
- Ask for clarification when a missing requirement would materially affect the design or architecture.

## Technology Constraints

- Use the existing Next.js App Router setup.
- Use TypeScript and follow the existing TypeScript configuration.
- Use Tailwind CSS for styling.
- Prefer existing shadcn/ui components when appropriate.
- Reuse installed dependencies before introducing new ones.
- Do not install additional packages without explaining why they are needed.
- Prefer Server Components by default. Use Client Components only when browser APIs, state, event handlers, or other client-side functionality requires them.
- Follow the conventions of the installed versions of Next.js, React, Tailwind CSS, and shadcn/ui.

## Design Requirements

- Treat the supplied screenshot as the primary visual reference.
- Match the reference's layout, spacing, typography, colors, proportions, imagery, and visual hierarchy.
- Do not invent major sections or redesign the page without approval.
- Use responsive layouts rather than fixed desktop-only dimensions.
- Keep reusable design tokens and shared styles consistent.
- Avoid unnecessary gradients, shadows, animations, and decorative elements not supported by the reference.
- Use appropriate semantic HTML and accessible controls.

## Code Quality

- Keep components focused and reusable where that improves maintainability.
- Avoid oversized components that combine unrelated page sections.
- Use clear, descriptive component and variable names.
- Avoid duplicated markup and unnecessary abstractions.
- Do not suppress TypeScript or lint errors merely to make checks pass.
- Do not use placeholder links or nonfunctional controls in the finished page.

## Workflow

- For substantial changes, inspect the repository and create or update an implementation plan before coding.
- Implement one logical task at a time.
- Avoid unrelated changes outside the current task.
- Review the resulting diff after every substantial change.
- Run the relevant lint, type-check, build, and browser checks when available.
- Never claim that a check passed unless it was actually executed successfully.
- Report changed files, checks performed, failures, and remaining limitations.

## Git and Safety

- Do not overwrite or discard existing user changes.
- Do not run destructive Git commands without explicit approval.
- Do not commit or push changes unless requested.
- Ask before adding dependencies, changing major architectural decisions, or introducing external services.

<!-- END:nextjs-agent-rules -->
