import { Jugador } from './jugador.model';

export class Equipo {
  idEquipo?: number;
  nombreEquipo?: string;
  idPenya?: number;
  public jugadores?: Jugador[]=[];
  // constructor(jugadores:Jugador[],idEquipo:number,nombreEquipo:string){
  //     this.idEquipo=idEquipo;
  //     this.nombreEquipo=nombreEquipo;
  //     this.jugadores=jugadores;
  // }
}
