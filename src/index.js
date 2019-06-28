import Vue from 'vue';
import App from './components/App';

import './css/style.css';

const app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
