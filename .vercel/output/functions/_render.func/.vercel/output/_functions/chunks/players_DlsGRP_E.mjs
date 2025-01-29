const API_URL = "https://opensheet.elk.sh/10jk4Ll4hjaFLZX1G7G3NO0WtgC5VXJENpg0clGz65ws";
const GET_PLAYERS = async function() {
  const response = await fetch(`${API_URL}/Jugadores`);
  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }
  const PLAYERS = await response.json();
  return PLAYERS;
};

export { GET_PLAYERS as G };
