import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatPipe'
})
export class ChatPipePipe implements PipeTransform {

  transform(value: string, character: string): string {

    return value.replace(character, '');

  }
}
