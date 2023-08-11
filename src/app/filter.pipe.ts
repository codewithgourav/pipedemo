import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string , propName : string){
    if(value.length == 0 || filteredString == ''){
      return value
    }
    const filteredArray = []
    for (let item of value){
      if(item[propName] == filteredString){
        filteredArray.push(item)
      }
    }

    return filteredArray
  }

}
