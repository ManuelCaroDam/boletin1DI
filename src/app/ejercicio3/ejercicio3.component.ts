import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  surname: string;
  birthdate: string;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Manuel', surname: 'Caro Delgado', birthdate: '28/04/1999',curso:'2DAM'},
  {name: 'Antonio', surname: 'Ortega Ortiz', birthdate: '12/03/1999',curso:'1DAM'},
  {name: 'Felipe', surname: 'Flores Perea', birthdate: '02/09/2000',curso:'2DAM'},
  {name: 'Maria', surname: 'Jimenez Cuevas', birthdate: '23/12/2022',curso:'1DAM'},

];


 @Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  displayedColumns: string[] = ['name', 'surname', 'birthdate','curso'];
  dataSource = ELEMENT_DATA;
  column1 = '';

  primeraColumna() {
   
    if (
      this.column1 == 'disable'
    ) {
      this.column1 =
        'button';
    } else {
      this.column1 = 'disable';
    }
  }
}

