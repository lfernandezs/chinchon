import { makeAutoObservable } from 'mobx';
import Game from '../entities/Game/Game';
import GameStore from '../stores/GameStore';

class GetGameFromStore {
	private store: GameStore;

	constructor({ gameStore }: { gameStore: GameStore }) {
		this.store = gameStore;
		makeAutoObservable(this);
	}

	execute(id: number): Game {
		return this.store.find(id);
	}
}

export default GetGameFromStore;
