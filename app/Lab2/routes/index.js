import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import Options from "../screens/Options";
import colors from "../utils/colors";

// ===== ICON HỖ TRỢ =====
const getIcon =
  (iconName) =>
  ({ color }) =>
    <MaterialIcons name={iconName} size={24} color={color} />;

// ===== STACKS =====
const Stack = createNativeStackNavigator();

const ContactsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Contacts" component={Contacts} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const UserStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={User}
      options={{
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Options")}
          />
        ),
      }}
    />
    <Stack.Screen name="Options" component={Options} />
  </Stack.Navigator>
);

// ===== TABS =====
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="ContactsTab"
      component={ContactsStack}
      options={{ tabBarIcon: getIcon("list") }}
    />
    <Tab.Screen
      name="FavoritesTab"
      component={FavoritesStack}
      options={{ tabBarIcon: getIcon("star") }}
    />
    <Tab.Screen
      name="UserTab"
      component={UserStack}
      options={{ tabBarIcon: getIcon("person") }}
    />
  </Tab.Navigator>
);

// ===== DRAWER =====
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{ drawerIcon: getIcon("home") }}
    />
    <Drawer.Screen
      name="ContactsScreens"
      component={ContactsStack}
      options={{ drawerIcon: getIcon("list") }}
    />
    <Drawer.Screen
      name="FavoritesScreens"
      component={FavoritesStack}
      options={{ drawerIcon: getIcon("star") }}
    />
    <Drawer.Screen
      name="UserScreens"
      component={UserStack}
      options={{ drawerIcon: getIcon("person") }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
