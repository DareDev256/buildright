import { useLocalSearchParams, Redirect } from "expo-router";

// This catch-all route redirects to the specific tool
export default function ToolRedirect() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Map tool IDs to their routes
  const toolRoutes: Record<string, string> = {
    "budget-calculator": "/tools/budget-calculator",
    "timeline-estimator": "/tools/timeline-estimator",
    "permit-checklist": "/tools/permit-checklist",
    "document-tracker": "/tools/document-tracker",
    "funding-quiz": "/tools/funding-quiz",
  };

  const route = toolRoutes[id || ""];

  if (route) {
    return <Redirect href={route as any} />;
  }

  // Fallback to tools list
  return <Redirect href="/(tabs)/tools" />;
}
