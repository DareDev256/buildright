import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Info,
  AlertTriangle,
  Lightbulb,
  MapPin,
} from "lucide-react-native";
import { getModule, getLesson, getNextLesson, getPreviousLesson, LessonContent, QuizQuestion } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";

function ContentRenderer({ content }: { content: LessonContent }) {
  switch (content.type) {
    case "text":
      return (
        <Text className="text-gray-700 text-base leading-7 mb-4">
          {content.content}
        </Text>
      );

    case "heading":
      return (
        <Text className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {content.content}
        </Text>
      );

    case "list":
      return (
        <View className="mb-4">
          {content.items?.map((item, index) => (
            <View key={index} className="flex-row mb-2">
              <Text className="text-primary-600 mr-2">•</Text>
              <Text className="text-gray-700 flex-1 leading-6">{item}</Text>
            </View>
          ))}
        </View>
      );

    case "callout":
      const variants = {
        info: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          icon: Info,
          iconColor: "#3b82f6",
        },
        warning: {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-800",
          icon: AlertTriangle,
          iconColor: "#f59e0b",
        },
        tip: {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          icon: Lightbulb,
          iconColor: "#22c55e",
        },
        georgia: {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-800",
          icon: MapPin,
          iconColor: "#ef4444",
        },
      };
      const variant = variants[content.variant || "info"];
      const IconComponent = variant.icon;

      return (
        <View
          className={`${variant.bg} border ${variant.border} rounded-lg p-4 mb-4`}
        >
          <View className="flex-row items-center mb-2">
            <IconComponent size={18} color={variant.iconColor} />
            <Text className={`${variant.text} font-semibold ml-2`}>
              {content.title}
            </Text>
          </View>
          <Text className={`${variant.text} leading-6`}>{content.content}</Text>
        </View>
      );

    case "comparison":
      return (
        <View className="mb-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {content.columns?.map((column, index) => (
                <View
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 w-48 border border-gray-200"
                >
                  <Text className="font-bold text-gray-900 mb-3 text-center">
                    {column.title}
                  </Text>
                  {column.items.map((item, itemIndex) => (
                    <Text
                      key={itemIndex}
                      className="text-gray-600 text-sm mb-1"
                    >
                      {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      );

    default:
      return null;
  }
}

function QuizSection({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete: () => void;
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const question = questions[currentQ];
  const isCorrect = selectedAnswer === question.correctIndex;
  const isLastQuestion = currentQ === questions.length - 1;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  return (
    <View className="bg-purple-50 rounded-xl p-4 mb-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-purple-800 font-semibold">Knowledge Check</Text>
        <Text className="text-purple-600 text-sm">
          {currentQ + 1} of {questions.length}
        </Text>
      </View>

      <Text className="text-gray-900 font-medium text-lg mb-4">
        {question.question}
      </Text>

      <View className="gap-2">
        {question.options.map((option, index) => {
          let bgColor = "bg-white";
          let borderColor = "border-gray-200";
          let textColor = "text-gray-700";

          if (showResult) {
            if (index === question.correctIndex) {
              bgColor = "bg-green-100";
              borderColor = "border-green-300";
              textColor = "text-green-800";
            } else if (index === selectedAnswer && !isCorrect) {
              bgColor = "bg-red-100";
              borderColor = "border-red-300";
              textColor = "text-red-800";
            }
          } else if (selectedAnswer === index) {
            bgColor = "bg-purple-100";
            borderColor = "border-purple-300";
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(index)}
              disabled={showResult}
              className={`${bgColor} border ${borderColor} rounded-lg p-3`}
            >
              <Text className={`${textColor} font-medium`}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {showResult && (
        <View className="mt-4">
          <View
            className={`p-3 rounded-lg ${
              isCorrect ? "bg-green-100" : "bg-amber-100"
            }`}
          >
            <Text
              className={`font-medium ${
                isCorrect ? "text-green-800" : "text-amber-800"
              }`}
            >
              {isCorrect ? "Correct!" : "Not quite"}
            </Text>
            <Text
              className={`text-sm mt-1 ${
                isCorrect ? "text-green-700" : "text-amber-700"
              }`}
            >
              {question.explanation}
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleNext}
            className="bg-purple-600 rounded-lg py-3 mt-4"
          >
            <Text className="text-white font-semibold text-center">
              {isLastQuestion
                ? `Finish Quiz (${correctCount}/${questions.length} correct)`
                : "Next Question"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default function LessonScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const { markLessonComplete, isLessonComplete } = useProgressStore();

  const [quizCompleted, setQuizCompleted] = useState(false);

  // Find the lesson
  const moduleId = lessonId?.split("-")[0] || "1";
  const module = getModule(moduleId);
  const lesson = getLesson(moduleId, lessonId || "");

  if (!lesson || !module) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Lesson not found</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 bg-primary-600 px-4 py-2 rounded-lg"
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const isComplete = isLessonComplete(moduleId, lesson.id);
  const nextLesson = getNextLesson(moduleId, lesson.id);
  const prevLesson = getPreviousLesson(moduleId, lesson.id);
  const hasQuiz = lesson.quiz && lesson.quiz.length > 0;
  const canMarkComplete = !hasQuiz || quizCompleted || isComplete;

  const handleComplete = () => {
    markLessonComplete(moduleId, lesson.id);
    if (nextLesson) {
      router.replace(`/lesson/${nextLesson.lessonId}`);
    } else {
      router.push(`/learn/${moduleId}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-gray-500 text-sm">
            Module {module.id} • Lesson {lesson.order}
          </Text>
          <Text className="text-gray-900 font-semibold" numberOfLines={1}>
            {lesson.title}
          </Text>
        </View>
        {isComplete && (
          <View className="bg-green-100 rounded-full p-1">
            <CheckCircle size={20} color="#22c55e" />
          </View>
        )}
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        {/* Lesson Header */}
        <Text className="text-3xl font-bold text-gray-900 mb-2">
          {lesson.title}
        </Text>
        <Text className="text-gray-500 text-lg mb-6">{lesson.subtitle}</Text>

        {/* Content */}
        {lesson.content.map((block, index) => (
          <ContentRenderer key={index} content={block} />
        ))}

        {/* Key Takeaways */}
        <View className="bg-primary-50 border border-primary-200 rounded-xl p-4 mt-6 mb-6">
          <Text className="text-primary-800 font-bold text-lg mb-3">
            Key Takeaways
          </Text>
          {lesson.keyTakeaways.map((takeaway, index) => (
            <View key={index} className="flex-row mb-2">
              <CheckCircle size={18} color="#3b82f6" />
              <Text className="text-primary-700 flex-1 ml-2">{takeaway}</Text>
            </View>
          ))}
        </View>

        {/* Georgia Note */}
        {lesson.georgiaNote && (
          <View className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <View className="flex-row items-center mb-2">
              <View className="bg-red-600 rounded-full px-2 py-0.5 mr-2">
                <Text className="text-white text-xs font-bold">GA</Text>
              </View>
              <Text className="text-red-800 font-semibold">Georgia Note</Text>
            </View>
            <Text className="text-red-700">{lesson.georgiaNote}</Text>
          </View>
        )}

        {/* Quiz */}
        {hasQuiz && !isComplete && (
          <QuizSection
            questions={lesson.quiz!}
            onComplete={() => setQuizCompleted(true)}
          />
        )}

        {/* Complete Button */}
        {!isComplete && canMarkComplete && (
          <TouchableOpacity
            onPress={handleComplete}
            className="bg-green-600 rounded-xl py-4 mb-4"
          >
            <Text className="text-white font-semibold text-center text-lg">
              {nextLesson ? "Complete & Continue" : "Complete Module"}
            </Text>
          </TouchableOpacity>
        )}

        {/* Already Complete */}
        {isComplete && (
          <View className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex-row items-center">
            <CheckCircle size={24} color="#22c55e" />
            <Text className="text-green-700 font-medium ml-3">
              You've completed this lesson
            </Text>
          </View>
        )}

        {/* Navigation */}
        <View className="flex-row justify-between mb-8">
          {prevLesson ? (
            <TouchableOpacity
              onPress={() => router.replace(`/lesson/${prevLesson.lessonId}`)}
              className="flex-row items-center"
            >
              <ChevronLeft size={20} color="#6b7280" />
              <Text className="text-gray-600">Previous</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {nextLesson && isComplete && (
            <TouchableOpacity
              onPress={() => router.replace(`/lesson/${nextLesson.lessonId}`)}
              className="flex-row items-center"
            >
              <Text className="text-primary-600 font-medium">Next Lesson</Text>
              <ChevronRight size={20} color="#3b82f6" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
