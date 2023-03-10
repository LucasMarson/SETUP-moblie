import { View, Text, ScrollView } from "react-native";
import { HabitDay, DaySize } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();

const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekdays.map((weekday, i) => {
          return (
            <Text
              key={`${weekday}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DaySize }}
            >
              {weekday}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => {
              return (
                <View
                  className="bg-zinc-900 rounded-lg borde-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DaySize, height: DaySize }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
