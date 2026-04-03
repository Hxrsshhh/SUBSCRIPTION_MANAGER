import { Text, View } from "react-native";
import "@/global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
     <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href='/onboarding' className="bg-primary rounded-2xl p-3 text-white mt-4" >Onbording</Link>

       <Link href="/(tabs)/subscription/[id]" className="bg-primary rounded-2xl p-3 text-white mt-4" >Spotify</Link>

        <Link href={{
          pathname : "/(tabs)/subscription/[id]",
          params : { id : "claude"},
        }} className="bg-primary rounded-2xl p-3 text-white mt-4" >Claude</Link>
    </View>
  );
}
