// import library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create component
const App = () => (
    <Header />
);

//render compoent to device
AppRegistry.registerComponent('albums', () => App);
