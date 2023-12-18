import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Penya } from 'src/app/modelos/penya.model';
import { EquipoServiceService } from 'src/app/services/equipo-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  penya: Penya = new Penya();
  id: number = 1;
  relleno: boolean = false;

  //TODO valorar como enlazar esto y si numerico o string

  constructor(
    private penyaServicio: PenyasServiceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.relleno = this.router.snapshot.queryParams['relleno'];
    console.log('relle', this.relleno);

    if (this.relleno) {
      this.penya = {
        idPenya: '1',
        nombreBD: 'Penya 1',
        equipo1: 'Equipo 1',
        equipo2: 'Equipo 2',
        cuota: 10,
        puntosDerrota: 0,
        puntosEmpate: 1,
        puntosVictoria: 3,
        sorteo: 1,
        considerarIncompatibilidades: true,
        equilibrarNiveles: true,
        equilibrarPosiciones: true,
      }
    } else {
      this.penya = new Penya();
    }

    // this.penyaServicio.obtenerPenyaPorId(this.id).subscribe({
    //   next: (datos) => (this.penya = datos),
    //   error: (error: any) => console.log(error),
    // });
  }

  onSubmit() {
    this.guardarPenya();
  }
  salir() {
    this.irListaPenyas();
  }

  guardarPenya() {
    if (
      this.penya.nombreBD == '' ||
      this.penya.nombreBD == '' ||
      this.penya.equipo1 == '' ||
      this.penya.equipo2 == ''
    ) {
      this.route.navigate(['tabs/tab1']);
      //TODO marcar en rojo campos obligatorios
      // alert(
      //   'Los campos: nombre, nombreBD, nombreEquipo1 y nombreEquipo2 tienen que estar rellenos'
      // );
    } else {
      this.route.navigate(['tabs/tab1']);
      // this.penyaServicio.editarPenya(this.id, this.penya).subscribe({
      //   complete: () => {
      //     //this.actualizarNombresEquipos();
      //     alert(`Peña ${this.penya.nombreBD} editada`);
      //     this.irListaPenyas();
      //   },

      //   error: (errores) => console.log(errores),
      // });
    }
  }
  irListaPenyas() {
    this.route.navigate(['tabs/tab1']);
  }
}
