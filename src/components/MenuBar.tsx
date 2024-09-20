import React from 'react';
import { Link  } from 'react-router-dom';

interface MenuBarProps {
  // Receive toggleMenu function to close the menu
  toggleMenu: () => void; 
  showMenu?: boolean
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleMenu,showMenu }) => {
console.log(showMenu)
  return (
   
    <div
     className={`menu-bar flex ml-8  fixed top-24 z-[1000] left-[-200%]  w-[100vw] bg-white  rounded-[10px] h-[100vh] ${showMenu ? "show left-[0%]":""} `} >
     <div className="flex flex-col mt-5 w-[20%] ">
        <div className='flex items-center'>
          <img src="ser.svg" alt="services-icon" className='w-6 h-6 mr-12' />
          <Link to='/dienstleistungen' className='font-[400px]'>Dienstleistungen</Link>
        </div>
        <div className="flex flex-col mt-3 items-center">
                <hr className="w-full border-t-[2px] border-[#abafab]" />
         </div>


      <div className='flex mt-2'>
            
          <img src="services.png" alt="services-icon" className='w-6 h-6 mr-12' />
            
            <div className='flex flex-col justify-evenly h-40 '>
              <Link to="/self Services" className='font-[400px]'>Self Services</Link >
              <Link to="/bewertung" className='font-semibold'> Bewertung</Link >
              <Link to='/potenzialanalyse' className='font-[400px]'>Potenzialanalyse</Link >
              <Link to='/groundstuckgewinnsteur' className='font-[400px]'>Groundstuckgewinnsteur</Link >
              <Link to='/finanzierung'  className='font-[400px]'>Finanzierung</Link >
       </div>
      </div>
      <div className="flex flex-col mt-3 items-center">
                <hr className="w-full border-t-[2px] border-[#abafab]" />
      </div>
      <div className='flex mt-2 items-center'>
        <img src="b.png" alt="home-icon" className='w-6 h-6 mr-12' />
        <Link to='/immobilien'  className='font-[400px]'>Immobilien</Link>
      </div>

      <div className="flex flex-col mt-3 items-center">
                <hr className="w-full border-t-[2px] border-[#abafab]" />

      </div>

      <div className='flex items-center mt-2'>
          <img src="ecology-book.svg" alt="book-icon" className='w-6 h-6 mr-12' />
        <Link to='/retgeber'  className='font-[400px]'>Ratgeber</Link>
      </div>

      <div className="flex flex-col mt-3 items-center">
                <hr className="w-full border-t-[2px] border-[#abafab]" />

         </div>
      <div className='flex items-center mt-2'>
        <img src="user.png" alt="about-us-icon" className='w-6 h-6 mr-12'  />
        <Link to='/uber-uns'  className='font-[400px]'>Uber uns</Link>
      </div>
     </div>
     <div className='flex  flex-col  ml-10'>
        <div onClick={toggleMenu} className='flex'>
        <span className="text-6xl text-[#459e98] cursor-pointer ">&#8592;</span>
        <p className='px-2 text-2xl text-[#77787d] mt-5' >ZURUCK</p>
        </div>
       </div>
      
     <div className='flex  flex-col mt-36'>
       <div className='flex flex-col ml-40 items-center'>
        <p className='text-3xl font-bold'>Bewertung</p>
              <p className='text-3xl'>Diskret und professionell </p>
       </div>
       <div className='change-div relative flex flex-col ml-40 mt-4 border rounded-[10px] justify-center py-10  items-center h-[350px] w-[700px] border-t-8 border-t-[#b4bab9]'>
        <p className='text-xl font-bold '>Welche Immobilie mochten Sie bewerten</p>
         <div className='flex justify-evenly items-center w-[100%] h-[100%]'>
                    <div className='flex w-[200px] h-[200px] justify-center items-center flex-col border-[4px] border-[#b4bab9]'>
                      <img src="home.png" alt="home-icon" className='w-[80px] h-[80px]' />
                      <p className='text-xl font-bold '>Immobilien</p>
                    </div>
                        <div className='flex w-[200px] h-[200px]  justify-center items-center  flex-col border-[4px] border-[#b4bab9]'>
                          <img src="apartment.png" alt="apartment-con" />
                          <p className='text-xl font-bold '>Wohnung</p>
                        </div>
                      <div className='flex flex-col w-[200px] h-[200px] justify-center items-center border-[4px] border-[#b4bab9]'>
                      <img src="ap2.png" alt="apartment-con" className='w-[80px] h-[80px]' />
                        <p className='text-xl font-bold'>Mehrfamilienhaus</p>
                        <p>(Kein Sofortergebnis)</p>
                      </div>
         </div>
       </div>
  
     </div>

    </div>

  );
};

export default MenuBar;


// className={`flex flex-col  fixed top-[100px] z-[1000] left-[-100%]  w-[100%] bg-white border-[10px] border-red-800 rounded-[10px] h-[1100px]
//   ${showMenu ? "show transition duration-[500ms] left-[0]":""} `}