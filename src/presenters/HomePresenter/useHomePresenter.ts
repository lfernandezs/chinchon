import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HomePresenter from './HomePresenter';

const useHomePresenter = () => {
	const navigation = useNavigation();
	const createPresenter = () => {
		return new HomePresenter({ navigation });
	};

	const [presenter] = useState(createPresenter);
	return presenter;
};

export default useHomePresenter;
