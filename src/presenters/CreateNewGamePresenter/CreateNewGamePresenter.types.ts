import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CreateNewGame from '../../interactors/CreateNewGame';

interface iCreateNewGamePresenterProps {
	navigation: any;
	scrollRef: React.RefObject<KeyboardAwareScrollView>;
	createNewGame: CreateNewGame;
}

export default iCreateNewGamePresenterProps;
