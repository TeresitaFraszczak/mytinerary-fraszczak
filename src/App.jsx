
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from "./router";

function App() {
   
  return( 
    <>    
    <div className="bg-cover bg-center" style={{backgroundImage:`url(/img/backgroundSign.jpg)`}}>
    <RouterProvider router={router} />

    </div>
    </>
  )
  }

export default App;
