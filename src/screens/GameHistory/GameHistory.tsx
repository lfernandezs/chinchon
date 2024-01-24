import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './GameHistory.styles';
import useGameHistoryPresenter from '../../presenters/GameHistoryPresenter/useGameHistoryPresenter';
import BaseView from '../../components/BaseView/BaseView';

const GameHistory = () => {
	const presenter = useGameHistoryPresenter();

	return (
		<BaseView>
			<View style={styles.container}>
				<Text style={styles.title}>Partidas</Text>
				<View style={styles.gamesContainer}>
					{presenter.games.map((game) => (
						<Pressable
							key={game.id}
							style={styles.game}
							onPress={() => presenter.onGamePress(game.id)}
						>
							<View style={styles.gameId}>
								<Text style={styles.idIndicator}># </Text>
								<Text>{game.id}</Text>
							</View>
							<View style={styles.gamePlayers}>
								<Text>Jugadores: </Text>
								<Text>{presenter.getPlayersNames(game.players)}</Text>
							</View>
						</Pressable>
					))}
				</View>
			</View>
		</BaseView>
	);
};

export default GameHistory;
