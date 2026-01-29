import { ReactNode, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
  Easing,
} from "react-native-reanimated";
import { ChevronDown } from "lucide-react-native";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const rotation = useSharedValue(defaultOpen ? 180 : 0);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const toggle = () => {
    const next = !open;
    setOpen(next);
    rotation.value = withTiming(next ? 180 : 0, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  };

  return (
    <View className="mb-2">
      <Pressable
        onPress={toggle}
        className="flex-row items-center justify-between py-3 px-1"
      >
        <Text className="text-xl font-bold text-gray-900 flex-1 mr-2">
          {title}
        </Text>
        <Animated.View style={chevronStyle}>
          <ChevronDown size={20} color="#9ca3af" />
        </Animated.View>
      </Pressable>
      {open && (
        <Animated.View entering={FadeIn.duration(250)} className="pb-2">
          {children}
        </Animated.View>
      )}
    </View>
  );
}
