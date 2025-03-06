import logo from './logo.svg';
import './App.css';
import ReactHook2 from './component/ReactHook2';
import Counter from './component/Counter';
import FoodCard from './component/FoodCard';
import ProductList from './component/ProductList';
import SearchFilter from './component/SearchFilter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <FoodCard/>
      <ProductList/>
      <ReactHook2/>
      <SearchFilter/>
    </div>
  );
}

export default App;
