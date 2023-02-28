import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currancy'
})
export class CurrancyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let c:any = '$'
    if(args && args.length > 0){
      c = args[0]

    }

    return value + c
  }

}
