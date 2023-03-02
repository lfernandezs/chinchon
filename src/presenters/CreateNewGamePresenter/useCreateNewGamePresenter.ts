import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CreateNewGamePresenter from './CreateNewGamePresenter';

const useCreateNewGamePresenter = () => {
	const navigation = useNavigation();
	const createPresenter = () => {
		return new CreateNewGamePresenter({ navigation });
	};

	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useCreateNewGamePresenter;
