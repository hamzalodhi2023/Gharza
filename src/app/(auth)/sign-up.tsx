import { useSignUp } from "@clerk/expo";
import { memo, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUpForm = memo(function SignUpForm() {
  const { signUp, errors, fetchStatus } = useSignUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = fetchStatus === "fetching";

  const handleSubmit = async () => {
    if (!email || !password || !firstName || !lastName || !signUp) return;

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
    } catch (err) {
      console.error("[SIGN-UP] Create error:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-white"
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center px-6 py-12">
          <Image
            source={require("../../../assets/images/logo.png")}
            className="w-32 h-16 mb-3"
            resizeMethod="none"
          />
          <Text className="text-gray-500 mb-8">
            Find your dream home today.
          </Text>
          <View className="flex-row gap-3 mb-4">
            <TextInput
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
              placeholder="First Name"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="words"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
              placeholder="Last Name"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="words"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          {errors.fields.emailAddress && (
            <Text className="text-red-500 mb-4">
              {errors.fields.emailAddress.message}
            </Text>
          )}
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6"
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={handleSubmit}
            className="w-full bg-blue-500 rounded-xl px-4 py-3 mb-6 items-center"
            disabled={isLoading}
          >
            <Text className="text-white font-medium">
              {isLoading ? "Creating..." : "Create Account"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

export default function SignUpScreen() {
  return <SignUpForm />;
}
