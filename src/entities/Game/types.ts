export interface IGameProps {
	id: number;
	players: { name: string; id: number }[];
	rounds?: number[][];
}
