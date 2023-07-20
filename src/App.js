import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Products } from './components/products';
import contents from './content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />         
        </Routes>                
      </BrowserRouter>    
      <div className="Ap">        
      {contents.map(contents => (
            <Products 
                key={contents.id}
                image={contents.image}
                name={contents.name}
                price={contents.price}
                totalSales={contents.totalSales}
                timeLeft={contents.timeLeft}
                rating={contents.rating}
            />
        ))}  
        </div>
    </div>


      
  );
}

export default App;
