export type Option = {
    id: string
    question_id: string
    iscorrect: boolean
    value: string
    position: number
}

export type Question = {
    id: string
    quiz_id: string
    question_type: string
    question: string
    Description: string | null
    position: number
    createdAt: Date // Change from string to Date
    updatedAt: Date // Change from string to Date
    option: Option[]
}

export type QuizData = {
    chapterId: string
    description: string | null
    id: string
    image_url: string | null
    title: string
    question: Question[]
}
export type QuizAnswer = {
    id: string;
    userId: string;
    quizId: string;
    score: number;
    questionId: string;
    answer: string;
  };
