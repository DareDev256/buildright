import { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Lock, ChevronRight } from "lucide-react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { modules } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import FadeInView from "../../src/components/FadeInView";
import AnimatedCounter from "../../src/components/AnimatedCounter";
import { WARM_BG, COLORS, MODULE_THEMES, card3D } from "../../src/theme";

const heroImage = require("../../assets/hero-home.png");

function AnimatedProgressBar({
  progress,
  delay = 0,
  color = "#FFC800",
  height = 10,
}: {
  progress: number;
  delay?: number;
  color?: string;
  height?: number;
}) {
  const width = useSharedValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      width.value = withTiming(progress, {
        duration: 800,
        easing: Easing.out(Easing.cubic),
      });
    }, delay);
    return () => clearTimeout(timeout);
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <Animated.View
      style={[
        { backgroundColor: color, borderRadius: height / 2, height },
        animatedStyle,
      ]}
    />
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { completedLessons } = useProgressStore();

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completed = Object.values(completedLessons).flat().length;
  const overallProgress =
    totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  const currentModule =
    modules.find((m) => {
      const moduleLessons = completedLessons[m.id] || [];
      return moduleLessons.length < m.lessons.length;
    }) || modules[0];

  const currentModuleProgress = currentModule
    ? Math.round(
        ((completedLessons[currentModule.id]?.length || 0) /
          currentModule.lessons.length) *
          100
      )
    : 0;

  const completedInModule = completedLessons[currentModule.id] || [];
  const nextLesson = currentModule.lessons.find(
    (l) => !completedInModule.includes(l.id)
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WARM_BG }} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Header ── */}
        <FadeInView delay={0} duration={500} direction="down">
          <View className="px-5 pt-4 pb-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text style={{ fontSize: 34 }}>🏠</Text>
              <View className="ml-2.5">
                <Text
                  style={{ color: COLORS.hare, fontSize: 12, fontWeight: "600" }}
                >
                  WELCOME TO
                </Text>
                <Text
                  style={{
                    color: COLORS.eel,
                    fontSize: 24,
                    fontWeight: "800",
                    marginTop: -2,
                  }}
                >
                  BuildRight
                </Text>
              </View>
            </View>
            {/* Streak badge — 3D */}
            <View style={card3D(COLORS.tigerOrange.face, COLORS.tigerOrange.bottom, 20)}>
              <View className="flex-row items-center px-3.5 py-1.5">
                <Text style={{ fontSize: 20 }}>🔥</Text>
                <AnimatedCounter
                  value={completed}
                  className="text-white font-extrabold text-base ml-1.5"
                />
              </View>
            </View>
          </View>
        </FadeInView>

        {/* ── Continue Learning Card — 3D blue ── */}
        <FadeInView delay={100} duration={500} direction="down">
          <View className="mx-5 mb-5">
            <View
              style={{
                ...card3D(COLORS.macawBlue.face, COLORS.macawBlue.bottom, 24),
                overflow: "hidden",
              }}
            >
              <Image
                source={heroImage}
                style={{ width: "100%", height: 140 }}
                resizeMode="cover"
              />
              {/* Fade overlay between image and content */}
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 115,
                  height: 30,
                  backgroundColor: COLORS.macawBlue.face,
                  opacity: 0.85,
                }}
              />

              <View className="px-5 pb-5 -mt-1">
                <Text
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 11,
                    fontWeight: "800",
                    letterSpacing: 1.2,
                    marginBottom: 4,
                  }}
                >
                  CONTINUE LEARNING
                </Text>
                <Text
                  className="text-white"
                  style={{ fontSize: 20, fontWeight: "800" }}
                >
                  {currentModule.title}
                </Text>
                {nextLesson && (
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 13,
                      marginTop: 2,
                      marginBottom: 12,
                    }}
                    numberOfLines={1}
                  >
                    Up next: {nextLesson.title}
                  </Text>
                )}

                {/* Progress bar — gold on dark track */}
                <View className="flex-row items-center mb-4">
                  <View
                    style={{
                      flex: 1,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: "rgba(0,0,0,0.2)",
                    }}
                  >
                    <AnimatedProgressBar
                      progress={currentModuleProgress}
                      delay={600}
                      color={COLORS.beeYellow.face}
                      height={12}
                    />
                  </View>
                  <Text className="text-white font-extrabold text-sm ml-3">
                    {currentModuleProgress}%
                  </Text>
                </View>

                {/* Big green CONTINUE button — 3D */}
                <AnimatedPressable
                  onPress={() =>
                    nextLesson
                      ? router.push(`/lesson/${nextLesson.id}` as any)
                      : router.push(`/learn/${currentModule.id}` as any)
                  }
                  scaleValue={0.95}
                >
                  <View
                    style={{
                      ...card3D(
                        COLORS.featherGreen.face,
                        COLORS.featherGreen.bottom,
                        14
                      ),
                      paddingVertical: 14,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: 16,
                        letterSpacing: 1,
                      }}
                    >
                      CONTINUE
                    </Text>
                  </View>
                </AnimatedPressable>
              </View>
            </View>
          </View>
        </FadeInView>

        {/* ── Stats Row — vibrant 3D cards ── */}
        <FadeInView delay={200} duration={400} direction="up">
          <View className="flex-row mx-5 mb-5" style={{ gap: 10 }}>
            {/* Done */}
            <View className="flex-1">
              <View
                style={{
                  ...card3D(COLORS.featherGreen.face, COLORS.featherGreen.bottom),
                  paddingVertical: 14,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28 }}>✅</Text>
                <AnimatedCounter
                  value={completed}
                  className="text-white text-2xl font-extrabold"
                  style={{ marginTop: 4 }}
                />
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  Done
                </Text>
              </View>
            </View>
            {/* Lessons */}
            <View className="flex-1">
              <View
                style={{
                  ...card3D(COLORS.macawBlue.face, COLORS.macawBlue.bottom),
                  paddingVertical: 14,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28 }}>📚</Text>
                <AnimatedCounter
                  value={totalLessons}
                  className="text-white text-2xl font-extrabold"
                  style={{ marginTop: 4 }}
                />
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  Lessons
                </Text>
              </View>
            </View>
            {/* Progress */}
            <View className="flex-1">
              <View
                style={{
                  ...card3D(COLORS.foxPurple.face, COLORS.foxPurple.bottom),
                  paddingVertical: 14,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28 }}>🏆</Text>
                <AnimatedCounter
                  value={overallProgress}
                  suffix="%"
                  className="text-white text-2xl font-extrabold"
                  style={{ marginTop: 4 }}
                />
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  Progress
                </Text>
              </View>
            </View>
          </View>
        </FadeInView>

        {/* ── Georgia Badge — 3D peach ── */}
        <FadeInView delay={250} duration={400} direction="up">
          <View className="mx-5 mb-5">
            <View
              style={{
                ...card3D(COLORS.cardinalRed.face, COLORS.cardinalRed.bottom, 14),
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}
            >
              <Text style={{ fontSize: 24 }}>🍑</Text>
              <View className="ml-3 flex-1">
                <Text style={{ color: "white", fontWeight: "800", fontSize: 14 }}>
                  Georgia Edition
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 12,
                    marginTop: 1,
                  }}
                >
                  Local codes, costs & requirements
                </Text>
              </View>
            </View>
          </View>
        </FadeInView>

        {/* ── Quick Tools — 3D colored cards ── */}
        <FadeInView delay={300} duration={400} direction="up">
          <View className="mb-5">
            <View className="px-5 flex-row items-center justify-between mb-3">
              <Text
                style={{ fontSize: 18, fontWeight: "800", color: COLORS.eel }}
              >
                🧰 Quick Tools
              </Text>
              <AnimatedPressable onPress={() => router.push("/tools" as any)}>
                <Text style={{ color: COLORS.macawBlue.face, fontWeight: "700" }}>
                  See all
                </Text>
              </AnimatedPressable>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
            >
              <AnimatedPressable
                onPress={() =>
                  router.push("/tools/budget-calculator" as any)
                }
              >
                <View
                  style={{
                    ...card3D(COLORS.beeYellow.face, COLORS.beeYellow.bottom, 20),
                    width: 140,
                    padding: 16,
                  }}
                >
                  <Text style={{ fontSize: 32, marginBottom: 8 }}>💰</Text>
                  <Text
                    style={{ color: "white", fontWeight: "800", fontSize: 15 }}
                  >
                    Budget
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: "600",
                      fontSize: 12,
                      marginTop: 2,
                    }}
                  >
                    $120–$450/sqft
                  </Text>
                </View>
              </AnimatedPressable>

              <AnimatedPressable
                onPress={() =>
                  router.push("/tools/permit-checklist" as any)
                }
              >
                <View
                  style={{
                    ...card3D(
                      COLORS.foxPurple.face,
                      COLORS.foxPurple.bottom,
                      20
                    ),
                    width: 140,
                    padding: 16,
                  }}
                >
                  <Text style={{ fontSize: 32, marginBottom: 8 }}>📋</Text>
                  <Text
                    style={{ color: "white", fontWeight: "800", fontSize: 15 }}
                  >
                    Permits
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: "600",
                      fontSize: 12,
                      marginTop: 2,
                    }}
                  >
                    8 GA permits
                  </Text>
                </View>
              </AnimatedPressable>

              <AnimatedPressable
                onPress={() =>
                  router.push("/tools/timeline-estimator" as any)
                }
              >
                <View
                  style={{
                    ...card3D(
                      COLORS.tigerOrange.face,
                      COLORS.tigerOrange.bottom,
                      20
                    ),
                    width: 140,
                    padding: 16,
                  }}
                >
                  <Text style={{ fontSize: 32, marginBottom: 8 }}>⏱️</Text>
                  <Text
                    style={{ color: "white", fontWeight: "800", fontSize: 15 }}
                  >
                    Timeline
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: "600",
                      fontSize: 12,
                      marginTop: 2,
                    }}
                  >
                    6–14 months
                  </Text>
                </View>
              </AnimatedPressable>
            </ScrollView>
          </View>
        </FadeInView>

        {/* ── Your Journey — module roadmap ── */}
        <FadeInView delay={400} duration={400} direction="up">
          <View className="px-5 mb-5">
            <View className="flex-row items-center justify-between mb-3">
              <Text
                style={{ fontSize: 18, fontWeight: "800", color: COLORS.eel }}
              >
                🗺️ Your Journey
              </Text>
              <AnimatedPressable onPress={() => router.push("/learn" as any)}>
                <View className="flex-row items-center">
                  <Text
                    style={{
                      color: COLORS.macawBlue.face,
                      fontWeight: "700",
                      marginRight: 2,
                    }}
                  >
                    See all
                  </Text>
                  <ChevronRight size={16} color={COLORS.macawBlue.face} />
                </View>
              </AnimatedPressable>
            </View>

            {/* Overall progress */}
            <View
              style={{
                ...card3D(COLORS.snow.face, COLORS.snow.bottom, 16),
                padding: 14,
                marginBottom: 12,
              }}
            >
              <View className="flex-row items-center justify-between mb-2">
                <Text style={{ color: COLORS.hare, fontWeight: "700", fontSize: 12 }}>
                  OVERALL PROGRESS
                </Text>
                <Text
                  style={{
                    color: COLORS.macawBlue.face,
                    fontWeight: "800",
                    fontSize: 14,
                  }}
                >
                  {overallProgress}%
                </Text>
              </View>
              <View
                style={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#E5E5E5",
                }}
              >
                <AnimatedProgressBar
                  progress={overallProgress}
                  delay={800}
                  color={COLORS.macawBlue.face}
                />
              </View>
            </View>

            {/* Module rows */}
            <View
              style={{
                ...card3D(COLORS.snow.face, COLORS.snow.bottom, 20),
                overflow: "hidden",
              }}
            >
              {modules.map((module, index) => {
                const theme = MODULE_THEMES[module.id] || MODULE_THEMES["1"];
                const moduleLessons = completedLessons[module.id] || [];
                const isComplete =
                  moduleLessons.length >= module.lessons.length &&
                  module.lessons.length > 0;
                const isInProgress = moduleLessons.length > 0 && !isComplete;
                const isCurrent = module.id === currentModule.id;
                const hasLessons = module.lessons.length > 0;
                const progress =
                  module.lessons.length > 0
                    ? (moduleLessons.length / module.lessons.length) * 100
                    : 0;

                return (
                  <AnimatedPressable
                    key={module.id}
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
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 14,
                        paddingVertical: 14,
                        borderBottomWidth:
                          index !== modules.length - 1 ? 1 : 0,
                        borderBottomColor: "#F0EDE8",
                        backgroundColor: isCurrent
                          ? `${theme.color.face}10`
                          : "transparent",
                      }}
                    >
                      {/* Emoji circle */}
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          backgroundColor: isComplete
                            ? COLORS.featherGreen.face
                            : hasLessons
                            ? `${theme.color.face}20`
                            : "#F0F0F0",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 12,
                          ...(isComplete
                            ? {
                                borderBottomWidth: 3,
                                borderBottomColor: COLORS.featherGreen.bottom,
                              }
                            : {}),
                        }}
                      >
                        {isComplete ? (
                          <Text style={{ fontSize: 22 }}>⭐</Text>
                        ) : (
                          <Text style={{ fontSize: 22, opacity: hasLessons ? 1 : 0.4 }}>
                            {theme.emoji}
                          </Text>
                        )}
                      </View>

                      {/* Content */}
                      <View className="flex-1">
                        <Text
                          style={{
                            fontWeight: "700",
                            fontSize: 15,
                            color: hasLessons ? COLORS.eel : "#D0D0D0",
                          }}
                        >
                          {module.title}
                        </Text>
                        {hasLessons && (
                          <View className="flex-row items-center mt-1">
                            <View
                              style={{
                                flex: 1,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: "#E5E5E5",
                                marginRight: 8,
                                maxWidth: 120,
                              }}
                            >
                              <View
                                style={{
                                  width: `${Math.max(progress, 0)}%`,
                                  height: 6,
                                  borderRadius: 3,
                                  backgroundColor: isComplete
                                    ? COLORS.featherGreen.face
                                    : theme.color.face,
                                }}
                              />
                            </View>
                            <Text
                              style={{
                                color: COLORS.hare,
                                fontSize: 11,
                                fontWeight: "600",
                              }}
                            >
                              {moduleLessons.length}/{module.lessons.length}
                            </Text>
                          </View>
                        )}
                        {!hasLessons && (
                          <Text
                            style={{
                              color: "#D0D0D0",
                              fontSize: 12,
                              marginTop: 2,
                            }}
                          >
                            Coming soon
                          </Text>
                        )}
                      </View>

                      {/* Status badge */}
                      {isCurrent && (
                        <View
                          style={{
                            ...card3D(
                              COLORS.featherGreen.face,
                              COLORS.featherGreen.bottom,
                              10
                            ),
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 10,
                              fontWeight: "800",
                            }}
                          >
                            START
                          </Text>
                        </View>
                      )}
                      {isComplete && (
                        <View
                          style={{
                            ...card3D(
                              COLORS.beeYellow.face,
                              COLORS.beeYellow.bottom,
                              10
                            ),
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 10,
                              fontWeight: "800",
                            }}
                          >
                            DONE
                          </Text>
                        </View>
                      )}
                      {!isCurrent && !isComplete && hasLessons && (
                        <ChevronRight size={18} color="#D0D0D0" />
                      )}
                      {!hasLessons && <Lock size={16} color="#D0D0D0" />}
                    </View>
                  </AnimatedPressable>
                );
              })}
            </View>
          </View>
        </FadeInView>

        {/* ── Disclaimer ── */}
        <FadeInView delay={500} duration={400} direction="none">
          <View className="mx-5 mb-8 mt-2">
            <Text
              style={{
                color: "#C8C8C8",
                fontSize: 10,
                textAlign: "center",
                lineHeight: 14,
              }}
            >
              Educational content only. Always verify requirements with your
              local building department and consult qualified professionals.
            </Text>
          </View>
        </FadeInView>
      </ScrollView>
    </SafeAreaView>
  );
}
