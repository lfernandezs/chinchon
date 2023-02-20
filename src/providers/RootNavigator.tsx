import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import CreateNewGame from '../screens/CreateNewGame/CreateNewGame';
import Home from '../screens/Home/Home';

const RootNavigator = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={ROUTES.Home.name} component={Home} />
				<Stack.Screen
					name={ROUTES.CreateNewGame.name}
					component={CreateNewGame}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
