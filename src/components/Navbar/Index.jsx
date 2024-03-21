import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from 'flowbite-react';
// import Date from '../Date';
import Logo from '../../assets/Logo.jpg';
import { useMyContext  } from "../Contexts/MyContext";
import ResetBtn from '../ResetBtn';



function Navbar({ children }) {
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(window.matchMedia('(max-width: 764px)').matches);
  const {MonthlyWage, MonthlyWageRemaining}= useMyContext();

  const height = !broken ? `100vh` : "auto"

  return (
    <>
      {broken && <Button gradientDuoTone="purpleToBlue" className=" text-white font-bold m-3 p-2 rounded" onClick={() => setToggled(!toggled)}><GiHamburgerMenu /></Button>}
      <div className='flex' style={{ height, minHeight: '400px' }}>
        <Sidebar
          toggled={toggled}
          customBreakPoint="764px"
          onBreakPoint={setBroken}
          onBackdropClick={() => setToggled(false)}
          transitionDuration={1000}
        >
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <h2 className='text-3xl font-bold m-3 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>Wealth-Warden</h2>
            <div className="navbar-logo">
              <img src={Logo} alt="Logo" style={{ width: '100', height: 'auto' }} />
            </div>
            <MenuItem component={<Link to="/Home" />} icon={<FaHome />}> Home</MenuItem>
            <MenuItem component={<Link to="/Budgeting" />} icon={<AiOutlineAreaChart />}> Budgeting</MenuItem>
            <MenuItem component={<Link to="/Statement" />} icon={<RiBillFill />}> Statement</MenuItem>
          </Menu>
          {/* <Date /> */}
          <h2 className="w-full md:w-full mt-2 text-black-600  bg-gray-200 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500">
            Remaining allowance: <strong>£{MonthlyWageRemaining}</strong>
          </h2>
          <div className='flex justify-center items-center'>
            <ResetBtn />
          </div>
        </Sidebar>
        {children}
      </div>
    </>
  )
}

export default Navbar;