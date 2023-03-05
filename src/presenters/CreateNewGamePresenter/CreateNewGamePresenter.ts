import { makeAutoObservable } from 'mobx';
import { MAX_NUMBER_OF_PLAYERS } from '../../constants/constants';
import iCreateNewGamePresenterProps from './CreateNewGamePresenter.types';

class CreateNewGamePresenter {
	private _navigation: iCreateNewGamePresenterProps['navigation'];
	private _numberOfPlayers: number;
	private _scrollRef: iCreateNewGamePresenterProps['scrollRef'];

	constructor({ navigation, scrollRef }: iCreateNewGamePresenterProps) {
		this._navigation = navigation;
		this._numberOfPlayers = 2;
		this._scrollRef = scrollRef;
		makeAutoObservable(this);
	}

	get numberOfPlayers() {
		return this._numberOfPlayers;
	}

	get plusButtonDisabled() {
		return this._numberOfPlayers >= MAX_NUMBER_OF_PLAYERS;
	}

	get scrollRef() {
		return this._scrollRef;
	}

	onPlusButtonPress = () => {
		if (this._numberOfPlayers < MAX_NUMBER_OF_PLAYERS) {
			this._numberOfPlayers++;
			this._scrollRef.current?.scrollForExtraHeightOnAndroid(80);
		}
	};

	focusInput(key: number) {
		return key > 1 && key === this._numberOfPlayers - 1;
	}
}

export default CreateNewGamePresenter;
