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
				<Text testID={'title'} style={styles.title}>
					Jugadores
				</Text>
				{[...Array(presenter.numberOfPlayers)].map((value, key) => (
					<TextInput
						testID={`player-input-${key}`}
						key={key}
						style={styles.input}
						placeholder={`Jugador ${key + 1}`}
						autoFocus={presenter.focusInput(key)}
					/>
				))}
				<TouchableOpacity
					testID={'plus-button'}
					style={
						!presenter.plusButtonDisabled
							? styles.plusButtonEnabled
							: styles.plusButtonDisabled
					}
					onPress={presenter.onPlusButtonPress}
					disabled={presenter.plusButtonDisabled}
				>
					<Text testID={'plus-button-text'} style={styles.plus}>
						+
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default observer(CreateNewGame);
