import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface ConversationCardProps {
  onPress?: () => void;
  avatarUrl?: string;
  avatarPlaceholder?: string;
  isOnline?: boolean;
  title: string;
  time: string;
  message: string;
}

export const ConversationCard: React.FC<ConversationCardProps> = ({
  onPress,
  avatarUrl,
  avatarPlaceholder,
  isOnline,
  title,
  time,
  message,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50"
    >
      <View className="flex-row items-start gap-4">
        <View className="relative">
          {avatarUrl ? (
            <View className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <Image
                source={{ uri: avatarUrl }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          ) : (
            <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
              <Text className="text-primary font-bold text-lg">{avatarPlaceholder}</Text>
            </View>
          )}
          {isOnline && (
            <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full" />
          )}
        </View>
        <View className="flex-1">
          <View className="flex-row justify-between items-baseline mb-1">
            <Text className="text-slate-900 dark:text-white font-semibold" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-xs text-slate-400">{time}</Text>
          </View>
          <Text
            className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
            numberOfLines={2}
          >
            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
