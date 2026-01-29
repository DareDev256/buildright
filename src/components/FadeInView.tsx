import { ReactNode } from "react";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { ViewStyle, StyleProp } from "react-native";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const enteringAnimations = {
  none: FadeIn,
  up: FadeInUp,
  down: FadeInDown,
  left: FadeInLeft,
  right: FadeInRight,
};

export default function FadeInView({
  children,
  delay = 0,
  duration = 400,
  direction = "down",
  style,
  className,
}: FadeInViewProps) {
  const BaseAnimation = enteringAnimations[direction];
  const entering = BaseAnimation.delay(delay)
    .duration(duration)
    .springify()
    .damping(18)
    .stiffness(120);

  return (
    <Animated.View entering={entering} style={style} className={className}>
      {children}
    </Animated.View>
  );
}
