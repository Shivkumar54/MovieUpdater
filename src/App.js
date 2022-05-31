import './App.css';
import data from './Components/data';
import Movie from './Components/Movie/Movie';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const MovieList = data.map((eachData) => {
    return (
      
      <Movie key={eachData.id} {...eachData} />
    )
  })



  return (
    <div className="App">
      <Navbar />
      {MovieList}
    </div>
  );
}

export default App;
