import {createApp} from 'vue';
import App from './pages/App.vue';
import WdLink from '../src/components/link';
import WdButton from '../src/components/button';
import WdInput from '../src/components/input';
import WdInputNumber from '../src/components/input-number';

const app = createApp(App);
app.use(WdLink);
app.use(WdButton);
app.use(WdInput);
app.use(WdInputNumber);
app.mount('#app');