import "react-native-url-polyfill/dist/polyfill";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// TODO: Replace with your Supabase project URL and anon key
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database types (will be generated from Supabase later)
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          profile: {
            name?: string;
            state?: string;
            goals?: string[];
          };
          subscription_tier: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["users"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          module_id: string;
          lesson_id: string;
          completed_at: string;
          quiz_score: number | null;
        };
        Insert: Omit<Database["public"]["Tables"]["user_progress"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["user_progress"]["Insert"]>;
      };
      user_projects: {
        Row: {
          id: string;
          user_id: string;
          project_name: string;
          budget_inputs: Record<string, unknown>;
          timeline_inputs: Record<string, unknown>;
          checklist_state: Record<string, unknown>;
          documents_tracked: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["user_projects"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["user_projects"]["Insert"]>;
      };
    };
  };
};
