import { Module, Lesson } from "./types";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";
import { module7 } from "./module7";

export const modules: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
];

export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId);
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModule(moduleId);
  return module?.lessons.find((l) => l.id === lessonId);
}

export function getNextLesson(
  moduleId: string,
  lessonId: string
): { moduleId: string; lessonId: string } | null {
  const module = getModule(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex((l) => l.id === lessonId);
  if (currentIndex === -1) return null;

  // If there's a next lesson in this module
  if (currentIndex < module.lessons.length - 1) {
    return {
      moduleId,
      lessonId: module.lessons[currentIndex + 1].id,
    };
  }

  // Otherwise, check for next module
  const moduleIndex = modules.findIndex((m) => m.id === moduleId);
  if (moduleIndex < modules.length - 1) {
    const nextModule = modules[moduleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return {
        moduleId: nextModule.id,
        lessonId: nextModule.lessons[0].id,
      };
    }
  }

  return null;
}

export function getPreviousLesson(
  moduleId: string,
  lessonId: string
): { moduleId: string; lessonId: string } | null {
  const module = getModule(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex((l) => l.id === lessonId);
  if (currentIndex === -1) return null;

  // If there's a previous lesson in this module
  if (currentIndex > 0) {
    return {
      moduleId,
      lessonId: module.lessons[currentIndex - 1].id,
    };
  }

  // Otherwise, check for previous module
  const moduleIndex = modules.findIndex((m) => m.id === moduleId);
  if (moduleIndex > 0) {
    const prevModule = modules[moduleIndex - 1];
    if (prevModule.lessons.length > 0) {
      return {
        moduleId: prevModule.id,
        lessonId: prevModule.lessons[prevModule.lessons.length - 1].id,
      };
    }
  }

  return null;
}

export * from "./types";
