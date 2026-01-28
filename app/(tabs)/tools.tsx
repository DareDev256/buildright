import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  Calculator,
  Clock,
  FileCheck,
  FolderCheck,
  HelpCircle,
  ChevronRight,
} from "lucide-react-native";

const tools = [
  {
    id: "budget-calculator",
    title: "Build Budget Calculator",
    description: "Estimate total costs based on size, finish level, and location",
    icon: Calculator,
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  {
    id: "timeline-estimator",
    title: "Timeline Estimator",
    description: "Get a realistic phase-by-phase build schedule",
    icon: Clock,
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    id: "permit-checklist",
    title: "Permit Checklist",
    description: "Georgia county-specific permit requirements and links",
    icon: FileCheck,
    color: "#ef4444",
    bgColor: "#fef2f2",
    hasGeorgiaBadge: true,
  },
  {
    id: "document-tracker",
    title: "Document Tracker",
    description: "Track all required documents for your build",
    icon: FolderCheck,
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
  {
    id: "funding-quiz",
    title: "Funding Readiness Quiz",
    description: "Check if you're ready to approach lenders",
    icon: HelpCircle,
    color: "#f59e0b",
    bgColor: "#fffbeb",
  },
];

export default function ToolsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-900">Tools</Text>
          <Text className="text-gray-600 mt-1">
            Interactive calculators and checklists for your build
          </Text>
        </View>

        {/* Tools Grid */}
        <View className="gap-3">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <TouchableOpacity
                key={tool.id}
                onPress={() => router.push(`/tools/${tool.id}`)}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <View className="flex-row items-center p-4">
                  <View
                    className="w-12 h-12 rounded-xl items-center justify-center mr-4"
                    style={{ backgroundColor: tool.bgColor }}
                  >
                    <IconComponent size={24} color={tool.color} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-semibold text-base">
                      {tool.title}
                    </Text>
                    <Text className="text-gray-500 text-sm mt-0.5">
                      {tool.description}
                    </Text>
                  </View>
                  <ChevronRight size={20} color="#9ca3af" />
                </View>
                {tool.hasGeorgiaBadge && (
                  <View className="bg-red-50 px-4 py-2 border-t border-red-100">
                    <Text className="text-red-700 text-xs font-medium">
                      Georgia-specific data
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Saved Projects Section */}
        <View className="mt-8 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">
            Your Projects
          </Text>
          <View className="bg-white rounded-xl border border-gray-200 p-6 items-center">
            <FolderCheck size={40} color="#d1d5db" />
            <Text className="text-gray-500 mt-3 text-center">
              No saved projects yet
            </Text>
            <Text className="text-gray-400 text-sm mt-1 text-center">
              Use the tools above to start planning your build
            </Text>
          </View>
        </View>

        {/* Disclaimer */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8">
          <Text className="text-amber-800 text-xs">
            Estimates are for planning purposes only. Actual costs and timelines may vary.
            Always get professional quotes and verify requirements with local authorities.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
