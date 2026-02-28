import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IdentitySetup() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <View className="flex-row items-center px-4 py-4 border-b border-black/5 dark:border-white/10 justify-center">
        <Text className="text-text-main dark:text-text-light text-lg font-bold text-center">Your Profile</Text>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Hero Text */}
        <View className="items-center mb-8 mt-6">
          <Text className="text-text-main dark:text-text-light text-2xl font-bold text-center mb-3">Who will you be in Bonded?</Text>
          <Text className="text-text-sub dark:text-text-dark text-sm text-center leading-relaxed max-w-[280px]">
            Choose a persona that reflects your inner self. Your true identity remains private.
          </Text>
        </View>

        {/* Avatar Selection */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4 px-1">
            <Text className="text-text-main dark:text-text-light text-sm font-semibold">Select an Avatar</Text>
            <Text className="text-primary text-xs font-medium">Customize</Text>
          </View>
          <View className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark items-center justify-center p-6 shadow-sm">
             <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-white/5 mb-4 items-center justify-center bg-gray-200">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ZfPIWdfLlatP29xDE2wxbONc57rmNFOaDmRitK2rLVJC5PjDAL4K6By44FmwdY7hvfv53pGHra-gvUR6z4FezZxoAtyL8-8aSJbMo4U0J0jGsAO4--RkGO1vYKy9hCki0LgUWIo-BVb8J-2428YUCZp63Sc4Tr2YKIVJWY1fll9Yi6Ihk_25akDUKzvU3dprbfpUskFaOrsoH9CP-KFLlECrIbIJcYLUMt_mNZuESjypa8nThL3D2rzEHnEP0IY1M8LcU6s8c5R5" }}
                  className="w-full h-full opacity-80"
                  resizeMode="cover"
                />
             </View>
             <View className="flex-row gap-2">
                <View className="w-3 h-3 rounded-full bg-primary" />
                <View className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                <View className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
             </View>
          </View>
        </View>

        {/* Form Fields */}
        <View className="gap-6">
          {/* Nickname Input */}
          <View>
            <Text className="text-text-main dark:text-text-light text-sm font-semibold mb-2 ml-1">Choose a Nickname</Text>
            <View className="relative justify-center">
              <TextInput
                className="w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-text-light px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-800"
                placeholder="e.g. CalmSeeker22"
                placeholderTextColor="#ada3b8"
              />
              <View className="absolute right-3 flex-row items-center gap-1 bg-success/10 px-2 py-1 rounded-full border border-success/20">
                <MaterialIcons name="verified" size={16} color="#36e29b" />
                <Text className="text-[10px] font-medium text-success uppercase">Verified</Text>
              </View>
            </View>
            <Text className="text-xs text-text-sub dark:text-text-dark mt-2 ml-1">Visible to others. We&apos;ve verified your real identity privately.</Text>
          </View>

          {/* Values Bio */}
          <View>
            <View className="flex-row justify-between items-baseline mb-2 ml-1">
              <Text className="text-text-main dark:text-text-light text-sm font-semibold">Values-based Bio</Text>
              <Text className="text-xs text-text-sub dark:text-text-dark">0/120</Text>
            </View>
            <TextInput
              className="w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-text-light px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 h-24 text-top"
              placeholder="I value kindness, patience, and honest listening..."
              placeholderTextColor="#ada3b8"
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* Quick Tags */}
          <View>
            <Text className="text-text-main dark:text-text-light text-sm font-semibold mb-3 ml-1">Core Values</Text>
            <View className="flex-row flex-wrap gap-2">
              <TouchableOpacity className="px-4 py-2 rounded-full bg-primary">
                <Text className="text-white text-xs font-medium">Empathy</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700">
                <Text className="text-text-sub dark:text-text-dark text-xs font-medium">Growth</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700">
                <Text className="text-text-sub dark:text-text-dark text-xs font-medium">Privacy</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700">
                <Text className="text-text-sub dark:text-text-dark text-xs font-medium">Support</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-8 h-8 rounded-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                <MaterialIcons name="add" size={18} className="text-text-sub dark:text-text-dark" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Action */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-background-light/95 dark:bg-background-dark/95 border-t border-black/5 dark:border-white/5">
        <TouchableOpacity
          onPress={() => router.push('/')}
          className="w-full bg-primary py-4 rounded-xl shadow-lg flex-row items-center justify-center gap-2"
        >
          <Text className="text-white text-base font-semibold">Save Profile</Text>
          <MaterialIcons name="check" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
