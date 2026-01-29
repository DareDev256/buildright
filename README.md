# BuildRight

A mobile learning app that teaches you how to build a home in Georgia — from planning to final inspection. Think Duolingo, but for home construction.

Built with React Native, Expo, and a Duolingo-inspired design system featuring 3D buttons, vibrant colors, and interactive quizzes.

## Screenshots

| Home | Game Path | Learn | Tools |
|------|-----------|-------|-------|
| Vibrant dashboard with hero card, 3D stat cards, and module roadmap | Zigzag Duolingo-style lesson nodes with pulsing glow | Module cards with progress bars and colored accents | Interactive calculators and checklists |

## Features

- **7 Learning Modules** — Planning, Design, Budgeting, Blueprints, Permits, Construction, and Completion
- **Interactive Quizzes** — Shake animation on wrong answers, pulse on correct, celebration overlay on completion
- **Duolingo-Style Game Path** — Zigzag node layout with 3D raised buttons, pulsing current node, star decorations
- **Georgia-Specific Content** — Local building codes, permit requirements, cost estimates, and regulations
- **Progress Tracking** — Zustand-powered persistent state with animated counters and progress bars
- **Haptic Feedback** — Touch feedback on every interaction via expo-haptics
- **Animated UI** — Staggered entrances, spring physics, collapsible sections via react-native-reanimated

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Expo SDK 54](https://expo.dev) | React Native framework with managed workflow |
| [Expo Router](https://docs.expo.dev/router/introduction/) | File-based routing (tabs + stack) |
| [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) | UI-thread animations (spring, timing, entering) |
| [NativeWind](https://www.nativewind.dev/) | Tailwind CSS for React Native |
| [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight state management with persistence |
| [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) | Touch feedback |
| [Lucide React Native](https://lucide.dev/) | Icon library |
| [Supabase](https://supabase.com/) | Backend (auth + database, planned) |

## Project Structure

```
buildright/
├── app/                          # Expo Router screens
│   ├── _layout.tsx               # Root layout (Stack navigator)
│   ├── (tabs)/                   # Tab navigator
│   │   ├── _layout.tsx           # Tab bar with animated icons
│   │   ├── index.tsx             # Home dashboard
│   │   ├── learn.tsx             # Module list
│   │   ├── tools.tsx             # Interactive tools
│   │   └── profile.tsx           # User profile
│   ├── learn/
│   │   └── [moduleId].tsx        # Game path (Duolingo-style nodes)
│   ├── lesson/
│   │   └── [lessonId].tsx        # Lesson content + quiz
│   └── tools/                    # Tool screens (budget, permits, etc.)
├── src/
│   ├── theme.ts                  # Design system (colors, card3D helper)
│   ├── components/
│   │   ├── AnimatedPressable.tsx  # 3D spring-press button + haptics
│   │   ├── AnimatedCounter.tsx    # Number count-up animation
│   │   ├── FadeInView.tsx         # Stagger-aware fade wrapper
│   │   └── CollapsibleSection.tsx # Animated accordion
│   ├── content/
│   │   ├── types.ts              # Module/Lesson/Quiz TypeScript types
│   │   ├── index.ts              # Content registry + helpers
│   │   └── module1-7.ts          # Educational content per module
│   └── stores/
│       ├── useProgressStore.ts   # Lesson completion state (Zustand)
│       └── useProjectStore.ts    # User project data
└── assets/
    └── hero-home.png             # AI-generated hero illustration
```

## Design System

The app uses a custom Duolingo-inspired design system defined in `src/theme.ts`:

**3D Card Effect** — The signature visual. Every interactive element gets a `borderBottomWidth: 4` with a darker shade, creating a "pushable button" look:
```ts
card3D("#58CC02", "#46A302", 16)
// → { backgroundColor, borderRadius, borderBottomWidth, borderBottomColor }
```

**Color Palette** — Vibrant, saturated colors (not default Tailwind):
- Feather Green: `#58CC02` — Primary actions, success
- Macaw Blue: `#1CB0F6` — Continue, progress
- Bee Yellow: `#FFC800` — Achievements, XP bars
- Fox Purple: `#CE82FF` — Stats, permits
- Cardinal Red: `#FF4B4B` — Georgia badges, alerts
- Tiger Orange: `#FF9600` — Streaks, timelines

**Warm Background** — `#F7F5F0` instead of cold grays

## Getting Started

### Prerequisites

- Node.js 18+
- [Expo Go](https://expo.dev/go) app on your phone
- iOS or Android device

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Scan the QR code with Expo Go on your phone
```

### Development

```bash
npx expo start --tunnel    # Use tunnel mode if on different networks
npx expo start --clear     # Clear Metro cache if needed
```

## Content Structure

Each module contains lessons with structured content:

```typescript
interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  subtitle: string;
  content: LessonContent[];    // Text, headings, lists, callouts, comparisons
  keyTakeaways: string[];      // Interactive checklist
  georgiaNote?: string;        // State-specific info
  quiz?: QuizQuestion[];       // End-of-lesson quiz
}
```

### Modules

| # | Module | Lessons | Topics |
|---|--------|---------|--------|
| 1 | Planning Your Build | 5 | Land selection, zoning, budgeting basics |
| 2 | Design & Layout | 4 | Floor plans, architectural styles, GA codes |
| 3 | Budgeting & Financing | 6 | Construction loans, cost breakdowns, GA programs |
| 4 | Blueprints & Engineering | 4 | Reading plans, structural engineering, MEP |
| 5 | Permits & Inspections | 5 | GA permit process, inspection schedule |
| 6 | The Build Process | 5 | Foundation to finish, contractor management |
| 7 | Completion & Beyond | 4 | Final walkthrough, warranty, maintenance |

## Animation System

Powered by `react-native-reanimated` v4 running on the UI thread:

- **AnimatedPressable** — Spring scale (0.96) + haptic on every press
- **FadeInView** — Directional stagger entrance (up/down/left/right)
- **AnimatedCounter** — Count from 0 to target over 800ms using `useAnimatedReaction`
- **Quiz animations** — Shake on wrong (horizontal offset), pulse on correct (scale), celebration overlay (ZoomIn spring)
- **PulsingGlow** — `withRepeat(withSequence(...))` opacity loop for current game path node
- **CollapsibleSection** — Height + chevron rotation transition

## License

MIT
