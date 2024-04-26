import { View } from "react-native";
import { Post } from "@/components/post";
import { PostsProps } from "@/types/posts";
import { ScrollView } from "react-native-gesture-handler";

export function Posts({posts}: PostsProps) {

    function postsByColumn(colum: "right" | "left") {
        const rest = colum === "left" ? 0 : 1

        return posts
            .filter((_, index) => index % 2 === rest)
            .map((post) => (
                <Post 
                    key={post.id}
                    post={post}
                />
            ))
    }

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                
            }}
        >
            <View className="flex-1 flex-row mt-5">
                <View className="flex-1 m-1 gap-6">
                    {postsByColumn("left")}
                </View>
                <View className="flex-1 m-1 gap-6">
                    {postsByColumn("right")}
                </View>
            </View>
        </ScrollView>
    )
}