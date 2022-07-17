import { Component } from '@angular/core';

 interface MenuItem{
  nombre : string;
  ruta   : string;
 }

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
  ]
})
export class SideNavComponent{

  rutasTemplate : MenuItem[] = [
    {
      nombre: 'basicos',
      ruta : './template/basicos'
    },{
      nombre: 'dinamicos',
      ruta : './template/dinamicos'
    },{
      nombre: 'switches',
      ruta : './template/switches'
    },
  ]
  rutasReactive : MenuItem[] = [
    {
      nombre: 'basicos',
      ruta : './reactive/basicos'
    },{
      nombre: 'dinamicos',
      ruta : './reactive/dinamicos'
    },{
      nombre: 'switches',
      ruta : './reactive/switches'
    },
  ]
}
