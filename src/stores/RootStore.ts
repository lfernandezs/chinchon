import GameStore from './GameStore';

let sharedInstance: RootStore;

export default class RootStore {
	gameStore: GameStore;

	constructor() {
		this.gameStore = new GameStore();
	}

	static shared = () => {
		if (sharedInstance) {
			return sharedInstance;
		}
		sharedInstance = new RootStore();
		return sharedInstance;
	};
}
