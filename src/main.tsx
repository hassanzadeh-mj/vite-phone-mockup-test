import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// مسیردهی به استایل اصلی پروژه تست
import './index.css';
// مسیردهی به کامپوننت App
import App from './App';

const container = document.getElementById('root');
// مطمئن شو که عنصر با id 'root' در index.html پروژه Vite وجود دارد
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// اگر reportWebVitals در پروژه تست قبلی استفاده می‌شد و در پروژه Vite به آن نیاز داری،
// آن فایل را به src منتقل کن و این خط را فعال کن:
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();