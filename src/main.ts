import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
// import router from '@/components/intermediate/router.ts'
import router from '@/components/modals/router.ts'

// createApp(App).mount('#app')

createApp(App).use(router).mount('#app');
