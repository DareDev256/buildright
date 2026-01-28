export interface Lesson {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  subtitle: string;
  duration: string; // e.g., "5 min read"
  content: LessonContent[];
  keyTakeaways: string[];
  georgiaNote?: string;
  quiz?: QuizQuestion[];
}

export interface LessonContent {
  type: "text" | "heading" | "list" | "callout" | "image" | "comparison";
  content?: string;
  items?: string[];
  variant?: "info" | "warning" | "tip" | "georgia";
  title?: string;
  columns?: { title: string; items: string[] }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  totalLessons: number;
}
