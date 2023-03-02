import { ROUTES } from '../../constants/routes';
import { iHomePresenterProps } from './HomePresenter.types';

class HomePresenter {
	navigation: iHomePresenterProps['navigation'];

	constructor({ navigation }: iHomePresenterProps) {
		this.navigation = navigation;
	}

	get screenTitle() {
		return 'Chinchón';
	}

	get buttonLabel() {
		return 'Nueva partida';
	}

	onButtonPress = () => {
		this.navigation.navigate(ROUTES.CreateNewGame.name);
	};
}

export default HomePresenter;
