import { useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
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
  Trophy,
  Check,
  X,
} from "lucide-react-native";
import Animated, {
  FadeInDown,
  FadeIn,
  FadeOut,
  ZoomIn,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  SlideInRight,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { getModule, getLesson, getNextLesson, getPreviousLesson, LessonContent, QuizQuestion } from "../../src/content";
import { useProgressStore } from "../../src/stores/useProgressStore";
import AnimatedPressable from "../../src/components/AnimatedPressable";
import CollapsibleSection from "../../src/components/CollapsibleSection";

// Group content blocks into sections by heading
function groupContentBySections(content: LessonContent[]): { title: string | null; blocks: LessonContent[] }[] {
  const sections: { title: string | null; blocks: LessonContent[] }[] = [];
  let current: { title: string | null; blocks: LessonContent[] } = { title: null, blocks: [] };

  for (const block of content) {
    if (block.type === "heading") {
      if (current.blocks.length > 0 || current.title !== null) {
        sections.push(current);
      }
      current = { title: block.content || "Section", blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }

  if (current.blocks.length > 0 || current.title !== null) {
    sections.push(current);
  }

  return sections;
}

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
            <Animated.View
              key={index}
              entering={FadeInDown.delay(index * 60).duration(300).springify()}
              className="flex-row mb-2"
            >
              <Text className="text-primary-600 mr-2">•</Text>
              <Text className="text-gray-700 flex-1 leading-6">{item}</Text>
            </Animated.View>
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

// Progress dots component
function ProgressDots({ total, current, correctSet }: { total: number; current: number; correctSet: Set<number> }) {
  return (
    <View className="flex-row items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => {
        const isActive = i === current;
        const isDone = i < current;
        const isCorrect = correctSet.has(i);

        return (
          <View
            key={i}
            className={`rounded-full ${
              isActive
                ? "w-6 h-2.5 bg-purple-600"
                : isDone && isCorrect
                ? "w-2.5 h-2.5 bg-green-500"
                : isDone
                ? "w-2.5 h-2.5 bg-red-400"
                : "w-2.5 h-2.5 bg-purple-200"
            }`}
          />
        );
      })}
    </View>
  );
}

// Celebration overlay
function CelebrationOverlay({ score, total, onDismiss }: { score: number; total: number; onDismiss: () => void }) {
  const percentage = Math.round((score / total) * 100);
  const isGreat = percentage >= 80;

  return (
    <Animated.View
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
      className="absolute inset-0 z-50 bg-black/60 items-center justify-center"
    >
      <Animated.View
        entering={ZoomIn.springify().damping(12).stiffness(100)}
        className="bg-white rounded-3xl p-8 mx-8 items-center"
      >
        <View className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${isGreat ? "bg-yellow-100" : "bg-blue-100"}`}>
          <Trophy size={40} color={isGreat ? "#f59e0b" : "#3b82f6"} />
        </View>
        <Text className="text-2xl font-bold text-gray-900 mb-1">
          {isGreat ? "Excellent!" : "Quiz Complete!"}
        </Text>
        <Text className="text-gray-500 text-center mb-4">
          {isGreat
            ? "You really know your stuff!"
            : "Keep learning to improve your score!"}
        </Text>
        <View className="flex-row items-baseline mb-6">
          <Text className="text-5xl font-extrabold text-gray-900">{score}</Text>
          <Text className="text-2xl text-gray-400 font-bold">/{total}</Text>
        </View>
        <Text className={`text-sm font-semibold mb-6 ${isGreat ? "text-yellow-600" : "text-blue-600"}`}>
          {percentage}% correct
        </Text>
        <AnimatedPressable
          onPress={onDismiss}
          className="bg-purple-600 rounded-xl py-3.5 px-10"
        >
          <Text className="text-white font-semibold text-base">Continue</Text>
        </AnimatedPressable>
      </Animated.View>
    </Animated.View>
  );
}

// Animated quiz option
function QuizOption({
  option,
  index,
  showResult,
  selectedAnswer,
  correctIndex,
  onSelect,
  staggerDelay,
}: {
  option: string;
  index: number;
  showResult: boolean;
  selectedAnswer: number | null;
  correctIndex: number;
  onSelect: (index: number) => void;
  staggerDelay: number;
}) {
  const shakeX = useSharedValue(0);
  const scaleAnim = useSharedValue(1);

  const isCorrect = index === correctIndex;
  const isSelected = index === selectedAnswer;
  const isWrongSelected = isSelected && !isCorrect && showResult;
  const isCorrectRevealed = isCorrect && showResult;

  // Trigger shake for wrong answer
  useEffect(() => {
    if (isWrongSelected) {
      shakeX.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-8, { duration: 50 }),
        withTiming(8, { duration: 50 }),
        withTiming(-4, { duration: 50 }),
        withTiming(0, { duration: 50 }),
      );
    }
  }, [isWrongSelected]);

  // Trigger scale pulse for correct
  useEffect(() => {
    if (isCorrectRevealed) {
      scaleAnim.value = withSequence(
        withSpring(1.04, { damping: 8, stiffness: 300 }),
        withSpring(1, { damping: 12, stiffness: 200 }),
      );
    }
  }, [isCorrectRevealed]);

  const animatedShake = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }, { scale: scaleAnim.value }],
  }));

  let bgColor = "bg-white";
  let borderColor = "border-gray-200";
  let textColor = "text-gray-700";

  if (showResult) {
    if (isCorrect) {
      bgColor = "bg-green-100";
      borderColor = "border-green-300";
      textColor = "text-green-800";
    } else if (isWrongSelected) {
      bgColor = "bg-red-100";
      borderColor = "border-red-300";
      textColor = "text-red-800";
    }
  } else if (isSelected) {
    bgColor = "bg-purple-100";
    borderColor = "border-purple-300";
  }

  return (
    <Animated.View
      entering={FadeInDown.delay(staggerDelay).duration(300).springify().damping(16)}
      style={animatedShake}
    >
      <AnimatedPressable
        onPress={() => onSelect(index)}
        disabled={showResult}
        haptic={false}
        className={`${bgColor} border ${borderColor} rounded-lg p-3 flex-row items-center`}
      >
        <View className="flex-1">
          <Text className={`${textColor} font-medium`}>{option}</Text>
        </View>
        {showResult && isCorrect && (
          <Animated.View entering={ZoomIn.duration(200)}>
            <Check size={20} color="#22c55e" />
          </Animated.View>
        )}
        {isWrongSelected && (
          <Animated.View entering={ZoomIn.duration(200)}>
            <X size={20} color="#ef4444" />
          </Animated.View>
        )}
      </AnimatedPressable>
    </Animated.View>
  );
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
  const [correctSet, setCorrectSet] = useState<Set<number>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);

  const question = questions[currentQ];
  const isCorrect = selectedAnswer === question.correctIndex;
  const isLastQuestion = currentQ === questions.length - 1;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
      setCorrectSet((prev) => new Set([...prev, currentQ]));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = correctCount + (isCorrect ? 0 : 0); // already counted
      setShowCelebration(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleDismissCelebration = () => {
    setShowCelebration(false);
    onComplete();
  };

  return (
    <View className="bg-purple-50 rounded-xl p-4 mb-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-purple-800 font-semibold">Knowledge Check</Text>
        <ProgressDots total={questions.length} current={currentQ} correctSet={correctSet} />
      </View>

      <Animated.View key={currentQ} entering={SlideInRight.duration(300).springify().damping(18)}>
        <Text className="text-gray-900 font-medium text-lg mb-4">
          {question.question}
        </Text>

        <View className="gap-2">
          {question.options.map((option, index) => (
            <QuizOption
              key={`${currentQ}-${index}`}
              option={option}
              index={index}
              showResult={showResult}
              selectedAnswer={selectedAnswer}
              correctIndex={question.correctIndex}
              onSelect={handleSelect}
              staggerDelay={index * 80}
            />
          ))}
        </View>
      </Animated.View>

      {showResult && (
        <Animated.View entering={FadeInDown.duration(300).springify()}>
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

            <AnimatedPressable
              onPress={handleNext}
              className="bg-purple-600 rounded-lg py-3 mt-4"
            >
              <Text className="text-white font-semibold text-center">
                {isLastQuestion ? "See Results" : "Next Question"}
              </Text>
            </AnimatedPressable>
          </View>
        </Animated.View>
      )}

      {showCelebration && (
        <CelebrationOverlay
          score={correctCount}
          total={questions.length}
          onDismiss={handleDismissCelebration}
        />
      )}
    </View>
  );
}

// Lesson completion overlay
function LessonCompleteOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <Animated.View
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(300)}
      className="absolute inset-0 z-50 bg-green-600/90 items-center justify-center"
    >
      <Animated.View entering={ZoomIn.springify().damping(10).stiffness(80)}>
        <View className="items-center">
          <View className="w-24 h-24 rounded-full bg-white items-center justify-center mb-4">
            <CheckCircle size={56} color="#22c55e" />
          </View>
          <Text className="text-white text-2xl font-bold">Lesson Complete!</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

export default function LessonScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const { markLessonComplete, isLessonComplete } = useProgressStore();

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCompleteOverlay, setShowCompleteOverlay] = useState(false);

  // Find the lesson
  const moduleId = lessonId?.split("-")[0] || "1";
  const module = getModule(moduleId);
  const lesson = getLesson(moduleId, lessonId || "");

  if (!lesson || !module) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Lesson not found</Text>
        <AnimatedPressable
          onPress={() => router.back()}
          className="mt-4 bg-primary-600 px-4 py-2 rounded-lg"
        >
          <Text className="text-white">Go Back</Text>
        </AnimatedPressable>
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
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowCompleteOverlay(true);
    setTimeout(() => {
      setShowCompleteOverlay(false);
      if (nextLesson) {
        router.replace(`/lesson/${nextLesson.lessonId}`);
      } else {
        router.push(`/learn/${moduleId}`);
      }
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <AnimatedPressable onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#374151" />
        </AnimatedPressable>
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
        <Animated.View entering={FadeInDown.duration(400).springify()}>
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            {lesson.title}
          </Text>
          <Text className="text-gray-500 text-lg mb-6">{lesson.subtitle}</Text>
        </Animated.View>

        {/* Content — grouped into collapsible sections */}
        {(() => {
          const sections = groupContentBySections(lesson.content);
          return sections.map((section, sectionIndex) => {
            const content = section.blocks.map((block, blockIndex) => (
              <ContentRenderer key={blockIndex} content={block} />
            ));

            // First section or sections without a heading title render flat
            if (section.title === null) {
              return <View key={sectionIndex}>{content}</View>;
            }

            return (
              <CollapsibleSection
                key={sectionIndex}
                title={section.title}
                defaultOpen={sectionIndex <= 1}
              >
                {content}
              </CollapsibleSection>
            );
          });
        })()}

        {/* Key Takeaways */}
        <View className="bg-primary-50 border border-primary-200 rounded-xl p-4 mt-6 mb-6">
          <Text className="text-primary-800 font-bold text-lg mb-3">
            Key Takeaways
          </Text>
          {lesson.keyTakeaways.map((takeaway, index) => (
            <TakeawayItem key={index} text={takeaway} index={index} />
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
          <Animated.View entering={FadeInDown.duration(300)}>
            <AnimatedPressable
              onPress={handleComplete}
              className="bg-green-600 rounded-xl py-4 mb-4"
              scaleValue={0.97}
            >
              <Text className="text-white font-semibold text-center text-lg">
                {nextLesson ? "Complete & Continue" : "Complete Module"}
              </Text>
            </AnimatedPressable>
          </Animated.View>
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
            <AnimatedPressable
              onPress={() => router.replace(`/lesson/${prevLesson.lessonId}`)}
              className="flex-row items-center"
            >
              <ChevronLeft size={20} color="#6b7280" />
              <Text className="text-gray-600">Previous</Text>
            </AnimatedPressable>
          ) : (
            <View />
          )}

          {nextLesson && isComplete && (
            <AnimatedPressable
              onPress={() => router.replace(`/lesson/${nextLesson.lessonId}`)}
              className="flex-row items-center"
            >
              <Text className="text-primary-600 font-medium">Next Lesson</Text>
              <ChevronRight size={20} color="#3b82f6" />
            </AnimatedPressable>
          )}
        </View>
      </ScrollView>

      {/* Lesson Complete Overlay */}
      <LessonCompleteOverlay visible={showCompleteOverlay} />
    </SafeAreaView>
  );
}

// Interactive takeaway checklist item
function TakeawayItem({ text, index }: { text: string; index: number }) {
  const [checked, setChecked] = useState(false);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleToggle = () => {
    setChecked(!checked);
    scale.value = withSequence(
      withSpring(0.95, { damping: 15, stiffness: 400 }),
      withSpring(1, { damping: 12, stiffness: 200 }),
    );
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <Animated.View style={animatedStyle}>
      <AnimatedPressable
        onPress={handleToggle}
        haptic={false}
        className="flex-row mb-2"
      >
        <View className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-2 mt-0.5 ${
          checked ? "bg-blue-600 border-blue-600" : "border-blue-400"
        }`}>
          {checked && <Check size={12} color="white" />}
        </View>
        <Text className={`text-primary-700 flex-1 ${checked ? "line-through opacity-60" : ""}`}>
          {text}
        </Text>
      </AnimatedPressable>
    </Animated.View>
  );
}
