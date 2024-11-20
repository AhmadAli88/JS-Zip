import './App.css';
import DynamicZipCreator from './components/DynamicZipCreator';
import ImageZipCreator from './components/ImageZipCreator';
import ZipCreator from './components/ZipCreator';
import ZipReader from './components/ZipReader';

function App() {
  return (
    <div>
      <ZipCreator />
      <ZipReader/>
      <DynamicZipCreator/>
      <ImageZipCreator/>
    </div>
  );
}

export default App;
