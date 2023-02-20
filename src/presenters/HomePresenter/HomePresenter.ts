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
		return 'Nueva Partida';
	}

	onButtonPress = () => {
		this.navigation.push(ROUTES.CreateNewGame.name);
	};
}

export default HomePresenter;
