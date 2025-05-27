import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        tabBarInactiveTintColor: "black",
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          headerLeft: () => <></>,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              color={color}
              name={focused ? "home" : "home-outline"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerLeft: () => <></>,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              color={color}
              size={24}
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
