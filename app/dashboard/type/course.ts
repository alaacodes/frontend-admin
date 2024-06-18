import { QuizData } from "./quiz";

export type CourseData = {
    id: string;
    userId: string;
    title: string;
    description: string | null;
    imageUrl: string | null;
    videoUrl: string | null;
    price: number | null;
    isPublished: boolean;
    global: boolean;
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    chapters: {
      id: string;
      title: string;
      description: string | null;
      videoUrl: string | null;
      position: number;
      isPublished: boolean;
      isFree: boolean;
      courseId: string;
      isRequired: boolean;
      quiz: QuizData[] | null
      createdAt: Date;
      updatedAt: Date;
    }[];
  }