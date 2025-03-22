import './App.css';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="App">
      <Counter />
      <ChangeNameAge/>
      <ItemList/>
      <QuestionBank/>
    </div>
  );
}

export default App;