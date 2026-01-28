import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ArrowLeft, Calculator, Info } from "lucide-react-native";
import { useProjectStore, BudgetInputs } from "../../src/stores/useProjectStore";

// Georgia-specific cost data (per sq ft estimates)
const COST_PER_SQFT = {
  budget: { min: 120, max: 160 },
  mid: { min: 180, max: 250 },
  high: { min: 300, max: 450 },
};

const LAND_COST_PER_ACRE = {
  metro: { min: 50000, max: 150000 },
  suburban: { min: 20000, max: 60000 },
  rural: { min: 5000, max: 25000 },
};

// Georgia counties organized by area type
const GEORGIA_COUNTIES = {
  metro: ["Fulton", "DeKalb", "Cobb", "Gwinnett", "Clayton"],
  suburban: ["Cherokee", "Forsyth", "Henry", "Douglas", "Paulding"],
  rural: ["Other Georgia County"],
};

type FinishLevel = "budget" | "mid" | "high";
type AreaType = "metro" | "suburban" | "rural";

export default function BudgetCalculatorScreen() {
  const router = useRouter();
  const { createProject, updateProject, getActiveProject } = useProjectStore();

  const [squareFootage, setSquareFootage] = useState("");
  const [finishLevel, setFinishLevel] = useState<FinishLevel>("mid");
  const [areaType, setAreaType] = useState<AreaType>("suburban");
  const [stories, setStories] = useState("1");
  const [hasBasement, setHasBasement] = useState(false);
  const [garageSpaces, setGarageSpaces] = useState("2");
  const [showResults, setShowResults] = useState(false);

  const calculateBudget = () => {
    const sqft = parseInt(squareFootage) || 2000;
    const costRange = COST_PER_SQFT[finishLevel];
    const landRange = LAND_COST_PER_ACRE[areaType];

    // Base construction cost
    const constructionMin = sqft * costRange.min;
    const constructionMax = sqft * costRange.max;

    // Land estimate (assume 0.5 acre)
    const landMin = landRange.min * 0.5;
    const landMax = landRange.max * 0.5;

    // Permits and fees (Georgia average)
    const permits = sqft * 3; // ~$3/sqft for permits

    // Site work (varies significantly)
    const siteWorkMin = 10000;
    const siteWorkMax = 30000;

    // Basement addition
    const basementCost = hasBasement ? sqft * 0.4 * 50 : 0; // 40% of main floor, $50/sqft

    // Additional story cost modifier
    const storyModifier = parseInt(stories) > 1 ? 0.85 : 1; // Slight discount for 2-story

    // Garage
    const garageCost = (parseInt(garageSpaces) || 0) * 15000;

    // Contingency (10%)
    const contingencyRate = 0.1;

    // Calculate totals
    const minTotal =
      (constructionMin * storyModifier + landMin + permits + siteWorkMin + basementCost + garageCost) *
      (1 + contingencyRate);
    const maxTotal =
      (constructionMax * storyModifier + landMax + permits + siteWorkMax + basementCost + garageCost) *
      (1 + contingencyRate);

    return {
      construction: { min: constructionMin, max: constructionMax },
      land: { min: landMin, max: landMax },
      permits,
      siteWork: { min: siteWorkMin, max: siteWorkMax },
      basement: basementCost,
      garage: garageCost,
      contingency: { min: minTotal * contingencyRate, max: maxTotal * contingencyRate },
      total: { min: Math.round(minTotal), max: Math.round(maxTotal) },
      perSqft: {
        min: Math.round(minTotal / sqft),
        max: Math.round(maxTotal / sqft),
      },
    };
  };

  const budget = showResults ? calculateBudget() : null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Calculator size={24} color="#3b82f6" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">Budget Calculator</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Intro */}
        <View className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex-row">
          <Info size={18} color="#3b82f6" className="mr-2 mt-0.5" />
          <Text className="text-blue-800 text-sm flex-1">
            Estimates based on 2024 Georgia construction costs. Actual costs vary by
            location, materials, and market conditions.
          </Text>
        </View>

        {/* Input Form */}
        <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
          {/* Square Footage */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Square Footage</Text>
            <TextInput
              value={squareFootage}
              onChangeText={setSquareFootage}
              placeholder="e.g., 2000"
              keyboardType="numeric"
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900"
            />
          </View>

          {/* Finish Level */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Finish Level</Text>
            <View className="flex-row gap-2">
              {(["budget", "mid", "high"] as const).map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => setFinishLevel(level)}
                  className={`flex-1 py-3 rounded-lg border ${
                    finishLevel === level
                      ? "bg-primary-600 border-primary-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center font-medium capitalize ${
                      finishLevel === level ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text className="text-gray-500 text-xs mt-1">
              Budget: basic finishes | Mid: standard | High: premium
            </Text>
          </View>

          {/* Area Type */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Location Type</Text>
            <View className="flex-row gap-2">
              {(["metro", "suburban", "rural"] as const).map((area) => (
                <TouchableOpacity
                  key={area}
                  onPress={() => setAreaType(area)}
                  className={`flex-1 py-3 rounded-lg border ${
                    areaType === area
                      ? "bg-primary-600 border-primary-600"
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

          {/* Stories */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Number of Stories</Text>
            <View className="flex-row gap-2">
              {["1", "2"].map((s) => (
                <TouchableOpacity
                  key={s}
                  onPress={() => setStories(s)}
                  className={`flex-1 py-3 rounded-lg border ${
                    stories === s
                      ? "bg-primary-600 border-primary-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center font-medium ${
                      stories === s ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {s} Story
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Basement */}
          <View className="mb-4">
            <TouchableOpacity
              onPress={() => setHasBasement(!hasBasement)}
              className="flex-row items-center"
            >
              <View
                className={`w-6 h-6 rounded border-2 mr-3 items-center justify-center ${
                  hasBasement ? "bg-primary-600 border-primary-600" : "border-gray-300"
                }`}
              >
                {hasBasement && <Text className="text-white font-bold">✓</Text>}
              </View>
              <Text className="text-gray-700 font-medium">Include Basement</Text>
            </TouchableOpacity>
          </View>

          {/* Garage */}
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Garage Spaces</Text>
            <View className="flex-row gap-2">
              {["0", "1", "2", "3"].map((g) => (
                <TouchableOpacity
                  key={g}
                  onPress={() => setGarageSpaces(g)}
                  className={`flex-1 py-3 rounded-lg border ${
                    garageSpaces === g
                      ? "bg-primary-600 border-primary-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center font-medium ${
                      garageSpaces === g ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Calculate Button */}
        <TouchableOpacity
          onPress={() => setShowResults(true)}
          className="bg-primary-600 rounded-xl py-4 mb-4"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Calculate Budget
          </Text>
        </TouchableOpacity>

        {/* Results */}
        {showResults && budget && (
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-4">Estimated Budget</Text>

            {/* Total Range */}
            <View className="bg-primary-50 rounded-lg p-4 mb-4">
              <Text className="text-primary-700 font-medium mb-1">Total Estimated Cost</Text>
              <Text className="text-2xl font-bold text-primary-900">
                {formatCurrency(budget.total.min)} - {formatCurrency(budget.total.max)}
              </Text>
              <Text className="text-primary-600 text-sm mt-1">
                {formatCurrency(budget.perSqft.min)} - {formatCurrency(budget.perSqft.max)} per sq ft
              </Text>
            </View>

            {/* Breakdown */}
            <Text className="text-gray-700 font-semibold mb-3">Cost Breakdown</Text>
            {[
              { label: "Construction", value: budget.construction },
              { label: "Land (0.5 acre est.)", value: budget.land },
              { label: "Permits & Fees", value: budget.permits },
              { label: "Site Work", value: budget.siteWork },
              ...(budget.basement > 0
                ? [{ label: "Basement", value: budget.basement }]
                : []),
              ...(budget.garage > 0 ? [{ label: "Garage", value: budget.garage }] : []),
              { label: "Contingency (10%)", value: budget.contingency },
            ].map((item, index) => (
              <View
                key={index}
                className="flex-row justify-between py-2 border-b border-gray-100"
              >
                <Text className="text-gray-600">{item.label}</Text>
                <Text className="text-gray-900 font-medium">
                  {typeof item.value === "number"
                    ? formatCurrency(item.value)
                    : `${formatCurrency(item.value.min)} - ${formatCurrency(item.value.max)}`}
                </Text>
              </View>
            ))}

            {/* Save Button */}
            <TouchableOpacity
              onPress={() => {
                // Save to project store
                const projectId = createProject("My Build Project");
                updateProject(projectId, {
                  budgetInputs: {
                    squareFootage: parseInt(squareFootage) || 2000,
                    finishLevel,
                    county: areaType,
                    stories: parseInt(stories),
                    hasBasement,
                    garageSpaces: parseInt(garageSpaces),
                  },
                  budgetResult: {
                    totalMin: budget.total.min,
                    totalMax: budget.total.max,
                  },
                });
                router.push("/tools");
              }}
              className="bg-green-600 rounded-lg py-3 mt-4"
            >
              <Text className="text-white font-semibold text-center">
                Save to My Project
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Disclaimer */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8">
          <Text className="text-amber-800 text-xs">
            These estimates are for planning purposes only. Actual costs depend on specific
            site conditions, material choices, labor availability, and market conditions.
            Always obtain detailed quotes from licensed contractors.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
