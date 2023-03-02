import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import useCreateNewGamePresenter from '../../presenters/CreateNewGamePresenter/useCreateNewGamePresenter';
import styles from './CreateNewGame.styles';
import { observer } from 'mobx-react-lite';

const CreateNewGame = () => {
	const presenter = useCreateNewGamePresenter();
	return (
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Jugadores</Text>
				{[...Array(presenter.numberOfPlayers)].map((value, key) => (
					<TextInput
						key={key}
						style={styles.input}
						placeholder={`Jugador ${key + 1}`}
						autoFocus={presenter.focusInput(key)}
					/>
				))}
				<TouchableOpacity
					style={
						!presenter.plusButtonDisabled
							? styles.plusButtonEnabled
							: styles.plusButtonDisabled
					}
					onPress={presenter.onPlusButtonPress}
					disabled={presenter.plusButtonDisabled}
				>
					<Text style={styles.plus}>+</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default observer(CreateNewGame);
