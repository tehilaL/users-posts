import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var s=value.split("@").shift();
    return s;
  }

}
