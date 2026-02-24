import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatInterface() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="bg-surface-light dark:bg-surface-dark border-b border-primary/10 z-20">
        <View className="flex-row items-center justify-between px-4 py-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full text-text-sub dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark"
          >
            <MaterialIcons name="arrow-back" size={24} className="text-text-sub dark:text-text-dark" />
          </TouchableOpacity>
          <View className="items-center">
            <Text className="text-lg font-bold text-text-main dark:text-text-light">Navigating Anxiety</Text>
            <Text className="text-xs text-accent-sage font-medium">124 Members Online</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full text-text-sub dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark">
            <MaterialIcons name="info" size={24} className="text-text-sub dark:text-text-dark" />
          </TouchableOpacity>
        </View>
        {/* Safety Banner */}
        <View className="w-full bg-primary/5 dark:bg-primary/10 py-2 px-4 flex-row items-center justify-center gap-2">
          <MaterialIcons name="security" size={16} className="text-primary" />
          <Text className="text-primary text-xs font-medium text-center">This space is moderated for safety.</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        {/* Chat Area */}
        <ScrollView className="flex-1 px-4 py-6 bg-background-light dark:bg-background-dark" contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Date Separator */}
          <View className="items-center mb-6">
            <View className="px-3 py-1 bg-surface-light dark:bg-surface-dark rounded-full shadow-sm">
                <Text className="text-xs font-medium text-text-sub dark:text-text-dark">Today</Text>
            </View>
          </View>

          {/* Moderator Message (Left) */}
          <View className="flex-row items-end gap-3 mb-6">
            <View className="relative">
              <View className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-gray-200">
                <Image
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ILEmxUrn9dJCq3lf3dYZtR93FHC5PS6CUVtX3597UtYHOdk0SSGpDXtgs31dLEEH2aGh3af4hmqPjhP_vycxIafHCwTSh1LfAfdBMV0zRA1pgQlib0OLy312auR74zTH6VWPBnxnxnItRrKDaeBKLItCY3gtw8OyHH6zTCBlrSQxee3SEM61tWxrxxZkb4GhW5-uMv5wadFbdl5tRM8-Qx4Gu2T6HdJCYmxFNge9pdrHA00kVwN4l5uZNHwpfiEYWQNtaNHAjkuE" }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
              </View>
              <View className="absolute -bottom-1 -right-1 bg-primary px-1.5 py-0.5 rounded-full border border-white dark:border-surface-dark">
                <Text className="text-white text-[8px] font-bold">MOD</Text>
              </View>
            </View>
            <View className="flex-1 max-w-[80%] gap-1">
              <View className="flex-row items-center gap-2 ml-1">
                <Text className="text-xs font-medium text-primary">SupportMod</Text>
                <Text className="text-[10px] text-text-sub dark:text-text-dark">10:30 AM</Text>
              </View>
              <View className="p-4 rounded-2xl rounded-bl-none bg-surface-light dark:bg-surface-dark shadow-sm border border-primary/5">
                <Text className="text-sm leading-relaxed text-text-main dark:text-text-light">Welcome everyone. 🌿 Feel free to share what's on your mind today. We are here to listen without judgment.</Text>
              </View>
              {/* Reactions */}
              <View className="flex-row gap-2 ml-1">
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-primary/10 shadow-sm">
                  <MaterialIcons name="favorite" size={14} className="text-rose-400" />
                  <Text className="text-[10px] font-bold text-text-sub dark:text-text-dark">12</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-primary/10 shadow-sm">
                  <MaterialIcons name="spa" size={14} className="text-green-600" />
                  <Text className="text-[10px] font-bold text-text-sub dark:text-text-dark">5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* User Message (Left) */}
          <View className="flex-row items-end gap-3 mb-6">
            <View className="w-10 h-10 rounded-full bg-accent-lavender items-center justify-center shrink-0">
                <Text className="text-primary font-bold text-sm">JD</Text>
            </View>
            <View className="flex-1 max-w-[80%] gap-1">
              <View className="flex-row items-center gap-2 ml-1">
                <Text className="text-xs font-medium text-text-sub dark:text-text-dark">JustDreathe</Text>
                <Text className="text-[10px] text-text-sub dark:text-text-dark">10:32 AM</Text>
              </View>
              <View className="p-4 rounded-2xl rounded-bl-none bg-white dark:bg-surface-dark shadow-sm">
                <Text className="text-sm leading-relaxed text-text-main dark:text-text-light">I've been feeling really overwhelmed with work lately. It feels like I can't catch my breath even when I'm sitting still.</Text>
              </View>
              <View className="flex-row gap-2 ml-1">
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-transparent">
                  <MaterialIcons name="favorite-outline" size={14} className="text-text-sub dark:text-text-dark opacity-50" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-transparent">
                  <MaterialIcons name="spa" size={14} className="text-text-sub dark:text-text-dark opacity-50" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* User Message (Right - Me) */}
          <View className="flex-row items-end gap-3 justify-end mb-6">
            <View className="flex-1 max-w-[80%] items-end gap-1">
              <View className="flex-row items-center gap-2 mr-1">
                <Text className="text-[10px] text-text-sub dark:text-text-dark">10:35 AM</Text>
              </View>
              <View className="p-4 rounded-2xl rounded-br-none bg-primary shadow-md">
                <Text className="text-sm leading-relaxed text-white">I hear you, JD. I tried that box breathing technique we talked about last week. It actually helped me during a meeting yesterday.</Text>
              </View>
              <View className="flex-row gap-2 mr-1">
                <View className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-primary/10 shadow-sm">
                  <MaterialIcons name="favorite" size={14} className="text-rose-400" />
                  <Text className="text-[10px] font-bold text-text-sub dark:text-text-dark">3</Text>
                </View>
              </View>
            </View>
            <View className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark shadow-sm overflow-hidden bg-gray-200">
                <Image
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4BjxgjF4eB4KfuFXqeXFjvqWyCoy0XL-oJpdol01k-pA-JNEyybWI5u5X3dUlXxj-sEYnwsmh2jlylBJjwymL3olp8NioPEWt-OpNWnXBxLnbZ1LEzMcNIYie-PSwahq33JynU2m8Vlzl3_7_EA0KbGOSuHSStBUt-yk8Y1LAxdYvzXj_8O7PUHQY2uPfmhZxUkrylqX55FN8h81VZiOlMmtWYNJQp1SxPiPExVIkOtZMqObKqv_0E92WMXXStYsqei91f48dK0M7" }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>
          </View>

          {/* User Message (Left) */}
          <View className="flex-row items-end gap-3 mb-2">
            <View className="w-10 h-10 rounded-full bg-accent-sage/30 items-center justify-center shrink-0">
                <Text className="text-accent-sage font-bold text-sm">MK</Text>
            </View>
            <View className="flex-1 max-w-[80%] gap-1">
              <View className="flex-row items-center gap-2 ml-1">
                <Text className="text-xs font-medium text-text-sub dark:text-text-dark">MistyKite</Text>
                <Text className="text-[10px] text-text-sub dark:text-text-dark">10:36 AM</Text>
              </View>
              <View className="p-4 rounded-2xl rounded-bl-none bg-white dark:bg-surface-dark shadow-sm">
                <Text className="text-sm leading-relaxed text-text-main dark:text-text-light">Box breathing is great. Sometimes just stepping outside for 5 minutes helps me reset my nervous system too.</Text>
              </View>
              <View className="flex-row gap-2 ml-1">
                <TouchableOpacity className="flex-row items-center gap-1 bg-surface-light dark:bg-surface-dark px-2 py-1 rounded-full border border-primary/10 shadow-sm">
                  <MaterialIcons name="spa" size={14} className="text-green-600" />
                  <Text className="text-[10px] font-bold text-text-sub dark:text-text-dark">2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Threaded Reply Indication */}
          <View className="ml-14 flex-row items-start gap-3 opacity-80 mb-6">
            <View className="w-8 border-l-2 border-b-2 border-accent-lavender dark:border-gray-700 h-8 rounded-bl-xl -mt-4 shrink-0" />
            <View className="flex-1 max-w-[85%] mt-2">
              <View className="p-3 rounded-2xl rounded-tl-none bg-accent-lavender/30 dark:bg-surface-dark/50">
                <Text className="text-xs text-text-sub dark:text-text-dark">Yes! Grounding techniques are so important.</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Message Input Area */}
        <View className="bg-surface-light dark:bg-surface-dark border-t border-primary/10 p-4 pb-6 w-full sticky bottom-0 z-30">
          <View className="flex-row items-end gap-2 bg-background-light dark:bg-background-dark rounded-xl p-2 border border-primary/5">
            <TouchableOpacity className="p-2 text-text-sub dark:text-text-dark">
              <MaterialIcons name="add-circle-outline" size={24} className="text-text-sub dark:text-text-dark" />
            </TouchableOpacity>
            <TextInput
              className="flex-1 bg-transparent text-sm py-3 px-1 max-h-24 text-text-main dark:text-text-light"
              placeholder="Type a message..."
              placeholderTextColor="#ada3b8"
              multiline
            />
            <TouchableOpacity className="p-2 bg-primary rounded-lg shadow-md mb-0.5">
              <MaterialIcons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Nav Bar - Reused logic from Home, or just a bar */}
      <View className="flex-row justify-between items-center border-t border-primary/10 bg-surface-light dark:bg-surface-dark px-6 py-3 pb-6 sticky bottom-0 z-40 w-full">
          <TouchableOpacity onPress={() => router.push('/home')} className="flex-1 items-center gap-1 group">
            <MaterialIcons name="home" size={24} className="text-text-sub dark:text-text-dark" />
            <Text className="text-[10px] font-medium text-text-sub dark:text-text-dark">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/home')} className="flex-1 items-center gap-1 group">
            <View className="bg-primary/10 dark:bg-primary/20 p-1.5 rounded-full px-4">
              <MaterialIcons name="forum" size={24} className="text-primary" />
            </View>
            <Text className="text-[10px] font-bold text-primary">Circles</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/reflection')} className="flex-1 items-center gap-1 group">
            <MaterialIcons name="spa" size={24} className="text-text-sub dark:text-text-dark" />
            <Text className="text-[10px] font-medium text-text-sub dark:text-text-dark">Relax</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/setup')} className="flex-1 items-center gap-1 group">
             <MaterialIcons name="person" size={24} className="text-text-sub dark:text-text-dark" />
            <Text className="text-[10px] font-medium text-text-sub dark:text-text-dark">Profile</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
