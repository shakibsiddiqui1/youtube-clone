import React from 'react'
import {Provider}  from 'react-redux'
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import appStore from './utils/redux store/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watch from './components/Watch/Watch';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import LiveWatch from './components/LiveWatch/LiveWatch';
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Body/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/watch',
        element : <Watch/>
      },
      {
        path : '/search',
        element : <Search/>
      },
      {
        path : '/live',
        element : <LiveWatch/>
      }
    ]
  }])

function App() {
  return (
    <Provider store={appStore}>
      <div className="h-screen w-screen  ">
        <RouterProvider router={appRouter}>
          <Body/>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
