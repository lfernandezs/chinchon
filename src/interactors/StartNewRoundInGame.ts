import GameStore from '../stores/GameStore';

interface IStartNewRoundInGameProps {
	gameStore: GameStore;
}

export default class StartNewRoundInGame {
	private _gameStore: IStartNewRoundInGameProps['gameStore'];

	constructor({ gameStore }: IStartNewRoundInGameProps) {
		this._gameStore = gameStore;
	}

	execute({ id, scores }: { id: number; scores: number[] }) {
		const game = this._gameStore.find(id);
		game.newRound(scores);
	}
}
