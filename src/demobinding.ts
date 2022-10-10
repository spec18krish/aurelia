import {bindingBehavior} from 'aurelia-framework'


@bindingBehavior('intercept')
export class InterceptBindingBehavior {
  bind(binding, scope, interceptor) {
   console.log([binding, scope, interceptor]);
  }

  unbind(binding, scope) {
    console.log([binding, scope]);
  }
}
