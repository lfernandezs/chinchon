import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import * as useCreateNewGamePresenter from '../../presenters/CreateNewGamePresenter/useCreateNewGamePresenter';
import CreateNewGame from '../../screens/CreateNewGame/CreateNewGame';
import mockUsePresenter from '../mocks/mockUsePresenter';
import '@testing-library/jest-native/extend-expect';

const presenter = {
	numberOfPlayers: 2,
	plusButtonDisabled: false,
	onPlusButtonPress: jest.fn(),
	focusInput: jest.fn(),
};

mockUsePresenter(useCreateNewGamePresenter, presenter);

describe('CreateNewGame', () => {
	it('renders correctly', () => {
		const screen = render(<CreateNewGame />);

		expect(screen).toMatchSnapshot();
	});

	describe('when the screen is rendered', () => {
		it('should render the title', () => {
			const { getByTestId } = render(<CreateNewGame />);

			expect(getByTestId('title')).toBeTruthy();
			expect(getByTestId('title')).toHaveTextContent('Jugadores');
		});

		it('renders the input for each player', () => {
			const { getAllByTestId } = render(<CreateNewGame />);

			expect(getAllByTestId('player-input', { exact: false })).toHaveLength(
				presenter.numberOfPlayers
			);
		});

		it('renders the plus button', () => {
			const { getByTestId } = render(<CreateNewGame />);

			expect(getByTestId('plus-button')).toBeTruthy();
		});

		it('renders the plus button text', () => {
			const { getByTestId } = render(<CreateNewGame />);

			expect(getByTestId('plus-button-text')).toBeTruthy();
			expect(getByTestId('plus-button-text')).toHaveTextContent('+');
		});
	});

	describe('when the plus button is pressed', () => {
		it('calls the presenter function', () => {
			const { getByTestId } = render(<CreateNewGame />);
			const button = getByTestId('plus-button');
			fireEvent.press(button);
			expect(presenter.onPlusButtonPress).toHaveBeenCalled();
		});
	});
});
