import { useState } from 'react';
import GetGameFromStore from '../../interactors/GetGameFromStore';
import StartNewRound from '../../interactors/StartNewRound';
import { useRootStore } from '../../providers/RootStoreProvider';
import GamePresenter from './GamePresenter';

const useGamePresenter = ({ id }: { id: number }) => {
	const { gameStore } = useRootStore();
	const getGameFromStore = new GetGameFromStore({ gameStore });
	const startNewRound = new StartNewRound({ gameStore });

	const createPresenter = () => {
		return new GamePresenter({
			id,
			getGameFromStore,
			startNewRound,
		});
	};
	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useGamePresenter;
