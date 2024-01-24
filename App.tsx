import React from 'react';
import RootNavigator from './src/providers/RootNavigator';
import { RootStoreProvider } from './src/providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
	'Invalid prop textStyle of type array supplied to Cell',
	'Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.',
	'Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.',
]);

const App = () => {
	return (
		<RootStoreProvider>
			<RootNavigator />
		</RootStoreProvider>
	);
};

export default observer(App);
