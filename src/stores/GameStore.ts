import { makeAutoObservable } from 'mobx';
import Game from '../entities/Game/Game';
import { MMKV } from 'react-native-mmkv';

export default class GameStore {
	private _storage: MMKV;
	private _gamesIds: number[];
	private _game: Game | undefined;

	constructor() {
		this._storage = new MMKV();
		this._gamesIds = JSON.parse(this._storage.getString('gamesIds') || '[]');
		// _game is the current game
		this._game = undefined;
		makeAutoObservable(this);
	}

	_fetchGame(id: number) {
		// game is the serialized game
		const game = JSON.parse(this._storage.getString(`game-${id}`) || '{}');
		return new Game(game);
	}

	get nextId() {
		return this._gamesIds.length;
	}

	get all() {
		return this._gamesIds.map((id) => new Game(this._fetchGame(id)));
	}

	find(id: number) {
		if (!this._game || this._game.id !== id) {
			this._game = this._fetchGame(id);
		}
		return this._game;
	}

	add(game: Game) {
		this._gamesIds.push(game.id);
		this._game = game;
		this._storage.set('gamesIds', JSON.stringify(this._gamesIds));
		this._storage.set(`game-${game.id}`, game.serialize());
	}

	update(game: Game) {
		this._game = game;
		this._storage.set(`game-${game.id}`, game.serialize());
	}
}
