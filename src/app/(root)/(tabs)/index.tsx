import { useClerk } from "@clerk/expo";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const { signOut } = useClerk();
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Button
          title="Clear Login Session"
          onPress={async () => {
            await signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
