
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegador from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

 function App() {
   return (
     <div className='App'> 
      <Navegador/>
      <ItemListContainer greeting ="Destacadas" />
     </div>
   );
 };


 export default App;
