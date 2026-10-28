import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { courseChapters, getCourseLessonPath, type CourseResource } from './courseData';
import './courseDashboard.scss';

const progressStorageKey = 'react-typescript-mastery-progress-v1';
const themeStorageKey = 'react-typescript-mastery-theme-v1';
const resources: Array<{ id: CourseResource; label: string }> = [
  { id: 'notes', label: 'Chapter notes' },
  { id: 'exercises', label: 'Coding exercises' },
  { id: 'interviews', label: 'Interview questions' },
];

type Theme = 'dark' | 'light';
type LessonProgress = Record<string, boolean>;

function readTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
  } catch (error) {
    console.error('Could not read saved theme preference.', error);
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function readProgress(): LessonProgress {
  try {
    const savedProgress = localStorage.getItem(progressStorageKey);
    if (!savedProgress) {
      return {};
    }

    const parsedProgress: unknown = JSON.parse(savedProgress);
    if (
      parsedProgress &&
      typeof parsedProgress === 'object' &&
      !Array.isArray(parsedProgress)
    ) {
      return Object.fromEntries(
        Object.entries(parsedProgress).filter(
          ([, isComplete]) => typeof isComplete === 'boolean',
        ),
      );
    }
  } catch (error) {
    console.error('Could not read saved lesson progress.', error);
  }

  return {};
}

function getResourceFromSearch(searchParams: URLSearchParams): CourseResource {
  const resource = searchParams.get('resource');
  return resources.some((item) => item.id === resource)
    ? (resource as CourseResource)
    : 'notes';
}

function CourseDashboard() {
  const { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [progress, setProgress] = useState<LessonProgress>(readProgress);
  const chapterIndex = courseChapters.findIndex((item) => item.id === chapterId);
  const selectedChapterIndex = chapterIndex < 0 ? 0 : chapterIndex;
  const chapter = courseChapters[selectedChapterIndex];
  const lessonIndex = chapter.lessons.findIndex((item) => item.slug === lessonId);
  const selectedLessonIndex = lessonIndex < 0 ? 0 : lessonIndex;
  const lesson = chapter.lessons[selectedLessonIndex];
  const resource = getResourceFromSearch(searchParams);
  const materials = chapter.materials;
  const isPublished = Boolean(materials);
  const completedCount = Object.values(progress).filter(Boolean).length;
  const totalLessons = courseChapters.reduce(
    (count, item) => count + item.lessons.length,
    0,
  );
  const progressPercent = Math.round((completedCount / totalLessons) * 100);
  const currentLessonKey = `${chapter.id}:${lesson.slug}`;
  const isComplete = progress[currentLessonKey] === true;
  const chapterProgress = chapter.lessons.filter(
    (item) => progress[`${chapter.id}:${item.slug}`],
  ).length;
  const notesContent = materials?.[resource];
  const previousLesson =
    selectedLessonIndex > 0
      ? { chapterIndex: selectedChapterIndex, lessonIndex: selectedLessonIndex - 1 }
      : selectedChapterIndex > 0
        ? {
            chapterIndex: selectedChapterIndex - 1,
            lessonIndex: courseChapters[selectedChapterIndex - 1].lessons.length - 1,
          }
        : undefined;
  const nextLesson =
    selectedLessonIndex < chapter.lessons.length - 1
      ? { chapterIndex: selectedChapterIndex, lessonIndex: selectedLessonIndex + 1 }
      : selectedChapterIndex < courseChapters.length - 1
        ? { chapterIndex: selectedChapterIndex + 1, lessonIndex: 0 }
        : undefined;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f5f6f7' : '#0b1020');
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      console.error('Could not save theme preference.', error);
    }

    return () => {
      delete document.documentElement.dataset.theme;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', '#0b1020');
    };
  }, [theme]);

  useEffect(() => {
    if (chapterIndex < 0) {
      return;
    }

    if (lessonId !== lesson.slug || chapterId !== chapter.id) {
      navigate(
        {
          pathname: getCourseLessonPath(chapter, lesson),
          search: searchParams.toString(),
        },
        { replace: true },
      );
    }
  }, [chapter, chapterId, chapterIndex, lesson, lessonId, navigate, searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector<HTMLElement>('#course-main')?.focus({ preventScroll: true });
  }, [chapterId, lessonId]);

  if (chapterIndex < 0) {
    return <Navigate to="/course/chapter-01" replace />;
  }

  function changeResource(nextResource: CourseResource) {
    setSearchParams((current) => {
      const updated = new URLSearchParams(current);
      updated.set('resource', nextResource);
      return updated;
    });
  }

  function selectLesson(nextChapterIndex: number, nextLessonIndex: number) {
    const nextChapter = courseChapters[nextChapterIndex];
    const nextLesson = nextChapter.lessons[nextLessonIndex];
    navigate(getCourseLessonPath(nextChapter, nextLesson));
  }

  function toggleComplete() {
    const nextProgress = { ...progress };
    if (isComplete) {
      delete nextProgress[currentLessonKey];
    } else {
      nextProgress[currentLessonKey] = true;
    }

    setProgress(nextProgress);
    try {
      localStorage.setItem(progressStorageKey, JSON.stringify(nextProgress));
    } catch (error) {
      console.error('Could not save lesson progress.', error);
    }
  }

  const markdownComponents = {
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
      const linkedResource = href?.match(/(notes|exercises|interview-questions)\.md/);
      if (linkedResource) {
        const nextResource: CourseResource =
          linkedResource[1] === 'interview-questions'
            ? 'interviews'
            : linkedResource[1] === 'exercises'
              ? 'exercises'
              : 'notes';
        return (
          <button
            className="course-markdown-link"
            type="button"
            onClick={() => changeResource(nextResource)}
          >
            {children}
          </button>
        );
      }

      if (href?.startsWith('#')) {
        return <a href={href}>{children}</a>;
      }

      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
  };

  return (
    <div className="course-shell" data-theme={theme}>
      <header className="course-topbar">
        <Link
          className="course-brand"
          to="/"
          aria-label="Return to React TypeScript Mastery home"
        >
          <span className="course-brand-mark" aria-hidden="true">
            R
          </span>
          <span>
            React TypeScript <strong>Mastery</strong>
          </span>
        </Link>
        <div className="course-topbar-actions">
          <span className="course-status">
            <i aria-hidden="true" /> Free learning path
          </span>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'light'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
            {theme === 'light' ? 'Dark theme' : 'Light theme'}
          </button>
        </div>
      </header>

      <div className="course-layout">
        <aside className="course-sidebar" aria-label="Course chapters">
          <div className="course-sidebar-heading">
            <p>Complete learning path</p>
            <h1>React.js Mastery</h1>
            <span>20 chapters · 8 parts</span>
          </div>
          <div className="course-progress">
            <div className="course-progress-copy">
              <span>Your course progress</span>
              <strong>{progressPercent}%</strong>
            </div>
            <div
              className="course-progress-track"
              role="progressbar"
              aria-label="Course progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPercent}
            >
              <span style={{ width: `${progressPercent}%` }} />
            </div>
            <small>
              {completedCount} of {totalLessons} lessons complete
            </small>
          </div>
          <nav aria-label="Chapters by course part">
            {Array.from(new Set(courseChapters.map((item) => item.part))).map((part) => (
              <section className="course-part" key={part}>
                <h2>{part}</h2>
                {courseChapters
                  .filter((item) => item.part === part)
                  .map((item) => {
                    const itemIndex = courseChapters.indexOf(item);
                    const completed = item.lessons.filter(
                      (chapterLesson) => progress[`${item.id}:${chapterLesson.slug}`],
                    ).length;
                    const published = Boolean(item.materials);
                    return (
                      <Link
                        className="course-chapter-link"
                        key={item.id}
                        to={`/course/${item.id}/${item.lessons[0].slug}`}
                        aria-current={itemIndex === chapterIndex ? 'page' : undefined}
                      >
                        <span className="course-chapter-number">
                          {String(item.number).padStart(2, '0')}
                        </span>
                        <span className="course-chapter-title">{item.title}</span>
                        {completed === item.lessons.length ? (
                          <span
                            className="course-chapter-done"
                            aria-label="Chapter complete"
                          >
                            ✓
                          </span>
                        ) : !published ? (
                          <span className="course-coming-soon" aria-label="Coming soon">
                            ···
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
              </section>
            ))}
          </nav>
        </aside>

        <main className="course-main" id="course-main" tabIndex={-1}>
          <div className="course-breadcrumb">
            <Link to="/">Course</Link>
            <span aria-hidden="true">/</span>
            <span>{chapter.part}</span>
            <span aria-hidden="true">/</span>
            <span>Chapter {chapter.number}</span>
          </div>
          <div className="course-chapter-heading">
            <div>
              <p className="course-eyebrow">
                {chapter.part} · CHAPTER {String(chapter.number).padStart(2, '0')}
              </p>
              <h2>{chapter.title}</h2>
              <p>
                {isPublished
                  ? `Follow the lessons in order, explore the chapter notes, and practise with the ${chapter.project} project.`
                  : 'This chapter is part of the course roadmap. Learning materials will be published here as the course is developed.'}
              </p>
            </div>
            <span
              className={`course-published-badge ${isPublished ? 'is-published' : ''}`}
            >
              {isPublished ? 'Published' : 'Coming soon'}
            </span>
          </div>

          <section className="course-video" aria-label="Lesson video">
            {lesson.videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(lesson.videoId)}`}
                title={`${lesson.title} — React TypeScript Mastery`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="course-video-placeholder">
                <span className="course-play-icon" aria-hidden="true">
                  ▶
                </span>
                <strong>{lesson.title}</strong>
                <p>
                  {isPublished
                    ? 'The video for this lesson will appear here when it is published.'
                    : 'This chapter’s lesson video and written materials are coming soon.'}
                </p>
              </div>
            )}
            <div className="course-video-caption">
              <span>
                CH {String(chapter.number).padStart(2, '0')} · LESSON{' '}
                {String(selectedLessonIndex + 1).padStart(2, '0')}
              </span>
              <span>YouTube lesson</span>
            </div>
          </section>

          <div className="course-current-lesson">
            <div>
              <p className="course-eyebrow">CURRENT LESSON</p>
              <h3>{lesson.title}</h3>
            </div>
            <span>
              {lesson.isProject ? 'Hands-on project' : 'Video · Notes · Practice'}
            </span>
          </div>
          <p className="course-lesson-description">
            {isPublished
              ? `Work through ${lesson.title.toLowerCase()} with the chapter video and notes. Pause to try each idea in your own code, then use the exercise and interview review to check your understanding.`
              : 'This lesson is on the course roadmap. Its video, notes, and practice materials will be published here.'}
          </p>

          <section className="course-materials" aria-label="Lesson learning materials">
            <div className="course-resource-tabs" aria-label="Chapter learning materials">
              {resources.map((item) => (
                <button
                  className="course-resource-tab"
                  key={item.id}
                  type="button"
                  aria-pressed={resource === item.id}
                  disabled={!materials}
                  onClick={() => changeResource(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              className="course-resource-content"
              id="course-resource-content"
              tabIndex={0}
              aria-live="polite"
            >
              {notesContent ? (
                <article className="course-markdown">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {notesContent}
                  </ReactMarkdown>
                </article>
              ) : (
                <div className="course-materials-empty">
                  <span aria-hidden="true">✦</span>
                  <h3>Chapter materials are on the way</h3>
                  <p>
                    This chapter is in the public learning path. Notes, exercises, and
                    interview questions will appear here as they are published.
                  </p>
                </div>
              )}
            </div>
          </section>

          <div className="course-lesson-actions">
            <button
              className={`course-complete-button ${isComplete ? 'is-complete' : ''}`}
              type="button"
              aria-pressed={isComplete}
              disabled={!isPublished}
              onClick={toggleComplete}
            >
              <span aria-hidden="true">{isComplete ? '✓' : '○'}</span>
              {isComplete ? 'Lesson completed' : 'Mark lesson complete'}
            </button>
            <div>
              {previousLesson ? (
                <button
                  className="course-nav-button"
                  type="button"
                  onClick={() =>
                    selectLesson(previousLesson.chapterIndex, previousLesson.lessonIndex)
                  }
                >
                  ← Previous lesson
                </button>
              ) : null}
              {nextLesson ? (
                <button
                  className="course-nav-button is-next"
                  type="button"
                  onClick={() =>
                    selectLesson(nextLesson.chapterIndex, nextLesson.lessonIndex)
                  }
                >
                  Next lesson →
                </button>
              ) : null}
            </div>
          </div>
        </main>

        <aside className="course-detail-sidebar" aria-label="Chapter details">
          <section className="course-detail-section">
            <p className="course-side-label">CHAPTER CONTENTS</p>
            <h2>Lessons in this chapter</h2>
            <p className="course-chapter-progress">
              {chapterProgress} of {chapter.lessons.length} complete
            </p>
            <div className="course-lesson-list">
              {chapter.lessons.map((item, index) => {
                const done = progress[`${chapter.id}:${item.slug}`] === true;
                return (
                  <Link
                    className={`course-lesson-link ${done ? 'is-complete' : ''}`}
                    key={item.slug}
                    to={getCourseLessonPath(chapter, item)}
                    aria-current={item.slug === lesson.slug ? 'true' : undefined}
                  >
                    <span className="course-lesson-state" aria-hidden="true" />
                    <span>
                      <span className="course-lesson-link-title">{item.title}</span>
                      <small>
                        {item.isProject
                          ? 'Chapter project'
                          : `Lesson ${String(index + 1).padStart(2, '0')}`}
                      </small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="course-detail-section">
            <p className="course-side-label">PUT IT INTO PRACTICE</p>
            <div className="course-project-card">
              <span>CHAPTER PROJECT</span>
              <h3>{chapter.project}</h3>
              <p>
                {isPublished
                  ? `Bring this chapter’s ideas together in ${chapter.project}. Build it in small steps and explain the choices you make.`
                  : 'The guided project will be published alongside this chapter’s materials.'}
              </p>
              <button
                className="course-project-button"
                type="button"
                disabled={!materials}
                onClick={() => changeResource('exercises')}
              >
                {isPublished ? 'Open project exercise →' : 'Project coming soon'}
              </button>
            </div>
          </section>

          <section className="course-detail-section">
            <p className="course-side-label">A SIMPLE STUDY ROUTINE</p>
            <h2>Make each lesson stick</h2>
            <ol className="course-study-routine">
              <li>
                <strong>Watch with a question</strong>
                <span>Note one thing you want to understand or try.</span>
              </li>
              <li>
                <strong>Code alongside</strong>
                <span>Pause, type it yourself, then change one detail.</span>
              </li>
              <li>
                <strong>Explain it back</strong>
                <span>Write a short takeaway before moving on.</span>
              </li>
            </ol>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default CourseDashboard;
