import Game from '../../entities/Game/Game';
import CreateNewGame from '../../interactors/CreateNewGame';
import GameStore from '../../stores/GameStore';

describe('CreateNewGame', () => {
	const id = 72;
	const players = [
		{ name: 'player1', id: 0 },
		{ name: 'player2', id: 1 },
	];
	const gameStore = {
		add: jest.fn(),
	} as unknown as GameStore;

	let createNewGame: CreateNewGame;

	beforeEach(() => {
		createNewGame = new CreateNewGame({ gameStore });
	});

	describe('constructor', () => {
		it('creates a new instance of CreateNewGame', () => {
			expect(createNewGame).toBeInstanceOf(CreateNewGame);
		});
	});

	describe('execute', () => {
		it('creates a new game', () => {
			createNewGame.execute({ id, players });
			const game = new Game({ id, players });
			expect(gameStore.add).toHaveBeenCalledWith(game);
		});
	});
});
