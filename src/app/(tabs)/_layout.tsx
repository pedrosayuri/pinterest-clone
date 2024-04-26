import { useRef } from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { colors } from "@/styles/colors";
import { Menu } from "@/components/menu";
import { Avatar } from "@/components/avatar";
import BottomSheet from "@gorhom/bottom-sheet";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function TabLayout() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
    const handleBottomSheetClose = () => bottomSheetRef.current?.close();

    return (
        <View className="flex-1">
            <Tabs screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.gray[400],
                tabBarStyle: {
                    backgroundColor: colors.gray[900],
                    borderColor: colors.gray[900],
                }
            }}>
                <Tabs.Screen 
                    name="index"
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Foundation name="home" size={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen 
                    name="search"
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="search" size={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="menu"
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome5 name="plus" size={size} color={color} />
                        ),
                    }}
                    listeners={() => ({
                        tabPress: (event) => {
                            event.preventDefault();
                            handleBottomSheetOpen();
                        }
                    })}
                />

                <Tabs.Screen 
                    name="messages"
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen 
                    name="profile"
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Avatar 
                                source={{ uri: "https://avatars.githubusercontent.com/u/56764512?v=4" }}
                                selected={color === colors.white}
                            />
                        ),
                    }}
                />
            </Tabs>

            <Menu 
                ref={bottomSheetRef}
                onClose={handleBottomSheetClose}
            />
        </View>
        
    ); 
}