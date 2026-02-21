import React, { useState } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import { SplashScreen } from './src/screens/SplashScreen';
import { LaunchHeroScreen } from './src/screens/LaunchHeroScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { CountryScreen } from './src/screens/CountryScreen';
import { PhoneScreen } from './src/screens/PhoneScreen';
import { OtpScreen } from './src/screens/OtpScreen';
import { SuccessScreen } from './src/screens/SuccessScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { TimelineScreen } from './src/screens/TimelineScreen';
import { MarketScreen } from './src/screens/MarketScreen';
import { PortfolioScreen } from './src/screens/PortfolioScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

type ScreenType = '00_splash' | '01_launch_hero' | '03_login' | '04_country' | '05_phone_empty' | '06_otp_empty' | '09_success' | '10_home';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#EFEFEF',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#BDBDBD',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="TimelineTab"
        component={TimelineScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="users" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="MarketTab"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="bar-chart-2" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="PortfolioTab"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="pie-chart" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('00_splash');

  switch (currentScreen) {
    case '00_splash':
      return <SplashScreen onDone={() => setCurrentScreen('01_launch_hero')} />;
    case '01_launch_hero':
      return <LaunchHeroScreen onNext={() => setCurrentScreen('03_login')} />;
    case '03_login':
      return <LoginScreen onBack={() => setCurrentScreen('01_launch_hero')} onLogin={() => setCurrentScreen('04_country')} />;
    case '04_country':
      return <CountryScreen onBack={() => setCurrentScreen('03_login')} onNext={() => setCurrentScreen('05_phone_empty')} />;
    case '05_phone_empty':
      return <PhoneScreen onBack={() => setCurrentScreen('04_country')} onNext={() => setCurrentScreen('06_otp_empty')} />;
    case '06_otp_empty':
      return <OtpScreen onBack={() => setCurrentScreen('05_phone_empty')} onNext={() => setCurrentScreen('09_success')} />;
    case '09_success':
      return <SuccessScreen onBack={() => setCurrentScreen('06_otp_empty')} onContinue={() => setCurrentScreen('10_home')} />;
    case '10_home':
      return (
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      );
    default:
      return <SplashScreen onDone={() => setCurrentScreen('01_launch_hero')} />;
  }
}

