import { makeAutoObservable } from 'mobx';
import GameStore from './GameStore';

let sharedInstance: RootStore;

export default class RootStore {
	gameStore: GameStore;

	constructor() {
		this.gameStore = new GameStore();
		makeAutoObservable(this);
	}

	static shared = () => {
		if (sharedInstance) {
			return sharedInstance;
		}
		sharedInstance = new RootStore();
		return sharedInstance;
	};
}
