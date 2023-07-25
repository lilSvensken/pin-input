import { createApp } from "vue";
import App from "./App.vue";
import PinInput from "/node_modules/v3-pin-input/dist/pin-input.es";
import "/node_modules/v3-pin-input/dist/style.css";

const app = createApp(App);
app.use(PinInput);
app.mount("#app");
