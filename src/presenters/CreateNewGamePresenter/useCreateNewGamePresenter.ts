import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import CreateNewGame from '../../interactors/CreateNewGame';
import { useRootStore } from '../../providers/RootStoreProvider';
import CreateNewGamePresenter from './CreateNewGamePresenter';

const useCreateNewGamePresenter = () => {
	const navigation = useNavigation();
	const scrollRef = useRef();
	const { gameStore } = useRootStore();
	const createNewGame = new CreateNewGame({ gameStore });

	const createPresenter = () => {
		return new CreateNewGamePresenter({ navigation, scrollRef, createNewGame });
	};

	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useCreateNewGamePresenter;
