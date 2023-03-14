import GameStore from '../../stores/GameStore';
import RootStore from '../../stores/RootStore';

describe('RootStore', () => {
	let store: RootStore;

	beforeEach(() => {
		store = new RootStore();
	});

	describe('constructor', () => {
		it('initializes the gameStore', () => {
			expect(store.gameStore).toBeInstanceOf(GameStore);
		});
	});

	describe('shared', () => {
		it('returns a shared instance', () => {
			const rootStore = RootStore.shared();
			expect(rootStore).toBeInstanceOf(RootStore);
			expect(rootStore).toBe(RootStore.shared());
		});
	});
});
