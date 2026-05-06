import { devices } from 'playwright';
console.log(Object.keys(devices));


const chromeDesktop = devices['Desktop Safari']
console.log(chromeDesktop)