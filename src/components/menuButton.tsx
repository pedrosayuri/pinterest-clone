import { Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MenuButtonProps } from "@/types/menu-button";
import { colors } from "@/styles/colors";

export function MenuButton({title, icon}: MenuButtonProps) {
    return (
        <Pressable>
            <FontAwesome 
                name={icon}
                size={32} 
                color={colors.white}
                className="items-center justify-center text-center bg-gray-600 rounded-3xl p-8"
            />
            <Text
                className="text-white text-center mt-2"
            >
                {title}
            </Text>
        </Pressable>
    )
}