import Game from '../entities/Game/Game';
import GameStore from '../stores/GameStore';

class GetGameFromStore {
	private store: GameStore;

	constructor({ store }: { store: GameStore }) {
		this.store = store;
	}

	execute(id: number): Game {
		return this.store.find(id);
	}
}

export default GetGameFromStore;
