import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../modelos/equipo.model';
import { Jugador } from '../modelos/jugador.model';
import { EquipoServiceService } from '../services/equipo-service.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {
  @Input() equipo1: Equipo = {
    nombreEquipo: 'Equipo 1',
    jugadores: [
      {
        idJugador: 1,
        nombreJugador: 'Jugador 1',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Base',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 2,
        nombreJugador: 'Jugador 2',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Escolta',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 3,
        nombreJugador: 'Jugador 3',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Ala',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 4,
        nombreJugador: 'Jugador 4',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Ala-Pivot',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 5,
        nombreJugador: 'Jugador 5',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Pivot',
        ratio: 1,
        ultimoPartido: '0/0/0',
      }
    ]
  }

  @Input() equipo2: Equipo = {
    nombreEquipo: 'Equipo 2',
    jugadores: [
      {
        idJugador: 1,
        nombreJugador: 'Jugador 1',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Base',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 2,
        nombreJugador: 'Jugador 2',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Escolta',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 3,
        nombreJugador: 'Jugador 3',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Ala',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 4,
        nombreJugador: 'Jugador 4',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Ala-Pivot',
        ratio: 1,
        ultimoPartido: '0/0/0',
      },
      {
        idJugador: 5,
        nombreJugador: 'Jugador 5',
        idEquipo: 1,
        idPenya: 1,
        posicion: 'Pivot',
        ratio: 1,
        ultimoPartido: '0/0/0',
      }
    ]
  }

  @Input() idPenya: number = 1;
  @Input() modalSorteo: boolean = false;
  equipos: Equipo[] = [this.equipo1, this.equipo2];

  nombreEquipo1: string = 'Equipo 1';
  nombreEquipo2: string = 'Equipo 2';
  constructor(
    private route: Router,
    private servicioEquipo: EquipoServiceService
  ) {}
  ngOnInit(): void {
    this.servicioEquipo.obtenerEquipos(this.idPenya).subscribe({
      next: (datos) => (this.equipos = datos),
      error: (error: any) => console.log(error),
    });
    console.log('Equipo1 ', this.equipo1);
    console.log('Equipo2 ', this.equipo2);
  }

  volver() {
    this.modalSorteo = false;
    this.route.navigate(['jugadores/', this.idPenya]);
  }
}
