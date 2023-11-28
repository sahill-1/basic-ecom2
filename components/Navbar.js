import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";
import tab from "../images/electronics/tab1-01.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white" id="second-navbar">
        <div className="container">
          {/* <a to="#">Navbar</a> */}
          <NavLink className="navbar-brand" to="/">
            <img
              src="./images/logo.png"
              alt=""
              className="img-fluid"
              style={{ width: "110px" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
          <li class="side-menu-dropdown">
          <a href="# " className="departament"><i className="fa fa-bars" style={{fontSize:"20px"}}></i>&emsp;<b>All Departments</b></a>
          <ul class="project">
            
            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Computers & Accessories</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Cameras, Audio & Video</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Mobiles & Tablets</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Movies, Music & Video Game</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">TV & Audio</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Watches & Eyewear</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>


            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Car, Motorbike & Industrial</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>
           
            
            <li class="drop-item d-flex justify-content-between align-items-center"><a href="">Accessories</a><i className="fa fa-angle-right side2ndmenu-arrow"></i>
            <div className="sidetoside-container py-5">
          <div className="row">
          <div className="col-6">
          <p><b>Computers & Accessories</b></p>
          <p className="sidetoside-list">All Computers & Accessories</p>
          <p className="sidetoside-list">Laptops, Desktops & Monitors</p>
          <p className="sidetoside-list">Printers & Ink</p>
          <p className="sidetoside-list">Networking & Internet Devices</p>
          <p className="sidetoside-list">Computer Accessories</p>
          <p className="sidetoside-list">Software</p>
          <div className="">
          <hr />
          <p className="sidetoside-list">All Electronics</p>
          <h6 style={{
            marginTop:"-10px"
          }}>Discover more products</h6>
          <img  src={logo} height={30} alt="" />
          </div>
          </div>
          <div className="col-6">
          <b>Office & Stationery</b>
          <p className="sidetoside-list">All Office & Stationery</p>
           <img src={tab} className="img-fluid" alt="" />
          </div>
          </div>
            </div></li>
            
            
              
          </ul>
        </li>



          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle2"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li>
                    <NavLink className="dropdown-item" to="/daimaondProduct">
                      Amrican Daimond Jewellery
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink className="dropdown-item" to="/product">
                      product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/silverProduct">
                      92.5 Silver Jewellery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/brassProduct">
                      Brass American Diamond Jewellery
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
