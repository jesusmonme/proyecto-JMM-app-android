import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugador } from '../modelos/jugador.model';
import { Penya } from '../modelos/penya.model';
import { JugadoresServiceService } from '../services/jugadores-service.service';
import { PenyasServiceService } from '../services/penyas-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  penya: Penya = new Penya();
  id: number = 1;
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
    },
    {
      idJugador: 2,
      nombreJugador: 'Jugador 2',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Escolta',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 3,
      nombreJugador: 'Jugador 3',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Ala',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 4,
      nombreJugador: 'Jugador 4',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Ala-Pivot',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 5,
      nombreJugador: 'Jugador 5',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Pivot',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 6,
      nombreJugador: 'Jugador 6',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Base',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 7,
      nombreJugador: 'Jugador 7',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Escolta',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 8,
      nombreJugador: 'Jugador 8',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Ala',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 9,
      nombreJugador: 'Jugador 9',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Ala-Pivot',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    },
    {
      idJugador: 10,
      nombreJugador: 'Jugador 10',
      idEquipo: 1,
      idPenya: 1,
      posicion: 'Pivot',
      ratio: 1,
      ultimoPartido: '0/0/0',
      jugadorSeleccionado: false,
    }
  ];
  modalSorteo = false;
  jugadoresSeleccionados: number = 0;
  contadorEquipos = 2;
  jugadoresConvocados: Jugador[] = [];
  // ver como asociar imagenes a un valor, estas variables no se si al final las usare
  iconoUltimoPartido = [1, 2, 3];
  iconoMiembro = ['SI', 'NO'];
  iconoRatio = [1, 2, 3];

  constructor(private servicioJugadores: JugadoresServiceService,
    private servicioPenyas: PenyasServiceService,
    private route: Router, private router: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.servicioPenyas.obtenerPenyaPorId(this.id).subscribe({
      next: (datos) => this.penya = datos,
      error: (error: any) => console.log(error)
    }
    );
    this.obtenerJugadores();

  }

  private obtenerJugadores() {
    //Consumir los datos del observable (suscribir)
    this.servicioJugadores.obtenerJugadores(this.id).subscribe({
      next: (datos) => {
        // this.jugadores = datos;
      }

    }
    );
  }
  //TODO metodo en servicio jugadores de obtener jugadores con idPenya


  //TODO corregir cuando pasemos un id al indice array peñas
  // nombreBD = this.servicioPenyas.penyas[0].nombreBD;

  //ver como gestionar el sorteo equipos,si metiendo cada uno en array o
  //en un solo por si habilito mas de 2equipos y coger tramos para cada equipo
  sumarContador() {
    //TODO si al final no hay tiempo para que puedan ser mas de 2equipos, mandar alerta "version premium"
    if (this.contadorEquipos >= 2) {
      this.contadorEquipos = ++this.contadorEquipos;

    }
    else {
      this.contadorEquipos = 2;
    }
  }
  restarContador() {
    if (this.contadorEquipos > 2) {
      this.contadorEquipos = --this.contadorEquipos;
    }
    else {
      this.contadorEquipos = 2;
    }
  }
  crearJugadores() {
    this.route.navigate(['tabs/tab4']);

  }


  seleccionarJugador(idJugador: number) {
    const jugadorBuscado = this.jugadores.find((elemento) => elemento.idJugador == idJugador);
    if (jugadorBuscado) {
      if (jugadorBuscado.jugadorSeleccionado == false) {
        jugadorBuscado.jugadorSeleccionado = true;
        this.jugadoresSeleccionados++;

        this.jugadoresConvocados.push(jugadorBuscado);

      }
      else {
        jugadorBuscado.jugadorSeleccionado = false;
        this.jugadoresSeleccionados--;
        this.jugadoresConvocados = this.jugadoresConvocados.filter(j => j.idJugador !== jugadorBuscado.idJugador);


      }
    }

  }
  borrarJugador(jugadorAborrar: Jugador) {

    let confirmacion = confirm("seguro que quieres eliminar al jugador: " + jugadorAborrar.nombreJugador + '?');
    if (confirmacion) {
      this.servicioJugadores.eliminarJugador(jugadorAborrar.idJugador!).subscribe(
        {
          next: (datos) => this.obtenerJugadores(),
          complete: () => {
            alert(`Jugador ${jugadorAborrar.nombreJugador} eliminado`);
          },
          error: (errores) => console.log(errores)
          ,
        }
      );

    }

    //TODO corregir para que no se marque el jugador al darle a eliminar
    //this.jugadoresSeleccionados=-1;
  }

  sortearEquipos() {
    //Probando para separar equipos sin equilibrar, solo meter parres en un lado e impares en otro

    // this.modalSorteo=true;
    // for(let i=0;i<this.jugadoresConvocados.length;i++){
    //   if(this.jugadoresConvocados.length % i !=0){
    //     this.equipo1.jugadores.push(this.jugadoresConvocados[i]);
    //   }
    //   else{
    //     this.equipo2.jugadores.push(this.jugadoresConvocados[i]);
    //   }

    // }
    // this.route.navigate(['sorteo']);
  }
  // volver(){
  //   this.modalSorteo=false;
  //   //TODO ver si es necesario
  //   //vaciar equipos al volver del sorteo
  //   this.equipo1=new Equipo([],1,'Equipo1');
  //   this.equipo2=new Equipo([],2,'Equipo2');
  //   this.equipos=[this.equipo1,this.equipo2];
  // }
  editarJugador(idJugador: number, idPenya: string) {
    this.route.navigate(['/tabs/tab4']);
  }

  salir() {
    this.route.navigate(['home']);
  }

  equipo1: Jugador[] = [];
  equipo2: Jugador[] = [];


  //Sorteo de equipos en base al nivel
  hacerEquipos(jugadores:Jugador[]){
    this.route.navigate(['tabs/tab5'])
    // this.modalSorteo=true;
    // this.equipo1=[];
    // this.equipo2=[];
    // // Crear una copia del array antes de ordenar por nivel
    // jugadores.sort((jugadorA, jugadorB) => {
    //   if (jugadorA.nivel! < jugadorB.nivel!) {
    //     return -1;
    //   } else if (jugadorA.nivel! > jugadorB.nivel!) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    // console.log('Jugadores ordenados por nivel:', jugadores);

    // for(let jugador of jugadores){
    //   if(jugadores.indexOf(jugador) %2 ==0){

    //     this.equipo1.push(jugador)
    //   }
    //   else{
    //     this.equipo2.push(jugador)
    //   }
    // }
    // console.log('Jugadores equipo1: ', this.equipo1);
    // console.log('Jugadores equipo2: ', this.equipo2);
  }
  volver(){
    this.modalSorteo=false;
    //TODO ver si es necesario
    //vaciar equipos al volver del sorteo
    // this.equipo1=new Equipo([],1,'Equipo1');
    // this.equipo2=new Equipo([],2,'Equipo2');
    // this.equipos=[this.equipo1,this.equipo2];
  }
}
