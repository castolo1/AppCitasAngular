import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListCitasComponent, CrearCitaComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppCitas';

  listCitas: any[] = [];

  agregarCita(cita: any){
    this.listCitas.push(cita);
  }

  eliminarCitaListado(index: number){
    this.listCitas.splice(index, 1);
  }
}
