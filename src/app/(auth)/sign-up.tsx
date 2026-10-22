import { useSignUp } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
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

export default function SignUp() {
  const { signUp, errors, fetchStatus } = useSignUp();

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const isLoading = fetchStatus === "fetching";

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
        <View className="flex-1 items-center justify-center px-6 py-12">
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
          {errors.fields.password && (
            <Text className="text-red-500 mb-4">
              {errors.fields.password.message}
            </Text>
          )}

          <TouchableOpacity
            className="w-full bg-blue-500 rounded-xl px-4 py-3 mb-6 items-center"
            disabled={isLoading}
          >
            <Text className="text-white font-medium">
              {isLoading ? "Creating..." : "Create Account"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-gray-500">Already have an account?</Text>
            <Link href="/sign-in">
              <Text className="text-blue-600 font-semibold">Sign In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
