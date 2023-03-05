import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import CreateNewGamePresenter from './CreateNewGamePresenter';

const useCreateNewGamePresenter = () => {
	const navigation = useNavigation();
	const scrollRef = useRef();
	const createPresenter = () => {
		return new CreateNewGamePresenter({ navigation, scrollRef });
	};

	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useCreateNewGamePresenter;
