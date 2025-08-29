import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// App.vue를 기반으로 Vue 앱 만들기 // router 기능 등록 // index.html의 #app에 붙이기
createApp(App).use(router).mount("#app");
