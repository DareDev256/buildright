import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  FolderCheck,
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronUp,
  Plus,
  FileText,
  AlertTriangle,
} from "lucide-react-native";
import { useProjectStore } from "../../src/stores/useProjectStore";

interface Document {
  id: string;
  name: string;
  category: string;
  description: string;
  required: boolean;
  tip?: string;
}

const DOCUMENTS: Document[] = [
  // Financial
  {
    id: "credit_report",
    category: "Financial",
    name: "Credit Report",
    description: "Recent credit report from all 3 bureaus",
    required: true,
    tip: "Lenders typically want scores above 680 for construction loans",
  },
  {
    id: "tax_returns",
    category: "Financial",
    name: "Tax Returns (2 years)",
    description: "Complete federal tax returns with all schedules",
    required: true,
  },
  {
    id: "w2_1099",
    category: "Financial",
    name: "W-2s / 1099s (2 years)",
    description: "Proof of income documentation",
    required: true,
  },
  {
    id: "bank_statements",
    category: "Financial",
    name: "Bank Statements (2-3 months)",
    description: "All accounts showing reserves and down payment",
    required: true,
  },
  {
    id: "pay_stubs",
    category: "Financial",
    name: "Recent Pay Stubs",
    description: "Last 30 days of pay stubs",
    required: true,
  },
  {
    id: "asset_statements",
    category: "Financial",
    name: "Asset Statements",
    description: "401k, IRA, stocks, bonds, etc.",
    required: false,
    tip: "Helpful to show additional reserves",
  },

  // Property
  {
    id: "purchase_contract",
    category: "Property",
    name: "Land Purchase Contract",
    description: "Signed contract for land acquisition",
    required: true,
  },
  {
    id: "deed",
    category: "Property",
    name: "Deed / Title",
    description: "Proof of land ownership if already owned",
    required: false,
  },
  {
    id: "survey",
    category: "Property",
    name: "Land Survey",
    description: "Recent property survey with boundaries",
    required: true,
  },
  {
    id: "title_insurance",
    category: "Property",
    name: "Title Insurance Commitment",
    description: "Title search and insurance commitment",
    required: true,
  },
  {
    id: "soil_report",
    category: "Property",
    name: "Soil / Geotechnical Report",
    description: "Soil analysis for foundation requirements",
    required: false,
    tip: "Required in some areas with challenging soil",
  },

  // Construction
  {
    id: "building_plans",
    category: "Construction",
    name: "Building Plans",
    description: "Complete architectural drawings",
    required: true,
  },
  {
    id: "specifications",
    category: "Construction",
    name: "Specifications / Scope",
    description: "Detailed list of materials and finishes",
    required: true,
    tip: "Be as detailed as possible to avoid change orders",
  },
  {
    id: "contractor_bids",
    category: "Construction",
    name: "Contractor Bids / Estimates",
    description: "Detailed cost breakdown from builder",
    required: true,
  },
  {
    id: "builder_contract",
    category: "Construction",
    name: "Builder Contract",
    description: "Signed construction contract",
    required: true,
  },
  {
    id: "builder_license",
    category: "Construction",
    name: "Builder License & Insurance",
    description: "Contractor license and liability insurance",
    required: true,
    tip: "Georgia requires residential contractors to be licensed",
  },
  {
    id: "energy_calcs",
    category: "Construction",
    name: "Energy Calculations",
    description: "REScheck or equivalent compliance docs",
    required: true,
  },

  // Insurance
  {
    id: "builders_risk",
    category: "Insurance",
    name: "Builder's Risk Insurance",
    description: "Insurance during construction",
    required: true,
  },
  {
    id: "liability_insurance",
    category: "Insurance",
    name: "Liability Insurance",
    description: "General liability during construction",
    required: true,
  },
  {
    id: "homeowners_quote",
    category: "Insurance",
    name: "Homeowner's Insurance Quote",
    description: "For post-construction coverage",
    required: false,
    tip: "Lenders want to see this before closing",
  },

  // Legal
  {
    id: "id_documents",
    category: "Legal",
    name: "Government ID",
    description: "Driver's license, passport, etc.",
    required: true,
  },
  {
    id: "hoa_approval",
    category: "Legal",
    name: "HOA Approval (if applicable)",
    description: "Architectural review approval",
    required: false,
  },
  {
    id: "variance_approval",
    category: "Legal",
    name: "Variance / Zoning Approval",
    description: "If any variances were required",
    required: false,
  },
];

const CATEGORIES = ["Financial", "Property", "Construction", "Insurance", "Legal"];

export default function DocumentTrackerScreen() {
  const router = useRouter();
  const { updateProject, getActiveProject, createProject } = useProjectStore();

  const [checkedDocs, setCheckedDocs] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(CATEGORIES)
  );
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customDocName, setCustomDocName] = useState("");

  const toggleDoc = (id: string) => {
    const newChecked = new Set(checkedDocs);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedDocs(newChecked);
  };

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const requiredDocs = DOCUMENTS.filter((d) => d.required);
  const requiredComplete = requiredDocs.filter((d) => checkedDocs.has(d.id)).length;
  const totalComplete = checkedDocs.size;
  const progressPercent = Math.round((requiredComplete / requiredDocs.length) * 100);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <FolderCheck size={24} color="#10b981" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">Document Tracker</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Progress Card */}
        <View className="bg-green-600 rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-green-100 font-medium">Document Progress</Text>
            <Text className="text-white font-bold">{progressPercent}%</Text>
          </View>
          <View className="bg-green-500 rounded-full h-3 mb-2">
            <View
              className="bg-white rounded-full h-3"
              style={{ width: `${progressPercent}%` }}
            />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-green-100 text-sm">
              {requiredComplete}/{requiredDocs.length} required docs
            </Text>
            <Text className="text-green-100 text-sm">{totalComplete} total gathered</Text>
          </View>
        </View>

        {/* Warning if incomplete */}
        {progressPercent < 100 && (
          <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex-row">
            <AlertTriangle size={18} color="#f59e0b" />
            <Text className="text-amber-800 text-sm flex-1 ml-2">
              Gather all required documents before applying for a construction loan.
              Missing documents delay approval.
            </Text>
          </View>
        )}

        {/* Document Categories */}
        {CATEGORIES.map((category) => {
          const categoryDocs = DOCUMENTS.filter((d) => d.category === category);
          const categoryComplete = categoryDocs.filter((d) =>
            checkedDocs.has(d.id)
          ).length;
          const isExpanded = expandedCategories.has(category);

          return (
            <View key={category} className="mb-4">
              <TouchableOpacity
                onPress={() => toggleCategory(category)}
                className="flex-row items-center justify-between bg-white rounded-t-xl border border-gray-200 p-4"
              >
                <View className="flex-row items-center">
                  <FileText size={20} color="#6b7280" />
                  <Text className="text-gray-900 font-semibold ml-2">{category}</Text>
                  <View className="bg-gray-100 rounded-full px-2 py-0.5 ml-2">
                    <Text className="text-gray-600 text-xs font-medium">
                      {categoryComplete}/{categoryDocs.length}
                    </Text>
                  </View>
                </View>
                {isExpanded ? (
                  <ChevronUp size={20} color="#9ca3af" />
                ) : (
                  <ChevronDown size={20} color="#9ca3af" />
                )}
              </TouchableOpacity>

              {isExpanded && (
                <View className="bg-white border-x border-b border-gray-200 rounded-b-xl overflow-hidden">
                  {categoryDocs.map((doc, index) => (
                    <View
                      key={doc.id}
                      className={`${
                        index !== categoryDocs.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <TouchableOpacity
                        onPress={() => toggleDoc(doc.id)}
                        className="flex-row items-start p-4"
                      >
                        {checkedDocs.has(doc.id) ? (
                          <CheckCircle size={22} color="#22c55e" />
                        ) : (
                          <Circle size={22} color="#d1d5db" />
                        )}
                        <View className="flex-1 ml-3">
                          <View className="flex-row items-center flex-wrap">
                            <Text
                              className={`font-medium ${
                                checkedDocs.has(doc.id)
                                  ? "text-gray-400 line-through"
                                  : "text-gray-900"
                              }`}
                            >
                              {doc.name}
                            </Text>
                            {doc.required && (
                              <View className="bg-red-100 rounded px-1.5 py-0.5 ml-2">
                                <Text className="text-red-700 text-xs font-medium">
                                  Required
                                </Text>
                              </View>
                            )}
                          </View>
                          <Text className="text-gray-500 text-sm mt-0.5">
                            {doc.description}
                          </Text>
                          {doc.tip && (
                            <View className="bg-blue-50 rounded p-2 mt-2">
                              <Text className="text-blue-700 text-xs">
                                Tip: {doc.tip}
                              </Text>
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>

                      {/* Notes input */}
                      {checkedDocs.has(doc.id) && (
                        <View className="px-4 pb-4">
                          <TextInput
                            value={notes[doc.id] || ""}
                            onChangeText={(text) =>
                              setNotes({ ...notes, [doc.id]: text })
                            }
                            placeholder="Add notes (file location, date obtained...)"
                            className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
                          />
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}

        {/* Add Custom Document */}
        <TouchableOpacity
          onPress={() => setShowAddCustom(!showAddCustom)}
          className="flex-row items-center justify-center bg-white rounded-xl border border-dashed border-gray-300 p-4 mb-4"
        >
          <Plus size={20} color="#6b7280" />
          <Text className="text-gray-600 font-medium ml-2">Add Custom Document</Text>
        </TouchableOpacity>

        {showAddCustom && (
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
            <TextInput
              value={customDocName}
              onChangeText={setCustomDocName}
              placeholder="Document name..."
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 mb-3"
            />
            <TouchableOpacity
              onPress={() => {
                if (customDocName.trim()) {
                  // Add custom doc logic here
                  setCustomDocName("");
                  setShowAddCustom(false);
                }
              }}
              className="bg-green-600 rounded-lg py-3"
            >
              <Text className="text-white font-medium text-center">Add Document</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Save Button */}
        <TouchableOpacity
          onPress={() => {
            const project = getActiveProject();
            const projectId = project?.id || createProject("My Build");
            updateProject(projectId, {
              documents_tracked: {
                checkedDocs: Array.from(checkedDocs),
                notes,
              },
            });
            router.push("/tools");
          }}
          className="bg-green-600 rounded-xl py-4 mb-4"
        >
          <Text className="text-white font-semibold text-center">Save Progress</Text>
        </TouchableOpacity>

        {/* Tips */}
        <View className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-8">
          <Text className="text-blue-800 text-sm font-medium mb-2">
            Document Tips:
          </Text>
          <Text className="text-blue-700 text-xs mb-1">
            • Keep digital copies organized in folders by category
          </Text>
          <Text className="text-blue-700 text-xs mb-1">
            • PDFs are preferred by most lenders
          </Text>
          <Text className="text-blue-700 text-xs mb-1">
            • Make sure documents are current (within 30-90 days)
          </Text>
          <Text className="text-blue-700 text-xs">
            • Have multiple copies available for different parties
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
