import { ROUTES } from '../../constants/routes';
import HomePresenter from '../../presenters/HomePresenter/HomePresenter';

describe('HomePresenter', () => {
	const navigation = {
		navigate: jest.fn(),
	};

	const presenter = new HomePresenter({ navigation });

	describe('@screenTitle', () => {
		it('should return the correct screen title', () => {
			expect(presenter.screenTitle).toBe('Chinchón');
		});
	});

	describe('@buttonLabel', () => {
		it('should return the correct button label', () => {
			expect(presenter.buttonLabel).toBe('Nueva partida');
		});
	});

	describe('onButtonPress', () => {
		it('should navigate to the correct screen', () => {
			presenter.onButtonPress();
			expect(navigation.navigate).toHaveBeenCalledWith(
				ROUTES.CreateNewGame.name
			);
		});
	});
});
