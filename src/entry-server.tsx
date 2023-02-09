import ReactDOMServer from 'react-dom/server';
import App from './demo/App';

export function render(url, context) {
  return ReactDOMServer.renderToString(<App />);
}
