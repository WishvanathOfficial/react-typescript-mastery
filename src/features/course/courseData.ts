import chapterOneExercises from '../../../docs/course-content/chapter-01/exercises.md?raw';
import chapterOneInterviews from '../../../docs/course-content/chapter-01/interview-questions.md?raw';
import chapterOneNotes from '../../../docs/course-content/chapter-01/notes.md?raw';
import chapterTwoExercises from '../../../docs/course-content/chapter-02/exercises.md?raw';
import chapterTwoInterviews from '../../../docs/course-content/chapter-02/interview-questions.md?raw';
import chapterTwoNotes from '../../../docs/course-content/chapter-02/notes.md?raw';
import chapterThreeExercises from '../../../docs/course-content/chapter-03/exercises.md?raw';
import chapterThreeInterviews from '../../../docs/course-content/chapter-03/interview-questions.md?raw';
import chapterThreeNotes from '../../../docs/course-content/chapter-03/notes.md?raw';
import chapterFourExercises from '../../../docs/course-content/chapter-04/exercises.md?raw';
import chapterFourInterviews from '../../../docs/course-content/chapter-04/interview-questions.md?raw';
import chapterFourNotes from '../../../docs/course-content/chapter-04/notes.md?raw';
import chapterFiveExercises from '../../../docs/course-content/chapter-05/exercises.md?raw';
import chapterFiveInterviews from '../../../docs/course-content/chapter-05/interview-questions.md?raw';
import chapterFiveNotes from '../../../docs/course-content/chapter-05/notes.md?raw';

export type CourseResource = 'notes' | 'exercises' | 'interviews';

export interface CourseLesson {
  title: string;
  slug: string;
  isProject: boolean;
  videoId?: string;
}

export interface CourseChapter {
  id: string;
  number: number;
  part: string;
  title: string;
  lessons: CourseLesson[];
  project: string;
  materials?: Record<CourseResource, string>;
}

interface ChapterSeed {
  part: string;
  title: string;
  lessons: string[];
  project: string;
  materials?: Record<CourseResource, string>;
}

const parts: Array<{ title: string; chapters: ChapterSeed[] }> = [
  {
    title: 'Part 1 — Getting started',
    chapters: [
      {
        part: 'Part 1 — Getting started',
        title: 'Introduction to React and TypeScript',
        lessons: [
          'What Is React?',
          'What Is TypeScript?',
          'Why Use React with TypeScript?',
          'Modern React Development Mindset',
          'Mini Project: Simple Profile Dashboard',
        ],
        project: 'Simple Profile Dashboard',
        materials: {
          notes: chapterOneNotes,
          exercises: chapterOneExercises,
          interviews: chapterOneInterviews,
        },
      },
      {
        part: 'Part 1 — Getting started',
        title: 'React + TypeScript Project Setup',
        lessons: [
          'What Is Project Setup?',
          'Understanding Generated Project Files',
          'Understanding package.json and Scripts',
          'Understanding tsconfig.json',
          'Creating Your First Clean React TypeScript Component',
          'Mini Project: Company Team Dashboard Setup',
        ],
        project: 'Company Team Dashboard Setup',
        materials: {
          notes: chapterTwoNotes,
          exercises: chapterTwoExercises,
          interviews: chapterTwoInterviews,
        },
      },
      {
        part: 'Part 1 — Getting started',
        title: 'JSX with TypeScript',
        lessons: [
          'What Is JSX?',
          'JSX Rules and Common Syntax',
          'Using JavaScript Values in JSX',
          'JSX Attributes and Type Safety',
          'JSX Children and React.ReactNode',
          'Mini Project: Course Landing Section with JSX',
        ],
        project: 'Course Landing Section with JSX',
        materials: {
          notes: chapterThreeNotes,
          exercises: chapterThreeExercises,
          interviews: chapterThreeInterviews,
        },
      },
    ],
  },
  {
    title: 'Part 2 — Core React with TypeScript',
    chapters: [
      {
        part: 'Part 2 — Core React with TypeScript',
        title: 'Props and State with TypeScript',
        lessons: [
          'Props with TypeScript',
          'Optional Props and Default Values',
          'State with useState',
          'Object and Array State',
          'Props vs State',
          'Mini Project: Shopping Cart Item Manager',
        ],
        project: 'Shopping Cart Item Manager',
        materials: {
          notes: chapterFourNotes,
          exercises: chapterFourExercises,
          interviews: chapterFourInterviews,
        },
      },
      {
        part: 'Part 2 — Core React with TypeScript',
        title: 'Functional Components and Component Design',
        lessons: [
          'Functional Components',
          'Component Responsibility',
          'Pure Components',
          'Component Composition',
          'Smart and Presentational Components',
          'Mini Project: Employee Directory Component Design',
        ],
        project: 'Employee Directory Component Design',
        materials: {
          notes: chapterFiveNotes,
          exercises: chapterFiveExercises,
          interviews: chapterFiveInterviews,
        },
      },
      {
        part: 'Part 2 — Core React with TypeScript',
        title: 'Hooks with TypeScript',
        lessons: [
          'Rules of Hooks',
          'useState with TypeScript',
          'useEffect with TypeScript',
          'useContext with TypeScript',
          'useReducer with TypeScript',
          'useRef with TypeScript',
          'Mini Project: Support Ticket Dashboard',
        ],
        project: 'Support Ticket Dashboard',
      },
    ],
  },
  {
    title: 'Part 3 — User interaction and UI logic',
    chapters: [
      {
        part: 'Part 3 — User interaction and UI logic',
        title: 'Forms and Event Handling with TypeScript',
        lessons: [
          'Event Handling with TypeScript',
          'Controlled Inputs',
          'Form Submit Handling',
          'Handling Multiple Form Fields',
          'Checkbox, Select, and Textarea',
          'Basic Form Validation',
          'Mini Project: Job Application Form',
        ],
        project: 'Job Application Form',
      },
      {
        part: 'Part 3 — User interaction and UI logic',
        title: 'Conditional Rendering, Lists, and Keys',
        lessons: [
          'Conditional Rendering',
          'Ternary and && Rendering',
          'Rendering Lists with map',
          'Filtering Lists',
          'Keys in React',
          'Mini Project: Task Manager with Filters',
        ],
        project: 'Task Manager with Filters',
      },
    ],
  },
  {
    title: 'Part 4 — Advanced TypeScript for React',
    chapters: [
      {
        part: 'Part 4 — Advanced TypeScript for React',
        title: 'Advanced TypeScript for React',
        lessons: [
          'Generics in TypeScript',
          'Generic React Components',
          'Utility Types',
          'Interfaces vs Types',
          'Advanced Type Patterns for React',
          'Mini Project: Generic Data Table with Typed API State',
        ],
        project: 'Generic Data Table with Typed API State',
      },
    ],
  },
  {
    title: 'Part 5 — Real-world data and app state',
    chapters: [
      {
        part: 'Part 5 — Real-world data and app state',
        title: 'API Integration and Error Handling with TypeScript',
        lessons: [
          'What Is API Integration?',
          'Fetching Data with useEffect',
          'Error Handling with TypeScript',
          'Creating a Reusable API Client',
          'Axios with TypeScript',
          'Mini Project: Product API Dashboard',
        ],
        project: 'Product API Dashboard',
      },
      {
        part: 'Part 5 — Real-world data and app state',
        title: 'Custom Hooks and Reusable Logic with TypeScript',
        lessons: [
          'What Is a Custom Hook?',
          'Creating a useFetch Hook',
          'Custom Hook for Forms',
          'useLocalStorage Hook',
          'useDebounce Hook',
          'Mini Project: Reusable Searchable Course Dashboard',
        ],
        project: 'Reusable Searchable Course Dashboard',
      },
      {
        part: 'Part 5 — Real-world data and app state',
        title: 'Context API and Global State Patterns with TypeScript',
        lessons: [
          'What Is Context API?',
          'Creating Type-Safe Context',
          'Updating Context State',
          'Context with useReducer',
          'Global State Patterns and When Not to Use Context',
          'Mini Project: Auth and Cart Context System',
        ],
        project: 'Auth and Cart Context System',
      },
    ],
  },
  {
    title: 'Part 6 — Industry-ready React practices',
    chapters: [
      {
        part: 'Part 6 — Industry-ready React practices',
        title: 'Performance Optimization with React and TypeScript',
        lessons: [
          'What Is Performance Optimization?',
          'React.memo',
          'useMemo',
          'useCallback',
          'Large Lists and Rendering Optimization',
          'Measuring Performance with Profiler',
          'Mini Project: Optimized Product Search Dashboard',
        ],
        project: 'Optimized Product Search Dashboard',
      },
      {
        part: 'Part 6 — Industry-ready React practices',
        title: 'Folder Structure and Clean Code for React TypeScript Projects',
        lessons: [
          'Why Folder Structure Matters',
          'Component Organisation',
          'Clean TypeScript Types',
          'API and Service Layer Organisation',
          'Clean Code Rules for React TypeScript',
          'Import, Export, and Naming Conventions',
          'Mini Project: Clean Feature-Based Course App Structure',
        ],
        project: 'Clean Feature-Based Course App Structure',
      },
      {
        part: 'Part 6 — Industry-ready React practices',
        title: 'Testing Basics for React TypeScript Applications',
        lessons: [
          'What Is Testing?',
          'Setting Up Testing in React TypeScript',
          'Testing Components with React Testing Library',
          'Testing User Events',
          'Testing Forms and Validation',
          'Testing API States and Mocking',
          'Mini Project: Tested Login and Product List',
        ],
        project: 'Tested Login and Product List',
      },
    ],
  },
  {
    title: 'Part 7 — Application-level features',
    chapters: [
      {
        part: 'Part 7 — Application-level features',
        title: 'Authentication Flow with React and TypeScript',
        lessons: [
          'What Is Authentication?',
          'Login and Logout Flow',
          'Auth Context with TypeScript',
          'Protected Routes',
          'Token Storage and Security Basics',
          'Role-Based Access Control',
          'Handling Auth Loading and Errors',
          'Mini Project: Protected Dashboard App',
        ],
        project: 'Protected Dashboard App',
      },
      {
        part: 'Part 7 — Application-level features',
        title: 'Routing with React Router and TypeScript',
        lessons: [
          'What Is Routing?',
          'Setting Up React Router',
          'Route Components and Layout Routes',
          'Dynamic Routes and URL Params',
          'Navigation with Link and useNavigate',
          'Protected Routes',
          'Not Found Page',
          'Mini Project: Multi-Page Course Platform',
        ],
        project: 'Multi-Page Course Platform',
      },
      {
        part: 'Part 7 — Application-level features',
        title: 'State Management with Redux Toolkit Basics',
        lessons: [
          'What Is Global State?',
          'Why Redux Toolkit?',
          'Store and Slice Setup',
          'Actions and Reducers',
          'useSelector and useDispatch with TypeScript',
          'Async State with Redux Toolkit',
          'Best Practices and When to Use Redux',
          'Mini Project: Course Platform Global State Management',
        ],
        project: 'Course Platform Global State Management',
      },
    ],
  },
  {
    title: 'Part 8 — Real-world projects and production skills',
    chapters: [
      {
        part: 'Part 8 — Real-world projects and production skills',
        title: 'Real-World Project Patterns',
        lessons: [
          'Building Feature-Based Apps',
          'Handling Loading, Error, Empty, and Success States',
          'Reusable Components and Hooks',
          'API Layer Patterns',
          'Form Patterns',
          'Permission-Based UI',
          'Common Industry Mistakes',
          'Debugging Tips for Real Projects',
        ],
        project: 'Real-World Project Patterns',
      },
      {
        part: 'Part 8 — Real-world projects and production skills',
        title: 'Final Big Project — React TypeScript Admin Dashboard',
        lessons: [
          'Project Overview',
          'Features and Requirements',
          'Folder Structure',
          'Authentication Flow',
          'Routing Setup',
          'Dashboard Layout',
          'API Integration',
          'Forms and Validation',
          'Global State Management',
          'Performance Optimization',
          'Testing Important Flows',
          'Final Best Practices',
          'Possible Improvements',
        ],
        project: 'React TypeScript Admin Dashboard',
      },
    ],
  },
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/^mini project:\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const courseChapters: CourseChapter[] = parts.flatMap((part, partIndex) =>
  part.chapters.map((chapter, chapterIndex) => {
    const number =
      parts
        .slice(0, partIndex)
        .reduce((count, previousPart) => count + previousPart.chapters.length, 0) +
      chapterIndex +
      1;

    return {
      id: `chapter-${String(number).padStart(2, '0')}`,
      number,
      part: part.title,
      title: chapter.title,
      lessons: chapter.lessons.map((title) => ({
        title: title.replace(/^Mini Project:\s*/, ''),
        slug: slugify(title),
        isProject: title.startsWith('Mini Project:'),
      })),
      project: chapter.project,
      materials: chapter.materials,
    };
  }),
);

export function getCourseLessonPath(
  chapter: CourseChapter,
  lesson: CourseLesson,
): string {
  return `/course/${chapter.id}/${lesson.slug}`;
}
