import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react-native";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import FadeInView from "../../src/components/FadeInView";
import { useProgressStore } from "../../src/stores/useProgressStore";
import { modules } from "../../src/content";
import { WARM_BG, COLORS, card3D } from "../../src/theme";

export default function ProfileScreen() {
  const { completedLessons } = useProgressStore();
  const totalCompleted = Object.values(completedLessons).flat().length;
  const modulesFinished = modules.filter((m) => {
    const done = completedLessons[m.id]?.length || 0;
    return m.lessons.length > 0 && done >= m.lessons.length;
  }).length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WARM_BG }}>
      <ScrollView className="px-5 pt-4">
        {/* Profile Header */}
        <FadeInView delay={0} direction="down">
          <View
            style={{
              ...card3D(COLORS.snow.face, COLORS.snow.bottom, 20),
              padding: 20,
              marginBottom: 20,
            }}
          >
            <View className="flex-row items-center">
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: `${COLORS.macawBlue.face}18`,
                  borderBottomWidth: 3,
                  borderBottomColor: `${COLORS.macawBlue.face}30`,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 32 }}>👷</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    color: COLORS.eel,
                  }}
                >
                  Guest Builder
                </Text>
                <Text
                  style={{
                    color: COLORS.hare,
                    fontSize: 13,
                    marginTop: 2,
                  }}
                >
                  Create an account to save progress
                </Text>
              </View>
            </View>
            <AnimatedPressable className="mt-4">
              <View
                style={{
                  ...card3D(
                    COLORS.featherGreen.face,
                    COLORS.featherGreen.bottom,
                    14
                  ),
                  paddingVertical: 12,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  SIGN UP / LOGIN
                </Text>
              </View>
            </AnimatedPressable>
          </View>
        </FadeInView>

        {/* Stats */}
        <FadeInView delay={100} direction="up">
          <View className="flex-row mb-5" style={{ gap: 12 }}>
            <View className="flex-1">
              <View
                style={{
                  ...card3D(COLORS.macawBlue.face, COLORS.macawBlue.bottom),
                  paddingVertical: 16,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24 }}>📚</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 26,
                    fontWeight: "800",
                    marginTop: 4,
                  }}
                >
                  {totalCompleted}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  Lessons Done
                </Text>
              </View>
            </View>
            <View className="flex-1">
              <View
                style={{
                  ...card3D(COLORS.beeYellow.face, COLORS.beeYellow.bottom),
                  paddingVertical: 16,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24 }}>🏆</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 26,
                    fontWeight: "800",
                    marginTop: 4,
                  }}
                >
                  {modulesFinished}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  Modules Done
                </Text>
              </View>
            </View>
          </View>
        </FadeInView>

        {/* Location */}
        <FadeInView delay={200} direction="up">
          <View
            style={{
              ...card3D(COLORS.snow.face, COLORS.snow.bottom, 16),
              padding: 16,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 15, fontWeight: "700", color: COLORS.eel }}
              >
                Your State
              </Text>
              <Text
                style={{ color: COLORS.hare, fontSize: 12, marginTop: 2 }}
              >
                Content tailored to Georgia
              </Text>
            </View>
            <View
              style={{
                ...card3D(
                  COLORS.cardinalRed.face,
                  COLORS.cardinalRed.bottom,
                  10
                ),
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "800", fontSize: 12 }}>
                🍑 GA
              </Text>
            </View>
          </View>
        </FadeInView>

        {/* Settings Menu */}
        <FadeInView delay={300} direction="up">
          <View
            style={{
              ...card3D(COLORS.snow.face, COLORS.snow.bottom, 16),
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            {[
              {
                icon: Bell,
                label: "Notifications",
                subtitle: "Manage alerts",
                emoji: "🔔",
              },
              {
                icon: Settings,
                label: "Settings",
                subtitle: "App preferences",
                emoji: "⚙️",
              },
              {
                icon: HelpCircle,
                label: "Help & Support",
                subtitle: "FAQs and contact",
                emoji: "❓",
              },
            ].map((item, index) => (
              <AnimatedPressable key={item.label}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 14,
                    borderBottomWidth: index !== 2 ? 1 : 0,
                    borderBottomColor: "#F0EDE8",
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      backgroundColor: "#F5F3EE",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{item.emoji}</Text>
                  </View>
                  <View className="flex-1">
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                        color: COLORS.eel,
                      }}
                    >
                      {item.label}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.hare,
                        fontSize: 12,
                        marginTop: 1,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                  <ChevronRight size={18} color="#D0D0D0" />
                </View>
              </AnimatedPressable>
            ))}
          </View>
        </FadeInView>

        {/* Sign Out */}
        <AnimatedPressable className="mb-4">
          <View
            style={{
              ...card3D("#FFF0F0", "#F5D0D0", 14),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
            }}
          >
            <LogOut size={16} color={COLORS.cardinalRed.face} />
            <Text
              style={{
                color: COLORS.cardinalRed.face,
                fontWeight: "700",
                marginLeft: 8,
              }}
            >
              Sign Out
            </Text>
          </View>
        </AnimatedPressable>

        {/* Version */}
        <Text
          style={{
            textAlign: "center",
            color: "#C8C8C8",
            fontSize: 12,
            marginBottom: 24,
            marginTop: 8,
          }}
        >
          BuildRight v1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
