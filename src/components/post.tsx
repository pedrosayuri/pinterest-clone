import { colors } from "@/styles/colors";
import { PostProps } from "@/types/post";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";

type Props = {
    post: PostProps;
}

export function Post({ post }: Props) {
    const [aspectRatio, setAspectRatio] = useState(1);

    useEffect(() => {
        if (post.image) {
            Image.getSize(post.image, (width, height) => {
                setAspectRatio(width / height);
            })
        }
    }, [post.image])

    return (
        <View className="flex-1">
            <Image 
                source={{ uri: post.image }}
                className="rounded-3xl"
                style={{ aspectRatio }}
            />

            <View className="flex-row justify-between items-center mt-5 mb-5">
                <Text className="text-xl text-white font-bold">
                    {post.title}
                </Text>
                <Feather 
                        name="more-horizontal"
                        size={16}
                        color={colors.white}
                    />
            </View>
        </View>
    )
}