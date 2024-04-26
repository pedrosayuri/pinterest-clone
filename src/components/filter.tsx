import { FilterProps } from "@/types/filter";
import { Pressable, PressableProps, Text } from "react-native";
import clsx from "clsx";

export function Filter({ filter, selected, ...rest }: PressableProps & FilterProps) {
    return (
        <Pressable 
            className={clsx({
                "border-b-white": selected,
                "border-b-4": selected,
            })}
            {...rest}
        >
            <Text
                className="text-white font-medium text-xl"
            >
                {filter}
            </Text>
        </Pressable>
    )
}