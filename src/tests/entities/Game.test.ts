import Game from '../../entities/Game';

const players = [
	{ name: 'John', id: 1 },
	{ name: 'Jane', id: 2 },
	{ name: 'Jack', id: 3 },
];

describe('Game', () => {
	let game: Game;

	const setUp = ({ players }: { players: { name: string; id: number }[] }) => {
		game = new Game({ players });
	};

	describe('constructor', () => {
		it('sets the players', () => {
			setUp({ players });
			expect(game.players).toEqual(players);
		});

		it('sets the rounds', () => {
			setUp({ players });
			expect(game.rounds).toEqual([]);
		});

		it('sets the gameOver', () => {
			setUp({ players });
			expect(game.gameOver).toEqual(false);
		});

		it('sets the currentRound', () => {
			setUp({ players });
			expect(game.currentRound).toEqual(0);
		});

		it('sets the ranking', () => {
			setUp({ players });
			expect(game.ranking).toEqual(players);
		});
	});

	describe('@players', () => {
		it('returns the players', () => {
			setUp({ players });
			expect(game.players).toEqual(players);
		});
	});

	describe('@rounds', () => {
		it('returns the rounds', () => {
			setUp({ players });
			game.newRound([1, 2, 3]);
			expect(game.rounds).toEqual([[1, 2, 3]]);
		});
	});

	describe('@gameOver', () => {
		describe('when a player scored more than the losing score', () => {
			it('returns true', () => {
				setUp({ players });
				game.newRound([100, 200, 300]);
				expect(game.gameOver).toEqual(true);
			});
		});

		describe('when not one player score more than the losing score', () => {
			it('returns false', () => {
				setUp({ players });
				game.newRound([1, 2, 3]);
				expect(game.gameOver).toEqual(false);
			});
		});
	});

	describe('@currentRound', () => {
		it('returns the current round', () => {
			setUp({ players });
			game.newRound([1, 2, 3]);
			expect(game.currentRound).toEqual(1);
		});
	});

	describe('@ranking', () => {
		it('returns the ranking', () => {
			setUp({ players });
			game.newRound([3, 1, 2]);
			expect(game.ranking).toEqual([
				{ name: 'Jane', id: 2 },
				{ name: 'Jack', id: 3 },
				{ name: 'John', id: 1 },
			]);
		});
	});

	describe('newRound', () => {
		describe('when the game is not over', () => {
			describe('when the number of scores is equal to the number of players', () => {
				it('adds a new round', () => {
					setUp({ players });
					game.newRound([1, 2, 3]);
					expect(game.rounds).toEqual([[1, 2, 3]]);

					game.newRound([4, 5, 6]);
					expect(game.rounds).toEqual([
						[1, 2, 3],
						[4, 5, 6],
					]);
				});
			});

			describe('when the number of scores is not equal to the number of players', () => {
				it('throws an error', () => {
					setUp({ players });
					expect(() => game.newRound([1, 2])).toThrow();
				});
			});
		});

		describe('when the game is over', () => {
			it('throws an error', () => {
				setUp({ players });
				game.newRound([100, 200, 300]);
				expect(() => game.newRound([1, 2, 3])).toThrow();
			});
		});
	});

	describe('getScore', () => {
		it('returns the score of a player', () => {
			setUp({ players });
			game.newRound([1, 2, 3]);
			game.newRound([4, 5, 6]);
			expect(game.getScore(1)).toEqual(5);
			expect(game.getScore(2)).toEqual(7);
			expect(game.getScore(3)).toEqual(9);
		});
	});

	describe('getScoreOfRound', () => {
		it('returns the score of a player in a round', () => {
			setUp({ players });
			game.newRound([1, 2, 3]);
			game.newRound([4, 5, 6]);
			expect(game.getScoreOfRound(1, 0)).toEqual(1);
			expect(game.getScoreOfRound(2, 0)).toEqual(2);
			expect(game.getScoreOfRound(3, 0)).toEqual(3);
			expect(game.getScoreOfRound(1, 1)).toEqual(4);
			expect(game.getScoreOfRound(2, 1)).toEqual(5);
			expect(game.getScoreOfRound(3, 1)).toEqual(6);
		});
	});
});
