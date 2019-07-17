import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from '~/pages/Main';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: Home,  navigationOptions: {
        gesturesEnabled: false,
        tabBarVisible: false,
      }
    }
  })
);

export default Routes;
