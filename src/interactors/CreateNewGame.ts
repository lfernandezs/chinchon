import Game from '../entities/Game/Game';
import { IGameProps } from '../entities/Game/types';
import GameStore from '../stores/GameStore';

interface ICreateNewGameProps {
	gameStore: GameStore;
}

export default class CreateNewGame {
	private _gameStore: ICreateNewGameProps['gameStore'];

	constructor({ gameStore }: ICreateNewGameProps) {
		this._gameStore = gameStore;
	}

	execute({ id, players }: IGameProps) {
		const game = new Game({ id, players });
		this._gameStore.add(game);
	}
}
