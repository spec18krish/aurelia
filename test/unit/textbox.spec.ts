import {bootstrap} from 'aurelia-bootstrapper';
import {ComponentTester, StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('Stage App Component', () => {
  let component: ComponentTester;
  const model = {
    currentValue: 'working'
  }

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('../../src/textbox/textbox'))
      .inView(
         `<textbox value.bind="currentValue"></textbox>`
      ).boundTo(model);
  });

  it('should bind value', done => {
    component.create(bootstrap).then(() => {
      const view = component.element as HTMLElement;    
      expect(view.querySelector('input').value.trim()).toBe(model.currentValue);
      model.currentValue = 'modified value';
      setTimeout(() => {
        expect(view.querySelector('input').value.trim()).toBe(model.currentValue);
      }, 100);
      
      done();
    }).catch(e => {
      console.log(e);
      fail(e);
      done();
    });
  });

  it('should bind updated value', () => {    
      const view = component.element as HTMLElement;         
      model.currentValue = 'modified value';
      expect(view.querySelector('input').value.trim()).toBe(model.currentValue);     
    });


  afterEach(() => component.dispose());
});
