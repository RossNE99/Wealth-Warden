import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar({children}) {
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(window.matchMedia('(max-width: 764px)').matches);

  const height = !broken ? `100vh` : "auto"

  return (
    <>
     {broken && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded" onClick={() => setToggled(!toggled)}><GiHamburgerMenu /></button>}
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
        <MenuItem component={<Link to="/Home" />} icon={<FaHome />}> Home</MenuItem>
        <MenuItem component={<Link to="/Budgeting" />} icon={<AiOutlineAreaChart/>}> Budgeting</MenuItem>
        <MenuItem component={<Link to="/Statement" />} icon={<RiBillFill />}> Statement</MenuItem>
      </Menu>
    </Sidebar>
    {children}
    </div>
    </>
  )
}

export default Navbar;
