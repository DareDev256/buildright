import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Lock, ChevronRight } from "lucide-react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { modules } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import { WARM_BG, COLORS, MODULE_THEMES, card3D } from "../../src/theme";

export default function LearnScreen() {
  const router = useRouter();
  const { completedLessons } = useProgressStore();

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalCompleted = Object.values(completedLessons).flat().length;
  const overallPct =
    totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WARM_BG }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <Text
            style={{ fontSize: 30, fontWeight: "800", color: COLORS.eel }}
          >
            📚 Learn
          </Text>
          <Text
            style={{
              color: COLORS.hare,
              fontSize: 14,
              fontWeight: "600",
              marginTop: 4,
            }}
          >
            {totalCompleted} of {totalLessons} lessons completed
          </Text>
        </View>

        {/* Overall progress — 3D white card */}
        <View className="mx-5 mt-2 mb-5">
          <View
            style={{
              ...card3D(COLORS.snow.face, COLORS.snow.bottom, 14),
              padding: 14,
            }}
          >
            <View className="flex-row items-center justify-between mb-2">
              <Text
                style={{
                  color: COLORS.hare,
                  fontWeight: "700",
                  fontSize: 12,
                }}
              >
                OVERALL PROGRESS
              </Text>
              <Text
                style={{
                  color: COLORS.macawBlue.face,
                  fontWeight: "800",
                  fontSize: 14,
                }}
              >
                {overallPct}%
              </Text>
            </View>
            <View
              style={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#E5E5E5",
              }}
            >
              <View
                style={{
                  width: `${overallPct}%`,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: COLORS.macawBlue.face,
                }}
              />
            </View>
          </View>
        </View>

        {/* Module Cards */}
        <View className="px-5 mb-8" style={{ gap: 14 }}>
          {modules.map((module, index) => {
            const theme = MODULE_THEMES[module.id] || MODULE_THEMES["1"];
            const moduleLessons = completedLessons[module.id] || [];
            const lessonCount = module.lessons.length;
            const completedCount = moduleLessons.length;
            const isComplete =
              completedCount >= lessonCount && lessonCount > 0;
            const isInProgress = completedCount > 0 && !isComplete;
            const hasLessons = lessonCount > 0;
            const progress =
              lessonCount > 0 ? (completedCount / lessonCount) * 100 : 0;

            return (
              <Animated.View
                key={module.id}
                entering={FadeInDown.delay(index * 80)
                  .duration(400)
                  .springify()
                  .damping(16)}
              >
                <AnimatedPressable
                  onPress={() =>
                    hasLessons
                      ? router.push(`/learn/${module.id}` as any)
                      : null
                  }
                  disabled={!hasLessons}
                  haptic={hasLessons}
                >
                  <View
                    style={{
                      ...card3D(COLORS.snow.face, COLORS.snow.bottom, 20),
                      overflow: "hidden",
                      opacity: hasLessons ? 1 : 0.6,
                    }}
                  >
                    {/* Colored top accent bar */}
                    <View
                      style={{
                        height: 5,
                        backgroundColor: hasLessons
                          ? theme.color.face
                          : "#E5E5E5",
                      }}
                    />

                    <View style={{ padding: 16 }}>
                      <View className="flex-row items-start">
                        {/* Big emoji circle */}
                        <View
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 28,
                            backgroundColor: isComplete
                              ? COLORS.featherGreen.face
                              : hasLessons
                              ? `${theme.color.face}18`
                              : "#F0F0F0",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 14,
                            ...(isComplete
                              ? {
                                  borderBottomWidth: 3,
                                  borderBottomColor:
                                    COLORS.featherGreen.bottom,
                                }
                              : hasLessons
                              ? {
                                  borderBottomWidth: 3,
                                  borderBottomColor: `${theme.color.face}30`,
                                }
                              : {}),
                          }}
                        >
                          {isComplete ? (
                            <Text style={{ fontSize: 26 }}>⭐</Text>
                          ) : (
                            <Text
                              style={{
                                fontSize: 26,
                                opacity: hasLessons ? 1 : 0.4,
                              }}
                            >
                              {theme.emoji}
                            </Text>
                          )}
                        </View>

                        {/* Content */}
                        <View className="flex-1">
                          <View className="flex-row items-center">
                            <Text
                              style={{
                                fontSize: 11,
                                fontWeight: "800",
                                color: hasLessons
                                  ? theme.color.face
                                  : "#D0D0D0",
                                letterSpacing: 0.5,
                              }}
                            >
                              MODULE {module.id}
                            </Text>
                            {isComplete && (
                              <View
                                style={{
                                  ...card3D(
                                    COLORS.beeYellow.face,
                                    COLORS.beeYellow.bottom,
                                    8
                                  ),
                                  marginLeft: 8,
                                  paddingHorizontal: 8,
                                  paddingVertical: 2,
                                }}
                              >
                                <Text
                                  style={{
                                    color: "white",
                                    fontSize: 9,
                                    fontWeight: "800",
                                  }}
                                >
                                  COMPLETE
                                </Text>
                              </View>
                            )}
                            {isInProgress && (
                              <View
                                style={{
                                  ...card3D(
                                    COLORS.macawBlue.face,
                                    COLORS.macawBlue.bottom,
                                    8
                                  ),
                                  marginLeft: 8,
                                  paddingHorizontal: 8,
                                  paddingVertical: 2,
                                }}
                              >
                                <Text
                                  style={{
                                    color: "white",
                                    fontSize: 9,
                                    fontWeight: "800",
                                  }}
                                >
                                  IN PROGRESS
                                </Text>
                              </View>
                            )}
                          </View>

                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "800",
                              color: hasLessons ? COLORS.eel : "#D0D0D0",
                              marginTop: 4,
                            }}
                          >
                            {module.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              color: hasLessons ? COLORS.hare : "#D0D0D0",
                              marginTop: 2,
                              lineHeight: 18,
                            }}
                            numberOfLines={2}
                          >
                            {module.description}
                          </Text>

                          {/* Progress bar */}
                          {hasLessons && (
                            <View className="mt-3">
                              <View className="flex-row items-center justify-between mb-1.5">
                                <Text
                                  style={{
                                    color: COLORS.hare,
                                    fontSize: 11,
                                    fontWeight: "600",
                                  }}
                                >
                                  {completedCount}/{lessonCount} lessons
                                </Text>
                                <Text
                                  style={{
                                    color: theme.color.face,
                                    fontSize: 12,
                                    fontWeight: "800",
                                  }}
                                >
                                  {Math.round(progress)}%
                                </Text>
                              </View>
                              <View
                                style={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: "#E5E5E5",
                                }}
                              >
                                <View
                                  style={{
                                    width: `${Math.max(progress, 0)}%`,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: isComplete
                                      ? COLORS.featherGreen.face
                                      : theme.color.face,
                                  }}
                                />
                              </View>
                            </View>
                          )}

                          {!hasLessons && (
                            <View className="flex-row items-center mt-3">
                              <Text style={{ fontSize: 14 }}>🔒</Text>
                              <Text
                                style={{
                                  color: "#D0D0D0",
                                  fontSize: 12,
                                  fontWeight: "600",
                                  marginLeft: 6,
                                }}
                              >
                                Coming soon
                              </Text>
                            </View>
                          )}
                        </View>

                        {/* Arrow */}
                        {hasLessons && (
                          <View className="ml-2 mt-2">
                            <ChevronRight size={20} color="#D0D0D0" />
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </AnimatedPressable>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
