import Em from 'ember';
import EV from 'ember-validations';
import { buildContainer } from '../helpers/build-container';

export default Em.Object.extend(EV, {
  container: buildContainer()
});
