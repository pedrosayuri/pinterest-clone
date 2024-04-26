import { Filters } from "@/components/filters"
import { View } from "react-native"
import { FILTERS } from "@/utils/filters"
import { useState } from "react"
import { Posts } from "@/components/posts"
import { POSTS } from "@/utils/posts"

export default function Home() {
    const [filter, setFilter] = useState(FILTERS[0])
    
    return (
        <View className="flex-1 bg-gray-900 p-10 pt-14">
            <Filters 
                filters={FILTERS}
                filter={filter}
                onChange={setFilter}
            />

            <Posts
                posts={POSTS}
            />
        </View>
    )
}