import React from 'react';
import RootNavigator from './src/providers/RootNavigator';
import { RootStoreProvider } from './src/providers/RootStoreProvider';

export default function App() {
	return (
		<RootStoreProvider>
			<RootNavigator />
		</RootStoreProvider>
	);
}
