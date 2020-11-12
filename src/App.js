import './App.css';
import NavSideLeft from './components/navsideleft/NavSideLeft';
import VideoContainer from './components/videocontainer/VideoContainer';
import NavigationBar from './components/navigationbar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div style={{display: 'flex'}}>
      <NavSideLeft/>
      <VideoContainer/>
      </div>
    </div>
  );
}

export default App;
