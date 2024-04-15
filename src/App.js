import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StoragePage from './pages/storage';
import ComputePage from './pages/compute';
import SummaryPage from './pages/summary';
import WebAppsPage from './pages/webApps';
import NetworksPage from './pages/networks';
import ProvidersPage from './pages/providers';
import RootLayout from './pages/rootLayout';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '', element: <StoragePage /> },
      { path: 'summary', element: <SummaryPage /> },
      { path: 'compute', element: <ComputePage /> },
      { path: 'webApps', element: <WebAppsPage /> },
      { path: 'networks', element: <NetworksPage /> },
      { path: 'providers', element: <ProvidersPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
