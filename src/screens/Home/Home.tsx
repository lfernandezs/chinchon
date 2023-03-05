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
				testID={'new-game'}
				style={styles.button}
				onPress={presenter.onButtonPress}
			>
				<Text style={styles.buttonLabel}>{presenter.buttonLabel}</Text>
			</Pressable>
		</View>
	);
};

export default Home;
