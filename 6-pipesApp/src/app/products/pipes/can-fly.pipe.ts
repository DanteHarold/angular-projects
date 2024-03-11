import { Pipe, PipeTransform } from '@angular/core';

//*Obligatorio Poner Nombre
@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela' | 'No Vuela' {
    return value ? 'Vuela' : 'No Vuela';
  }
}
