import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LessonProgress {
  lessonId: string;
  moduleId: string;
  completedAt: string;
  quizScore?: number;
}

interface ProgressState {
  completedLessons: LessonProgress[];
  currentModuleId: string;
  currentLessonId: string;

  // Actions
  markLessonComplete: (moduleId: string, lessonId: string, quizScore?: number) => void;
  setCurrentLesson: (moduleId: string, lessonId: string) => void;
  isLessonComplete: (moduleId: string, lessonId: string) => boolean;
  getModuleProgress: (moduleId: string, totalLessons: number) => number;
  reset: () => void;
}

const initialState = {
  completedLessons: [],
  currentModuleId: "1",
  currentLessonId: "1-1",
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      markLessonComplete: (moduleId, lessonId, quizScore) => {
        const existing = get().completedLessons.find(
          (l) => l.moduleId === moduleId && l.lessonId === lessonId
        );

        if (!existing) {
          set((state) => ({
            completedLessons: [
              ...state.completedLessons,
              {
                moduleId,
                lessonId,
                completedAt: new Date().toISOString(),
                quizScore,
              },
            ],
          }));
        }
      },

      setCurrentLesson: (moduleId, lessonId) => {
        set({ currentModuleId: moduleId, currentLessonId: lessonId });
      },

      isLessonComplete: (moduleId, lessonId) => {
        return get().completedLessons.some(
          (l) => l.moduleId === moduleId && l.lessonId === lessonId
        );
      },

      getModuleProgress: (moduleId, totalLessons) => {
        const completed = get().completedLessons.filter(
          (l) => l.moduleId === moduleId
        ).length;
        return Math.round((completed / totalLessons) * 100);
      },

      reset: () => set(initialState),
    }),
    {
      name: "buildright-progress",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
