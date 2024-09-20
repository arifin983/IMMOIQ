import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
const Sidebar = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col   p-6">
              <div className="flex justify-end ">
                {/* <FaTools className="text-[#003F52]" size={24} />  */}
                <img src="/tool.svg" alt="tool_icon" />
                <p className="ml-2 text-[#003F52] font-[DM Sans] font-medium text-[10px] leading-[13px]">
                  NACHTMODUS
                </p>
              </div>
              <div className="flex justify-center mb-12">
                <img src="/logo2.svg" alt="ImmoTrust Logo" className="w-[205px] h-[67px] mr-2" />
              </div>
              <div className="flex justify-around">
                <div>
                  <img src="/city.svg" alt="city-icon" />
                </div>
                <div className="">
                  <p className="text-[#003F52] font-[Plus Jakarta Sans] font-medium text-[14px]">
                    Immobilienlexikon
                  </p>
                  <p className="text-[#003F52] font-[Lato] text-[11px] leading-[30px]">
                    Immobilienwissen für alle Fälle.
                  </p>
                </div>
                <div  >
                <button
            className="w-[50px] h-[22px] text-center py-[4px] bg-[#EEFBFF] text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px] hover:bg-[#459e97] hover:text-white transition duration-300"
          >
            KI
          </button>
                </div>
              </div>
              <div className="flex justify-around">
                <div>
                  <img src="/elevator.svg" alt="elevator-icon" />
                </div>
                <div>
                  <p className="text-[#003F52] font-[Plus Jakarta Sans] font-medium text-[14px]">
                    Preisschätzung
                  </p>
                  <p className="text-[#003F52] font-[Lato] text-[11px] leading-[30px]">
                    Den Wert Ihres Hauses schätzen lassen.
                  </p>
                </div>
                <div>
                  <Link
                    to="/Preisschätzung"
                    className="w-[50px] h-auto px-[10px] py-[4px] text-center bg-[#EEFBFF] text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px]  hover:bg-[#459e97] hover:text-white transition duration-300"
                  >
                    LINK
                  </Link>
                </div>
              </div>
              <div className="flex justify-self-auto mb-3 bg-[#003F52]">
                <div >
                  <img src="/clipboard-check.svg" className="mt-[10px] ml-[5px]" alt="clipboard-icon" />
                </div>
                <div className="flex-row w-[100%]">
                  <div className="flex justify-start w-[100%]">
                    <p className="py-[7px] text-white px-3 font-[Plus Jakarta Sans] font-medium text-[14px]">
                      Checklisten
                    </p>
                    <button
              onClick={() => window.open('/PDFFILE.pdf', '_blank')}
              className="flex justify-evenly items-center w-[66px] h-[22px] mt-2 ml-auto text-center bg-[#EEFBFF] text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px] hover:bg-[#459e97] hover:text-white transition duration-300"
            >
              PDF
              <img src="/Vector.svg" alt="vector-icon" />
            </button>
                  </div>
                  <p className="w-[100%] text-white  px-3 font-[Lato] text-[11px] leading-[30px]">
                    Praktische Checklisten für jeden Schritt.

                  </p>
                </div>
              </div>
              <div className="flex justify-self-auto mb-2 ">
                <div >
                  <img src="/ecology-book.svg" className="mt-[10px] ml-[5px]" alt="clipboard-icon" />
                </div>
                <div className="flex-row w-[100%]">
                  <div className="flex justify-start w-[100%]">
                    <p className="py-[7px] text-[#013D4E] px-3 font-[Plus Jakarta Sans] font-medium text-[14px]">
                      Ratgeber
                    </p>
                    <button 
                    onClick={() => window.open('/PDFFILE.pdf', '_blank')}
                    className="flex justify-evenly items-center w-[66px] h-[22px] mt-2 ml-auto text-center bg-[#EEFBFF]     text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px]  hover:bg-[#459e97] hover:text-white transition duration-300"
                    >
                      PDF
                      <img src="/Vector.svg" alt="vector-icon" />
                    </button>
                  </div>
                  <p className="w-[100%] text-[#013D4E]  px-3 font-[Lato] text-[11px] leading-[30px]">
                    Immobilien-Expertenrat für Eigentümer.

                  </p>
                </div>
              </div>
              <div className="flex justify-around">
                <div>
                  <img src="compass.svg" alt="compass-icon" />
                </div>
                <div className="">
                  <p className="text-[#003F52] font-[Plus Jakarta Sans] font-medium text-[14px]">
                    Mandatsnavigator
                  </p>
                  <p className="text-[#003F52] font-[Lato] text-[11px] leading-[30px]">
                    Verständlich zum Verkaufsabschluss.
                  </p>
                </div>
                <div  >
                  <button 
                  className="w-[50px] h-[22px]  text-center py-[4px]  bg-[#EEFBFF] text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px]  hover:bg-[#459e97] hover:text-white transition duration-300">
                    KI
                  </button>
                </div>
              </div>
              <div className="flex justify-around ">
                <div>
                  <img src="golf.svg" alt="golf-icon" />
                </div>
                <div className="">
                  <p className="text-[#003F52] font-[Plus Jakarta Sans] font-medium text-[14px]">
                    Wohntraumfinder
                  </p>
                  <p className="text-[#003F52] font-[Lato] text-[11px] leading-[30px]">
                    Zum Traumheim mit KI-Unterstützung.
                  </p>
                </div>
                <div  >
                  <button 
                  className="w-[50px] h-[22px]  text-center py-[4px]  bg-[#EEFBFF] text-[#013D4E] font-[Plus Jakarta Sans] text-[9px] font-bold rounded-[39px]  hover:bg-[#459e97] hover:text-white transition duration-300">
                    KI
                  </button>
                </div>
              </div>
              <div className="relative flex flex-col mt-6 items-center ">
                <div className="w-[80px] h-[80px] z-10 border-[4.27px] overflow-auto bg-[] border-[#FFFFFF] rounded-full">
                  <img
                    src="/1.jpeg"
                    alt="profile"
                  />
                </div>
                <div className="bg-[#459E97] w-[256px] h-[196px] border-[3px] border-[#55072] mt-[-40px] rounded-[10px] flex flex-col items-center">
                  <p className="text-[#FFFFFF] font-[Plus Jakarta Sans] pt-10 font-bold text-[18px]">
                    Immotrust AG
                  </p>
                  <p className="flex flex-col items-center" >
                    <span className="text-[#FFFFFF] font-[Plus Jakarta Sans] font-normal text-[14px]">
                      Vertrauensvolle
                    </span>
                    <span className="text-[#FFFFFF] font-[Plus Jakarta Sans] font-normal text-[14px]">
                      Immobilienberatung seit 2008.
                    </span>
                  </p>
                  <button className="bg-[#62b4ad] mt-3 border-[#479f98] w-[180px] hover:bg-[#338079] h-[35px] text-[#FFFFFF] rounded-[10px] ">

                    Carlos Kuk - Eigentümer

                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                  <div className="flex justify-start">
                  <img src="/google.svg" alt="google-logo"/>
                  <p className="px-1 pt-1 text-[#459E97]">Bewertungen</p>
                  <Rating name="size-medium" defaultValue={4.5} size="medium" className="pt-1" precision={0.5} readOnly />
                  </div>
                  <span className="with-[196px] pt-2 text-[10px] text-center text-[#024154]" >4,6 VON BASIEREND AUF 245 BEWERTUNGEN</span>
              </div>
                
    </div>


  );
};

export default Sidebar;
