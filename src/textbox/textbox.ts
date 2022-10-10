import {customElement, bindable, autoinject, bindingMode} from 'aurelia-framework'


@customElement('textbox')
export class TextBoxCustomElement {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value = '';

  public currentValue = '';

  public onInputChange() {
    this.value = this.currentValue;
  }

  public valueChanged(newValue: any) {
    this.currentValue = newValue;
  }

  public fireBlur() {
    const element = document.getElementById('input1');
    element.dispatchEvent(new Event('blur', {bubbles: true, cancelable: true}));
  }

}
