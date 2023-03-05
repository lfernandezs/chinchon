import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MAX_NUMBER_OF_PLAYERS } from '../../constants/constants';
import CreateNewGamePresenter from '../../presenters/CreateNewGamePresenter/CreateNewGamePresenter';

jest.mock('mobx-react-lite', () => ({
	observer: (component) => component,
}));

jest.mock('mobx', () => ({
	makeAutoObservable: jest.fn(),
}));

describe('CreateNewGamePresenter', () => {
	const navigation = {
		navigate: jest.fn(),
	};

	const scrollRef = {
		current: {
			scrollForExtraHeightOnAndroid: jest.fn(),
		},
	} as unknown as React.RefObject<KeyboardAwareScrollView>;

	let presenter;

	beforeEach(() => {
		presenter = new CreateNewGamePresenter({ navigation, scrollRef });
	});

	describe('@numberOfPlayers', () => {
		it('should return the correct number of players', () => {
			expect(presenter.numberOfPlayers).toBe(2);
		});
	});

	describe('@plusButtonDisabled', () => {
		it('should return the correct plus button disabled state', () => {
			expect(presenter.plusButtonDisabled).toBe(false);
		});
	});

	describe('@scrollRef', () => {
		it('should return the correct scroll ref', () => {
			expect(presenter.scrollRef).toBe(scrollRef);
		});
	});

	describe('onPlusButtonPress', () => {
		it('should increase the number of players', () => {
			presenter.onPlusButtonPress();
			expect(presenter.numberOfPlayers).toBe(3);
		});

		it('should not increase the number of players above the maximum', () => {
			for (let i = 0; i < 100; i++) {
				presenter.onPlusButtonPress();
			}
			expect(presenter.numberOfPlayers).toBe(MAX_NUMBER_OF_PLAYERS);
		});

		it('should disable the plus button when the maximum number of players is reached', () => {
			for (let i = 0; i < 100; i++) {
				presenter.onPlusButtonPress();
			}
			expect(presenter.plusButtonDisabled).toBe(true);
		});

		it('should scroll the view when the number of players is increased', () => {
			presenter.onPlusButtonPress();
			expect(
				scrollRef.current.scrollForExtraHeightOnAndroid
			).toHaveBeenCalledWith(80);
		});
	});

	describe('focusInput', () => {
		it('should focus the input when the key belongs to the last added player', () => {
			expect(presenter.focusInput(0)).toBe(false);
			expect(presenter.focusInput(1)).toBe(false);
			presenter.onPlusButtonPress();
			expect(presenter.focusInput(0)).toBe(false);
			expect(presenter.focusInput(1)).toBe(false);
			expect(presenter.focusInput(2)).toBe(true);
			presenter.onPlusButtonPress();
			expect(presenter.focusInput(2)).toBe(false);
			expect(presenter.focusInput(3)).toBe(true);
		});
	});
});
