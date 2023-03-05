import { StyleSheet, ViewStyle } from 'react-native';

const plusButton = {
	width: 40,
	height: 40,
	borderRadius: 20,
	alignItems: 'center',
	justifyContent: 'center',
} as ViewStyle;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		marginBottom: 20,
	},

	input: {
		width: '80%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 20,
		padding: 10,
	},

	plusButtonEnabled: {
		...plusButton,
		backgroundColor: 'black',
	},

	plusButtonDisabled: {
		...plusButton,
		backgroundColor: 'gray',
	},

	plus: {
		fontSize: 20,
		color: 'white',
	},
});

export default styles;
