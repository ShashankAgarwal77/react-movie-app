import './App.css';
import './components/SearchMovie';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovie/>
        <div className="footer">
          © Shashank Agarwal, 2020
        </div>
    </div>
    
  );
}

export default App;
