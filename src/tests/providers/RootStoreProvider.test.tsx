import { render, RenderResult } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import {
	RootStoreProvider,
	useRootStore,
} from '../../providers/RootStoreProvider';
import RootStore from '../../stores/RootStore';

const mockRootStore = 'mockRootStore';

jest.mock('../../stores/RootStore', () => ({
	shared: jest.fn(() => mockRootStore),
}));

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useContext: jest.fn(),
}));

describe('RootStoreProvider', () => {
	let provider: RenderResult;
	const children = <Text>children</Text>;

	beforeEach(() => {
		provider = render(<RootStoreProvider>{children}</RootStoreProvider>);
	});

	describe('RootStoreProvider', () => {
		it('renders children', () => {
			expect(provider.queryByText('children')).toBeTruthy();
		});

		it('calls RootStore.shared', () => {
			expect(RootStore.shared).toHaveBeenCalled();
		});
	});

	describe('useRootStore', () => {
		it('returns RootStore', () => {
			useRootStore();
			expect(React.useContext).toHaveBeenCalled();
		});
	});
});
