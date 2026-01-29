import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import { WARM_BG, COLORS, card3D } from "../../src/theme";

const tools = [
  {
    id: "budget-calculator",
    title: "Budget Calculator",
    hook: "Estimate construction costs",
    preview: "$120–$450/sq ft",
    emoji: "💰",
    color: COLORS.beeYellow,
  },
  {
    id: "timeline-estimator",
    title: "Timeline Estimator",
    hook: "Plan your build phases",
    preview: "6–14 months typical",
    emoji: "⏱️",
    color: COLORS.tigerOrange,
  },
  {
    id: "permit-checklist",
    title: "Permit Checklist",
    hook: "Track GA permits & inspections",
    preview: "8 permits needed",
    emoji: "📋",
    color: COLORS.foxPurple,
  },
  {
    id: "document-tracker",
    title: "Document Tracker",
    hook: "Organize loan documents",
    preview: "0/12 tracked",
    emoji: "📁",
    color: COLORS.macawBlue,
  },
  {
    id: "funding-quiz",
    title: "Funding Readiness",
    hook: "Assess financial readiness",
    preview: "10 questions",
    emoji: "🧠",
    color: COLORS.cardinalRed,
  },
];

export default function ToolsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WARM_BG }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <Text style={{ fontSize: 30, fontWeight: "800", color: COLORS.eel }}>
            🧰 Tools
          </Text>
          <Text
            style={{
              color: COLORS.hare,
              fontSize: 14,
              fontWeight: "600",
              marginTop: 4,
            }}
          >
            Interactive calculators & checklists
          </Text>
        </View>

        {/* Georgia Banner — 3D */}
        <View className="mx-5 mt-2 mb-5">
          <View
            style={{
              ...card3D(COLORS.cardinalRed.face, COLORS.cardinalRed.bottom, 14),
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 22, marginRight: 10 }}>🍑</Text>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 13,
                flex: 1,
              }}
            >
              All tools calibrated for Georgia building
            </Text>
          </View>
        </View>

        {/* Tool Cards */}
        <View className="px-5 mb-8" style={{ gap: 14 }}>
          {tools.map((tool, index) => (
            <Animated.View
              key={tool.id}
              entering={FadeInDown.delay(index * 80)
                .duration(400)
                .springify()
                .damping(16)}
            >
              <AnimatedPressable
                onPress={() => router.push(`/tools/${tool.id}` as any)}
              >
                <View
                  style={{
                    ...card3D(COLORS.snow.face, COLORS.snow.bottom, 20),
                    overflow: "hidden",
                  }}
                >
                  {/* Colored accent bar */}
                  <View
                    style={{
                      height: 4,
                      backgroundColor: tool.color.face,
                    }}
                  />
                  <View
                    style={{
                      padding: 16,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* Emoji circle */}
                    <View
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        backgroundColor: `${tool.color.face}18`,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 14,
                        borderBottomWidth: 3,
                        borderBottomColor: `${tool.color.face}30`,
                      }}
                    >
                      <Text style={{ fontSize: 26 }}>{tool.emoji}</Text>
                    </View>

                    {/* Content */}
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "800",
                          color: COLORS.eel,
                        }}
                      >
                        {tool.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: COLORS.hare,
                          marginTop: 2,
                        }}
                      >
                        {tool.hook}
                      </Text>
                      {/* Preview badge */}
                      <View
                        style={{
                          ...card3D(tool.color.face, tool.color.bottom, 8),
                          alignSelf: "flex-start",
                          paddingHorizontal: 10,
                          paddingVertical: 3,
                          marginTop: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 11,
                            fontWeight: "800",
                          }}
                        >
                          {tool.preview}
                        </Text>
                      </View>
                    </View>

                    <ChevronRight size={20} color="#D0D0D0" />
                  </View>
                </View>
              </AnimatedPressable>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
