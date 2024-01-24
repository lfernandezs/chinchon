import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	gamesContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	game: {
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		width: '90%',
	},
	idIndicator: {
		color: 'grey',
		fontWeight: 'bold',
	},
	gameId: {
		flexDirection: 'row',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	gamePlayers: {
		flexDirection: 'row',
		fontSize: 15,
		marginBottom: 10,
	},
});

export default styles;
