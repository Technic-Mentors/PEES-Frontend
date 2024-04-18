// import React, {useState} from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Navbar() {


//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);
//   const closeNavbar = () => setCollapsed(true);

//   const activeLink = (link) => {
//     return location.pathname === link ? 'active' : '';
//   };

//   return (
//     <div>
//       <nav className="navbar px-4 py-1 navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/" onClick={closeNavbar}>
//             {/* <img src={LOGOWhite} alt="logo" /> */}  <h1>GoSolar</h1>
//           </Link>
//           <button
//             className={`navbar-toggler ${collapsed ? '' : 'collapsed'}`}
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={!collapsed}
//             aria-label="Toggle navigation"
//             onClick={toggleNavbar}
//           >
//             <span className="navbar-toggler-icon text-light"></span>
//           </button >
//           <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0" onClick={closeNavbar}>
//               <li className="nav-item">
//                 <Link className={`nav-link active ${activeLink('/')}`} aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/about-company')}`} to="/about-company">
//                   Company
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/industrial-solar')}`} to="/industrial-solar">
//                   Industrial Solar
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/commercial-solar')}`} to="/commercial-solar">
//                   Commercial Solar
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/residential-solar')}`} to="/residential-solar">
//                   Residential Solar
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/agricultural-solar')}`} to="/agricultral-solar">
//                   Agricultural Solar
//                 </Link>
//               </li>
              
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/contact')}`} to="/contact">
//                   Contact
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink('/get-a-quote')}`} to="/get-a-quote">
//                   Get A Quote
//                 </Link>
//               </li>
//             </ul>
//             <div className="d-flex text-light align-items-center">
              
//               <i className="me-2 fab fa-facebook"></i>
//               <i className="me-2 fab fa-twitter"></i>
//               <i className="fab fa-instagram"></i>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../Assets/Images/LOGO.png'

function Navbar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  // const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => setCollapsed(true);

  const activeLink = (link) => {
    return location.pathname === link ? 'active' : '';
  };

  // const toggleServicesDropdown = () => {
  //   setServicesDropdownOpen(!servicesDropdownOpen);
  // };

  return (
    <div>
      <nav className="navbar go-solar-nav px-4 py-2 navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={LOGO} alt="logo" className='img-fluid site-logo' />
          </Link>
          <button
            className={`navbar-toggler ${collapsed ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" onClick={closeNavbar}>
              
              <li className="nav-item">
                <Link className={`nav-link active ${activeLink('/')}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/about-company')}`} to="/our-company">
                  Company
                </Link>
              </li>
            
                  <li className='nav-item'>
                    <Link className={`nav-link ${activeLink('/industrial-solar')}`} to="/industrial-solar">
                      Industrial Solar
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className={`nav-link ${activeLink('/commercial-solar')}`} to="/commercial-solar">
                      Commercial Solar
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className={`nav-link ${activeLink('/residential-solar')}`} to="/residential-solar">
                      Residential Solar
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className={`nav-link ${activeLink('/agricultural-solar')}`} to="/agricultural-solar">
                      Agricultural Solar
                    </Link>
                  </li>
                
            
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/contact')}`} to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${activeLink('/get-a-quote')}`} to="/get-a-quote">
                  Get A Quote
                </Link>
              </li> */}
            </ul>
            <div className="d-flex text-dark align-items-center">
              <i className="me-2 fab fa-facebook"></i>
              <i className="me-2 fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
