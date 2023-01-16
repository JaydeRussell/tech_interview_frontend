import logo from './logo.svg';
import './App.css';
import { SearchHeader, SearchResults } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <SearchHeader />
      <SearchResults />
    </div>
  );
}

export default App;
