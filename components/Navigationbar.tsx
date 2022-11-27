import React, { useState } from 'react';
import { Navbar, Button, Link, Text, useTheme, Input } from "@nextui-org/react";
import { CgSearch, CgClose } from 'react-icons/cg';
import { RiShoppingCartFill } from 'react-icons/ri';
import Divider from '@mui/material/Divider';

const NavigationBar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  }

  const collapse = () => {
    setExpanded(false);
  }

  const { theme } = useTheme();

  return (
    <div>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text color="primary" size='$xl' hideIn="xs">
            DE
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          {isExpanded ?
            <div className="flex flex-col mt-[185px] bg-gray-200 h-60 rounded-[30px] w-[680px] hover:shadow-lg">
              <div className="w-[680px] mt-4 flex place-items-start" >
                <span className="ml-4 text-lg"><CgSearch /></span>
                <input onFocus={expand} onBlur={collapse} className="w-[600px] ml-4  border-none font-thin  bg-transparent focus:outline-none" placeholder='Search Deals' />
                <span className="mr-3 text-lg"><CgClose /></span>
              </div>
              <span className="mt-3" ><Divider variant='middle' /></span>
            </div> :
            <div className="flex items-center bg-gray-200 h-14 rounded-full w-[680px] hover:shadow-lg">
              <div className="flex items-center justify-center" >
                <span className="ml-4 text-lg"><CgSearch /></span>
                <input onFocus={expand} className="w-[600px] ml-4 border-none font-thin  bg-transparent focus:outline-none" placeholder='Search Deals' />
              </div>
            </div>}
        </Navbar.Content>
        <Navbar.Content>
          <Button auto color='primary' rounded bordered as={Link} href="#">
            Login
          </Button>
          <Button auto color='primary' rounded bordered as={Link} href="#">
            Sign Up
          </Button>
          <Navbar.Item>
            <div className='cursor-pointer flex relative items-center'>
              <span className='absolute rounded-full bottom-[19px] left-[19px] flex justify-center items-center w-6 h-6 bg-[#329D9C]'>0</span>
              <RiShoppingCartFill size={34} />
            </div>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default NavigationBar