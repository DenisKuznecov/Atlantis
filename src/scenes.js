import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import SplashScreen from './containers/SplashScreen';
import Home from './containers/Home';
import PostPage from './containers/PostPage';
import ShoppingCart from './containers/Cart/ShoppingCart/index';
import Ordering from './containers/Cart/Ordering/';
import Confirmation from './containers/Cart/Confirmation/';
import Thanks from './containers/Thanks';
import Filter from './containers/Filter/Filter';
import Types from './containers/Filter/Types';
import Directions from './containers/Filter/Directions';

const routes = [
  { key: 'SplashScreen', component: SplashScreen, initial: true, },
  { key: 'Home', component: Home },
  { key: 'PostPage', component: PostPage },
  { key: 'ShoppingCart', component: ShoppingCart },
  { key: 'Ordering', component: Ordering },
  { key: 'Confirmation', component: Confirmation },
  { key: 'Thanks', component: Thanks },
  { key: 'Filter', component: Filter },
  { key: 'Types', component: Types },
  { key: 'Directions', component: Directions },

];


export default Actions.create(<Scene key="root" hideNavBar={true}>
  {
    routes.map(routeProps => (<Scene {...routeProps} />))
  }
</Scene>);