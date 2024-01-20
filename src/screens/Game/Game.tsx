import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text, TextInput, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import styles from './Game.styles';
import useGamePresenter from '../../presenters/GamePresenter/useGamePresenter';
import BaseView from '../../components/BaseView/BaseView';

const Game = ({ route }: { route: { params: { id: number } } }) => {
	const { id } = route.params;

	const presenter = useGamePresenter({ id });

	return (
		<BaseView>
			<View style={styles.container}>
				<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
					<Row
						data={presenter.playersNames}
						style={styles.head}
						textStyle={{ ...styles.text, ...styles.bold }}
					/>
					<Rows data={presenter.playersScores} textStyle={styles.text} />
					<Row
						data={presenter.players.map(({ id }) => (
							<TextInput
								keyboardType="number-pad"
								key={id}
								value={presenter.textInputValueOf(id)}
								onChangeText={(text) => presenter.setNewScore(text, id)}
							/>
						))}
					/>
					<Row
						style={styles.head}
						textStyle={{ ...styles.text, ...styles.bold }}
						data={presenter.players.map(({ id }) =>
							presenter.game.getScore(id)
						)}
					/>
				</Table>

				{presenter.game.rounds?.[0] && ( // This is a hack, the react-native-table-component does not update state.
					<View style={{ opacity: 0 }}>
						<Text>{presenter.game.rounds[0][0]}</Text>
					</View>
				)}
			</View>

			<View style={styles.rankingContainer}>
				{presenter.game.gameOver && (
					<View style={styles.ranking}>
						<Text style={styles.rankingTitle}>Ranking</Text>
						{presenter.game.ranking.map(({ name, id }, index) => (
							<Text key={id} style={styles.rankingText}>
								{index + 1}º {name}: {presenter.game.getScore(id)}
							</Text>
						))}
					</View>
				)}
			</View>

			<Button
				title="Siguiente ronda"
				onPress={presenter.startNewRound}
				disabled={presenter.game.gameOver}
			/>
		</BaseView>
	);
};

export default observer(Game);
