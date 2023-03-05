import 'react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
	const KeyboardAwareScrollView = ({ children }) => children;
	return { KeyboardAwareScrollView };
});
