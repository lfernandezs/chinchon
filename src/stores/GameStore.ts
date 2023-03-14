import Game from '../entities/Game/Game';

export default class GameStore {
	private _games: Game[];

	constructor() {
		this._games = [];
	}

	get all() {
		return this._games;
	}

	find(id: number) {
		return this._games.find((game) => game.id === id);
	}

	add(game: Game) {
		this._games.push(game);
	}
}
