import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value > 100) {
      return 'Expensive';
    } else if (value > 50) {
      return 'Average';
    } else {
      return 'Cheap';
    }

    args.forEach(enumerateArgs);

    function enumerateArgs(item, index) {
      console.log(item);
    }

  }

}
