import { makeAutoObservable } from 'mobx';
import Game from '../entities/Game/Game';
import GameStore from '../stores/GameStore';

interface ICreateNewGameProps {
	gameStore: GameStore;
}

export default class CreateNewGame {
	private _gameStore: ICreateNewGameProps['gameStore'];

	constructor({ gameStore }: ICreateNewGameProps) {
		this._gameStore = gameStore;
		makeAutoObservable(this);
	}

	execute({ players }: { players: { name: string; id: number }[] }) {
		const id = this._gameStore.nextId;
		const game = new Game({ id, players });
		this._gameStore.add(game);
		return id;
	}
}
