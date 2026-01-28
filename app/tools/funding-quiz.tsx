import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  HelpCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronRight,
  RefreshCw,
} from "lucide-react-native";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; points: number }[];
  explanation: string;
  category: "credit" | "income" | "assets" | "experience" | "project";
}

const QUESTIONS: Question[] = [
  {
    id: "credit_score",
    category: "credit",
    question: "What is your current credit score?",
    options: [
      { label: "740 or higher", value: "excellent", points: 3 },
      { label: "700-739", value: "good", points: 2 },
      { label: "680-699", value: "fair", points: 1 },
      { label: "Below 680", value: "low", points: 0 },
      { label: "I don't know", value: "unknown", points: 0 },
    ],
    explanation:
      "Most construction lenders require a minimum credit score of 680. Higher scores get better rates.",
  },
  {
    id: "debt_to_income",
    category: "income",
    question: "What percentage of your gross monthly income goes to debt payments?",
    options: [
      { label: "Less than 30%", value: "low", points: 3 },
      { label: "30-40%", value: "moderate", points: 2 },
      { label: "40-50%", value: "high", points: 1 },
      { label: "More than 50%", value: "very_high", points: 0 },
      { label: "I'm not sure", value: "unknown", points: 0 },
    ],
    explanation:
      "Lenders typically want your total DTI (including new mortgage) under 43%. Lower is better.",
  },
  {
    id: "down_payment",
    category: "assets",
    question: "How much can you put down on the construction loan?",
    options: [
      { label: "25% or more", value: "high", points: 3 },
      { label: "20-24%", value: "good", points: 2 },
      { label: "10-19%", value: "moderate", points: 1 },
      { label: "Less than 10%", value: "low", points: 0 },
    ],
    explanation:
      "Construction loans typically require 20-25% down. Some programs accept less with higher rates.",
  },
  {
    id: "reserves",
    category: "assets",
    question: "After down payment, how many months of expenses will you have in savings?",
    options: [
      { label: "12+ months", value: "excellent", points: 3 },
      { label: "6-12 months", value: "good", points: 2 },
      { label: "3-6 months", value: "fair", points: 1 },
      { label: "Less than 3 months", value: "low", points: 0 },
    ],
    explanation:
      "Lenders want to see reserves for unexpected costs. Construction often has surprises.",
  },
  {
    id: "income_stability",
    category: "income",
    question: "How long have you been at your current job/income source?",
    options: [
      { label: "5+ years", value: "very_stable", points: 3 },
      { label: "2-5 years", value: "stable", points: 2 },
      { label: "1-2 years", value: "recent", points: 1 },
      { label: "Less than 1 year", value: "new", points: 0 },
    ],
    explanation:
      "Lenders typically want 2+ years of stable income history. Self-employed may need more documentation.",
  },
  {
    id: "income_type",
    category: "income",
    question: "What is your primary income source?",
    options: [
      { label: "W-2 employee", value: "w2", points: 3 },
      { label: "Self-employed (2+ years)", value: "self_employed_established", points: 2 },
      { label: "Self-employed (< 2 years)", value: "self_employed_new", points: 1 },
      { label: "Variable/commission income", value: "variable", points: 1 },
      { label: "Retired/investment income", value: "retired", points: 2 },
    ],
    explanation:
      "W-2 income is easiest to document. Self-employed borrowers need tax returns and may face stricter requirements.",
  },
  {
    id: "land_status",
    category: "project",
    question: "What's your land situation?",
    options: [
      { label: "Own land free and clear", value: "owned_free", points: 3 },
      { label: "Own land with small mortgage", value: "owned_mortgage", points: 2 },
      { label: "Under contract to purchase", value: "under_contract", points: 2 },
      { label: "Still looking for land", value: "looking", points: 1 },
      { label: "Plan to buy land with construction loan", value: "combined", points: 1 },
    ],
    explanation:
      "Owning land outright is ideal. It can serve as your down payment equity in many cases.",
  },
  {
    id: "plans_ready",
    category: "project",
    question: "Do you have building plans ready?",
    options: [
      { label: "Yes, complete and permitted", value: "permitted", points: 3 },
      { label: "Yes, complete but not permitted", value: "complete", points: 2 },
      { label: "Working with architect now", value: "in_progress", points: 1 },
      { label: "Have basic ideas only", value: "conceptual", points: 0 },
    ],
    explanation:
      "Lenders need complete plans and cost estimates to approve a construction loan.",
  },
  {
    id: "builder_selected",
    category: "project",
    question: "Have you selected a licensed general contractor?",
    options: [
      { label: "Yes, with signed contract", value: "contracted", points: 3 },
      { label: "Yes, getting final bids", value: "selected", points: 2 },
      { label: "Interviewing builders", value: "searching", points: 1 },
      { label: "Plan to be owner-builder", value: "owner_builder", points: 1 },
      { label: "Haven't started looking", value: "not_started", points: 0 },
    ],
    explanation:
      "Most lenders require a licensed GC. Owner-builder loans exist but have stricter requirements.",
  },
  {
    id: "construction_experience",
    category: "experience",
    question: "What's your experience with construction projects?",
    options: [
      { label: "Built a home before", value: "built_before", points: 3 },
      { label: "Major renovation experience", value: "renovation", points: 2 },
      { label: "Some DIY/small projects", value: "some", points: 1 },
      { label: "No construction experience", value: "none", points: 0 },
    ],
    explanation:
      "Experience helps but isn't required. What matters most is having a good team.",
  },
];

interface Answer {
  questionId: string;
  value: string;
  points: number;
}

export default function FundingQuizScreen() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const totalQuestions = QUESTIONS.length;
  const maxPoints = QUESTIONS.reduce(
    (acc, q) => acc + Math.max(...q.options.map((o) => o.points)),
    0
  );

  const handleAnswer = (option: { label: string; value: string; points: number }) => {
    const newAnswers = [
      ...answers.filter((a) => a.questionId !== question.id),
      { questionId: question.id, value: option.value, points: option.points },
    ];
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalPoints = answers.reduce((acc, a) => acc + a.points, 0);
  const percentage = Math.round((totalPoints / maxPoints) * 100);

  const getReadinessLevel = () => {
    if (percentage >= 80) return { level: "High", color: "green", icon: CheckCircle };
    if (percentage >= 60) return { level: "Moderate", color: "yellow", icon: AlertTriangle };
    if (percentage >= 40) return { level: "Low", color: "orange", icon: AlertTriangle };
    return { level: "Not Ready", color: "red", icon: XCircle };
  };

  const getCategoryScore = (category: string) => {
    const categoryQuestions = QUESTIONS.filter((q) => q.category === category);
    const categoryAnswers = answers.filter((a) =>
      categoryQuestions.some((q) => q.id === a.questionId)
    );
    const maxCategoryPoints = categoryQuestions.reduce(
      (acc, q) => acc + Math.max(...q.options.map((o) => o.points)),
      0
    );
    const earnedPoints = categoryAnswers.reduce((acc, a) => acc + a.points, 0);
    return { earned: earnedPoints, max: maxCategoryPoints };
  };

  const getRecommendations = () => {
    const recs: string[] = [];

    const creditAnswer = answers.find((a) => a.questionId === "credit_score");
    if (creditAnswer && creditAnswer.points < 2) {
      recs.push("Work on improving your credit score before applying. Pay down debt and correct any errors on your report.");
    }

    const dtiAnswer = answers.find((a) => a.questionId === "debt_to_income");
    if (dtiAnswer && dtiAnswer.points < 2) {
      recs.push("Consider paying off some debt to lower your debt-to-income ratio before applying.");
    }

    const downPaymentAnswer = answers.find((a) => a.questionId === "down_payment");
    if (downPaymentAnswer && downPaymentAnswer.points < 2) {
      recs.push("Save more for your down payment. 20-25% down gets the best terms on construction loans.");
    }

    const reservesAnswer = answers.find((a) => a.questionId === "reserves");
    if (reservesAnswer && reservesAnswer.points < 2) {
      recs.push("Build up your cash reserves. Construction projects often have unexpected costs.");
    }

    const plansAnswer = answers.find((a) => a.questionId === "plans_ready");
    if (plansAnswer && plansAnswer.points < 2) {
      recs.push("Get your building plans finalized. Lenders need complete plans and cost estimates.");
    }

    const builderAnswer = answers.find((a) => a.questionId === "builder_selected");
    if (builderAnswer && builderAnswer.points < 2) {
      recs.push("Select a licensed general contractor and get a detailed bid before applying.");
    }

    if (recs.length === 0) {
      recs.push("You're in great shape! Start talking to construction loan lenders.");
    }

    return recs;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const readiness = getReadinessLevel();
    const ReadinessIcon = readiness.icon;
    const recommendations = getRecommendations();

    const categories = [
      { key: "credit", label: "Credit" },
      { key: "income", label: "Income" },
      { key: "assets", label: "Assets" },
      { key: "project", label: "Project Readiness" },
      { key: "experience", label: "Experience" },
    ];

    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        {/* Header */}
        <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <ArrowLeft size={24} color="#374151" />
          </TouchableOpacity>
          <HelpCircle size={24} color="#f59e0b" />
          <Text className="text-lg font-semibold text-gray-900 ml-2">Quiz Results</Text>
        </View>

        <ScrollView className="flex-1 px-4 py-4">
          {/* Readiness Score */}
          <View
            className={`rounded-xl p-6 mb-4 ${
              readiness.color === "green"
                ? "bg-green-600"
                : readiness.color === "yellow"
                ? "bg-yellow-500"
                : readiness.color === "orange"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          >
            <View className="flex-row items-center justify-center mb-2">
              <ReadinessIcon size={32} color="white" />
              <Text className="text-white text-2xl font-bold ml-3">
                {readiness.level} Readiness
              </Text>
            </View>
            <Text className="text-white text-center text-lg">
              Score: {totalPoints}/{maxPoints} ({percentage}%)
            </Text>
          </View>

          {/* Category Breakdown */}
          <Text className="text-lg font-semibold text-gray-900 mb-3">
            Category Breakdown
          </Text>
          <View className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
            {categories.map((cat, index) => {
              const score = getCategoryScore(cat.key);
              const catPercent =
                score.max > 0 ? Math.round((score.earned / score.max) * 100) : 0;
              return (
                <View
                  key={cat.key}
                  className={`p-4 ${
                    index !== categories.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-900 font-medium">{cat.label}</Text>
                    <Text className="text-gray-600">
                      {score.earned}/{score.max}
                    </Text>
                  </View>
                  <View className="bg-gray-200 rounded-full h-2">
                    <View
                      className={`rounded-full h-2 ${
                        catPercent >= 70
                          ? "bg-green-500"
                          : catPercent >= 40
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${catPercent}%` }}
                    />
                  </View>
                </View>
              );
            })}
          </View>

          {/* Recommendations */}
          <Text className="text-lg font-semibold text-gray-900 mb-3">
            Recommendations
          </Text>
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
            {recommendations.map((rec, index) => (
              <View
                key={index}
                className={`flex-row ${
                  index !== recommendations.length - 1 ? "mb-3 pb-3 border-b border-gray-100" : ""
                }`}
              >
                <ChevronRight size={18} color="#f59e0b" className="mt-0.5" />
                <Text className="text-gray-700 flex-1 ml-2">{rec}</Text>
              </View>
            ))}
          </View>

          {/* Next Steps */}
          <View className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <Text className="text-blue-900 font-semibold mb-2">Next Steps</Text>
            <Text className="text-blue-800 text-sm mb-2">
              1. Gather all required documents (use our Document Tracker)
            </Text>
            <Text className="text-blue-800 text-sm mb-2">
              2. Get pre-qualified with 2-3 construction lenders
            </Text>
            <Text className="text-blue-800 text-sm mb-2">
              3. Compare loan terms, rates, and draw schedules
            </Text>
            <Text className="text-blue-800 text-sm">
              4. Choose a lender and submit full application
            </Text>
          </View>

          {/* Retake Button */}
          <TouchableOpacity
            onPress={resetQuiz}
            className="flex-row items-center justify-center bg-gray-200 rounded-xl py-4 mb-8"
          >
            <RefreshCw size={20} color="#374151" />
            <Text className="text-gray-700 font-semibold ml-2">Retake Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <HelpCircle size={24} color="#f59e0b" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">
          Funding Readiness Quiz
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Progress */}
        <View className="mb-6">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">
              Question {currentQuestion + 1} of {totalQuestions}
            </Text>
            <Text className="text-gray-600">
              {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
            </Text>
          </View>
          <View className="bg-gray-200 rounded-full h-2">
            <View
              className="bg-amber-500 rounded-full h-2"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </View>
        </View>

        {/* Question */}
        <View className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
          <View className="bg-amber-100 rounded-full px-3 py-1 self-start mb-3">
            <Text className="text-amber-700 text-xs font-medium capitalize">
              {question.category}
            </Text>
          </View>
          <Text className="text-xl font-semibold text-gray-900 mb-4">
            {question.question}
          </Text>

          {/* Options */}
          <View className="gap-3">
            {question.options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleAnswer(option)}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 active:bg-amber-50 active:border-amber-300"
              >
                <Text className="text-gray-900 font-medium">{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Explanation */}
        <View className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <Text className="text-blue-800 text-sm">{question.explanation}</Text>
        </View>

        {/* Back Button */}
        {currentQuestion > 0 && (
          <TouchableOpacity
            onPress={() => setCurrentQuestion(currentQuestion - 1)}
            className="py-3"
          >
            <Text className="text-gray-600 text-center">← Previous Question</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
