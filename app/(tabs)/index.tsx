import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ChevronRight, BookOpen, Calculator, CheckSquare } from "lucide-react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900">BuildRight</Text>
          <Text className="text-gray-600 mt-1">Learn to build houses from the ground up</Text>
        </View>

        {/* Georgia Badge */}
        <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 flex-row items-center">
          <View className="bg-red-600 rounded-full px-2 py-1 mr-3">
            <Text className="text-white text-xs font-bold">GA</Text>
          </View>
          <Text className="text-red-800 flex-1">
            Content tailored for Georgia builders
          </Text>
        </View>

        {/* Continue Learning Card */}
        <TouchableOpacity
          onPress={() => router.push("/learn")}
          className="bg-primary-600 rounded-2xl p-5 mb-4"
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-primary-100 text-sm mb-1">Continue Learning</Text>
              <Text className="text-white text-lg font-semibold">
                Module 1: Foundation Knowledge
              </Text>
              <View className="flex-row items-center mt-3">
                <View className="bg-primary-500 rounded-full h-2 flex-1 mr-3">
                  <View className="bg-white rounded-full h-2 w-[15%]" />
                </View>
                <Text className="text-white text-sm">15%</Text>
              </View>
            </View>
            <ChevronRight size={24} color="white" />
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <Text className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</Text>
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity
            onPress={() => router.push("/tools")}
            className="flex-1 bg-white rounded-xl p-4 border border-gray-200"
          >
            <Calculator size={24} color="#3b82f6" />
            <Text className="text-gray-900 font-medium mt-2">Budget Calculator</Text>
            <Text className="text-gray-500 text-sm">Estimate costs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/tools")}
            className="flex-1 bg-white rounded-xl p-4 border border-gray-200"
          >
            <CheckSquare size={24} color="#3b82f6" />
            <Text className="text-gray-900 font-medium mt-2">Permit Checklist</Text>
            <Text className="text-gray-500 text-sm">GA requirements</Text>
          </TouchableOpacity>
        </View>

        {/* Learning Path Overview */}
        <Text className="text-lg font-semibold text-gray-900 mb-3">Your Learning Path</Text>
        <View className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {[
            { num: 1, title: "Foundation Knowledge", status: "in-progress" },
            { num: 2, title: "Land Acquisition", status: "locked" },
            { num: 3, title: "Funding Your Build", status: "locked" },
            { num: 4, title: "Planning & Design", status: "locked" },
            { num: 5, title: "Permits & Approvals", status: "locked" },
            { num: 6, title: "The Build Process", status: "locked" },
            { num: 7, title: "Completion & Beyond", status: "locked" },
          ].map((module, index) => (
            <TouchableOpacity
              key={module.num}
              onPress={() => module.status !== "locked" && router.push("/learn")}
              className={`flex-row items-center p-4 ${index !== 6 ? "border-b border-gray-100" : ""}`}
            >
              <View
                className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
                  module.status === "in-progress"
                    ? "bg-primary-600"
                    : module.status === "completed"
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              >
                <Text
                  className={`font-bold ${
                    module.status === "locked" ? "text-gray-400" : "text-white"
                  }`}
                >
                  {module.num}
                </Text>
              </View>
              <Text
                className={`flex-1 ${
                  module.status === "locked" ? "text-gray-400" : "text-gray-900"
                } font-medium`}
              >
                {module.title}
              </Text>
              {module.status === "in-progress" && (
                <View className="bg-primary-100 rounded-full px-2 py-1">
                  <Text className="text-primary-700 text-xs font-medium">In Progress</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Disclaimer */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8">
          <Text className="text-amber-800 text-xs">
            Educational content only. Always verify requirements with your local building
            department and consult qualified professionals.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
