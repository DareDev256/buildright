import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  Calculator,
  Clock,
  ClipboardCheck,
  FileText,
  HelpCircle,
  ChevronRight,
} from "lucide-react-native";

const tools = [
  {
    id: "budget-calculator",
    title: "Budget Calculator",
    description: "Estimate your total construction cost based on size, finish level, and Georgia county",
    icon: Calculator,
    color: "#059669",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    borderColor: "border-emerald-100",
  },
  {
    id: "timeline-estimator",
    title: "Timeline Estimator",
    description: "Plan your build timeline with phase-by-phase breakdown and seasonal considerations",
    icon: Clock,
    color: "#d97706",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100",
    borderColor: "border-amber-100",
  },
  {
    id: "permit-checklist",
    title: "Permit Checklist",
    description: "Track required permits, inspections, and approvals for your Georgia county",
    icon: ClipboardCheck,
    color: "#7c3aed",
    bgColor: "bg-violet-50",
    iconBg: "bg-violet-100",
    borderColor: "border-violet-100",
  },
  {
    id: "document-tracker",
    title: "Document Tracker",
    description: "Organize and track all documents needed for your construction loan",
    icon: FileText,
    color: "#2563eb",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-100",
  },
  {
    id: "funding-quiz",
    title: "Funding Readiness",
    description: "Assess your financial readiness with a 10-question evaluation and personalized score",
    icon: HelpCircle,
    color: "#db2777",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
    borderColor: "border-pink-100",
  },
];

export default function ToolsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <Text className="text-3xl font-extrabold text-gray-900">Tools</Text>
          <Text className="text-gray-500 mt-1">
            Interactive calculators and checklists
          </Text>
        </View>

        {/* Georgia Banner */}
        <View className="mx-5 mt-2 mb-5">
          <View className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 flex-row items-center">
            <View className="bg-red-600 rounded-xl w-9 h-9 items-center justify-center mr-3">
              <Text className="text-white text-xs font-extrabold">GA</Text>
            </View>
            <Text className="text-red-800 flex-1 text-sm font-medium">
              All tools calibrated for Georgia building
            </Text>
          </View>
        </View>

        {/* Tool Cards */}
        <View className="px-5 gap-4 mb-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <TouchableOpacity
                key={tool.id}
                onPress={() => router.push(`/tools/${tool.id}` as any)}
                activeOpacity={0.8}
                className={`bg-white rounded-3xl border ${tool.borderColor} overflow-hidden`}
              >
                <View className="p-5">
                  <View className="flex-row items-start">
                    {/* Icon */}
                    <View className={`w-14 h-14 rounded-2xl items-center justify-center mr-4 ${tool.iconBg}`}>
                      <Icon size={24} color={tool.color} />
                    </View>

                    {/* Content */}
                    <View className="flex-1">
                      <Text className="text-lg font-bold text-gray-900">
                        {tool.title}
                      </Text>
                      <Text className="text-sm text-gray-500 mt-1 leading-5">
                        {tool.description}
                      </Text>
                    </View>

                    {/* Arrow */}
                    <View className="ml-2 mt-1">
                      <ChevronRight size={20} color="#d1d5db" />
                    </View>
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
