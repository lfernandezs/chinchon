import { makeAutoObservable } from 'mobx';
import { ROUTES } from '../../constants/routes';
import { iHomePresenterProps } from './HomePresenter.types';

class HomePresenter {
	private _navigation: iHomePresenterProps['navigation'];

	constructor({ navigation }: iHomePresenterProps) {
		this._navigation = navigation;
		makeAutoObservable(this);
	}

	get screenTitle() {
		return 'Chinchón';
	}

	get buttonLabel() {
		return 'Nueva partida';
	}

	onButtonPress = () => {
		this._navigation.navigate(ROUTES.CreateNewGame.name);
	};
}

export default HomePresenter;
