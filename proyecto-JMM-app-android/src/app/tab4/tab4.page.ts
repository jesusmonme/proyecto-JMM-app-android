import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugador } from '../modelos/jugador.model';
import { JugadoresServiceService } from '../services/jugadores-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  idJugador: number = 1;
  idPenya: number = 1;
  jugadores: Jugador[] = [
    {
      idJugador: 1,
      nombreJugador: 'Jugador 1',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Base',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
      descripcion: 'Jugador 1',
      email: 'jugador1@penya1.com',
      miembro: true,
    },
  ];
  jugadorEditar: Jugador = new Jugador();

  constructor(
    private servicioJugadores: JugadoresServiceService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idJugador = this.router.snapshot.params['idJugador'];
    this.idPenya = this.router.snapshot.params['idPenya'];
    this.servicioJugadores.obtenerJugadorPorId(this.idJugador).subscribe({
      next: (datos) => (this.jugadorEditar = datos),
      error: (error: any) => console.log(error),
    });

    // this.obtenerJugadores();
    this.jugadorEditar = this.jugadores[0]
  }
  private obtenerJugadores() {
    //Consumir los datos del observable (suscribir)
    this.servicioJugadores.obtenerJugadores(this.idPenya).subscribe({
      next: (datos) => {
        this.jugadores = datos;
      },
    });
  }
  onSubmit() {
    this.salir();
  }

  //Metodo que almacena jugador creado y pasa idPenya de la ruta para que el backend
  //introduzca la penya e idPenya en la BD
  editarJugador() {
    //TODO poner en rojo campos no rellenos
    if (
      this.jugadorEditar.nombreJugador == '' ||
      this.jugadorEditar.posicion == ''
    ) {
      alert('El nombre y posición deben estar rellenos');
    } else {
      this.route.navigate(['/tabs/tab3', this.idPenya]);
      // this.servicioJugadores
      //   .agregarJugador(this.jugadorEditar, this.idPenya)
      //   .subscribe({
      //     complete: () => {
      //       alert(`Jugador ${this.jugadorEditar.nombreJugador} editado`);
      //       this.salir();
      //     },
      //     error: (error: any) => {
      //       console.log(error);
      //     },
      //   });
    }
  }

  salir() {
    this.route.navigate(['/tabs/tab3']);
  }
}
