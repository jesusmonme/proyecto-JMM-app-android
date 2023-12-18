import { Jugador } from './jugador.model';

export class Penya {
  idPenya?: string = '';
  nombreBD?: string = '';
  puntosVictoria?: number;
  puntosEmpate?: number;
  puntosDerrota?: number;
  //TODO valorar si numerico o string el sorteo
  sorteo?: number;
  equilibrarNiveles?: boolean;
  equilibrarPosiciones?: boolean;
  considerarIncompatibilidades?: boolean;
  equipo1: String = '';
  equipo2: String = '';
  // jugadores:Jugador[]=[];
  // nombreEquipos?:string[];
  cuota?: number;
}
