import { useEffect } from "react";
import { View, useWindowDimensions } from "react-native";
import { Skeleton } from "moti/skeleton";

import Animated, { SlideInDown, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Splash() {
    const logoScale = useSharedValue(1)
    const logoPositionY = useSharedValue(0)
    const contentDisplay = useSharedValue(0)

    const dimensions = useWindowDimensions()

    const skeletonColors = [
        colors.gray[400],
        colors.gray[600],
        colors.gray[400],
    ]

    const logoAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { scale: logoScale.value },
            { translateY: logoPositionY.value },
        ]
    }))

    const contentAnimatedStyles = useAnimatedStyle(() => ({
        display: contentDisplay.value === 1 ? "flex" : "none"
    }))

    function logoAnimation() {
        logoScale.value = withSequence(
            withTiming(0.7),
            withTiming(1.3),
            withTiming(1, undefined, (finished) => {
                if (finished) {
                    logoPositionY.value = withSequence(
                        withTiming(50, undefined, () => (contentDisplay.value = 1)),
                        withTiming(-dimensions.height, { duration: 400 })   
                    )

                    runOnJS(onEndSplash)()
                }
            })
        )
    }

    function filters() {
        return Array.from({ length: 6 }).map((_, index) => {
            return (
                <Skeleton 
                    key={index}
                    colors={skeletonColors}
                    width={100}
                    height={30}
                    radius={10}
                />
            )
        })
    }

    function boxes(column: "right" | "left") {
        const rest = column === "left" ? 0 : 1

        return Array.from({ length: 20 })
            .filter((_, index) => index % 2 === rest)
            .map((_, index) => {
                const height = index % 2 === (column === "left" ? 0 : 1) ? 200 : 300

                return (
                    <Animated.View 
                        key={index}
                        className="w-full bg-gray-500 rounded-lg"
                        style={{ height }}>
                            <Skeleton 
                                colors={skeletonColors}
                                width="100%"
                                height={height}
                            />
                    </Animated.View>
                )
            })     
    }

    function onEndSplash() {
        setTimeout(() => {
            router.push("/(tabs)")
        }, 2000)       
    }

    useEffect(() => {
        logoAnimation()
    })

    return (
        <View className="flex-1 bg-black justify-center items-center p-2">
            <Animated.Image 
                source={require("@/assets/logo.png")}
                className="w-20 h-20"
                style={logoAnimatedStyles}
            />

            <Animated.View className="flex-1 w-full" style={contentAnimatedStyles} entering={SlideInDown.duration(700)}>
                <View className="flex-row gap-3">
                    {filters()}
                </View>

                <View className="flex-1 flex-row mt-5 gap-3">
                    <View className="flex-1 m-1 gap-6">
                        {boxes("left")}
                    </View>
                    <View className="flex-1 m-1 gap-6">
                        {boxes("right")}
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}