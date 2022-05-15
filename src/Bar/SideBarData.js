import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'My profile',
    path: '/myprofile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'My orders',
    path: '/myorders',
    icon: <BsIcons.BsBoxSeam />,
    cName: 'nav-text'
  },
  {
    title: 'Return info',
    path: '/returninfo',
    icon: <AiIcons.AiOutlineQuestionCircle />,
    cName: 'nav-text'
  }
];
