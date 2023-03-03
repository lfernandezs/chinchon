import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Home from '../../screens/Home/Home';
import * as useHomePresenter from '../../presenters/HomePresenter/useHomePresenter';
import mockUsePresenter from '../mocks/mockUsePresenter';

const presenter = {
	screenTitle: 'Chinchón',
	buttonLabel: 'Nueva partida',
	onButtonPress: jest.fn(),
};

mockUsePresenter(useHomePresenter, presenter);


describe('Home', () => {
	it('should render correctly', () => {
		const screen = render(<Home />);

		expect(screen).toMatchSnapshot();
	});

	describe('when the screen is rendered', () => {
		it('should render the title', () => {
			const { getByTestId } = render(<Home />);

			expect(getByTestId('title')).toBeTruthy();
			expect(getByTestId('title')).toHaveTextContent(presenter.screenTitle);
		});

		it('should render the button to start a new game', () => {
			const { getByTestId } = render(<Home />);

			expect(getByTestId('newGame')).toBeTruthy();
			expect(getByTestId('newGame')).toHaveTextContent(presenter.buttonLabel);
		});
	});

	describe('when the button to start a new game is pressed', () => {
		it('should navigate to the NewGame screen', async () => {
			const { getByTestId } = render(<Home />);
			const button = getByTestId('newGame');
			fireEvent.press(button);
			expect(presenter.onButtonPress).toHaveBeenCalled();
		});
	});
});
