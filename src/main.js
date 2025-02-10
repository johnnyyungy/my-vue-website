import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue'; // Import the root component
import './assets/styles.css'; // Import your global styles here

// Create the Vue app instance
const app = createApp(App);

// Mount the app to the DOM element with the ID 'app'
app.mount('#app');