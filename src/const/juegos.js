const API_URL = import.meta.env.API_URL;

export const GET_JUEGOS = async function () {
  let response = fetch(`${API_URL}/Juegos`).then((res) => res.json());
  const JUEGOS = await response;

  const primeraJornada = JUEGOS.filter(
    (juego) => juego.jornada === "1ra jornada"
  );
  const segundaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "2da jornada"
  );
  const terceraJornada = JUEGOS.filter(
    (juego) => juego.jornada === "3ra jornada"
  );
  const cuartaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "4ta jornada"
  );
  const quintaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "5ta jornada"
  );
  const sextaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "6ta jornada"
  );
  const septimaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "7ma jornada"
  );
  const octavaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "8va jornada"
  );
  const novenaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "9na jornada"
  );
  const decimaJornada = JUEGOS.filter(
    (juego) => juego.jornada === "10ma jornada"
  );

  const TOTAL_JUEGOS = [
    {
      jornada: primeraJornada[0].jornada,
      fecha: primeraJornada[0].fecha,
      campo: primeraJornada[0].campo,
      juegos: [
        {
          id: primeraJornada[0].juegos,
          equipo1: primeraJornada[0].equipo1,
          equipo2: primeraJornada[0].equipo2,
          resultado: primeraJornada[0].resultado,
        },
        {
          id: primeraJornada[1].juegos,
          equipo1: primeraJornada[1].equipo1,
          equipo2: primeraJornada[1].equipo2,
          resultado: primeraJornada[1].resultado,
        },
      ],
    },
    {
      jornada: segundaJornada[0].jornada,
      fecha: segundaJornada[0].fecha,
      campo: segundaJornada[0].campo,
      juegos: [
        {
          id: segundaJornada[0].juegos,
          equipo1: segundaJornada[0].equipo1,
          equipo2: segundaJornada[0].equipo2,
          resultado: segundaJornada[0].resultado,
        },
        {
          id: segundaJornada[1].juegos,
          equipo1: segundaJornada[1].equipo1,
          equipo2: segundaJornada[1].equipo2,
          resultado: segundaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: terceraJornada[0].jornada,
      fecha: terceraJornada[0].fecha,
      campo: terceraJornada[0].campo,
      juegos: [
        {
          id: terceraJornada[0].juegos,
          equipo1: terceraJornada[0].equipo1,
          equipo2: terceraJornada[0].equipo2,
          resultado: terceraJornada[0].resultado,
        },
        {
          id: terceraJornada[1].juegos,
          equipo1: terceraJornada[1].equipo1,
          equipo2: terceraJornada[1].equipo2,
          resultado: terceraJornada[1].resultado,
        },
      ],
    },
    {
      jornada: cuartaJornada[0].jornada,
      fecha: cuartaJornada[0].fecha,
      campo: cuartaJornada[0].campo,
      juegos: [
        {
          id: cuartaJornada[0].juegos,
          equipo1: cuartaJornada[0].equipo1,
          equipo2: cuartaJornada[0].equipo2,
          resultado: cuartaJornada[0].resultado,
        },
        {
          id: cuartaJornada[1].juegos,
          equipo1: cuartaJornada[1].equipo1,
          equipo2: cuartaJornada[1].equipo2,
          resultado: cuartaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: quintaJornada[0].jornada,
      fecha: quintaJornada[0].fecha,
      campo: quintaJornada[0].campo,
      juegos: [
        {
          id: quintaJornada[0].juegos,
          equipo1: quintaJornada[0].equipo1,
          equipo2: quintaJornada[0].equipo2,
          resultado: quintaJornada[0].resultado,
        },
        {
          id: quintaJornada[1].juegos,
          equipo1: quintaJornada[1].equipo1,
          equipo2: quintaJornada[1].equipo2,
          resultado: quintaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: sextaJornada[0].jornada,
      fecha: sextaJornada[0].fecha,
      campo: sextaJornada[0].campo,
      juegos: [
        {
          id: sextaJornada[0].juegos,
          equipo1: sextaJornada[0].equipo1,
          equipo2: sextaJornada[0].equipo2,
          resultado: sextaJornada[0].resultado,
        },
        {
          id: sextaJornada[1].juegos,
          equipo1: sextaJornada[1].equipo1,
          equipo2: sextaJornada[1].equipo2,
          resultado: sextaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: septimaJornada[0].jornada,
      fecha: septimaJornada[0].fecha,
      campo: septimaJornada[0].campo,
      juegos: [
        {
          id: septimaJornada[0].juegos,
          equipo1: septimaJornada[0].equipo1,
          equipo2: septimaJornada[0].equipo2,
          resultado: septimaJornada[0].resultado,
        },
        {
          id: septimaJornada[1].juegos,
          equipo1: septimaJornada[1].equipo1,
          equipo2: septimaJornada[1].equipo2,
          resultado: septimaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: octavaJornada[0].jornada,
      fecha: octavaJornada[0].fecha,
      campo: octavaJornada[0].campo,
      juegos: [
        {
          id: octavaJornada[0].juegos,
          equipo1: octavaJornada[0].equipo1,
          equipo2: octavaJornada[0].equipo2,
          resultado: octavaJornada[0].resultado,
        },
        {
          id: octavaJornada[1].juegos,
          equipo1: octavaJornada[1].equipo1,
          equipo2: octavaJornada[1].equipo2,
          resultado: octavaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: novenaJornada[0].jornada,
      fecha: novenaJornada[0].fecha,
      campo: novenaJornada[0].campo,
      juegos: [
        {
          id: novenaJornada[0].juegos,
          equipo1: novenaJornada[0].equipo1,
          equipo2: novenaJornada[0].equipo2,
          resultado: novenaJornada[0].resultado,
        },
        {
          id: novenaJornada[1].juegos,
          equipo1: novenaJornada[1].equipo1,
          equipo2: novenaJornada[1].equipo2,
          resultado: novenaJornada[1].resultado,
        },
      ],
    },
    {
      jornada: decimaJornada[0].jornada,
      fecha: decimaJornada[0].fecha,
      campo: decimaJornada[0].campo,
      juegos: [
        {
          id: decimaJornada[0].juegos,
          equipo1: decimaJornada[0].equipo1,
          equipo2: decimaJornada[0].equipo2,
          resultado: decimaJornada[0].resultado,
        },
        {
          id: decimaJornada[1].juegos,
          equipo1: decimaJornada[1].equipo1,
          equipo2: decimaJornada[1].equipo2,
          resultado: decimaJornada[1].resultado,
        },
      ],
    },
  ];
  return TOTAL_JUEGOS;
};
