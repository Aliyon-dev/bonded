import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateCircle() {
  const router = useRouter();
  const [privacy, setPrivacy] = useState('open');

  return (
    <View className="flex-1 bg-circle-bg-light dark:bg-circle-bg-dark">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center p-4 pt-2 pb-2 justify-center bg-circle-bg-light dark:bg-circle-bg-dark z-10">
          <View className="items-center">
            <View className="flex-row gap-2">
              <View className="h-2 w-8 rounded-full bg-circle-primary" />
              <View className="h-2 w-2 rounded-full bg-circle-primary/20 dark:bg-circle-primary/30" />
              <View className="h-2 w-2 rounded-full bg-circle-primary/20 dark:bg-circle-primary/30" />
            </View>
          </View>
        </View>

        <ScrollView className="flex-1 px-6 py-4" contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="mb-8">
            <Text className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">Create your safe space</Text>
            <Text className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Take your time to describe this circle. A clear name and purpose helps others find connection and trust.
            </Text>
          </View>

          <View className="gap-8">
            {/* Circle Name Input */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Circle Name</Text>
              <View className="relative justify-center">
                <TextInput
                  className="w-full bg-surface-light dark:bg-surface-dark rounded-xl px-4 py-4 text-base border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                  placeholder="e.g., Sunday Anxiety Support"
                  placeholderTextColor="#94a3b8"
                />
                <View className="absolute right-4 pointer-events-none">
                  <MaterialIcons name="edit" size={20} className="text-slate-400 dark:text-slate-500" />
                </View>
              </View>
              <Text className="text-xs text-slate-500 dark:text-slate-400 ml-1">Choose something kind and descriptive.</Text>
            </View>

            {/* Topic Category */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Topic Category</Text>
              <View className="relative justify-center">
                {/* Mock Select */}
                <View className="w-full bg-surface-light dark:bg-surface-dark rounded-xl px-4 py-4 border border-slate-200 dark:border-slate-700 flex-row justify-between items-center">
                   <Text className="text-slate-900 dark:text-slate-100 text-base">Select a main topic...</Text>
                   <MaterialIcons name="expand-more" size={24} className="text-slate-500 dark:text-slate-400" />
                </View>
              </View>

              {/* Soft Chips */}
              <View className="flex-row flex-wrap gap-2 mt-3">
                <TouchableOpacity className="px-4 py-2 rounded-full bg-circle-primary/10">
                  <Text className="text-sm font-medium text-circle-dark dark:text-circle-primary">Anxiety</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                  <Text className="text-sm font-medium text-slate-600 dark:text-slate-400">Career</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                  <Text className="text-sm font-medium text-slate-600 dark:text-slate-400">Faith</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                  <Text className="text-sm font-medium text-slate-600 dark:text-slate-400">Parenting</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Privacy Level */}
            <View className="gap-4">
              <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Privacy Level</Text>
              <View className="gap-3">
                {/* Open Option */}
                <TouchableOpacity
                  onPress={() => setPrivacy('open')}
                  className={`flex-row items-start p-4 rounded-xl border ${privacy === 'open' ? 'border-circle-primary bg-circle-primary/5 dark:bg-circle-primary/10' : 'bg-surface-light dark:bg-surface-dark border-slate-200 dark:border-slate-700'}`}
                >
                  <View className="h-6 items-center justify-center mr-3">
                    <View className={`w-5 h-5 rounded-full border items-center justify-center ${privacy === 'open' ? 'border-circle-primary' : 'border-slate-300'}`}>
                      {privacy === 'open' && <View className="w-2.5 h-2.5 rounded-full bg-circle-primary" />}
                    </View>
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center gap-2 mb-1">
                      <MaterialIcons name="public" size={18} className="text-slate-900 dark:text-slate-100" />
                      <Text className="font-medium text-slate-900 dark:text-slate-100">Open Circle</Text>
                    </View>
                    <Text className="text-slate-500 dark:text-slate-400 text-xs leading-5">Anyone in the Bonded community can find and join this circle.</Text>
                  </View>
                </TouchableOpacity>

                {/* Private Option */}
                <TouchableOpacity
                  onPress={() => setPrivacy('invite')}
                  className={`flex-row items-start p-4 rounded-xl border ${privacy === 'invite' ? 'border-circle-primary bg-circle-primary/5 dark:bg-circle-primary/10' : 'bg-surface-light dark:bg-surface-dark border-slate-200 dark:border-slate-700'}`}
                >
                  <View className="h-6 items-center justify-center mr-3">
                    <View className={`w-5 h-5 rounded-full border items-center justify-center ${privacy === 'invite' ? 'border-circle-primary' : 'border-slate-300'}`}>
                      {privacy === 'invite' && <View className="w-2.5 h-2.5 rounded-full bg-circle-primary" />}
                    </View>
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center gap-2 mb-1">
                      <MaterialIcons name="lock" size={18} className="text-slate-900 dark:text-slate-100" />
                      <Text className="font-medium text-slate-900 dark:text-slate-100">Invite Only</Text>
                    </View>
                    <Text className="text-slate-500 dark:text-slate-400 text-xs leading-5">Hidden from search. Only people with a direct link can join.</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Bar */}
        <View className="absolute bottom-0 left-0 right-0 p-4 bg-circle-bg-light/80 dark:bg-circle-bg-dark/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 z-20">
          <TouchableOpacity
            onPress={() => router.push('/chat')}
            className="w-full rounded-xl bg-circle-primary h-14 shadow-lg flex-row items-center justify-center gap-2"
          >
            <Text className="text-white font-semibold text-lg">Continue</Text>
            <MaterialIcons name="arrow-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
