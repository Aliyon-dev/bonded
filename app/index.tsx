import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View className="bg-welcome-bg-light dark:bg-background-dark flex-1 relative">
      {/* Background decoration */}
      <View className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <View className="absolute top-[-10%] right-[-20%] w-[50vh] h-[50vh] rounded-full bg-primary/5 blur-[80px]" />
        <View className="absolute bottom-[-10%] left-[-10%] w-[40vh] h-[40vh] rounded-full bg-[#e8dff5] dark:bg-primary/10 blur-[80px]" />
      </View>

      <SafeAreaView className="flex-1">
        {/* Top Status Bar Area (Mock) - hidden on mobile usually, but included for completeness if design demands */}
        <View className="w-full h-12 flex-row justify-between items-center px-6 pt-2 z-20">
          <Text className="text-sm font-semibold text-welcome-text-main dark:text-slate-100">9:41</Text>
          <View className="flex-row gap-2">
            <MaterialIcons name="signal-cellular-alt" size={18} color="currentColor" className="text-welcome-text-main dark:text-slate-100" />
            <MaterialIcons name="wifi" size={18} color="currentColor" className="text-welcome-text-main dark:text-slate-100" />
            <MaterialIcons name="battery-full" size={18} color="currentColor" className="text-welcome-text-main dark:text-slate-100" />
          </View>
        </View>

        {/* Header / Navigation */}
        <View className="flex-row items-center p-4 justify-between bg-welcome-bg-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-30">
          <TouchableOpacity className="w-12 h-12 items-center justify-center rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/10">
            <MaterialIcons name="arrow-back" size={24} className="text-welcome-text-main dark:text-slate-100" />
          </TouchableOpacity>
          <Text className="text-welcome-text-main dark:text-slate-100 text-lg font-bold flex-1 text-center pr-12">Bonded</Text>
        </View>

        <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View className="relative w-full items-center justify-center py-6 px-6">
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0">
               <LinearGradient
                colors={['rgba(155, 54, 226, 0.15)', 'rgba(254, 251, 246, 0)']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={{ width: '100%', height: '100%', borderRadius: 1000 }} // approximating radial gradient
              />
            </View>

            <View className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-black/5 dark:border-white/10">
              <ImageBackground
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfEe8I-4lUCQAkjh7VQ6jIsSalfBYv19vsowhWrTjLtmYYSibKNrrqRop65B3IQnROI9pkagaAkK9uqLhyUYlQK40hRfn6a5NJd2dbVXvlluYA6w-8FCw1LzJbnH2sBLjU3iaQdU2PDDCLqIhyzTKCVGrfTaRCe-GPhaqIcSD4kY1lv-Zp0_271UCl80NxhLpHtDdA_CGkVW8BfoQDWUHAIplDYi9sjdkRM-hPeQ28ya3q4mCoNtm0kMqv64HC0ZLgVmjLkBalQ8bW" }}
                className="w-full h-full"
                resizeMode="cover"
              >
                <LinearGradient
                  colors={['rgba(254, 251, 246, 0.2)', 'transparent']}
                  style={{ flex: 1 }}
                />
              </ImageBackground>
            </View>
          </View>

          {/* Main Headlines */}
          <View className="items-center px-6 pt-2 pb-6">
            <Text className="text-welcome-text-main dark:text-slate-50 text-[32px] font-bold text-center mb-3 leading-tight">
              You’re not alone here.
            </Text>
            <Text className="text-welcome-text-sub dark:text-slate-400 text-base font-normal text-center leading-relaxed max-w-xs">
              Your real identity is protected. Connect deeply, stay private.
            </Text>
          </View>

          {/* Features Section */}
          <View className="gap-6 px-5 py-6">
            <View className="gap-2 px-1">
              <Text className="text-welcome-text-main dark:text-slate-100 text-xl font-bold">
                Safe & Secure
              </Text>
              <Text className="text-welcome-text-sub dark:text-slate-400 text-sm leading-relaxed">
                Our semi-anonymous model ensures your privacy while fostering genuine connections.
              </Text>
            </View>

            {/* Feature Cards Grid */}
            <View className="gap-4">
              {/* Feature 1 */}
              <View className="flex-row items-start gap-4 rounded-xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-100 dark:border-white/10">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-accent-lavender/30 dark:bg-primary/20">
                  <MaterialIcons name="visibility-off" size={24} className="text-primary dark:text-primary-light" />
                </View>
                <View className="flex-1 gap-1 pt-1">
                  <Text className="text-welcome-text-main dark:text-slate-100 text-base font-bold">Anonymous</Text>
                  <Text className="text-welcome-text-sub dark:text-slate-400 text-sm">Share without fear of judgment. Your profile is kept private by default.</Text>
                </View>
              </View>

              {/* Feature 2 */}
              <View className="flex-row items-start gap-4 rounded-xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-100 dark:border-white/10">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-accent-lavender/30 dark:bg-primary/20">
                  <MaterialIcons name="verified-user" size={24} className="text-primary dark:text-primary-light" />
                </View>
                <View className="flex-1 gap-1 pt-1">
                  <Text className="text-welcome-text-main dark:text-slate-100 text-base font-bold">Verified Peers</Text>
                  <Text className="text-welcome-text-sub dark:text-slate-400 text-sm">Connect with real people who have been verified to ensure safety.</Text>
                </View>
              </View>

              {/* Feature 3 */}
              <View className="flex-row items-start gap-4 rounded-xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-100 dark:border-white/10">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-accent-lavender/30 dark:bg-primary/20">
                  <MaterialIcons name="security" size={24} className="text-primary dark:text-primary-light" />
                </View>
                <View className="flex-1 gap-1 pt-1">
                  <Text className="text-welcome-text-main dark:text-slate-100 text-base font-bold">Moderated</Text>
                  <Text className="text-welcome-text-sub dark:text-slate-400 text-sm">A safe environment actively moderated to keep conversations supportive.</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Area */}
        <View className="px-6 py-8 pb-10 w-full bg-welcome-bg-light/95 dark:bg-background-dark/95">
          <TouchableOpacity
            onPress={() => router.push('/setup')}
            className="w-full py-4 px-6 bg-accent-lavender dark:bg-primary rounded-full shadow-sm flex-row items-center justify-center gap-2 active:opacity-90"
          >
            <Text className="text-text-main dark:text-white font-bold text-lg">Get Started</Text>
            <MaterialIcons name="arrow-forward" size={20} className="text-text-main dark:text-white" />
          </TouchableOpacity>
          <Text className="text-center text-xs text-welcome-text-sub dark:text-slate-500 mt-4">
            By continuing, you agree to our <Text className="underline text-primary">Terms</Text> & <Text className="underline text-primary">Privacy Policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
