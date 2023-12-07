import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { COLORS, icons, images, SIZES } from "../../constants";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  ScreenHeaderBtn,
} from "../../components";


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    DMBold: require('../../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../../assets/fonts/DMSans-Regular.ttf')
  })
  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])
  if(!fontsLoaded) return null;
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: '',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={'#444262'} />,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="80%"/>
          ),
        }}
      />
    </Tabs>
  );
}
