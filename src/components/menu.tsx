import { forwardRef } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from '@/types/menu';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { MenuButton } from './menuButton';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
    return (
        <BottomSheet 
            ref={ref} 
            index={0}
            snapPoints={[0.01, 230]}
            backgroundStyle={{
                backgroundColor: colors.gray[700]
            }}
            handleComponent={() => null}
        >
            <View className="flex-1 p-6 items-center ">
                <View className="flex-row">
                    <FontAwesome 
                        name="close"
                        size={24}
                        onPress={onClose}
                        color={colors.white}
                    />
                    <Text className="text-white text-2xl flex-1 text-center mr-6">
                        Comece a criar agora
                    </Text>
                </View>

                <View className="flex-row gap-10 mt-10">
                    <MenuButton title="Pin" icon="home" />
                    <MenuButton title="Colagem" icon="paste" />
                    <MenuButton title="Pasta" icon="folder" />
                </View>
            </View>
        </BottomSheet>
    )
})