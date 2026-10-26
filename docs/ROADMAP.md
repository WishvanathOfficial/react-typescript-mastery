# React.js Mastery with TypeScript — Development Roadmap

This roadmap describes how to turn the course concept into a public, chapter-based
learning platform. The first release is intentionally static: the website and
course material live in Git, and no custom backend is required.

## Product goals

- Help beginners learn modern React with TypeScript through a clear, practical
  sequence.
- Give every lesson a predictable home for its video, notes, code, exercises,
  and interview preparation.
- Make the material comfortable to read and watch for extended sessions, on
  desktop and mobile.
- Keep the source open and easy to contribute to on GitHub.
- Prefer a small, reliable first release over infrastructure that the course
  does not yet need.

## Recommended learner experience

1. A learner opens the course and chooses a chapter from the curriculum.
2. The chapter page shows the selected lesson and its YouTube video.
3. Below the video, the learner can open the written notes, coding exercise,
   and interview questions for that chapter.
4. A chapter project brings its ideas together in a practical application.
5. Previous/next lesson controls keep the learner moving in order; the chapter
   navigation also makes it easy to revisit a topic.
6. The learner marks lessons complete. In the first release, progress is saved
   in that browser using `localStorage`.

Keep the content page visually consistent. A useful lesson rhythm is:
**Watch → Read → Code → Explain → Review**.

## Technology and architecture

- **Frontend:** React, TypeScript, Vite, and Sass, using the repository's
  existing setup.
- **Routing:** Add React Router when the prototype is implemented as application
  pages. Use stable, readable URLs such as `/course/chapter-01/lesson-01`.
- **Course material:** Markdown files organized by chapter in `docs/course-content/`.
  Keep lesson metadata (title, order, video ID, and content links) in typed
  course data in the application. This keeps the content readable in Git and
  the UI data type-safe.
- **Video:** Embed published YouTube videos with the privacy-enhanced
  `youtube-nocookie.com` host. Store video IDs in lesson metadata; do not commit
  secrets or private credentials.
- **Progress:** Save completion locally in the browser. Do not imply that it
  synchronizes between devices.
- **Deployment:** Publish the static build with GitHub Pages, or use a static
  host such as Vercel or Netlify. Configure route fallback/base paths correctly
  for the chosen host.
- **Backend:** None for the initial release. Revisit this only if learner
  accounts, cross-device progress, comments, or a private content editor become
  real requirements.

## Content layout in Git

Use a stable, zero-padded chapter number so folders sort in course order:

```text
docs/
├── ROADMAP.md
├── course-platform-layout.html
└── course-content/
    ├── README.md
    ├── chapter-01/
    │   ├── README.md
    │   ├── notes.md
    │   ├── exercises.md
    │   └── interview-questions.md
    ├── chapter-02/
    │   └── ...
    └── chapter-20/
        └── ...
```

Each chapter landing page should link to its materials, project, source code,
and published video. Add a chapter folder when its content is ready instead of
creating empty folders that appear published. The chapter 1 and chapter 2
directories demonstrate this format.

## Phased implementation

### Phase 1 — Confirm the syllabus and content contract

- Use the 20 supplied chapters and 8 course parts as the source of truth.
- Define consistent lesson metadata: ID, title, chapter, order, video ID,
  estimated duration, and links to notes/exercises/interview material.
- Agree on a completion definition for a lesson and chapter.
- Avoid promising course length, certification, or outcomes until those details
  are established.

**Done when:** the chapter list and a reusable content format are agreed, and
the first chapter materials are reviewed.

### Phase 2 — Publish the first complete chapter

- Finish the chapter 1 notes, coding exercises, interview questions, and profile
  dashboard project.
- Add the YouTube video IDs as lessons are recorded and published.
- Make sure code samples compile, use current React/TypeScript conventions, and
  have expected outcomes.
- Keep project code in a clearly named chapter folder or a linked example
  repository.

**Done when:** a learner can complete chapter 1 without needing unpublished
content or private services.

### Phase 3 — Convert the HTML concept into the React application

- Build a shared course layout with chapter navigation, lesson content, and a
  responsive table of contents.
- Add routes for course, chapters, and lessons; support direct links and browser
  back/forward navigation.
- Load the selected lesson's video and content links from typed course data.
- Keep the standalone `course-platform-layout.html` as a design reference until
  the React layout covers its use cases.

**Done when:** every published lesson has a stable URL and navigation works
after a page refresh.

### Phase 4 — Add comfortable themes and accessibility

- Offer both the current dark palette and a light palette designed for
  sustained reading (soft, low-glare surfaces and readable text contrast).
- Add a clearly labelled theme control and remember the choice on the device.
- Respect the operating-system theme when a learner has not chosen a preference;
  do not override an explicit saved choice.
- Check keyboard navigation, visible focus, semantic headings, contrast,
  captions, reduced motion, and screen-reader labels.
- Make code blocks horizontally scrollable on narrow screens instead of
  shrinking text to an unreadable size.

**Done when:** core course pages are usable with either theme, keyboard-only
navigation, and mobile widths.

### Phase 5 — Complete and review the curriculum incrementally

- Publish chapters in sequence, each with notes, runnable examples, exercises,
  interview questions, and its project.
- Mark unfinished material as forthcoming rather than linking to empty pages.
- Review technical accuracy, spelling, accessibility, and code execution before
  announcing a chapter.
- Invite corrections and contributions through GitHub Issues and pull requests.

**Done when:** all advertised chapter links lead to reviewed, usable content.

### Phase 6 — Track progress and polish the learner workflow

- Store lesson completion in `localStorage`, with a visible explanation that it
  is browser/device specific.
- Show chapter and overall progress and provide a way to reset local progress.
- Add optional search/filtering once the lesson catalog is large enough to
  benefit from it.
- Avoid gamification that pressures learners; progress should help learners
  resume, not punish breaks.

**Done when:** progress survives refreshes and remains correct as chapters are
added or lesson IDs are renamed.

### Phase 7 — Publish and maintain the public site

- Choose a repository name and public project license; document attribution and
  how to report issues.
- Add deployment instructions and automate build/type-check/deployment with
  GitHub Actions or the selected static host.
- Test clean installs, production builds, direct deep links, YouTube embeds, and
  the deployed base path.
- Add a contribution guide describing content format, code style, and review
  expectations.

**Done when:** a first-time contributor can run the site locally and a visitor
can open a chapter directly from a shared URL.

## Static hosting and backend decision

The initial site can be hosted without a backend. Static hosting serves the
compiled application and Git-tracked lesson files. YouTube hosts the videos;
the browser stores local progress. A backend is only needed when the product
needs server-side user data or privileged operations.

Consider a backend later for:

- accounts and progress synchronized across devices;
- private or personalized course content;
- server-managed quizzes, comments, or learner cohorts;
- an authenticated authoring/publishing workflow.

Before adding a backend, consider whether a managed service can satisfy the
requirement. Never put API secrets, service-role keys, or private tokens in a
public frontend repository.

## Public GitHub and content best practices

- Keep lessons self-contained, numbered, and cross-linked with relative
  Markdown links.
- Use generic fictional names and sample data in public examples; avoid personal
  details and real credentials.
- Include code fences with language identifiers and explain what learners should
  observe when they run an example.
- Distinguish required knowledge from optional deeper dives.
- Link to video transcripts or provide text summaries so video is not the only
  way to access a lesson.
- Treat unlisted YouTube videos as shareable, not private.
- Pin dependency versions through the lockfile and keep code examples aligned
  with the repository's supported versions.
- State the repository's license clearly; do not assume that being public
  automatically grants reuse rights.

## Release checklist

- [ ] Course landing page explains the audience, prerequisites, and how to use
      the material.
- [ ] Chapter and lesson routes work when opened directly.
- [ ] Every published video has captions and a written alternative.
- [ ] Notes, exercise instructions, expected results, and interview answers are
      reviewed.
- [ ] Light and dark themes are readable and the choice persists.
- [ ] Mobile, keyboard, contrast, and reduced-motion checks pass.
- [ ] Progress behavior and its local-only limitation are clear.
- [ ] Production build and type-check pass in CI.
- [ ] License, contribution guide, and issue reporting are present.
- [ ] Public deployment links to the correct repository and base path.
