import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ArrowLeft, Clock, Info, ChevronDown, ChevronUp } from "lucide-react-native";

type BuildType = "custom" | "semi-custom" | "spec";
type BuildSize = "small" | "medium" | "large";

// Georgia-specific timeline data (weeks)
const PHASE_DURATIONS = {
  permits: {
    metro: { min: 4, max: 8 },
    suburban: { min: 3, max: 6 },
    rural: { min: 2, max: 4 },
  },
  sitework: { min: 1, max: 3 },
  foundation: { min: 2, max: 4 },
  framing: {
    small: { min: 3, max: 5 },
    medium: { min: 4, max: 6 },
    large: { min: 6, max: 10 },
  },
  roofing: { min: 1, max: 2 },
  mep_rough: { min: 3, max: 5 }, // Mechanical, Electrical, Plumbing
  insulation: { min: 1, max: 2 },
  drywall: { min: 2, max: 4 },
  interior_finish: {
    small: { min: 4, max: 6 },
    medium: { min: 6, max: 10 },
    large: { min: 10, max: 16 },
  },
  exterior_finish: { min: 2, max: 4 },
  mep_finish: { min: 2, max: 3 },
  final_inspections: { min: 1, max: 2 },
  punch_list: { min: 1, max: 3 },
};

const PHASES = [
  {
    id: "permits",
    name: "Permits & Approvals",
    description: "Building permits, plan reviews, and approvals",
    icon: "📋",
  },
  {
    id: "sitework",
    name: "Site Preparation",
    description: "Clearing, grading, and utility connections",
    icon: "🚜",
  },
  {
    id: "foundation",
    name: "Foundation",
    description: "Footings, foundation walls, and slab",
    icon: "🧱",
  },
  {
    id: "framing",
    name: "Framing",
    description: "Floor, wall, and roof framing",
    icon: "🏗️",
  },
  {
    id: "roofing",
    name: "Roofing",
    description: "Roof sheathing, underlayment, and shingles",
    icon: "🏠",
  },
  {
    id: "mep_rough",
    name: "MEP Rough-In",
    description: "Electrical, plumbing, and HVAC rough installation",
    icon: "🔌",
  },
  {
    id: "insulation",
    name: "Insulation",
    description: "Wall, floor, and attic insulation",
    icon: "🧤",
  },
  {
    id: "drywall",
    name: "Drywall",
    description: "Hanging, taping, and finishing drywall",
    icon: "🪵",
  },
  {
    id: "interior_finish",
    name: "Interior Finishes",
    description: "Cabinets, counters, flooring, trim, paint",
    icon: "🎨",
  },
  {
    id: "exterior_finish",
    name: "Exterior Finishes",
    description: "Siding, windows, doors, landscaping",
    icon: "🏡",
  },
  {
    id: "mep_finish",
    name: "MEP Finish",
    description: "Fixtures, outlets, HVAC equipment",
    icon: "💡",
  },
  {
    id: "final_inspections",
    name: "Final Inspections",
    description: "Building, electrical, plumbing, and HVAC inspections",
    icon: "✅",
  },
  {
    id: "punch_list",
    name: "Punch List & Close-Out",
    description: "Final touches and certificate of occupancy",
    icon: "🔑",
  },
];

type AreaType = "metro" | "suburban" | "rural";

export default function TimelineEstimatorScreen() {
  const router = useRouter();

  const [buildType, setBuildType] = useState<BuildType>("semi-custom");
  const [buildSize, setBuildSize] = useState<BuildSize>("medium");
  const [areaType, setAreaType] = useState<AreaType>("suburban");
  const [showResults, setShowResults] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const calculateTimeline = () => {
    const phases = PHASES.map((phase) => {
      let duration: { min: number; max: number };

      if (phase.id === "permits") {
        duration = PHASE_DURATIONS.permits[areaType];
      } else if (phase.id === "framing" || phase.id === "interior_finish") {
        duration = PHASE_DURATIONS[phase.id][buildSize];
      } else {
        duration = PHASE_DURATIONS[phase.id as keyof typeof PHASE_DURATIONS] as {
          min: number;
          max: number;
        };
      }

      // Custom builds take longer, spec homes are faster
      const typeMultiplier =
        buildType === "custom" ? 1.2 : buildType === "spec" ? 0.85 : 1;

      return {
        ...phase,
        weeksMin: Math.round(duration.min * typeMultiplier),
        weeksMax: Math.round(duration.max * typeMultiplier),
      };
    });

    const totalMin = phases.reduce((acc, p) => acc + p.weeksMin, 0);
    const totalMax = phases.reduce((acc, p) => acc + p.weeksMax, 0);

    return { phases, totalMin, totalMax };
  };

  const timeline = showResults ? calculateTimeline() : null;

  const formatWeeks = (weeks: number) => {
    if (weeks < 4) return `${weeks} weeks`;
    const months = Math.round(weeks / 4.33);
    return `${months} month${months > 1 ? "s" : ""}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Clock size={24} color="#8b5cf6" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">Timeline Estimator</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Intro */}
        <View className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-6 flex-row">
          <Info size={18} color="#8b5cf6" className="mr-2 mt-0.5" />
          <Text className="text-purple-800 text-sm flex-1">
            Timelines include Georgia permit processing times. Weather delays,
            material shortages, and contractor availability may extend these estimates.
          </Text>
        </View>

        {/* Input Form */}
        <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
          {/* Build Type */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Build Type</Text>
            <View className="gap-2">
              {[
                {
                  value: "custom" as const,
                  label: "Custom Home",
                  desc: "Unique design, more decisions",
                },
                {
                  value: "semi-custom" as const,
                  label: "Semi-Custom",
                  desc: "Modified floor plan",
                },
                { value: "spec" as const, label: "Spec Home", desc: "Pre-designed, faster build" },
              ].map((type) => (
                <TouchableOpacity
                  key={type.value}
                  onPress={() => setBuildType(type.value)}
                  className={`p-3 rounded-lg border ${
                    buildType === type.value
                      ? "bg-purple-50 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <View className="flex-row items-center">
                    <View
                      className={`w-5 h-5 rounded-full border-2 mr-3 items-center justify-center ${
                        buildType === type.value
                          ? "border-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {buildType === type.value && (
                        <View className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                      )}
                    </View>
                    <View>
                      <Text
                        className={`font-medium ${
                          buildType === type.value ? "text-purple-900" : "text-gray-900"
                        }`}
                      >
                        {type.label}
                      </Text>
                      <Text className="text-gray-500 text-sm">{type.desc}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Build Size */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Home Size</Text>
            <View className="flex-row gap-2">
              {[
                { value: "small" as const, label: "Small", desc: "< 2,000 sq ft" },
                { value: "medium" as const, label: "Medium", desc: "2,000-3,500" },
                { value: "large" as const, label: "Large", desc: "> 3,500 sq ft" },
              ].map((size) => (
                <TouchableOpacity
                  key={size.value}
                  onPress={() => setBuildSize(size.value)}
                  className={`flex-1 py-3 px-2 rounded-lg border ${
                    buildSize === size.value
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center font-medium ${
                      buildSize === size.value ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {size.label}
                  </Text>
                  <Text
                    className={`text-center text-xs mt-0.5 ${
                      buildSize === size.value ? "text-purple-100" : "text-gray-500"
                    }`}
                  >
                    {size.desc}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Area Type */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">
              Location Type{" "}
              <Text className="text-red-600 text-xs">(affects permit times)</Text>
            </Text>
            <View className="flex-row gap-2">
              {(["metro", "suburban", "rural"] as const).map((area) => (
                <TouchableOpacity
                  key={area}
                  onPress={() => setAreaType(area)}
                  className={`flex-1 py-3 rounded-lg border ${
                    areaType === area
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center font-medium capitalize ${
                      areaType === area ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {area}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Calculate Button */}
        <TouchableOpacity
          onPress={() => setShowResults(true)}
          className="bg-purple-600 rounded-xl py-4 mb-4"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Generate Timeline
          </Text>
        </TouchableOpacity>

        {/* Results */}
        {showResults && timeline && (
          <View className="mb-6">
            {/* Total */}
            <View className="bg-purple-600 rounded-xl p-4 mb-4">
              <Text className="text-purple-100 font-medium mb-1">
                Estimated Total Build Time
              </Text>
              <Text className="text-3xl font-bold text-white">
                {formatWeeks(timeline.totalMin)} - {formatWeeks(timeline.totalMax)}
              </Text>
              <Text className="text-purple-200 text-sm mt-1">
                {timeline.totalMin} - {timeline.totalMax} weeks from permit to move-in
              </Text>
            </View>

            {/* Phase Breakdown */}
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Phase-by-Phase Breakdown
            </Text>
            <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {timeline.phases.map((phase, index) => (
                <TouchableOpacity
                  key={phase.id}
                  onPress={() =>
                    setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
                  }
                  className={`${
                    index !== timeline.phases.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <View className="flex-row items-center p-4">
                    <Text className="text-2xl mr-3">{phase.icon}</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 font-medium">{phase.name}</Text>
                      <Text className="text-purple-600 text-sm font-medium">
                        {phase.weeksMin === phase.weeksMax
                          ? `${phase.weeksMin} weeks`
                          : `${phase.weeksMin}-${phase.weeksMax} weeks`}
                      </Text>
                    </View>
                    {expandedPhase === phase.id ? (
                      <ChevronUp size={20} color="#9ca3af" />
                    ) : (
                      <ChevronDown size={20} color="#9ca3af" />
                    )}
                  </View>
                  {expandedPhase === phase.id && (
                    <View className="px-4 pb-4 pt-0">
                      <Text className="text-gray-600 text-sm">{phase.description}</Text>
                      {phase.id === "permits" && (
                        <View className="bg-red-50 rounded-lg p-2 mt-2">
                          <Text className="text-red-700 text-xs">
                            Georgia {areaType} area permit times vary by county. Check with
                            your local building department.
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            {/* Visual Timeline Bar */}
            <View className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
              <Text className="text-gray-700 font-medium mb-3">Visual Timeline</Text>
              <View className="flex-row h-8 rounded-lg overflow-hidden">
                {timeline.phases.map((phase, index) => {
                  const widthPercent = (phase.weeksMax / timeline.totalMax) * 100;
                  const colors = [
                    "#3b82f6",
                    "#8b5cf6",
                    "#ec4899",
                    "#f59e0b",
                    "#10b981",
                    "#6366f1",
                    "#14b8a6",
                    "#f97316",
                    "#84cc16",
                    "#06b6d4",
                    "#a855f7",
                    "#22c55e",
                    "#eab308",
                  ];
                  return (
                    <View
                      key={phase.id}
                      style={{
                        width: `${widthPercent}%`,
                        backgroundColor: colors[index % colors.length],
                      }}
                      className="h-full"
                    />
                  );
                })}
              </View>
              <View className="flex-row justify-between mt-2">
                <Text className="text-gray-500 text-xs">Start</Text>
                <Text className="text-gray-500 text-xs">
                  {formatWeeks(timeline.totalMax)}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Disclaimer */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8">
          <Text className="text-amber-800 text-xs">
            These are planning estimates only. Actual timelines depend on weather,
            material availability, contractor schedules, inspection delays, and change
            orders. Always build in contingency time for your move date.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
