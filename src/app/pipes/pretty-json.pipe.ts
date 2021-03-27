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

// I found out about pipes and I really love them! Wow, nice feature of Angular
// and quite powerfull. This is a simple example, just to point out
// that I learned about pipes, but I think there are plenty beautiful usecases.
