import {autoinject} from 'aurelia-framework'
import {ValidationController, ValidationRules} from 'aurelia-validation';
import { BootstrapFormRenderer } from 'boostrap-form-renderer';

@autoinject()
export class App {
  public message = 'Hello World!';
  public formObj = {
    firstName: '',
    lastName:''
  }
   constructor(private validationController: ValidationController) {
    this.validationController.addRenderer(new BootstrapFormRenderer());
   }

   public bind() {
    this.setupValidation()
   }


   public setupValidation() {
     ValidationRules
     .ensure('firstName')
     .required()
     .ensure('lastName')
     .required()
     .on(this.formObj)
   }
}
