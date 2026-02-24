import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icons: Record<string, React.ComponentProps<typeof MaterialIcons>['name']> = {
    index: 'home',
    explore: 'explore',
    journal: 'book',
    profile: 'person',
  };

  const labels: Record<string, string> = {
    index: 'Home',
    explore: 'Explore',
    journal: 'Journal',
    profile: 'Profile',
  };

  return (
    <View className="w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-5 pt-3 px-6 shadow-sm flex-row justify-between items-center">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const colorClass = isFocused ? 'text-primary' : 'text-slate-400 dark:text-slate-500';
        const fontWeightClass = isFocused ? 'font-bold' : 'font-medium';

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-end gap-1"
          >
            <MaterialIcons name={icons[route.name] || 'circle'} size={26} className={colorClass} />
            <Text className={`text-[10px] ${fontWeightClass} ${colorClass}`}>
              {labels[route.name] || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
