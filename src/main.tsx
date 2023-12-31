import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
  //In a real-world application loading MSW would be conditional.
  //But for this demo app it will always be loaded.
  const { worker } = await import('./mocking/msw.ts');

  return worker.start({
    onUnhandledRequest(req) {
      if (req.url.startsWith('http://localhost:3000')) {
        //Requests to 3000 and 3001 are always ui development vite server itself, so always ignore.
        return;
      }
      if (
        req.url.endsWith('WorkSans-Variable.ttf') ||
        req.url.endsWith('AlbertSans-Variable.ttf')
      ) {
        //Ignore hosted fonts.
        return;
      }
      console.warn('Unhandled: %s %s', req.method, req.url);
    },
  });
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
