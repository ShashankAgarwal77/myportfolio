import React from 'react';

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink className="nav_link-btn" to='/post' onClick={toggle}>
            Case-Studies
          </SidebarLink>

          <SidebarLink className="nav_link-btn" to='/project' onClick={toggle}>
            Projects
          </SidebarLink>

          <SidebarLink className="nav_link-btn" to='/about' onClick={toggle}>
            About Me!
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
