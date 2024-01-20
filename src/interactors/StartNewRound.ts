import { makeAutoObservable } from 'mobx';
import GameStore from '../stores/GameStore';

interface IStartNewRoundProps {
	gameStore: GameStore;
}

export default class StartNewRound {
	private _gameStore: IStartNewRoundProps['gameStore'];

	constructor({ gameStore }: IStartNewRoundProps) {
		this._gameStore = gameStore;
		makeAutoObservable(this);
	}

	execute({ id, scores }: { id: number; scores: number[] }) {
		const game = this._gameStore.find(id);
		game.newRound(scores);
	}
}
