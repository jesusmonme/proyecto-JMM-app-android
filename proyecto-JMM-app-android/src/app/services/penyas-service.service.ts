import { Injectable } from '@angular/core';
import { Penya } from '../modelos/penya.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PenyasServiceService {
  private urlBase = 'http://localhost:8080/penyas-app/v1/penyas';

  constructor(private clienteHttp: HttpClient) {}

  obtenerPenyas(): Observable<Penya[]> {
    // TODO: quitar comentario
    // return this.clienteHttp.get<Penya[]>(this.urlBase);
    return of([
      {
        idPenya: '1',
        nombreBD: 'Peña 1',
        puntosVictoria: 3,
        puntosEmpate: 1,
        puntosDerrota: 0,
        sorteo: 1,
        equilibrarNiveles: true,
        equilibrarPosiciones: true,
        considerarIncompatibilidades: true,
        equipo1: 'Equipo 1',
        equipo2: 'Equipo 2',
        cuota: 10,
      },
      {
        idPenya: '2',
        nombreBD: 'Peña 2',
        puntosVictoria: 3,
        puntosEmpate: 1,
        puntosDerrota: 0,
        sorteo: 1,
        equilibrarNiveles: true,
        equilibrarPosiciones: true,
        considerarIncompatibilidades: true,
        equipo1: 'Equipo 1',
        equipo2: 'Equipo 2',
        cuota: 10,
      },
      {
        idPenya: '3',
        nombreBD: 'Peña 3',
        puntosVictoria: 3,
        puntosEmpate: 1,
        puntosDerrota: 0,
        sorteo: 1,
        equilibrarNiveles: true,
        equilibrarPosiciones: true,
        considerarIncompatibilidades: true,
        equipo1: 'Equipo 1',
        equipo2: 'Equipo 2',
        cuota: 10,
      },
    ]);
  }

  //En este metodo recibimos un objeto de tipo Penya que vamos a enviar en nuestra peticion de tipo POST
  //Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Penya
  agregarPenya(penya: Penya): Observable<Penya> {
    return this.clienteHttp.post<Penya>(this.urlBase, penya);
  }

  obtenerPenyaPorId(id: number) {
    return this.clienteHttp.get<Penya>(`${this.urlBase}/${id}`);
  }

  editarPenya(id: number, penya: Penya): Observable<Object> {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, penya);
  }

  eliminarPenya(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
