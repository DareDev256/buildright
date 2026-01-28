import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, CheckCircle, Circle, Lock, Clock } from "lucide-react-native";
import { getModule } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";

export default function ModuleDetailScreen() {
  const router = useRouter();
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();
  const { isLessonComplete, completedLessons } = useProgressStore();

  const module = getModule(moduleId || "1");

  if (!module) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Module not found</Text>
      </SafeAreaView>
    );
  }

  const completedCount = module.lessons.filter((l) =>
    isLessonComplete(module.id, l.id)
  ).length;
  const progressPercent =
    module.lessons.length > 0
      ? Math.round((completedCount / module.lessons.length) * 100)
      : 0;

  const isModuleLocked = module.lessons.length === 0;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-primary-600 pb-6">
        <View className="flex-row items-center px-4 py-3">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold flex-1">
            Module {module.id}
          </Text>
        </View>

        <View className="px-4">
          <Text className="text-white text-2xl font-bold mb-2">{module.title}</Text>
          <Text className="text-primary-100 mb-4">{module.description}</Text>

          {/* Progress */}
          {!isModuleLocked && (
            <View className="bg-primary-500 rounded-xl p-4">
              <View className="flex-row justify-between mb-2">
                <Text className="text-white font-medium">Progress</Text>
                <Text className="text-white font-medium">{progressPercent}%</Text>
              </View>
              <View className="bg-primary-400 rounded-full h-3">
                <View
                  className="bg-white rounded-full h-3"
                  style={{ width: `${progressPercent}%` }}
                />
              </View>
              <Text className="text-primary-100 text-sm mt-2">
                {completedCount} of {module.lessons.length} lessons completed
              </Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {isModuleLocked ? (
          <View className="bg-white rounded-xl border border-gray-200 p-8 items-center">
            <Lock size={48} color="#d1d5db" />
            <Text className="text-gray-500 text-lg font-medium mt-4">
              Coming Soon
            </Text>
            <Text className="text-gray-400 text-center mt-2">
              This module's content is being developed. Check back soon!
            </Text>
          </View>
        ) : (
          <View className="gap-3">
            {module.lessons.map((lesson, index) => {
              const isComplete = isLessonComplete(module.id, lesson.id);
              const isFirst = index === 0;
              const previousComplete =
                isFirst || isLessonComplete(module.id, module.lessons[index - 1].id);
              const isAccessible = isFirst || previousComplete || isComplete;

              return (
                <TouchableOpacity
                  key={lesson.id}
                  onPress={() => {
                    if (isAccessible) {
                      router.push(`/lesson/${lesson.id}`);
                    }
                  }}
                  disabled={!isAccessible}
                  className={`bg-white rounded-xl border overflow-hidden ${
                    isAccessible ? "border-gray-200" : "border-gray-100 opacity-60"
                  }`}
                >
                  <View className="flex-row items-center p-4">
                    {/* Status Icon */}
                    <View className="mr-4">
                      {isComplete ? (
                        <View className="w-10 h-10 rounded-full bg-green-500 items-center justify-center">
                          <CheckCircle size={24} color="white" />
                        </View>
                      ) : isAccessible ? (
                        <View className="w-10 h-10 rounded-full bg-primary-100 items-center justify-center">
                          <Text className="text-primary-600 font-bold">
                            {lesson.order}
                          </Text>
                        </View>
                      ) : (
                        <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center">
                          <Lock size={18} color="#9ca3af" />
                        </View>
                      )}
                    </View>

                    {/* Content */}
                    <View className="flex-1">
                      <Text
                        className={`font-semibold ${
                          isAccessible ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {lesson.title}
                      </Text>
                      <Text
                        className={`text-sm mt-0.5 ${
                          isAccessible ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {lesson.subtitle}
                      </Text>
                      <View className="flex-row items-center mt-2">
                        <Clock size={14} color="#9ca3af" />
                        <Text className="text-gray-400 text-xs ml-1">
                          {lesson.duration}
                        </Text>
                        {lesson.quiz && lesson.quiz.length > 0 && (
                          <View className="bg-purple-100 rounded px-2 py-0.5 ml-2">
                            <Text className="text-purple-700 text-xs font-medium">
                              Quiz
                            </Text>
                          </View>
                        )}
                        {lesson.georgiaNote && (
                          <View className="bg-red-100 rounded px-2 py-0.5 ml-2">
                            <Text className="text-red-700 text-xs font-medium">GA</Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>

                  {/* Completed badge */}
                  {isComplete && (
                    <View className="bg-green-50 px-4 py-2 border-t border-green-100">
                      <Text className="text-green-700 text-xs font-medium">
                        Completed
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Module Georgia Note */}
        {!isModuleLocked && (
          <View className="bg-red-50 border border-red-200 rounded-lg p-3 mt-6 mb-8">
            <Text className="text-red-800 text-sm">
              This module contains Georgia-specific content including state
              regulations, licensing requirements, and local market information.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
