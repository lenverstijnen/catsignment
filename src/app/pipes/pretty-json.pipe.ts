import { JsonpClientBackend } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson',
})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: Object): unknown {
    return JSON.stringify(value, null, 2);
  }
}
