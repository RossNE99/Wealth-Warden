import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react'


function Navbar() {
  return (
    <Sidebar>
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
        <MenuItem component={<Link to="/Home" />}> Home</MenuItem>
        <MenuItem component={<Link to="/Budgeting" />}> Budgeting</MenuItem>
        <MenuItem component={<Link to="/Statement" />}> Statement</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Navbar;
