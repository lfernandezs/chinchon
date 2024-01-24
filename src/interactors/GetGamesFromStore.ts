import { makeAutoObservable } from 'mobx';
import Game from '../entities/Game/Game';
import GameStore from '../stores/GameStore';

class GetGamesFromStore {
	private store: GameStore;

	constructor({ gameStore }: { gameStore: GameStore }) {
		this.store = gameStore;
		makeAutoObservable(this);
	}

	execute(): Game[] {
		return this.store.all;
	}
}

export default GetGamesFromStore;
