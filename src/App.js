import { AllRoutes } from './routes/AllRoutes';
import { Header } from "./Components/Header";
import { Footer } from './Components/Footer';
import './App.css';


function App() {
  

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;