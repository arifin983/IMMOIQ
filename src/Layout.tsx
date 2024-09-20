import Content from "./components/Content";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="parent w-[100%] h-[1100px] mt-5">
          <div className="child flex m-auto mt-10  w-[1381px] h-[974px]">
                <div className="sidebar  w-[400px] h-[868px] border mt-10 rounded-l-[10px]">
                   <Sidebar />
                </div>
              <div className="content flex flex-col w-[100%] h-[974px] border rounded-[10px]">
                <Content />
                <div className="flex justify-center mt-10 items-center">
                      <p className="text-[10px] px-3 font-[Inter] font-[400px] text-[#2B606F66] ">
                        Bereitgestellt von
                      </p>
                      <img src="/nets.svg" alt="nets-icon" />
                      <p className="tex-[#2B606F] px-3 text-[17px] font-[Avenir] font-[900px]" >IMMOIQ</p>
                </div>
              </div>
          </div>
      </div>






    </>
  );
};

export default Layout;
