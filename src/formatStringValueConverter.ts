import {valueConverter} from 'aurelia-framework';

@valueConverter('formatString')
export class FormatStringValueConverter {
 
  public toView(value: string) {
    return `${value} - toView`;
  }

  public fromView(value: string) {
    return `${value} - fromView`;
  }
}
