import RootComponent from './root-component.tsx';
import { createRoot } from 'react-dom/client';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RootComponent basename={'/'} />);
