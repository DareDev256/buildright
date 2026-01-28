import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface BudgetInputs {
  squareFootage: number;
  finishLevel: "budget" | "mid" | "high";
  county: string;
  stories: number;
  hasBasement: boolean;
  garageSpaces: number;
}

export interface TimelineInputs {
  buildType: "custom" | "semi-custom" | "spec";
  squareFootage: number;
  county: string;
}

export interface PermitChecklistItem {
  id: string;
  name: string;
  completed: boolean;
  link?: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  obtained: boolean;
  notes?: string;
}

export interface Project {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  budgetInputs?: BudgetInputs;
  budgetResult?: Record<string, number>;
  timelineInputs?: TimelineInputs;
  timelineResult?: Record<string, unknown>;
  permitChecklist?: PermitChecklistItem[];
  documents?: DocumentItem[];
  documents_tracked?: Record<string, unknown>; // For document tracker tool
}

interface ProjectState {
  projects: Project[];
  activeProjectId: string | null;

  // Actions
  createProject: (name: string) => string;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setActiveProject: (id: string | null) => void;
  getActiveProject: () => Project | undefined;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      projects: [],
      activeProjectId: null,

      createProject: (name) => {
        const id = `project-${Date.now()}`;
        const now = new Date().toISOString();

        set((state) => ({
          projects: [
            ...state.projects,
            {
              id,
              name,
              createdAt: now,
              updatedAt: now,
            },
          ],
          activeProjectId: id,
        }));

        return id;
      },

      updateProject: (id, updates) => {
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id
              ? { ...p, ...updates, updatedAt: new Date().toISOString() }
              : p
          ),
        }));
      },

      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
          activeProjectId:
            state.activeProjectId === id ? null : state.activeProjectId,
        }));
      },

      setActiveProject: (id) => {
        set({ activeProjectId: id });
      },

      getActiveProject: () => {
        const { projects, activeProjectId } = get();
        return projects.find((p) => p.id === activeProjectId);
      },
    }),
    {
      name: "buildright-projects",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
