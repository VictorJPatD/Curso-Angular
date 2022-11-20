import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iría un Empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{ background-color:red; }"]

})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Díaz";

  edad=18;

  //empresa="Píldoras Informáticas";

  // getEdad(){
  //   return this.edad;
  // }
  // llamaEmpresa(value:String){}

habilitacionCuadro=false;

usuRegistrado=false;


getRegistroUsuario(){

  this.usuRegistrado=false;
}

  constructor() { }

  ngOnInit(): void {
  }

}
