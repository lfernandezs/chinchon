import React from 'react';
import RootNavigator from './src/providers/RootNavigator';
import { RootStoreProvider } from './src/providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';

const App = () => {
	return (
		<RootStoreProvider>
			<RootNavigator />
		</RootStoreProvider>
	);
};

export default observer(App);
