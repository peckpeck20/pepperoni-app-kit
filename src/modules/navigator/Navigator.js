import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import UserLogin from '../user/UserLogin';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: UserLogin},
  // Login : {screen: UserLogin}
  
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Login',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ColorViewContainer}
});

export default AppNavigator;
