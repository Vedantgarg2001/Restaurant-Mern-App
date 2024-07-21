
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import toast,{Toaster} from 'react-hot-toast'
function App() {
  return (
    <>
    <Toaster/>
    <div className=''>
    <Header/>
    <main className='pt-16'>
      <Outlet/>
    </main>
    </div>
    </>
  );
}

export default App;
