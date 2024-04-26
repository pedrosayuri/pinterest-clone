import clsx from "clsx";
import { AvatarProps } from "@/types/avatar";

import { Image, ImageProps } from "react-native";

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
    return (
        <Image 
            className={clsx("w-9 h-9 rounded-full", {
                "border-2 border-white": selected,
            })}
            {...rest}
        />
    )
}