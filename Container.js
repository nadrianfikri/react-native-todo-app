import * as React from 'react';

//Import Navigation Container
import { NavigationContainer } from '@react-navigation/native';

// Import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Icon
import { FontAwesome5 } from '@expo/vector-icons';

// import screen
import Home from './src/screen/Home';
import Active from './src/screen/Active';
import Completed from './src/screen/Completed';

// Create Stack Navigation
const Stack = createStackNavigator();

// Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

function CustomTab() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: 'hsl(235, 24%, 19%)',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list';
          } else if (route.name === 'Active') {
            iconName = focused ? 'running' : 'running';
          } else if (route.name === 'Completed') {
            iconName = focused ? 'check' : 'check';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'hsl(192, 100%, 67%)',
        tabBarInactiveTintColor: 'hsl(234, 11%, 52%)',
      })}
    >
      <Tab.Screen name="All" component={Home} />
      <Tab.Screen name="Active" component={Active} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}

// Create Component Bottom Tab Navigation

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={CustomTab}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'gray' },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
