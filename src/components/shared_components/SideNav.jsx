import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo2 from '../../src/logo2.png';
import dashboardlogo from '../../src/dashboard.png';
import leadlogo from '../../src/leads.png';
import ticketlogo from '../../src/ticket.png';
import { useSelector, useDispatch } from 'react-redux';
import { expand, contract } from '../../store/store';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSales, setIsOpenSales] = useState(false);
  const [toggleNavTool, setToggleNavTool] = useState('Close Menu')
  const [crmTitle, setCrmTitle] = useState('Customer Relationship Management');

  // For Nav bar width using Redux
  const navBarwidth = useSelector((state) => state.navSelection.value)
  const dispatch = useDispatch();

  const handleToggleForSales = () => {
    setIsOpenSales(!isOpenSales);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Navbar width actions
  const handleToggleMenu = () => {
    if (navBarwidth === 'lg:w-20') {
      setCrmTitle('Customer Relationship Management');
      setToggleNavTool('Close Menu')
      dispatch(expand())
    }
    else if (navBarwidth === 'lg:w-52') {
      setCrmTitle('');
      setToggleNavTool('Open Menu')
      dispatch(contract())
    }
  }

  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "flex justify-start items-center border-r-8 py-2 border-white px-4 mx-4  w-40 rounded-md text-white bg-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white"
      : "flex justify-start items-center py-2 px-4 mx-4  w-40 rounded-md text-white  cursor-pointer hover:bg-blue-600 hover:text-white";
  };
  return (
    <div className='bg-[#1E3A8B]'>
      <div className='relative'>
        <div className=' tooltip tooltip-bottom tooltip-info absolute right-[-15px] top-2 hidden lg:block z-[999] bg-blue-600 border-gray-200 border-2 rounded-full px-2 py-1 transition-transform duration-400 hover:bg-blue-400 cursor-pointer hover:scale-110'
          onClick={handleToggleMenu} data-tip={toggleNavTool} >
          <i className={`fa-solid fa-arrow-right-from-bracket text-white text-sm  transition-transform duration-500 ${navBarwidth === "lg:w-20" ? 'rotate-180' : ''}`} ></i>
        </div>
      </div>
      <div className={`lg:drawer-open min-h-screen ${navBarwidth} transition-transform duration-300 bg-gradient-to-b from-purple-900 via-blue-600 to-blue-900`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle relative z-50" />
        <label htmlFor="my-drawer-2" className="lg:hidden"><i className="fa-solid fa-bars text-2xl absolute left-6 top-8 mx-2 text-white"></i></label>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu w-52 lg:w-80 min-h-full text-base-content lg:bg-transparent bg-gradient-to-b from-purple-900 via-blue-600 to-blue-900">
            <div className='w-48 mt-5 text-center'>
              <h1 className={`p-4 lg:px-0 lg:py-3 lg:m-0 text-center text-sm text-white lg:text-sm lg:text-center font-bold ${navBarwidth === "lg:w-20"  ? 'hidden mt-16' : 'block'}`}>{crmTitle}</h1>
            </div>
            <div className='flex justify-start'>
              <img src={logo2} className={`ml-16 lg:ml-12 size-20 lg:size-20 mb-6 ${navBarwidth === "lg:w-20" ? 'hidden' : ''}`} alt="logo" />
            </div>
            <div className='flex items-center realtive hover:bg-blue-600 rounded-md mt-5'>
              <div className="dropdown">
                <div tabIndex={0} role="button"
                  className=" flex justify-start items-center px-4 py-2 ml-14 w-32 rounded-md text-white bg-transparent cursor-pointer hover:bg-blue-600"
                  onClick={handleToggle} >
                  Dashboards
                  <i className="fa-solid fa-layer-group absolute left-8 text-white text-xl"></i>
                  <i className={`ml-7 text-lg fa-solid fa-caret-right transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
                </div>
                {isOpen && (
                  <ul tabIndex={0} className="dropdown-content menu bg-transparent rounded-lg z-[1] md:w-60 px-2">
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/dashboard">
                        <img src={dashboardlogo} alt="D" className="ml-2 mr-4" />
                        Main Dashboard
                      </Link>
                    </li>
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/leadsDashboard">
                        <i className="fa-solid fa-chalkboard-user text-white text-lg ml-1 mr-4"></i>
                        Leads Dashboard
                      </Link>
                    </li>
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/customerDashboard">
                        <i className="fa-solid fa-handshake text-white text-lg ml-1 mr-4"></i>
                        Customer Dashboard
                      </Link>
                    </li>
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/ProjectDashboard">
                        <i className="fa-solid fa-timeline text-white text-lg mr-4 ml-1"></i>
                        Project Dashboard
                      </Link>
                    </li>
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/hrDashboard">
                        <i className="fa-solid fa-user-gear text-white text-lg mr-4 ml-1"></i>
                        HR Dashboard
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <Link className={getLinkClasses("/leads")} to="/leads"><img src={leadlogo} alt="D" className='mr-6' />Leads</Link>
            <Link className={getLinkClasses("/customers")} to="/customers"><i className="fa-solid fa-user-group text-white mr-6"></i>Customers</Link>
            <div className='flex items-center realtive hover:bg-blue-600 rounded-md'>
              <div className="dropdown">
                <div tabIndex={0} role="button"
                  className="flex justify-start items-center py-2 px-4 ml-14 w-32 rounded-md text-white bg-transparent cursor-pointer hover:bg-blue-600"
                  onClick={handleToggleForSales}>
                  Sales
                  <i className="fa-solid fa-dollar-sign absolute left-9 text-white text-xl"></i>
                  <i className={`ml-[70px] text-lg fa-solid fa-caret-right transition-transform duration-300 ${isOpenSales ? 'rotate-90' : ''}`}></i>
                </div>
                {isOpenSales && (
                  <ul tabIndex={0} className="dropdown-content menu bg-transparent rounded-lg z-[1] md:w-60 p-2">
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/invoices">
                        <i className="fa-solid fa-file-invoice-dollar text-white text-lg ml-3 mr-4"></i>
                        Invoices
                      </Link>
                    </li>
                    <li className="z-50 bg-blue-500 text-xs py-1">
                      <Link className="text-white" to="/payments">
                        <i className="fa-solid fa-credit-card text-white text-lg mr-4 ml-2"></i>
                        Payments
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <Link className={getLinkClasses("/projects")} to="/projects"><i className="fa-solid fa-bars-progress text-white text-lg mr-6"></i>Projects</Link>
            <Link className={getLinkClasses("/tickets")} to="/tickets"><img src={ticketlogo} alt="D" className='mr-7 size-4 ' />Ticket</Link>
            <Link className={getLinkClasses("/HRMS")} to="/HRMS"><i className="fa-solid text-lg fa-people-roof text-white mr-8"></i>HRMS</Link>
            <Link className={getLinkClasses("/users")} to="/users"><i className="fa-solid text-lg fa-user-gear text-white mr-7"></i>Users</Link>
            <Link className={getLinkClasses("/faqs")} to="/faqs"><i className="fa-solid text-lg fa-clipboard-question text-white mr-8"></i>User Faqs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
