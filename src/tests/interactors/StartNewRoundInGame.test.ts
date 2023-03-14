import StartNewRoundInGame from '../../interactors/StartNewRoundInGame';
import GameStore from '../../stores/GameStore';

describe('StartNewRoundInGame', () => {
	const id = 72;

	const mockGame = {
		newRound: jest.fn(),
	};

	const gameStore = {
		find: jest.fn(() => mockGame),
	} as unknown as GameStore;

	let startNewRoundInGame: StartNewRoundInGame;

	beforeEach(() => {
		startNewRoundInGame = new StartNewRoundInGame({ gameStore });
	});

	describe('constructor', () => {
		it('creates a new instance of StartNewRoundInGame', () => {
			expect(startNewRoundInGame).toBeInstanceOf(StartNewRoundInGame);
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
