import { FILTERS } from "@/utils/filters";
import { FlatList } from "react-native";
import { Filter } from "@/components/filter";
import { FiltersProps } from "@/types/filters";

export function Filters({ filters, filter, onChange }: FiltersProps) {
    return (
        <FlatList 
            data={filters}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Filter 
                    filter={item}
                    selected={item === filter}
                    onPress={() => onChange(item)}
                />
            )}
            className="max-h-7"
            contentContainerClassName="gap-10 px-4"
        />
    )
}