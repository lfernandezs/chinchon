import StartNewRound from '../../interactors/StartNewRound';
import GameStore from '../../stores/GameStore';

describe('StartNewRound', () => {
	const id = 72;

	const mockGame = {
		newRound: jest.fn(),
	};

	const gameStore = {
		find: jest.fn(() => mockGame),
	} as unknown as GameStore;

	let startNewRoundInGame: StartNewRound;

	beforeEach(() => {
		startNewRoundInGame = new StartNewRound({ gameStore });
	});

	describe('constructor', () => {
		it('creates a new instance of StartNewRound', () => {
			expect(startNewRoundInGame).toBeInstanceOf(StartNewRound);
		});
	});

	describe('execute', () => {
		it('starts a new round in a game', () => {
			const scores = [10, 20, 30, 40];

			startNewRoundInGame.execute({ id, scores });
			expect(mockGame.newRound).toHaveBeenCalledWith(scores);
		});
	});
});
