import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Icons from '@expo/vector-icons/MaterialIcons';
import { HomeIcon, ShoppingBagIcon } from 'react-native-heroicons/outline';
import { Squares2X2Icon } from 'react-native-heroicons/solid';

import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import { COLORS } from '../data/constants';
import { images } from '../assets';

const Tab = createBottomTabNavigator();

const { profileImg } = images;

function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName="Menu">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <HomeIcon {...props} />;
          },
          tabBarActiveTintColor: COLORS.burntOrange,
          tabBarInactiveTintColor: COLORS.descText,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Squares2X2Icon {...props} />;
          },
          tabBarActiveTintColor: COLORS.burntOrange,
          tabBarInactiveTintColor: COLORS.descText,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <ShoppingBagIcon {...props} />;
          },
          tabBarActiveTintColor: COLORS.burntOrange,
          tabBarInactiveTintColor: COLORS.descText,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Image
                source={profileImg}
                style={{ width: 24, height: 24, borderRadius: 12 }}
              />
            );
          },
          tabBarActiveTintColor: COLORS.burntOrange,
          tabBarInactiveTintColor: COLORS.descText,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
