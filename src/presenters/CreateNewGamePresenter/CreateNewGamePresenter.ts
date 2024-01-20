import { makeAutoObservable } from 'mobx';
import { MAX_NUMBER_OF_PLAYERS } from '../../constants/constants';
import iCreateNewGamePresenterProps from './CreateNewGamePresenter.types';

class CreateNewGamePresenter {
	private _navigation: iCreateNewGamePresenterProps['navigation'];
	private _scrollRef: iCreateNewGamePresenterProps['scrollRef'];
	private _createNewGame: iCreateNewGamePresenterProps['createNewGame'];
	private _players: { name: string; id: number }[];

	constructor({
		navigation,
		scrollRef,
		createNewGame,
	}: iCreateNewGamePresenterProps) {
		this._navigation = navigation;
		this._scrollRef = scrollRef;
		this._createNewGame = createNewGame;
		this._players = [
			{ name: '', id: 0 },
			{ name: '', id: 1 },
		];
		makeAutoObservable(this);
	}

	get players() {
		return this._players;
	}

	get numberOfPlayers() {
		return this.players.length;
	}

	get plusButtonDisabled() {
		return this.numberOfPlayers >= MAX_NUMBER_OF_PLAYERS;
	}

	get scrollRef() {
		return this._scrollRef;
	}

	onPlayerNameChange = (name: string, id: number) => {
		this._players[id].name = name;
	};

	onPlusButtonPress = () => {
		if (this.numberOfPlayers < MAX_NUMBER_OF_PLAYERS) {
			this._players.push({ name: '', id: this.numberOfPlayers });
			this.scrollRef.current?.scrollForExtraHeightOnAndroid(80);
		}
	};

	focusInput(key: number) {
		return key > 1 && key === this.numberOfPlayers - 1;
	}

	onCreateNewGameButtonPress = () => {
		const id = this._createNewGame.execute({ players: this.players });
		this._navigation.navigate({ name: 'Game', params: { id } });
	};
}

export default CreateNewGamePresenter;
