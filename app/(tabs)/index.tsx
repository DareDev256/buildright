import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ChevronRight,
  BookOpen,
  Calculator,
  ClipboardCheck,
  Flame,
  Trophy,
  Star,
  Lock,
  CheckCircle2,
  PlayCircle,
  Sparkles,
} from "lucide-react-native";
import { modules } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";

function ProgressRing({ progress, size = 48, strokeWidth = 4 }: { progress: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      {/* Background circle */}
      <View
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: "#e5e7eb",
        }}
      />
      {/* Progress circle - simplified since SVG isn't available */}
      <View
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: progress > 0 ? "#3b82f6" : "#e5e7eb",
          borderTopColor: progress < 100 ? "transparent" : "#3b82f6",
          borderRightColor: progress < 50 ? "transparent" : "#3b82f6",
          borderBottomColor: progress < 75 ? "transparent" : "#3b82f6",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <Text className="text-xs font-bold text-gray-700">{Math.round(progress)}%</Text>
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { completedLessons } = useProgressStore();

  // Calculate overall progress
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completed = Object.values(completedLessons).flat().length;
  const overallProgress = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  // Find current module
  const currentModule = modules.find((m) => {
    const moduleLessons = completedLessons[m.id] || [];
    return moduleLessons.length < m.lessons.length;
  }) || modules[0];

  const currentModuleProgress = currentModule
    ? Math.round(
        ((completedLessons[currentModule.id]?.length || 0) / currentModule.lessons.length) * 100
      )
    : 0;

  // Find next lesson
  const completedInModule = completedLessons[currentModule.id] || [];
  const nextLesson = currentModule.lessons.find(
    (l) => !completedInModule.includes(l.id)
  );

  const moduleEmojis: Record<string, string> = {
    "1": "🏗️",
    "2": "🏡",
    "3": "💰",
    "4": "📐",
    "5": "📋",
    "6": "🔨",
    "7": "🎉",
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-gray-500 font-medium">Welcome to</Text>
              <Text className="text-3xl font-extrabold text-gray-900 -mt-1">
                BuildRight
              </Text>
            </View>
            <View className="flex-row items-center gap-3">
              <View className="flex-row items-center bg-orange-100 rounded-full px-3 py-1.5">
                <Flame size={16} color="#f97316" />
                <Text className="text-orange-600 font-bold text-sm ml-1">
                  {completed}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Georgia Badge */}
        <View className="mx-5 mt-2 mb-4">
          <View className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 flex-row items-center">
            <View className="bg-red-600 rounded-xl w-9 h-9 items-center justify-center mr-3">
              <Text className="text-white text-xs font-extrabold">GA</Text>
            </View>
            <View className="flex-1">
              <Text className="text-red-900 font-semibold text-sm">Georgia Edition</Text>
              <Text className="text-red-600 text-xs">Local codes, costs & requirements</Text>
            </View>
          </View>
        </View>

        {/* Continue Learning Card */}
        <TouchableOpacity
          onPress={() => {
            if (nextLesson) {
              router.push(`/lesson/${nextLesson.id}` as any);
            } else {
              router.push(`/learn/${currentModule.id}` as any);
            }
          }}
          activeOpacity={0.9}
          className="mx-5 mb-5"
        >
          <View className="bg-blue-600 rounded-3xl p-5 overflow-hidden">
            {/* Decorative circles */}
            <View
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500 opacity-50"
            />
            <View
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blue-700 opacity-30"
            />

            <View className="flex-row items-start justify-between">
              <View className="flex-1 mr-4">
                <View className="flex-row items-center mb-2">
                  <PlayCircle size={18} color="#93c5fd" />
                  <Text className="text-blue-200 text-sm font-medium ml-1.5">
                    Continue Learning
                  </Text>
                </View>
                <Text className="text-white text-xl font-bold mb-1">
                  {currentModule.title}
                </Text>
                {nextLesson && (
                  <Text className="text-blue-200 text-sm" numberOfLines={1}>
                    Next: {nextLesson.title}
                  </Text>
                )}

                {/* Progress bar */}
                <View className="mt-4 flex-row items-center">
                  <View className="flex-1 bg-blue-800 rounded-full h-2.5 mr-3">
                    <View
                      className="bg-white rounded-full h-2.5"
                      style={{ width: `${currentModuleProgress}%` }}
                    />
                  </View>
                  <Text className="text-white text-sm font-bold">
                    {currentModuleProgress}%
                  </Text>
                </View>
              </View>
              <View className="bg-blue-500 rounded-2xl w-14 h-14 items-center justify-center">
                <Text className="text-2xl">{moduleEmojis[currentModule.id] || "📚"}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Stats Row */}
        <View className="flex-row mx-5 mb-5 gap-3">
          <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100">
            <View className="flex-row items-center mb-2">
              <View className="bg-green-100 rounded-xl w-8 h-8 items-center justify-center">
                <CheckCircle2 size={16} color="#22c55e" />
              </View>
            </View>
            <Text className="text-2xl font-bold text-gray-900">{completed}</Text>
            <Text className="text-gray-500 text-xs font-medium">Completed</Text>
          </View>
          <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100">
            <View className="flex-row items-center mb-2">
              <View className="bg-blue-100 rounded-xl w-8 h-8 items-center justify-center">
                <BookOpen size={16} color="#3b82f6" />
              </View>
            </View>
            <Text className="text-2xl font-bold text-gray-900">{totalLessons}</Text>
            <Text className="text-gray-500 text-xs font-medium">Total Lessons</Text>
          </View>
          <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100">
            <View className="flex-row items-center mb-2">
              <View className="bg-purple-100 rounded-xl w-8 h-8 items-center justify-center">
                <Trophy size={16} color="#a855f7" />
              </View>
            </View>
            <Text className="text-2xl font-bold text-gray-900">{overallProgress}%</Text>
            <Text className="text-gray-500 text-xs font-medium">Progress</Text>
          </View>
        </View>

        {/* Quick Tools */}
        <View className="px-5 mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-3">Quick Tools</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => router.push("/tools/budget-calculator" as any)}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 w-36"
                activeOpacity={0.7}
              >
                <View className="bg-emerald-100 rounded-xl w-10 h-10 items-center justify-center mb-3">
                  <Calculator size={20} color="#059669" />
                </View>
                <Text className="text-gray-900 font-semibold text-sm">Budget</Text>
                <Text className="text-gray-500 text-xs">Estimate costs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/tools/permit-checklist" as any)}
                className="bg-violet-50 border border-violet-100 rounded-2xl p-4 w-36"
                activeOpacity={0.7}
              >
                <View className="bg-violet-100 rounded-xl w-10 h-10 items-center justify-center mb-3">
                  <ClipboardCheck size={20} color="#7c3aed" />
                </View>
                <Text className="text-gray-900 font-semibold text-sm">Permits</Text>
                <Text className="text-gray-500 text-xs">GA checklist</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/tools/timeline-estimator" as any)}
                className="bg-amber-50 border border-amber-100 rounded-2xl p-4 w-36"
                activeOpacity={0.7}
              >
                <View className="bg-amber-100 rounded-xl w-10 h-10 items-center justify-center mb-3">
                  <Sparkles size={20} color="#d97706" />
                </View>
                <Text className="text-gray-900 font-semibold text-sm">Timeline</Text>
                <Text className="text-gray-500 text-xs">Plan your build</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Learning Path */}
        <View className="px-5 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold text-gray-900">Your Journey</Text>
            <TouchableOpacity onPress={() => router.push("/learn" as any)}>
              <Text className="text-blue-600 font-medium text-sm">See all</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
            {modules.map((module, index) => {
              const moduleLessons = completedLessons[module.id] || [];
              const isComplete = moduleLessons.length >= module.lessons.length && module.lessons.length > 0;
              const isInProgress = moduleLessons.length > 0 && !isComplete;
              const isCurrent = module.id === currentModule.id;
              const hasLessons = module.lessons.length > 0;

              return (
                <TouchableOpacity
                  key={module.id}
                  onPress={() => hasLessons ? router.push(`/learn/${module.id}` as any) : null}
                  activeOpacity={hasLessons ? 0.7 : 1}
                  className={`flex-row items-center px-4 py-3.5 ${
                    index !== modules.length - 1 ? "border-b border-gray-50" : ""
                  } ${isCurrent ? "bg-blue-50" : ""}`}
                >
                  {/* Module number circle */}
                  <View
                    className={`w-10 h-10 rounded-2xl items-center justify-center mr-3 ${
                      isComplete
                        ? "bg-green-500"
                        : isCurrent
                        ? "bg-blue-600"
                        : isInProgress
                        ? "bg-blue-400"
                        : "bg-gray-100"
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 size={20} color="white" />
                    ) : (
                      <Text
                        className={`text-base font-bold ${
                          isCurrent || isInProgress ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {module.id}
                      </Text>
                    )}
                  </View>

                  {/* Module info */}
                  <View className="flex-1">
                    <Text
                      className={`font-semibold ${
                        !hasLessons ? "text-gray-300" : isCurrent ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {module.title}
                    </Text>
                    <Text className={`text-xs mt-0.5 ${!hasLessons ? "text-gray-300" : "text-gray-500"}`}>
                      {module.lessons.length} lessons
                      {isInProgress && ` · ${moduleLessons.length} done`}
                    </Text>
                  </View>

                  {/* Status indicator */}
                  {isCurrent && (
                    <View className="bg-blue-600 rounded-full px-2.5 py-1">
                      <Text className="text-white text-xs font-bold">NOW</Text>
                    </View>
                  )}
                  {isComplete && (
                    <View className="bg-green-100 rounded-full px-2.5 py-1">
                      <Text className="text-green-700 text-xs font-bold">DONE</Text>
                    </View>
                  )}
                  {!isCurrent && !isComplete && !isInProgress && hasLessons && (
                    <ChevronRight size={18} color="#d1d5db" />
                  )}
                  {!hasLessons && (
                    <Lock size={16} color="#d1d5db" />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Disclaimer */}
        <View className="mx-5 mb-8">
          <View className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <Text className="text-amber-800 text-xs leading-5">
              ⚠️ Educational content only. Always verify requirements with your local
              building department and consult qualified professionals.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
