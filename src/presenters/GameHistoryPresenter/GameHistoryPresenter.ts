import { ROUTES } from '../../constants/routes';
import iGameHistoryPresenterProps from './GameHistoryPresenter.types';

class GameHistoryPresenter {
	private _navigation: iGameHistoryPresenterProps['navigation'];
	private _getGamesFromStore: iGameHistoryPresenterProps['getGamesFromStore'];

	constructor({ navigation, getGamesFromStore }) {
		this._navigation = navigation;
		this._getGamesFromStore = getGamesFromStore;
	}

	get games() {
		return this._getGamesFromStore.execute();
	}

	onGamePress = (id: number) => {
		this._navigation.navigate({ name: ROUTES.Game.name, params: { id } });
	};

	onNewGamePress = () => {
		this._navigation.navigate({ name: ROUTES.CreateNewGame.name });
	};

	getPlayersNames = (players) => {
		return players.map((player) => player.name).join(', ');
	};
}

export default GameHistoryPresenter;
