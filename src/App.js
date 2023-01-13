import Form from 'components/Form';
import Links from 'components/Links';
import './App.scss'

import bgIMG from './img/bg.png';



function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgIMG})`,
      backgroundCover: 'cover',
      height: ' 100vh'
    }}>
      <div className='window'>
        <Form />
        <Links />
      </div>
    </div>
  );
}

export default App;
// qr code
// https://www.youtube.com/watch?v=8aQekFwbmyE
