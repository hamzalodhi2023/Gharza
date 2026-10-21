import { useAuth, useSignUp } from "@clerk/expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

export default function signUp() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const isLoading = fetchStatus === "fetching";

  return (
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
        <Text className="text-gray-500 mb-8">Find your dream home today.</Text>
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
      </View>
    </ScrollView>
  );
}
