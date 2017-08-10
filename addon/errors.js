import Ember from 'ember';

const {
  A: emberArray,
  Object: EmberObject,
  get,
  set
} = Ember;

export default EmberObject.extend({
  unknownProperty(property) {
    run.once(() => { set(this, property, emberArray()); });
    return emberArray();
  }
});
