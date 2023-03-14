import GameStore from '../../stores/GameStore';
import Game from '../../entities/Game/Game';

const id = 72;

const players = [
	{ id: 1, name: 'Player 1' },
	{ id: 2, name: 'Player 2' },
];
const game = new Game({ id, players });

describe('GameStore', () => {
	let store: GameStore;

	beforeEach(() => {
		store = new GameStore();
	});

	describe('constructor', () => {
		it('initializes the games array', () => {
			expect(store.all).toEqual([]);
		});
	});

	describe('find', () => {
		it('returns the game with the given id', () => {
			store.add(game);
			expect(store.find(id)).toEqual(game);
		});

		it('returns undefined if the game does not exist', () => {
			expect(store.find(id)).toBeUndefined();
		});
	});

	describe('add', () => {
		it('adds the game to the games array', () => {
			store.add(game);
			expect(store.all).toEqual([game]);
		});
	});
});
