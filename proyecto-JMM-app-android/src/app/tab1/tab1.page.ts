import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PenyasServiceService } from '../services/penyas-service.service';
import { Penya } from '../modelos/penya.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  penyas?: Penya[];

  constructor(
    private router: Router,
    private penyaService: PenyasServiceService
  ) {}
  ngOnInit(): void {
    this.penyaService.obtenerPenyas().subscribe((penyas) => {
      this.penyas = penyas;
    })
  }

  crearPena() {
    // this.router.navigate(['formularioPeña']);
    // navegar a otra tab
    this.router.navigate(['tabs/tab2'], { queryParams: { relleno: false } });
  }

  irApenya() {
    this.router.navigate(['tabs/tab2'], { queryParams: { relleno: true } });
  }
}
