import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHtml'
})
export class ToHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
