/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Amplify} from 'aws-amplify';
import Layout from './src/components/layout';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

function App() {
  return <Layout />;
}

export default App;
