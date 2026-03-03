import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeDashboard() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark relative">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-20">
        <View className="flex-row items-center">
          <View className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm overflow-hidden bg-gray-200">
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOZZHpV94DrxImE1a4VO5tdXWAVOQA5ZO4YDjvLtGWRjAm2Tb1wKGI3jCWoAAXaRhFUtTJ14hrl5hNkBHKPR2vA5o0mmnirclwB7Onhil5qSi49WhVfqNQ3Y_Q3Rp5saPyZtenK6JThlkuPKjjNcFLpikHZqnoL9khHqCOqPvsZhOMmUiWYHo-0Q3pq0Z-iLt89QaYmz5e-z0HlH7gxfwmfa9rEDPwDUepE4KEcB9-Z6rYTWom9-gqKxUZkrrpO0BKClU8QYNAwOw2",
              }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
        <Text className="text-slate-900 dark:text-white text-xl font-bold tracking-tight text-center">
          Bonded
        </Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/10">
          <MaterialIcons
            name="notifications"
            size={24}
            className="text-slate-900 dark:text-white"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Mood Check-in */}
        <View className="pt-2 pb-6">
          <Text className="text-slate-900 dark:text-white text-2xl font-bold px-6 text-left mb-4">
            How are you feeling today?
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          >
            <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-full bg-primary pl-5 pr-5 py-2.5 shadow-md shadow-primary/20">
              <Text className="text-white text-sm font-medium">Calm</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-5 pr-5 py-2.5">
              <Text className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                Anxious
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-5 pr-5 py-2.5">
              <Text className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                Hopeful
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-5 pr-5 py-2.5">
              <Text className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                Tired
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-5 pr-5 py-2.5">
              <Text className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                Grateful
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Continue Conversation */}
        <View className="px-6 pb-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
              Continue Conversation
            </Text>
            <TouchableOpacity>
              <Text className="text-primary text-sm font-medium">View all</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-4">
            {/* Conversation Card 1 */}
            <TouchableOpacity
              onPress={() => router.push("/chat")}
              className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50"
            >
              <View className="flex-row items-start gap-4">
                <View className="relative">
                  <View className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuABhK3hA0JroW5t_T5R3JE9N02K92U0fupocDfvANgjxT5nD0BM7VJVvsbdH6U5C3n0ey8-S2dPvipQriAQnx5-EJy-6A2QvJN-0ScBzONaMSvvfUGq3M2fVl2umbGDdNETRoWRXHecouC0h7v1pXLPDgqiMtipm5ioG9Vx5pKmNhpCC-_LWd8HQJh3lyJmjbVfQi3ymW9DEidHQ3buWhcybzHdCXbTVRBY21h4dKheWuS3SiwvTWQo0z8WucDhclEgt9MabOpbsTQ8",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-baseline mb-1">
                    <Text
                      className="text-slate-900 dark:text-white font-semibold"
                      numberOfLines={1}
                    >
                      Sarah M.
                    </Text>
                    <Text className="text-xs text-slate-400">2m ago</Text>
                  </View>
                  <Text
                    className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                    numberOfLines={2}
                  >
                    I've been trying that breathing exercise you mentioned last
                    week, it's actually helping...
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Conversation Card 2 */}
            <TouchableOpacity className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50">
              <View className="flex-row items-start gap-4">
                <View className="relative">
                  <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
                    <Text className="text-primary font-bold text-lg">J</Text>
                  </View>
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-baseline mb-1">
                    <Text
                      className="text-slate-900 dark:text-white font-semibold"
                      numberOfLines={1}
                    >
                      Support Group: New Parents
                    </Text>
                    <Text className="text-xs text-slate-400">1h ago</Text>
                  </View>
                  <Text
                    className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                    numberOfLines={2}
                  >
                    Does anyone else feel guilty when taking time for
                    themselves? Need some perspective.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recommended Circles */}
        <View className="pb-8">
          <View className="px-6 mb-4">
            <Text className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
              Recommended Circles
            </Text>
            <Text className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Safe spaces based on your interests
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {/* Circle Card 1 */}
            <View className="w-[240px] rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm">
              <View className="absolute inset-0">
                <LinearGradient
                  colors={[
                    "rgba(232, 240, 254, 0.5)",
                    "rgba(252, 232, 232, 0.5)",
                  ]}
                  style={{ flex: 1 }}
                />
              </View>
              <View className="h-full w-full p-5 justify-between min-h-[200px]">
                <View>
                  <View className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 items-center justify-center mb-4">
                    <MaterialIcons
                      name="psychology"
                      size={24}
                      color="#2563eb"
                    />
                  </View>
                  <Text className="text-slate-900 dark:text-white font-bold text-lg mb-1">
                    Navigating Anxiety
                  </Text>
                  <Text className="text-slate-500 dark:text-slate-400 text-xs">
                    Tools and talk for calmer days.
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-gray-200 z-30">
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqv7Xd30F3jBB9JhOYz3fRHOOi3vfQDdW6ofDIIFYnCFOAkfJY4pL8P0MusvizSFIO8LyxC9g35LtyATCykk5WCPd8p6gMDpUwGe-Xph6DCVpQH8THMs_gs2oOmh1_R1YflP3keSU0tlRuCJ8fvCquLi7Ha9Ip5DMUj9q0V_dS0I5lUz-fofG8KWlnVhMv2iJ5_JY6fwy5L9j__rF7VgpSOFOcGVxFeO8otADfg3ZY-DdCHXrBcoFSB7N4OO68VIdNHLSLZkfMwE9",
                      }}
                      className="w-full h-full"
                    />
                  </View>
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-gray-200 -ml-2 z-20">
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9S3UnSjyjUGSfjwnQeWsh0MoMn4bjbFmHbWHaKeMWqoH7lXjf0z23kMl6qRq0EN6R56-lYChLCo1HfaEeL-TIR5BWTW47NLl7G_ribIqNf33b068_Y6-ICMpRNWRYJMb2V1xmq2zA7PrAYG2t9ya1cEz2-84dN8YAJmEx7Rp5KevWwF2Dx73uC5YdJpxq25FzQHHTd1XHlJXxQa6YZNLiP5UrfoZlYrCrctzE3cYsiM9sFl0UHOVE7UxOP2XduvCF39cIHlOgnMvC",
                      }}
                      className="w-full h-full"
                    />
                  </View>
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 items-center justify-center -ml-2 z-10">
                    <Text className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      +24
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Circle Card 2 */}
            <View className="w-[240px] rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm">
              <View className="absolute inset-0">
                <LinearGradient
                  colors={[
                    "rgba(238, 253, 236, 0.5)",
                    "rgba(251, 250, 240, 0.5)",
                  ]}
                  style={{ flex: 1 }}
                />
              </View>
              <View className="h-full w-full p-5 justify-between min-h-[200px]">
                <View>
                  <View className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center mb-4">
                    <MaterialIcons
                      name="trending-up"
                      size={24}
                      color="#16a34a"
                    />
                  </View>
                  <Text className="text-slate-900 dark:text-white font-bold text-lg mb-1">
                    Career Growth
                  </Text>
                  <Text className="text-slate-500 dark:text-slate-400 text-xs">
                    Support for your professional journey.
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-gray-200 z-30">
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA86xM2gN6cElDSQU0g-TLNMdKDLKHCeTgADU6QcYBiq5Nd-LMMp0psIiF23sALGRNH8LSdpfiIHHcNuubinDdvbXEmpZ1A3rkpDepAEZbMKAKx15zkLtR4dmiYfT-mqb1ARcZ4bBYjIiT27CBRS6BEz_FUUUFpTwdDurAkghg7hvmW6vAY9OHzAljPOl37ybnei0xEIZByOuHyM5KxQi0Q8BVMhIi_Ybbmgnfl5IQrUJU7AO9TnMCwS9PmBRWO1vvVFPPuZ0maOGHl",
                      }}
                      className="w-full h-full"
                    />
                  </View>
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-gray-200 -ml-2 z-20">
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzTMLBd93czbDw_07k7OamOKCgF2QhwrJmtKtoFZ138PIF-arRApT-C2DEfmppyw7n4xf7zCBdsKciWF_yGsghvbVeNi7OyvqXm3LyZnaPTfamjERLmhCqmfbLqSicEqsS71euj-MXEYbweWxvSuABuh1nQRfN2oIW8BvPSUCJWPjLd925AZ9Qpd7pMCoqqcaWTQKJSj_0rHvi7L92BagyAM618fsGw2Kweq9iH3Hipn-YzG5UT61GSLfqMGX8vyhs5jrqSD5ZHO0G",
                      }}
                      className="w-full h-full"
                    />
                  </View>
                  <View className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 items-center justify-center -ml-2 z-10">
                    <Text className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      +12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
