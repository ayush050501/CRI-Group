import logo from './logo.png';
import trophy from './trophy.png';
import award from './award.png';
import machine from './machine.png'
import number from './number.png';
import fb from './fb.png';
import site from './site.png';
import './App.css';

function App() {
  return (
    <>
    <div className='abcd'>
      <div className="logo">
        <img src={logo} alt="Logo"  width="40%"/>
      </div>
      <div>
        <span>
          <div className="trophy">
            <img src = {trophy} alt="trophy" height= "600" width="90%"/>
          </div>
          <div className='award'>
            <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
          <img src = {award} alt="award" width="90%" height= "400" />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </span>
        </div>
        <div className='install'>
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
          </p>
        </div>
        <div className="machine">
          <img src = {machine} alt="machine" width="95%"/>
        </div>
        <div className="value">
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
        <div className="red-line">  </div>
        <div className="funds">
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        </div>
        <div className="products">
          <p>CHEMICALS <span className='seprate'>|</span> PROCESS POWER WATER <span className='seprate'>|</span> WASTE WATER OILS <span className='seprate'>|</span> GAS PHARMA SUGARS <span className='seprate'>|</span> DISTILLERIES PAPER <span className='seprate'>|</span> PULP MARINE <span className='seprate'>|</span> DEFENCE METAL <span className='seprate'>|</span> MINING FOOD <span className='seprate'>|</span> BEVERAGE PETROCHEMICAL <span className='seprate'>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className='seprate'>|</span> RESIDENTIAL</p>
        </div>
    </div>
    <div>
    <span className="navbar">
      <span className='number'>
        <img src={number} alt='number' height="20" width="20"/>
      <span className='phone'>Toll free 1800 200 1234</span>
      </span>
      <span className='fb'>
        <img src={fb} alt='fb' height="20" width="20"/>
        <span className="fbsite">
          <a href='https://www.facebook.com/cripumps'>www.facebook.com/cripumps</a>
        </span>
      </span>
      <span className="site">
        <img src={site} alt='site' height="20" width="20"/>
        <span className="sitesite">
          <a href='https://www.crigroups.com'>www.crigroups.com</a>
        </span>
      </span>
    </span>
    </div>
    </>
  );
}

export default App;
