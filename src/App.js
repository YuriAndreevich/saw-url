import Form from 'components/Form';
import Links from 'components/Links';
import Header from 'components/Header';

import './App.scss'

import bgIMG from './img/bg.jpg';



function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgIMG})`,
      backgroundCover: 'cover',
      height: ' 100vh'
    }}>
      <Header />
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
