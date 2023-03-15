import GetGameFromStore from '../../interactors/GetGameFromStore';
import GameStore from '../../stores/GameStore';

describe('GetGameFromStore', () => {
	const storeMock = {
		find: jest.fn(),
	} as unknown as GameStore;

	const getGameGameFromStore = new GetGameFromStore({ store: storeMock });

	describe('constructor', () => {
		it('creates a new instance of GetGameFromStore', () => {
			expect(getGameGameFromStore).toBeInstanceOf(GetGameFromStore);
		});
	});

	describe('execute', () => {
		it('gets a game from the store', () => {
			const id = 72;
			getGameGameFromStore.execute(id);
			expect(storeMock.find).toHaveBeenCalledWith(id);
		});
	});
});
