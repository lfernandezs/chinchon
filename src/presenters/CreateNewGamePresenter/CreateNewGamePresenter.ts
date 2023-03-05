import { makeAutoObservable } from 'mobx';
import { MAX_NUMBER_OF_PLAYERS } from '../../constants/constants';
import iCreateNewGamePresenterProps from './CreateNewGamePresenter.types';

class CreateNewGamePresenter {
	private _navigation: iCreateNewGamePresenterProps['navigation'];
	private _numberOfPlayers: number;

	constructor({ navigation }: iCreateNewGamePresenterProps) {
		this._navigation = navigation;
		this._numberOfPlayers = 2;
		makeAutoObservable(this);
	}

	get numberOfPlayers() {
		return this._numberOfPlayers;
	}

	get plusButtonDisabled() {
		return this._numberOfPlayers >= MAX_NUMBER_OF_PLAYERS;
	}

	onPlusButtonPress = () => {
		this._numberOfPlayers = Math.min(
			this._numberOfPlayers + 1,
			MAX_NUMBER_OF_PLAYERS
		);
	};

	focusInput(key: number) {
		return key > 1 && key === this._numberOfPlayers - 1;
	}
}

export default CreateNewGamePresenter;
