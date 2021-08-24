// import { Parallax } from '../components';
import loadComponents from './loadComponents';

/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.use(loadComponents);
  }
};

export default globalComponents;
