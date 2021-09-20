import React /*useState*/ from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Record from './src/Screens/Record'
import FeedNavigator from './src/Navigators/FeedNavigator'
import ProfileNavigator from './src/Navigators/ProfileNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import LoggedOutNavigator from './src/Navigators/LoggedOutNavigator'
// import testUser from './dummyUser'

const Tab = createBottomTabNavigator()

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'Home') {
          iconName = focused ? 'home-circle' : 'home-circle-outline'
        } else if (route.name === 'Record') {
          iconName = focused ? 'record-circle' : 'record-circle-outline'
        } else if (route.name === 'You') {
          iconName = focused ? 'account-circle' : 'account-circle-outline'
        }

        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        )
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Record" component={Record} />
    <Tab.Screen
      name="You"
      component={ProfileNavigator}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
)

const App = () => {
  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  // const [user, setUser] = useState(testUser)

  return (
    <NavigationContainer>
      <AppNavigator />
      {/* {userLoggedIn ? <AppNavigator /> : <LoggedOutNavigator />} */}
    </NavigationContainer>
  )
}

export default App
