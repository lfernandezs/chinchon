import { useNavigation } from '@react-navigation/native';
import GetGamesFromStore from '../../interactors/GetGamesFromStore';
import { useState } from 'react';
import { useRootStore } from '../../providers/RootStoreProvider';
import GameHistoryPresenter from './GameHistoryPresenter';

const useGameHistoryPresenter = () => {
	const navigation = useNavigation();
	const { gameStore } = useRootStore();
	const getGamesFromStore = new GetGamesFromStore({ gameStore });

	const createPresenter = () => {
		return new GameHistoryPresenter({ navigation, getGamesFromStore });
	};

	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useGameHistoryPresenter;
