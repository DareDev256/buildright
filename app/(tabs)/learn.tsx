import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ChevronRight,
  Lock,
  CheckCircle2,
  BookOpen,
} from "lucide-react-native";
import { modules } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";

const moduleEmojis: Record<string, string> = {
  "1": "🏗️",
  "2": "🏡",
  "3": "💰",
  "4": "📐",
  "5": "📋",
  "6": "🔨",
  "7": "🎉",
};

const moduleColors: Record<string, { bg: string; border: string; light: string; text: string }> = {
  "1": { bg: "bg-blue-600", border: "border-blue-100", light: "bg-blue-50", text: "text-blue-600" },
  "2": { bg: "bg-emerald-600", border: "border-emerald-100", light: "bg-emerald-50", text: "text-emerald-600" },
  "3": { bg: "bg-amber-600", border: "border-amber-100", light: "bg-amber-50", text: "text-amber-600" },
  "4": { bg: "bg-violet-600", border: "border-violet-100", light: "bg-violet-50", text: "text-violet-600" },
  "5": { bg: "bg-rose-600", border: "border-rose-100", light: "bg-rose-50", text: "text-rose-600" },
  "6": { bg: "bg-orange-600", border: "border-orange-100", light: "bg-orange-50", text: "text-orange-600" },
  "7": { bg: "bg-teal-600", border: "border-teal-100", light: "bg-teal-50", text: "text-teal-600" },
};

export default function LearnScreen() {
  const router = useRouter();
  const { completedLessons } = useProgressStore();

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalCompleted = Object.values(completedLessons).flat().length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <Text className="text-3xl font-extrabold text-gray-900">Learn</Text>
          <Text className="text-gray-500 mt-1">
            {totalCompleted} of {totalLessons} lessons completed
          </Text>
        </View>

        {/* Overall progress bar */}
        <View className="mx-5 mt-2 mb-5">
          <View className="bg-gray-200 rounded-full h-2.5">
            <View
              className="bg-blue-600 rounded-full h-2.5"
              style={{
                width: `${totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0}%`,
              }}
            />
          </View>
        </View>

        {/* Module Cards */}
        <View className="px-5 gap-4 mb-8">
          {modules.map((module) => {
            const moduleLessons = completedLessons[module.id] || [];
            const lessonCount = module.lessons.length;
            const completedCount = moduleLessons.length;
            const isComplete = completedCount >= lessonCount && lessonCount > 0;
            const isInProgress = completedCount > 0 && !isComplete;
            const hasLessons = lessonCount > 0;
            const progress = lessonCount > 0 ? (completedCount / lessonCount) * 100 : 0;
            const colors = moduleColors[module.id] || moduleColors["1"];

            return (
              <TouchableOpacity
                key={module.id}
                onPress={() => hasLessons ? router.push(`/learn/${module.id}` as any) : null}
                activeOpacity={hasLessons ? 0.8 : 1}
                className={`bg-white rounded-3xl border ${hasLessons ? colors.border : "border-gray-100"} overflow-hidden`}
              >
                <View className="p-5">
                  <View className="flex-row items-start">
                    {/* Emoji circle */}
                    <View
                      className={`w-14 h-14 rounded-2xl items-center justify-center mr-4 ${
                        isComplete
                          ? "bg-green-100"
                          : hasLessons
                          ? colors.light
                          : "bg-gray-50"
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle2 size={28} color="#22c55e" />
                      ) : (
                        <Text className="text-2xl">{moduleEmojis[module.id] || "📚"}</Text>
                      )}
                    </View>

                    {/* Content */}
                    <View className="flex-1">
                      <View className="flex-row items-center">
                        <Text className={`text-xs font-bold ${hasLessons ? colors.text : "text-gray-300"} uppercase tracking-wide`}>
                          Module {module.id}
                        </Text>
                        {isComplete && (
                          <View className="bg-green-100 rounded-full px-2 py-0.5 ml-2">
                            <Text className="text-green-700 text-xs font-bold">Complete</Text>
                          </View>
                        )}
                        {isInProgress && (
                          <View className="bg-blue-100 rounded-full px-2 py-0.5 ml-2">
                            <Text className="text-blue-700 text-xs font-bold">In Progress</Text>
                          </View>
                        )}
                      </View>
                      <Text
                        className={`text-lg font-bold mt-1 ${
                          hasLessons ? "text-gray-900" : "text-gray-300"
                        }`}
                      >
                        {module.title}
                      </Text>
                      <Text
                        className={`text-sm mt-0.5 ${hasLessons ? "text-gray-500" : "text-gray-300"}`}
                      >
                        {module.description}
                      </Text>

                      {/* Progress */}
                      {hasLessons && (
                        <View className="mt-3">
                          <View className="flex-row items-center justify-between mb-1.5">
                            <Text className="text-xs text-gray-400 font-medium">
                              {completedCount}/{lessonCount} lessons
                            </Text>
                            <Text className={`text-xs font-bold ${colors.text}`}>
                              {Math.round(progress)}%
                            </Text>
                          </View>
                          <View className="bg-gray-100 rounded-full h-2">
                            <View
                              className={`${isComplete ? "bg-green-500" : colors.bg} rounded-full h-2`}
                              style={{ width: `${Math.max(progress, 0)}%` }}
                            />
                          </View>
                        </View>
                      )}

                      {!hasLessons && (
                        <View className="flex-row items-center mt-3">
                          <Lock size={14} color="#d1d5db" />
                          <Text className="text-gray-300 text-sm ml-1.5">Coming soon</Text>
                        </View>
                      )}
                    </View>

                    {/* Arrow */}
                    {hasLessons && (
                      <View className="ml-2 mt-1">
                        <ChevronRight size={20} color="#d1d5db" />
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
