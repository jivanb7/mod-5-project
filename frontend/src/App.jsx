import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from "./components/Spots/HomePage";
import SpotDetail from "./components/SpotDetail/SpotDetail";
import UpdateSpot from "./components/UpdateSpot/UpdateSpot";
import ManageSpots from "./components/ManageSpots/ManageSpots";
import * as sessionActions from './store/session';
import CreateSpot from './components/CreateSpot/CreateSpot';
import ManageReviews from './components/ManageReviews/ManageReviews';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/spots/:spotId',
        element: <SpotDetail />   
      },
      {
        path: '/spots/new',
        element: <CreateSpot />
      },
      {
        path: '/spots/manage',
        element: <ManageSpots />
      },
      {
        path: '/spots/:spotId/edit',
        element: <UpdateSpot />
      },
      {
        path: '/reviews/current',
        element: <ManageReviews />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;