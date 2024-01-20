import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 30,
		flexGrow: 0,
	},

	head: {
		height: 40,
		backgroundColor: '#f1f8ff',
	},

	text: {
		margin: 6,
	},

	bold: {
		fontWeight: 'bold',
	},

	rankingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	ranking: {
		flex: 1,
	},

	rankingTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 16,
		textAlign: 'center',
	},

	rankingText: {
		fontSize: 16,
		marginBottom: 8,
	},
});

export default styles;
