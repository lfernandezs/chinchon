import React from 'react';
import { Pressable, Text, View } from 'react-native';
import useHomePresenter from '../../presenters/HomePresenter/useHomePresenter';
import styles from './Home.styles';

const Home = () => {
	const presenter = useHomePresenter();
	return (
		<View style={styles.container}>
			<Text testID={'title'} style={styles.title}>
				{presenter.screenTitle}
			</Text>
			<Pressable
				testID={'game-history'}
				style={styles.button}
				onPress={presenter.onHistoryButtonPress}
			>
				<Text style={styles.buttonLabel}>{presenter.historyButtonTitle}</Text>
			</Pressable>
			<Pressable
				testID={'new-game'}
				style={styles.button}
				onPress={presenter.onNewGameButtonPress}
			>
				<Text style={styles.buttonLabel}>{presenter.newGameButtonTitle}</Text>
			</Pressable>
		</View>
	);
};

export default Home;
