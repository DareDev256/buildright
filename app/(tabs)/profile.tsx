import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  User,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  BookOpen,
  Award,
} from "lucide-react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Profile Header */}
        <View className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <View className="flex-row items-center">
            <View className="w-16 h-16 rounded-full bg-primary-100 items-center justify-center">
              <User size={32} color="#3b82f6" />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xl font-bold text-gray-900">Guest User</Text>
              <Text className="text-gray-500">Create an account to save progress</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-primary-600 rounded-xl py-3 mt-4">
            <Text className="text-white font-semibold text-center">Sign Up / Login</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4">
            <BookOpen size={20} color="#3b82f6" />
            <Text className="text-2xl font-bold text-gray-900 mt-2">1</Text>
            <Text className="text-gray-500 text-sm">Lessons Completed</Text>
          </View>
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4">
            <Award size={20} color="#f59e0b" />
            <Text className="text-2xl font-bold text-gray-900 mt-2">0</Text>
            <Text className="text-gray-500 text-sm">Modules Finished</Text>
          </View>
        </View>

        {/* Location */}
        <View className="bg-white rounded-xl border border-gray-200 mb-6">
          <View className="p-4 flex-row items-center justify-between">
            <View>
              <Text className="text-gray-900 font-medium">Your State</Text>
              <Text className="text-gray-500 text-sm">Content is tailored to Georgia</Text>
            </View>
            <View className="bg-red-100 rounded-lg px-3 py-1">
              <Text className="text-red-700 font-semibold">Georgia</Text>
            </View>
          </View>
        </View>

        {/* Settings Menu */}
        <View className="bg-white rounded-xl border border-gray-200 mb-6">
          {[
            { icon: Bell, label: "Notifications", subtitle: "Manage alerts" },
            { icon: Settings, label: "Settings", subtitle: "App preferences" },
            { icon: HelpCircle, label: "Help & Support", subtitle: "FAQs and contact" },
          ].map((item, index) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center p-4 ${
                index !== 2 ? "border-b border-gray-100" : ""
              }`}
            >
              <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3">
                <item.icon size={20} color="#6b7280" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-medium">{item.label}</Text>
                <Text className="text-gray-500 text-sm">{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out (for logged in users) */}
        <TouchableOpacity className="flex-row items-center justify-center py-4 mb-8">
          <LogOut size={18} color="#ef4444" />
          <Text className="text-red-500 font-medium ml-2">Sign Out</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text className="text-center text-gray-400 text-sm mb-8">
          BuildRight v1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
