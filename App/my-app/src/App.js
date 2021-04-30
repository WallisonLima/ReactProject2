import { Headr } from './templates/headr/Headr'
import { OptionsHeadr } from './templates/headr/OptionsHeadr.js'
import { ImageTop } from './templates/content/imageTop/ImageTop'
import './AppStyle.css'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Headr />
        <OptionsHeadr />
        <ImageTop />
      </div>
    </div>
  );
}

export default App;
