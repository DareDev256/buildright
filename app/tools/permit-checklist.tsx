import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  FileCheck,
  Info,
  ExternalLink,
  CheckCircle,
  Circle,
  MapPin,
} from "lucide-react-native";
import { useProjectStore } from "../../src/stores/useProjectStore";

// Georgia counties with building department info
const GEORGIA_COUNTIES = [
  {
    name: "Fulton",
    area: "metro",
    website: "https://www.fultoncountyga.gov/services/building-permits",
    phone: "(404) 612-4000",
  },
  {
    name: "DeKalb",
    area: "metro",
    website: "https://www.dekalbcountyga.gov/building-permits",
    phone: "(404) 371-2821",
  },
  {
    name: "Cobb",
    area: "metro",
    website: "https://www.cobbcounty.org/building-permits",
    phone: "(770) 528-2010",
  },
  {
    name: "Gwinnett",
    area: "metro",
    website: "https://www.gwinnettcounty.com/permits",
    phone: "(678) 518-6000",
  },
  {
    name: "Cherokee",
    area: "suburban",
    website: "https://www.cherokeega.com/building",
    phone: "(678) 493-6100",
  },
  {
    name: "Forsyth",
    area: "suburban",
    website: "https://www.forsythco.com/Departments/Building-Development",
    phone: "(770) 781-2115",
  },
  {
    name: "Henry",
    area: "suburban",
    website: "https://www.co.henry.ga.us/Building",
    phone: "(770) 288-7710",
  },
  {
    name: "Clayton",
    area: "metro",
    website: "https://www.claytoncountyga.gov/government/community-development",
    phone: "(770) 477-3544",
  },
  {
    name: "Douglas",
    area: "suburban",
    website: "https://www.celebratedouglascounty.com/building",
    phone: "(770) 920-7230",
  },
  {
    name: "Paulding",
    area: "suburban",
    website: "https://www.paulding.gov/building",
    phone: "(770) 443-7541",
  },
];

const PERMIT_ITEMS = [
  {
    id: "land_survey",
    category: "Pre-Construction",
    name: "Land Survey / Plat",
    description: "Property boundaries and topography survey",
    required: true,
  },
  {
    id: "soil_test",
    category: "Pre-Construction",
    name: "Soil Test / Perc Test",
    description: "Required for septic systems",
    required: false,
    note: "Only if not on public sewer",
  },
  {
    id: "site_plan",
    category: "Pre-Construction",
    name: "Site Plan",
    description: "Shows house placement, setbacks, driveways",
    required: true,
  },
  {
    id: "building_plans",
    category: "Plans & Drawings",
    name: "Construction Drawings",
    description: "Complete architectural and structural plans",
    required: true,
  },
  {
    id: "energy_calcs",
    category: "Plans & Drawings",
    name: "Energy Compliance (GA Energy Code)",
    description: "REScheck or equivalent energy calculations",
    required: true,
  },
  {
    id: "truss_calcs",
    category: "Plans & Drawings",
    name: "Truss Engineering / Calculations",
    description: "Sealed truss drawings from manufacturer",
    required: true,
  },
  {
    id: "building_permit",
    category: "Permits",
    name: "Building Permit",
    description: "Main construction permit from county",
    required: true,
  },
  {
    id: "electrical_permit",
    category: "Permits",
    name: "Electrical Permit",
    description: "Separate permit for electrical work",
    required: true,
  },
  {
    id: "plumbing_permit",
    category: "Permits",
    name: "Plumbing Permit",
    description: "Separate permit for plumbing work",
    required: true,
  },
  {
    id: "mechanical_permit",
    category: "Permits",
    name: "Mechanical/HVAC Permit",
    description: "Permit for heating and cooling systems",
    required: true,
  },
  {
    id: "grading_permit",
    category: "Permits",
    name: "Grading / Land Disturbance Permit",
    description: "Required if disturbing more than 1 acre",
    required: false,
    note: "Check your county's threshold",
  },
  {
    id: "septic_permit",
    category: "Permits",
    name: "Septic System Permit",
    description: "Health department permit for septic",
    required: false,
    note: "Only if not on public sewer",
  },
  {
    id: "driveway_permit",
    category: "Permits",
    name: "Driveway / Encroachment Permit",
    description: "For driveway connection to public road",
    required: true,
  },
  {
    id: "water_tap",
    category: "Utilities",
    name: "Water Tap / Connection",
    description: "Fee and approval from water provider",
    required: true,
  },
  {
    id: "sewer_tap",
    category: "Utilities",
    name: "Sewer Tap / Connection",
    description: "Fee and approval from sewer provider",
    required: false,
    note: "If public sewer available",
  },
  {
    id: "power_service",
    category: "Utilities",
    name: "Electrical Service Application",
    description: "Apply with Georgia Power or local EMC",
    required: true,
  },
  {
    id: "gas_service",
    category: "Utilities",
    name: "Gas Service Application",
    description: "Apply with Atlanta Gas Light or provider",
    required: false,
    note: "If natural gas desired",
  },
];

const INSPECTIONS = [
  { id: "footing", name: "Footing Inspection", order: 1 },
  { id: "foundation", name: "Foundation / Slab Inspection", order: 2 },
  { id: "rough_frame", name: "Rough Framing Inspection", order: 3 },
  { id: "rough_electric", name: "Rough Electrical Inspection", order: 4 },
  { id: "rough_plumbing", name: "Rough Plumbing Inspection", order: 5 },
  { id: "rough_mechanical", name: "Rough Mechanical Inspection", order: 6 },
  { id: "insulation", name: "Insulation Inspection", order: 7 },
  { id: "drywall", name: "Drywall Inspection (some counties)", order: 8 },
  { id: "final_electric", name: "Final Electrical Inspection", order: 9 },
  { id: "final_plumbing", name: "Final Plumbing Inspection", order: 10 },
  { id: "final_mechanical", name: "Final Mechanical Inspection", order: 11 },
  { id: "final_building", name: "Final Building Inspection", order: 12 },
  { id: "co", name: "Certificate of Occupancy", order: 13 },
];

export default function PermitChecklistScreen() {
  const router = useRouter();
  const { updateProject, getActiveProject, createProject } = useProjectStore();

  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [checkedInspections, setCheckedInspections] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<"permits" | "inspections">("permits");

  const county = GEORGIA_COUNTIES.find((c) => c.name === selectedCounty);

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const toggleInspection = (id: string) => {
    const newChecked = new Set(checkedInspections);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedInspections(newChecked);
  };

  const categories = [...new Set(PERMIT_ITEMS.map((item) => item.category))];

  const completedCount = checkedItems.size;
  const requiredCount = PERMIT_ITEMS.filter((i) => i.required).length;
  const requiredCompleted = PERMIT_ITEMS.filter(
    (i) => i.required && checkedItems.has(i.id)
  ).length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <FileCheck size={24} color="#ef4444" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">Permit Checklist</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Georgia Badge */}
        <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex-row items-center">
          <View className="bg-red-600 rounded-full px-2 py-1 mr-3">
            <Text className="text-white text-xs font-bold">GA</Text>
          </View>
          <Text className="text-red-800 flex-1 text-sm">
            Georgia-specific permits and inspections
          </Text>
        </View>

        {/* County Selector */}
        <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
          <View className="flex-row items-center mb-3">
            <MapPin size={18} color="#ef4444" />
            <Text className="text-gray-900 font-semibold ml-2">Select Your County</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {GEORGIA_COUNTIES.map((c) => (
                <TouchableOpacity
                  key={c.name}
                  onPress={() => setSelectedCounty(c.name)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCounty === c.name
                      ? "bg-red-600 border-red-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      selectedCounty === c.name ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {c.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* County Info */}
          {county && (
            <View className="mt-4 pt-4 border-t border-gray-100">
              <Text className="text-gray-700 font-medium">{county.name} County</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(county.website)}
                className="flex-row items-center mt-2"
              >
                <ExternalLink size={14} color="#3b82f6" />
                <Text className="text-blue-600 text-sm ml-1">Building Department Website</Text>
              </TouchableOpacity>
              <Text className="text-gray-500 text-sm mt-1">Phone: {county.phone}</Text>
            </View>
          )}
        </View>

        {/* Progress */}
        <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-700 font-medium">Progress</Text>
            <Text className="text-gray-700 font-medium">
              {requiredCompleted}/{requiredCount} required
            </Text>
          </View>
          <View className="bg-gray-200 rounded-full h-3">
            <View
              className="bg-green-500 rounded-full h-3"
              style={{ width: `${(requiredCompleted / requiredCount) * 100}%` }}
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row bg-gray-200 rounded-lg p-1 mb-4">
          <TouchableOpacity
            onPress={() => setActiveTab("permits")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "permits" ? "bg-white" : ""
            }`}
          >
            <Text
              className={`text-center font-medium ${
                activeTab === "permits" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Permits & Docs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("inspections")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "inspections" ? "bg-white" : ""
            }`}
          >
            <Text
              className={`text-center font-medium ${
                activeTab === "inspections" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Inspections
            </Text>
          </TouchableOpacity>
        </View>

        {/* Permits Tab */}
        {activeTab === "permits" && (
          <View>
            {categories.map((category) => (
              <View key={category} className="mb-4">
                <Text className="text-gray-700 font-semibold mb-2">{category}</Text>
                <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  {PERMIT_ITEMS.filter((item) => item.category === category).map(
                    (item, index, arr) => (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => toggleItem(item.id)}
                        className={`flex-row items-start p-4 ${
                          index !== arr.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {checkedItems.has(item.id) ? (
                          <CheckCircle size={22} color="#22c55e" />
                        ) : (
                          <Circle size={22} color="#d1d5db" />
                        )}
                        <View className="flex-1 ml-3">
                          <View className="flex-row items-center">
                            <Text
                              className={`font-medium ${
                                checkedItems.has(item.id)
                                  ? "text-gray-400 line-through"
                                  : "text-gray-900"
                              }`}
                            >
                              {item.name}
                            </Text>
                            {item.required && (
                              <View className="bg-red-100 rounded px-1.5 py-0.5 ml-2">
                                <Text className="text-red-700 text-xs font-medium">
                                  Required
                                </Text>
                              </View>
                            )}
                          </View>
                          <Text className="text-gray-500 text-sm mt-0.5">
                            {item.description}
                          </Text>
                          {item.note && (
                            <Text className="text-amber-600 text-xs mt-1">
                              Note: {item.note}
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Inspections Tab */}
        {activeTab === "inspections" && (
          <View className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
            {INSPECTIONS.map((inspection, index) => (
              <TouchableOpacity
                key={inspection.id}
                onPress={() => toggleInspection(inspection.id)}
                className={`flex-row items-center p-4 ${
                  index !== INSPECTIONS.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <View
                  className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
                    checkedInspections.has(inspection.id)
                      ? "bg-green-500"
                      : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`font-bold text-sm ${
                      checkedInspections.has(inspection.id)
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {inspection.order}
                  </Text>
                </View>
                <Text
                  className={`flex-1 font-medium ${
                    checkedInspections.has(inspection.id)
                      ? "text-gray-400 line-through"
                      : "text-gray-900"
                  }`}
                >
                  {inspection.name}
                </Text>
                {checkedInspections.has(inspection.id) && (
                  <CheckCircle size={20} color="#22c55e" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Save Button */}
        <TouchableOpacity
          onPress={() => {
            const project = getActiveProject();
            const projectId = project?.id || createProject("My Build");
            updateProject(projectId, {
              permitChecklist: PERMIT_ITEMS.map((item) => ({
                id: item.id,
                name: item.name,
                completed: checkedItems.has(item.id),
              })),
            });
            router.push("/tools");
          }}
          className="bg-green-600 rounded-xl py-4 mb-4"
        >
          <Text className="text-white font-semibold text-center">Save Progress</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8">
          <Text className="text-amber-800 text-xs">
            Requirements vary by county and municipality. This checklist covers common
            Georgia requirements but may not include all permits needed for your specific
            project. Always verify with your local building department.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
