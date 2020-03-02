import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Settings from "./screens/Settings";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryStack = createStackNavigator({
    Categories,
    Category
});

const SettingStack = createStackNavigator({Settings});

const CartStack = createStackNavigator({Cart});

const OrderStack = createStackNavigator({Orders});

const AppNavigator = createBottomTabNavigator({
    CategoryStack: {
        screen: CategoryStack,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => (
                <Icon name="home" size={30} color={tintColor} />
            )
        }
    },
    CartStack: {
        screen: CartStack,
        navigationOptions: {
            tabBarLabel: "Cart",
            tabBarIcon: ({tintColor}) => (
                <Icon name="shopping-cart" size={30} color={tintColor} />
            )
        }
    },
    OrderStack: {
        screen: OrderStack,
        navigationOptions: {
            tabBarLabel: "Orders",
            tabBarIcon: ({tintColor}) => (
                <Icon name="shopping-basket" size={30} color={tintColor}/>
            )
        }
    },
    SettingStack: {
        screen: SettingStack,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: ({tintColor}) => (
                <Icon name="calendar-check-o" size={30} color={tintColor}/>
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#d45a67',
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {
            backgroundColor: 'white',
        }
    },
});

export default AppNavigator;