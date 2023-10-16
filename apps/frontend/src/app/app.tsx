import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { ContactPage } from './pages/ContactPage';
import { ROUTE } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTE.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTE.EMPLOYEES,
        element: <EmployeesPage />,
      },
      {
        path: ROUTE.CONTACT,
        element: <ContactPage />,
      },
    ],
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
