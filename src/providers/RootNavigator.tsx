import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import CreateNewGame from '../screens/CreateNewGame/CreateNewGame';
import Home from '../screens/Home/Home';
import Game from '../screens/Game/Game';
import { observer } from 'mobx-react-lite';
import GameHistory from '../screens/GameHistory/GameHistory';

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
				<Stack.Screen name={ROUTES.Game.name} component={Game} />
				<Stack.Screen name={ROUTES.GameHistory.name} component={GameHistory} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default observer(RootNavigator);
