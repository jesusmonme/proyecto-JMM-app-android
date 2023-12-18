export class Jugador {
  idJugador?: number;

  nombreJugador?: string = '';

  idEquipo?: number;

  idPenya?: number;

  nivel?: string = '';

  posicion?: string = '';

  miembro?: boolean = true;

  descripcion?: string;

  incompatibilidad?: string = '';

  email?: string;

  partidosGanados?: number = 0;

  partidosEmpatados?: number = 0;

  partidosPerdidos?: number = 0;

  ratio?: number = 0;

  ultimoPartido?: string;

  jugadorSeleccionado?: boolean = false;
}
