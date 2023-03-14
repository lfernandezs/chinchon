import React from 'react';
import { render } from '@testing-library/react-native';
import Game from '../../screens/Game/Game';

describe('Game', () => {
	it('renders correctly', () => {
		const screen = render(<Game />);
		expect(screen).toMatchSnapshot();
	});
});
