
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from "./router";
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
   
  return( 
    <>  
    <Provider store={store}>
    <div className="bg-cover bg-center" style={{backgroundImage:`url(/img/backgroundSign.jpg)`}}>
    <RouterProvider router={router} />

    </div>
    </Provider>
    </>
  )
  }

export default App;
