import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div>
      <div className="left">
        <SongList />
      </div>
      <div className="right panel">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
