import { Stack } from "expo-router";

// IMPORTANT: `<Slot/>` in a _layout creates an implicit StackRouter with NO
// initialRouteName, so it always falls back to the alphabetically-first screen
// (`sign-in`), which is why the app kept bouncing from sign-up to sign-in on
// every reload. An explicit <Stack> with initialRouteName fixes that.
export default function AuthLayout() {
  return (
    <Stack
      initialRouteName="sign-up"
      screenOptions={{ headerShown: false, animation: "fade" }}
    />
  );
}
