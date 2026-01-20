import { createApp } from "vue";
import App from "./App.vue";
import router from "../routes";
import "../styles/app.sass";
import "../../shared/lib"; 

createApp(App).use(router).mount("#app");
