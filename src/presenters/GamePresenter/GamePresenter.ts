import { makeAutoObservable } from 'mobx';
import { IGamePresenterProps } from './types';

class GamePresenter {
	private _id: IGamePresenterProps['id'];
	private _getGameFromStore: IGamePresenterProps['getGameFromStore'];
	private _startNewRound: IGamePresenterProps['startNewRound'];
	private _newScores: number[];

	constructor({ id, getGameFromStore, startNewRound }: IGamePresenterProps) {
		this._id = id;
		this._getGameFromStore = getGameFromStore;
		this._startNewRound = startNewRound;
		this._newScores = Array(this.size).fill(0);
		makeAutoObservable(this);
	}

	get game() {
		return this._getGameFromStore.execute(this._id);
	}

	get size() {
		return this.game.players.length;
	}

	get players() {
		return this.game.players;
	}

	get playersNames() {
		return this.game.players.map((player) => player.name);
	}

	get playersScores() {
		return this.game.rounds;
	}

	textInputValueOf = (index: number) => {
		return (this._newScores[index] || '').toString();
	};

	startNewRound = () => {
		this._startNewRound.execute({ id: this._id, scores: this._newScores });
		this._newScores = Array(this.size).fill(0);
	};

	setNewScore = (score: string, index: number) => {
		this._newScores[index] = score == '' ? 0 : parseInt(score);
	};
}

export default GamePresenter;
