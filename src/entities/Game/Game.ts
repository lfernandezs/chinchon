import { makeAutoObservable } from 'mobx';
import { LOSING_SCORE } from '../../constants/constants';
import { IGameProps } from './types';

export default class Game {
	private _id: IGameProps['id'];
	private _players: IGameProps['players'];
	private _rounds: number[][];

	constructor({ id, players }: IGameProps) {
		this._id = id;
		this._players = players;
		this._rounds = [];
		makeAutoObservable(this);
	}

	get id() {
		return this._id;
	}

	get players() {
		return this._players;
	}

	get rounds() {
		return this._rounds;
	}

	get gameOver() {
		return this._aPlayerScoredMoreThanLosingScore();
	}

	get currentRound() {
		return this.rounds.length;
	}

	get ranking() {
		return [...this.players].sort((a, b) =>
			this.getScore(a.id) >= this.getScore(b.id) ? 1 : -1
		);
	}

	newRound(scores: number[]) {
		if (this.gameOver || scores.length !== this.players.length) {
			throw new Error();
		}

		this._rounds.push(scores);
	}

	getScore(id: number) {
		const i = this.players.findIndex((player) => player.id === id);
		return this.rounds.reduce((a, b) => a + b[i], 0);
	}

	getScoreOfRound(id: number, round: number) {
		const i = this.players.findIndex((player) => player.id === id);
		return this.rounds[round][i];
	}

	private _aPlayerScoredMoreThanLosingScore() {
		return this.players.some(
			(player) => this.getScore(player.id) >= LOSING_SCORE
		);
	}
}
