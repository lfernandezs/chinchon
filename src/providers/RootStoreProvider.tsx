import React, { useContext, createContext } from 'react';
import RootStore from '../stores/RootStore';

const rootStore = RootStore.shared();
const RootStoreContext = createContext<RootStore | null>(null);

const RootStoreProvider = ({ children }: { children: React.ReactNode }) => (
	<RootStoreContext.Provider value={rootStore}>
		{children}
	</RootStoreContext.Provider>
);

const useRootStore = () => {
	return useContext(RootStoreContext);
};

export { RootStoreProvider, useRootStore };
