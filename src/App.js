import Form from 'components/Form';
import Links from 'components/Links';
import Header from 'components/Header';

import './App.scss'

import bgIMG from './img/bg.jpg';
import logo from './img/logo.png';



function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgIMG})`,
      backgroundCover: 'cover',
      height: ' 100vh'
    }}>
      <Header />
      <div className='window'>
        <div className='window-content'>


          <Form />
          <img src={logo} alt='logo' />
          {/* <Links /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
// qr code
// https://www.youtube.com/watch?v=8aQekFwbmyE
