import GetGameFromStore from '../../interactors/GetGameFromStore';
import StartNewRound from '../../interactors/StartNewRound';

export interface IGamePresenterProps {
	id: number;
	getGameFromStore: GetGameFromStore;
	startNewRound: StartNewRound;
}
