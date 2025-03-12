/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TarotCards from './src/TarotCards';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#4d4eb8'}}>
            <GestureHandlerRootView>
                <TarotCards />
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

export default App;
