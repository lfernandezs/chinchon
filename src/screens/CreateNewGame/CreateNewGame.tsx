import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import useCreateNewGamePresenter from '../../presenters/CreateNewGamePresenter/useCreateNewGamePresenter';
import styles from './CreateNewGame.styles';
import { observer } from 'mobx-react-lite';
import BaseView from '../../components/BaseView/BaseView';

const CreateNewGame = () => {
	const presenter = useCreateNewGamePresenter();
	return (
		<BaseView scrollRef={presenter.scrollRef}>
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

				<TouchableOpacity
					testID={'create-new-game-button'}
					style={styles.createNewGameButton}
					onPress={presenter.onCreateNewGameButtonPress}
				>
					<Text
						testID={'create-new-game-button-text'}
						style={styles.createNewGameButtonText}
					>
						Crear partida
					</Text>
				</TouchableOpacity>
			</View>
		</BaseView>
	);
};

export default observer(CreateNewGame);
