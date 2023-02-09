import ReactDOM from 'react-dom/client';
import App from './demo/App';

ReactDOM.hydrateRoot(document.getElementById('app') as HTMLElement, <App />);
