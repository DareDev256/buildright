import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ChevronRight, Lock, CheckCircle, PlayCircle } from "lucide-react-native";

const modules = [
  {
    id: "1",
    title: "Foundation Knowledge",
    description: "Types of construction, roles, terminology, timelines & costs",
    lessons: 8,
    completedLessons: 1,
    status: "in-progress",
  },
  {
    id: "2",
    title: "Land Acquisition",
    description: "Finding land, zoning, due diligence, Georgia land laws",
    lessons: 6,
    completedLessons: 0,
    status: "locked",
  },
  {
    id: "3",
    title: "Funding Your Build",
    description: "Construction loans, owner-builder financing, budgeting",
    lessons: 7,
    completedLessons: 0,
    status: "locked",
  },
  {
    id: "4",
    title: "Planning & Design",
    description: "Architects, blueprints, site planning, cost estimation",
    lessons: 6,
    completedLessons: 0,
    status: "locked",
  },
  {
    id: "5",
    title: "Permits & Approvals",
    description: "Georgia permit process, inspections, code requirements",
    lessons: 5,
    completedLessons: 0,
    status: "locked",
  },
  {
    id: "6",
    title: "The Build Process",
    description: "Phase-by-phase: site prep to finishes, managing subs",
    lessons: 12,
    completedLessons: 0,
    status: "locked",
  },
  {
    id: "7",
    title: "Completion & Beyond",
    description: "Final inspections, CO, punch lists, warranties",
    lessons: 5,
    completedLessons: 0,
    status: "locked",
  },
];

export default function LearnScreen() {
  const router = useRouter();

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);
  const completedLessons = modules.reduce((acc, m) => acc + m.completedLessons, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-4 pt-4 pb-6 bg-primary-600">
          <Text className="text-2xl font-bold text-white mb-2">Learning Path</Text>
          <Text className="text-primary-100 mb-4">
            Master house building from the ground up
          </Text>

          {/* Overall Progress */}
          <View className="bg-primary-500 rounded-xl p-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-white font-medium">Overall Progress</Text>
              <Text className="text-white font-medium">{progressPercent}%</Text>
            </View>
            <View className="bg-primary-400 rounded-full h-3">
              <View
                className="bg-white rounded-full h-3"
                style={{ width: `${progressPercent}%` }}
              />
            </View>
            <Text className="text-primary-100 text-sm mt-2">
              {completedLessons} of {totalLessons} lessons completed
            </Text>
          </View>
        </View>

        {/* Modules List */}
        <View className="px-4 py-4">
          {modules.map((module, index) => (
            <TouchableOpacity
              key={module.id}
              onPress={() => {
                if (module.status !== "locked") {
                  router.push(`/learn/${module.id}`);
                }
              }}
              className={`bg-white rounded-xl border mb-3 overflow-hidden ${
                module.status === "locked" ? "border-gray-200 opacity-60" : "border-gray-200"
              }`}
            >
              <View className="p-4">
                <View className="flex-row items-start">
                  {/* Module Number */}
                  <View
                    className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
                      module.status === "completed"
                        ? "bg-green-500"
                        : module.status === "in-progress"
                        ? "bg-primary-600"
                        : "bg-gray-200"
                    }`}
                  >
                    {module.status === "completed" ? (
                      <CheckCircle size={20} color="white" />
                    ) : module.status === "locked" ? (
                      <Lock size={16} color="#9ca3af" />
                    ) : (
                      <Text className="text-white font-bold">{module.id}</Text>
                    )}
                  </View>

                  {/* Module Info */}
                  <View className="flex-1">
                    <Text
                      className={`text-lg font-semibold ${
                        module.status === "locked" ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {module.title}
                    </Text>
                    <Text
                      className={`text-sm mt-1 ${
                        module.status === "locked" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {module.description}
                    </Text>

                    {/* Lesson Progress */}
                    {module.status !== "locked" && (
                      <View className="flex-row items-center mt-3">
                        <View className="bg-gray-200 rounded-full h-2 flex-1 mr-2">
                          <View
                            className="bg-primary-600 rounded-full h-2"
                            style={{
                              width: `${(module.completedLessons / module.lessons) * 100}%`,
                            }}
                          />
                        </View>
                        <Text className="text-gray-500 text-sm">
                          {module.completedLessons}/{module.lessons}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Arrow */}
                  {module.status !== "locked" && (
                    <ChevronRight size={20} color="#9ca3af" className="ml-2" />
                  )}
                </View>
              </View>

              {/* Georgia Badge for relevant modules */}
              {(module.id === "2" || module.id === "5") && module.status !== "locked" && (
                <View className="bg-red-50 px-4 py-2 border-t border-red-100">
                  <Text className="text-red-700 text-xs font-medium">
                    Contains Georgia-specific content
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
