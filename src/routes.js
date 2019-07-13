import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from '~/pages/Main';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: Home
    }
  })
);

export default Routes;
