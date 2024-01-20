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
				{presenter.players.map(({ id }) => (
					<TextInput
						testID={`player-input-${id}`}
						key={id}
						style={styles.input}
						placeholder={`Jugador ${id + 1}`}
						onChangeText={(text) => presenter.onPlayerNameChange(text, id)}
						value={presenter.players[id].name}
						autoFocus={presenter.focusInput(id)}
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
