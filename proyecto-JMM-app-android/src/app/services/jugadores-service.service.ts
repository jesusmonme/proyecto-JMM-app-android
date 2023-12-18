import { Injectable } from '@angular/core';
import { Jugador } from '../modelos/jugador.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadoresServiceService {
  private urlBase = 'http://localhost:8080/penyas-app/v1/jugadores';

  constructor(private clienteHttp: HttpClient) {}
  //   obtenerJugadores():Observable<Jugador[]>{
  //     return this.clienteHttp.get<Jugador[]>(this.urlBase);
  // }

  obtenerJugadores(idPenya: number): Observable<Jugador[]> {
    // TODO: quitar comentarios
    // const url = `${this.urlBase}/${idPenya}`;
    // return this.clienteHttp.get<Jugador[]>(url);
    return of([
      {
        idJugador: 1,
        nombre: 'Jugador 1',
        posicion: 'Base',
        nivel: '1',
        incompatibilidad: '',
      },
      {
        idJugador: 2,
        nombre: 'Jugador 2',
        posicion: 'Escolta',
        nivel: '1',
        incompatibilidad: '',
      },
    ])
  }
  //En este metodo recibimos un objeto de tipo Jugador que vamos a enviar en nuestra peticion de tipo POST
  //Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Jugador
  agregarJugador(jugador: Jugador, idPenya: number): Observable<Object> {
    return this.clienteHttp.post(
      `${this.urlBase}/crearJugador/${idPenya}`,
      jugador
    );
  }
  //TODO ver si esto es mas correcto
  // agregarJugador(jugador: Jugador, id: number): Observable<Jugador> {
  //   return this.clienteHttp.post<Jugador>(`${this.urlBase}/crearJugador/${id}`, jugador);
  // }

  editarJugador(jugador: Jugador, idPenya: number): Observable<Object> {
    return this.clienteHttp.put(
      `${this.urlBase}/editarJugador/${idPenya}`,
      jugador
    );
  }

  obtenerJugadorPorId(id: number) {
    return this.clienteHttp.get<Jugador>(`${this.urlBase}/jugador/${id}`);
  }

  eliminarJugador(idJugador: number): Observable<Object> {
    return this.clienteHttp.delete(
      `${this.urlBase}/borrarJugador/${idJugador}`
    );
  }
}
