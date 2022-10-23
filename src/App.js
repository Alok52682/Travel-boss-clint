import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';
import { createContext, useState } from 'react';

export const StyleContext = createContext();

function App() {
  const [info, setInfo] = useState({
    id: "",
    backround: 'https://blog.daraz.com.bd/wp-content/uploads/2019/12/Tours-and-Travel.jpg',
    heading: "Travel Boss",
    description: "Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.",
    location: ""
  });

  const styleInfo = { info, setInfo }
  return (
    <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${info.backround})`, height: '100vh' }}>
      <StyleContext.Provider value={styleInfo}>
        <RouterProvider router={router}>

        </RouterProvider>
      </StyleContext.Provider>
    </div>
  );
}

export default App;
