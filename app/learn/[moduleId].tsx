import { useEffect } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Lock } from "lucide-react-native";
import Animated, {
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { getModule } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import { WARM_BG, COLORS, MODULE_THEMES, card3D } from "../../src/theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const NODE_SIZE = 72;
const PATH_WIDTH = SCREEN_WIDTH - 40;

type NodePosition = "left" | "center" | "right";

function getNodePosition(index: number): NodePosition {
  const cycle = index % 4;
  if (cycle === 0) return "center";
  if (cycle === 1) return "right";
  if (cycle === 2) return "center";
  return "left";
}

function getXOffset(position: NodePosition): number {
  const halfPath = (PATH_WIDTH - NODE_SIZE) / 2;
  switch (position) {
    case "left":
      return 20;
    case "center":
      return halfPath;
    case "right":
      return PATH_WIDTH - NODE_SIZE - 20;
  }
}

// Pulsing glow for current node
function PulsingGlow({ color }: { color: string }) {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.7, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0.3, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: NODE_SIZE + 20,
          height: NODE_SIZE + 20,
          borderRadius: (NODE_SIZE + 20) / 2,
          backgroundColor: color,
          top: -10,
          left: -10,
        },
        animatedStyle,
      ]}
    />
  );
}

// Solid connector between nodes
function PathConnector({
  fromX,
  fromY,
  toX,
  toY,
  isCompleted,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  isCompleted: boolean;
}) {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <View
      style={{
        position: "absolute",
        left: fromX + NODE_SIZE / 2,
        top: fromY + NODE_SIZE / 2,
        width: distance,
        height: 6,
        borderRadius: 3,
        backgroundColor: isCompleted ? COLORS.featherGreen.face : "#E5E5E5",
        transform: [{ rotate: `${angle}deg` }],
        transformOrigin: "left center",
      }}
    />
  );
}

export default function ModuleDetailScreen() {
  const router = useRouter();
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();
  const { isLessonComplete } = useProgressStore();
  const module = getModule(moduleId || "1");

  if (!module) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: WARM_BG,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.hare, fontSize: 16 }}>
          Module not found
        </Text>
      </SafeAreaView>
    );
  }

  const theme = MODULE_THEMES[module.id] || MODULE_THEMES["1"];
  const completedCount = module.lessons.filter((l) =>
    isLessonComplete(module.id, l.id)
  ).length;
  const progressPercent =
    module.lessons.length > 0
      ? Math.round((completedCount / module.lessons.length) * 100)
      : 0;
  const isModuleLocked = module.lessons.length === 0;
  const currentLessonIndex = module.lessons.findIndex(
    (l) => !isLessonComplete(module.id, l.id)
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WARM_BG }}>
      {/* Header — module themed */}
      <View
        style={{
          backgroundColor: theme.color.face,
          borderBottomWidth: 4,
          borderBottomColor: theme.color.bottom,
          paddingBottom: 24,
        }}
      >
        <View className="flex-row items-center px-4 py-3">
          <AnimatedPressable onPress={() => router.back()} className="mr-3">
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowLeft size={22} color="white" />
            </View>
          </AnimatedPressable>
          <Text
            style={{ fontSize: 28, marginRight: 8 }}
          >
            {theme.emoji}
          </Text>
          <Text
            style={{ color: "white", fontSize: 18, fontWeight: "800", flex: 1 }}
          >
            Module {module.id}
          </Text>
        </View>

        <View className="px-5">
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "800",
              marginBottom: 6,
            }}
          >
            {module.title}
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 14,
              marginBottom: 16,
              lineHeight: 20,
            }}
          >
            {module.description}
          </Text>

          {/* Progress bar */}
          {!isModuleLocked && (
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.15)",
                borderRadius: 12,
                padding: 14,
              }}
            >
              <View className="flex-row justify-between mb-2">
                <Text
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: "700",
                    fontSize: 13,
                  }}
                >
                  {completedCount} of {module.lessons.length} lessons
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "800", fontSize: 14 }}
                >
                  {progressPercent}%
                </Text>
              </View>
              <View
                style={{
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "rgba(0,0,0,0.15)",
                }}
              >
                <View
                  style={{
                    width: `${progressPercent}%`,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: COLORS.beeYellow.face,
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {isModuleLocked ? (
          <View
            style={{
              ...card3D(COLORS.snow.face, COLORS.snow.bottom, 20),
              margin: 20,
              padding: 32,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 48, marginBottom: 12 }}>🔒</Text>
            <Text
              style={{
                color: COLORS.eel,
                fontSize: 18,
                fontWeight: "800",
                marginBottom: 8,
              }}
            >
              Coming Soon
            </Text>
            <Text
              style={{
                color: COLORS.hare,
                fontSize: 14,
                textAlign: "center",
                lineHeight: 20,
              }}
            >
              This module is being developed. Check back soon!
            </Text>
          </View>
        ) : (
          <>
            {/* Game Path */}
            <View style={{ paddingHorizontal: 20, paddingTop: 28 }}>
              <View
                style={{
                  position: "relative",
                  height: module.lessons.length * 120 + 40,
                }}
              >
                {/* Connectors */}
                {module.lessons.map((lesson, index) => {
                  if (index === 0) return null;
                  const prevPos = getNodePosition(index - 1);
                  const currPos = getNodePosition(index);
                  const prevX = getXOffset(prevPos);
                  const currX = getXOffset(currPos);
                  const prevY = (index - 1) * 120 + 20;
                  const currY = index * 120 + 20;
                  const prevComplete = isLessonComplete(
                    module.id,
                    module.lessons[index - 1].id
                  );

                  return (
                    <PathConnector
                      key={`line-${index}`}
                      fromX={prevX}
                      fromY={prevY}
                      toX={currX}
                      toY={currY}
                      isCompleted={prevComplete}
                    />
                  );
                })}

                {/* Nodes */}
                {module.lessons.map((lesson, index) => {
                  const isComplete = isLessonComplete(module.id, lesson.id);
                  const isFirst = index === 0;
                  const previousComplete =
                    isFirst ||
                    isLessonComplete(
                      module.id,
                      module.lessons[index - 1].id
                    );
                  const isAccessible =
                    isFirst || previousComplete || isComplete;
                  const isCurrent = index === currentLessonIndex;
                  const position = getNodePosition(index);
                  const xOffset = getXOffset(position);

                  // Node colors
                  const nodeColor = isComplete
                    ? COLORS.featherGreen
                    : isCurrent
                    ? theme.color
                    : isAccessible
                    ? { face: "#C8DEF0", bottom: "#A8BED0" }
                    : { face: "#E5E5E5", bottom: "#D0D0D0" };

                  return (
                    <Animated.View
                      key={lesson.id}
                      entering={FadeInDown.delay(index * 80)
                        .duration(400)
                        .springify()
                        .damping(14)}
                      style={{
                        position: "absolute",
                        left: xOffset,
                        top: index * 120 + 20,
                        alignItems: "center",
                      }}
                    >
                      {/* Pulsing glow for current */}
                      {isCurrent && <PulsingGlow color={theme.color.face} />}

                      {/* Crown/star decoration for completed */}
                      {isComplete && (
                        <View
                          style={{
                            position: "absolute",
                            top: -14,
                            alignSelf: "center",
                            zIndex: 10,
                          }}
                        >
                          <Text style={{ fontSize: 18 }}>⭐</Text>
                        </View>
                      )}

                      <AnimatedPressable
                        onPress={() => {
                          if (isAccessible) {
                            router.push(`/lesson/${lesson.id}` as any);
                          }
                        }}
                        disabled={!isAccessible}
                        haptic={isAccessible}
                        scaleValue={0.9}
                      >
                        <View
                          style={{
                            width: NODE_SIZE,
                            height: NODE_SIZE,
                            borderRadius: NODE_SIZE / 2,
                            backgroundColor: nodeColor.face,
                            borderBottomWidth: 5,
                            borderBottomColor: nodeColor.bottom,
                            alignItems: "center",
                            justifyContent: "center",
                            ...(isCurrent
                              ? {
                                  borderWidth: 3,
                                  borderColor: "white",
                                  borderBottomWidth: 5,
                                  borderBottomColor: nodeColor.bottom,
                                }
                              : {}),
                          }}
                        >
                          {isComplete ? (
                            <Text style={{ fontSize: 28 }}>✅</Text>
                          ) : isAccessible ? (
                            <Text style={{ fontSize: 28 }}>▶️</Text>
                          ) : (
                            <Text style={{ fontSize: 24, opacity: 0.5 }}>
                              🔒
                            </Text>
                          )}
                        </View>
                      </AnimatedPressable>

                      {/* Lesson label */}
                      <Text
                        style={{
                          width: NODE_SIZE + 50,
                          marginLeft: -25,
                          marginTop: 6,
                          textAlign: "center",
                          fontSize: 12,
                          fontWeight: "700",
                          color: isAccessible ? COLORS.eel : COLORS.hare,
                        }}
                        numberOfLines={2}
                      >
                        {lesson.title}
                      </Text>
                    </Animated.View>
                  );
                })}
              </View>
            </View>

            {/* Georgia Note — themed */}
            <View style={{ marginHorizontal: 20, marginTop: 8 }}>
              <View
                style={{
                  ...card3D(
                    COLORS.cardinalRed.face,
                    COLORS.cardinalRed.bottom,
                    14
                  ),
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 14,
                  marginBottom: 24,
                }}
              >
                <Text style={{ fontSize: 22, marginRight: 10 }}>🍑</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: "600",
                    flex: 1,
                    lineHeight: 18,
                  }}
                >
                  This module includes Georgia-specific regulations, licensing
                  requirements, and local market info.
                </Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
