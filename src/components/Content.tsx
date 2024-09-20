import "../index.css"
import { ImStopwatch } from "react-icons/im";
import { FaRegFilePdf } from "react-icons/fa";


const Content = () => {

  const downloadPdf = () => {
    const fileUrl = '/PDFFILE.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'anfordern'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
  <div className="flex flex-col">


       <div className="flex justify-between items-center w-[1088px] h-[151px] bg-[#459E97] border rounded-t-[10px]">
                <div className="flex ml-12 flex-col">
                    <p className="text-white text-[24px] font-bold font-[Roboto]">Beginnen Sie Ihre Verkaufsreise 👋 </p>
                    <p className="text-[#E8E8E8] text-[20px] mt-2 font-[400px] font-[Roboto]">
                      Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
                    </p>
                </div>


                <button
               onClick={() => window.location.reload()}  
                className="flex flex-col items-center justify-center mr-16 space-y-2 ">
                      <div 
                        className="w-[31px] h-[31px] font[Font Awesome 6 Pro] text-[23px] font-[300px] flex items-center justify-center border rounded-full bg-[#459E97] text-white">
                          ?
                        </div>
                    <p className="text-[15px] text-white font-[Inter] font-[400px]">
                      Reload
                    </p>
                </button>
       </div>
       <div className=" flex flex-col w-[1036px] h-[700px] m-auto  overflow-y-auto bg-gray-100 p-4 custom-scrollbar">
                      <div className="flex w-[989px]  h-[376px]">
                        <div className="flex w-[977px] h-[332px] rounded-[10px] border border-[#F6F6F6] bg-[#FFFFFF] ">
                            <div className="relative flex flex-col w-[188.53px] h-[266.23px] mt-5 rounded-[10px] border border-[#F6F6F6] overflow-hidden">
                                      <div className="flex justify-evenly z-10 bg-[#FFFFFF] m-auto items-center w-[80px] h-[60px] ">
                                      <p className="w-[60px] font-medium h-[30px] py-1 px-1 bg-[#cde6e3]">
                                        Home
                                      </p>
                                      </div>
                                      <div className="w-[100%] rounded-[10px] border mt-[-60px] border-[#F6F6F6] h-auto overflow-hidden">
                                        <img src="/3.PNG" alt="" />
                                      </div>
                                      <div className=" flex items-center flex-col w-[100%] bg-[#FFFFFF] mt-[-60px] h-20">
                                        <p>DIE IMMOBILIE</p>
                                        <p>IN DER SCHEIDUNG</p>
                                        <p className="text-[10px] font-bold">So finden Sie din richtigen Weg</p>
                                        <p className=" w-[100%] text-[8px] font-bold">im ummgang mit der gemeinsamen immobilie</p>
                                      </div>
                                      <div className="flex flex-col mt-5 items-center">
                                        <hr className="w-full border-t-[2px] border-[#abafab]" />
                                        <hr className="w-full mt-1 border-t-[2px] border-[#1c4744]" />
                                      </div>
                                      <p className="m-auto mt-2 font-semibold">RATGEBER</p>
                            </div>

                            <div className="flex flex-col mt-5 py-4 px-8 w-[750px] h-[100%]">
                            <p className="text-[#034154] font-bold text-[16px]">Die Immobilie in der Scheidung </p>
                            <p className="font-thin mt-1 text-[#459E97]">RATGEBER, SCHEIDUNG, CHERECHT</p>
                            <p className="font-medium mt-2 text-[15px] ">Eine Erbimmoilie kann die familiare und wirtschaftliche Situation verandern. In diesem Raiegber verraten wie ihnen, wie sie sich im Urwald von Handslungsmoglichkeiten zurecht finden und teilen mit ihnen den aktuellen Wissensstand. Auch der immobilieenwert spielt eine wichtige Rollen Sollen Sie den Wert noch nicht  ermitteit haben, konnen sie diesen mit unserer Marktwertanalyse schnell und unverbind lich online berechnen lassen.
                            </p>

                            <div className="flex py-5 justify-between ">
                                  <div className="flex flex-col  ">
                                      <p  className="text-[#C0C0C0]">Seitenanzah</p>
                                      <p className="flex">
                                        <img src="/document.svg" alt="document-icon" />
                                        <span className="pl-2 text-[#034154] font-semibold">52 Seiten</span>
                                      </p>
                                  </div>
                              <div className="flex flex-col ">
                                  <p  className="text-[#C0C0C0]">Letztes update</p>
                                  <p className="flex">
                                  <ImStopwatch className="mt-1" />
                                    <span className="pl-1 text-[#034154] font-semibold">19.09.2024</span>
                                  </p>
                              </div>
                              <div className="flex flex-col ">
                                  <p  className="text-[#C0C0C0]">Dateformat</p>
                                  <p className="flex">
                                  <FaRegFilePdf className="mt-1" />
                                    <span className="pl-1 text-[#034154] font-semibold">PDF</span>
                                  </p>
                              </div>
                              <div >
                                <button 
                                onClick={downloadPdf}
                                className=" w-[192.74px] h-[51.58px] text-white rounded-[10px] bg-[#034154] hover:bg-[#459e98]">Download anfordern</button>
                              </div>
                              <div className="w-[50.56px] h-[51.58px] p-4 rounded-[10px] bg-[#EFFBFFF0] flex items-center justify-center hover:bg-transparent">
                                            <svg
                                              width="19"
                                              height="16"
                                              viewBox="0 0 19 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="fill-current text-[#034154] hover:text-[#ff0000]"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.98957 1.84422C2.60666 2.4758 1.59341 3.98001 1.59341 5.77264C1.59341 7.60317 2.34332 9.01475 3.41763 10.2242C4.30341 11.2211 5.37666 12.0484 6.42148 12.8527C6.67005 13.0442 6.91761 13.2358 7.15986 13.4263C7.59801 13.7727 7.98982 14.0747 8.36688 14.2958C8.74394 14.5158 9.04725 14.6158 9.30634 14.6158C9.56439 14.6158 9.86772 14.5158 10.2448 14.2958C10.6229 14.0747 11.0136 13.7727 11.4518 13.4263C11.694 13.2348 11.9416 13.0442 12.1902 12.8537C13.2361 12.0474 14.3082 11.2211 15.194 10.2242C16.2694 9.01475 17.0193 7.60317 17.0193 5.77264C17.0193 3.98001 16.0061 2.4758 14.6221 1.84422C13.2781 1.23054 11.4718 1.39264 9.75608 3.1758C9.69815 3.2358 9.62758 3.28423 9.55069 3.31686C9.47275 3.34949 9.38955 3.36633 9.30634 3.36633C9.22208 3.36633 9.13891 3.34949 9.06097 3.31686C8.98408 3.28423 8.91456 3.2358 8.85558 3.1758C7.13983 1.39264 5.33352 1.23054 3.98957 1.84422ZM9.30634 1.87476C7.37785 0.149494 5.21975 -0.0915678 3.46925 0.70738C1.62291 1.55264 0.342163 3.51264 0.342163 5.77264C0.342163 7.99369 1.26795 9.68844 2.48234 11.0558C3.45555 12.1495 4.64467 13.0653 5.69686 13.8737C5.93489 14.0568 6.16557 14.2358 6.38465 14.4084C6.81332 14.7453 7.2715 15.1042 7.73599 15.3758C8.20047 15.6463 8.73022 15.8674 9.30634 15.8674C9.88142 15.8674 10.4112 15.6463 10.8757 15.3758C11.3412 15.1042 11.7994 14.7453 12.227 14.4084C12.4556 14.2295 12.6852 14.0505 12.9158 13.8737C13.9659 13.0653 15.1572 12.1484 16.1293 11.0558C17.3437 9.68844 18.2695 7.99369 18.2695 5.77264C18.2695 3.51264 16.9898 1.55265 15.1424 0.70844C13.393 -0.0915603 11.2338 0.150547 9.30634 1.87476Z"
                                              />
                                            </svg>
                                </div>
                            
                              
                            </div>
                            </div>
                        </div>
                      </div>
                      <div className="flex mt-10 w-[989px] h-[400px]">
                      <div className="flex w-[977px] h-[332px] rounded-[10px] border border-[#F6F6F6] bg-[#FFFFFF] ">
                            <div className="relative flex flex-col w-[188.53px] h-[266.23px] mt-5 rounded-[10px] border border-[#F6F6F6] overflow-hidden">
                                      <div className="flex justify-evenly z-10 bg-[#FFFFFF] m-auto items-center w-[80px] h-[60px] ">
                                      <p className="w-[60px] font-medium h-[30px] py-1 px-1 bg-[#cde6e3]">
                                        Home
                                      </p>
                                      </div>
                                      <div className="w-[100%] rounded-[10px] border mt-[-60px] border-[#F6F6F6] h-auto overflow-hidden">
                                        <img src="/3.PNG" alt="" />
                                      </div>
                                      <div className=" flex items-center flex-col w-[100%] bg-[#FFFFFF] mt-[-60px] h-20">
                                        <p>DIE IMMOBILIE</p>
                                        <p>IN DER SCHEIDUNG</p>
                                        <p className="text-[10px] font-bold">So finden Sie din richtigen Weg</p>
                                        <p className=" w-[100%] text-[8px] font-bold">im ummgang mit der gemeinsamen immobilie</p>
                                      </div>
                                      <div className="flex flex-col mt-5 items-center">
                                        <hr className="w-full border-t-[2px] border-[#abafab]" />
                                        <hr className="w-full mt-1 border-t-[2px] border-[#1c4744]" />
                                      </div>
                                      <p className="m-auto mt-2 font-semibold">RATGEBER</p>
                            </div>

                            <div className="flex flex-col mt-5 py-4 px-8 w-[750px] h-[100%]">
                            <p className="text-[#034154] font-bold text-[16px]">Die Immobilie in der Scheidung </p>
                            <p className="font-thin mt-1 text-[#459E97]">RATGEBER, SCHEIDUNG, CHERECHT</p>
                            <p className="font-medium mt-2 text-[15px] ">Eine Erbimmoilie kann die familiare und wirtschaftliche Situation verandern. In diesem Raiegber verraten wie ihnen, wie sie sich im Urwald von Handslungsmoglichkeiten zurecht finden und teilen mit ihnen den aktuellen Wissensstand. Auch der immobilieenwert spielt eine wichtige Rollen Sollen Sie den Wert noch nicht  ermitteit haben, konnen sie diesen mit unserer Marktwertanalyse schnell und unverbind lich online berechnen lassen.
                            </p>

                            <div className="flex py-5 justify-between ">
                                  <div className="flex flex-col  ">
                                      <p  className="text-[#C0C0C0]">Seitenanzah</p>
                                      <p className="flex">
                                        <img src="/document.svg" alt="document-icon" />
                                        <span className="pl-2 text-[#034154] font-semibold">52 Seiten</span>
                                      </p>
                                  </div>
                              <div className="flex flex-col ">
                                  <p  className="text-[#C0C0C0]">Letztes update</p>
                                  <p className="flex">
                                  <ImStopwatch className="mt-1" />
                                    <span className="pl-1 text-[#034154] font-semibold">19.09.2024</span>
                                  </p>
                              </div>
                              <div className="flex flex-col ">
                                  <p  className="text-[#C0C0C0]">Dateformat</p>
                                  <p className="flex">
                                  <FaRegFilePdf className="mt-1" />
                                    <span className="pl-1 text-[#034154] font-semibold">PDF</span>
                                  </p>
                              </div>
                              <div >
                                <button 
                                onClick={downloadPdf}
                                className=" w-[192.74px] h-[51.58px] text-white rounded-[10px] bg-[#459E97] hover:bg-[#034154]">Download anfordern
                                </button>
                              </div>
                              <div className="w-[50.56px] h-[51.58px] p-4 rounded-[10px] bg-[#EFFBFFF0] flex items-center justify-center hover:bg-transparent">
                                            <svg
                                              width="19"
                                              height="16"
                                              viewBox="0 0 19 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="fill-current text-[#034154] hover:text-[#ff0000]"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.98957 1.84422C2.60666 2.4758 1.59341 3.98001 1.59341 5.77264C1.59341 7.60317 2.34332 9.01475 3.41763 10.2242C4.30341 11.2211 5.37666 12.0484 6.42148 12.8527C6.67005 13.0442 6.91761 13.2358 7.15986 13.4263C7.59801 13.7727 7.98982 14.0747 8.36688 14.2958C8.74394 14.5158 9.04725 14.6158 9.30634 14.6158C9.56439 14.6158 9.86772 14.5158 10.2448 14.2958C10.6229 14.0747 11.0136 13.7727 11.4518 13.4263C11.694 13.2348 11.9416 13.0442 12.1902 12.8537C13.2361 12.0474 14.3082 11.2211 15.194 10.2242C16.2694 9.01475 17.0193 7.60317 17.0193 5.77264C17.0193 3.98001 16.0061 2.4758 14.6221 1.84422C13.2781 1.23054 11.4718 1.39264 9.75608 3.1758C9.69815 3.2358 9.62758 3.28423 9.55069 3.31686C9.47275 3.34949 9.38955 3.36633 9.30634 3.36633C9.22208 3.36633 9.13891 3.34949 9.06097 3.31686C8.98408 3.28423 8.91456 3.2358 8.85558 3.1758C7.13983 1.39264 5.33352 1.23054 3.98957 1.84422ZM9.30634 1.87476C7.37785 0.149494 5.21975 -0.0915678 3.46925 0.70738C1.62291 1.55264 0.342163 3.51264 0.342163 5.77264C0.342163 7.99369 1.26795 9.68844 2.48234 11.0558C3.45555 12.1495 4.64467 13.0653 5.69686 13.8737C5.93489 14.0568 6.16557 14.2358 6.38465 14.4084C6.81332 14.7453 7.2715 15.1042 7.73599 15.3758C8.20047 15.6463 8.73022 15.8674 9.30634 15.8674C9.88142 15.8674 10.4112 15.6463 10.8757 15.3758C11.3412 15.1042 11.7994 14.7453 12.227 14.4084C12.4556 14.2295 12.6852 14.0505 12.9158 13.8737C13.9659 13.0653 15.1572 12.1484 16.1293 11.0558C17.3437 9.68844 18.2695 7.99369 18.2695 5.77264C18.2695 3.51264 16.9898 1.55265 15.1424 0.70844C13.393 -0.0915603 11.2338 0.150547 9.30634 1.87476Z"
                                              />
                                            </svg>
                                </div>
                            
                              
                            </div>
                            </div>
                        </div>
                      </div>
                    
          
       </div>


    </div>
  )
}

export default Content