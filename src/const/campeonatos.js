const API_URL = import.meta.env.API_URL
export const GET_CAMPEONATOS = async () => {
	const res = await fetch(`${API_URL}/Campeonatos`);
	const data = await res.json();
	return data;
};