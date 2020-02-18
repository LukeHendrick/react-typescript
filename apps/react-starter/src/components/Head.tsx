import React from 'react'
import {Header, Box, Nav, Anchor } from 'grommet';
import { Link } from 'react-router-dom';
import { NavItem } from '../state/types';
const Head: React.FC = () => {
    const navItems: NavItem[] = [
        {
          href: "/",
          text: "Home"
        },
        {
          href: "/admin",
          text: "Admin"
        },
        {
          href: '/signOut',
          text: "Sign Out"
        }
      ];
    return (
        <Header gridArea="header" background="dark-1">
            <Box
              pad={{ left: "small" }}
              direction="row"
              align="center"
              gap="small"
            >
            </Box>
            <Nav direction="row" pad={{ right: "small" }}>
              {navItems.map((navItem: NavItem, i: number) => (
                <Link key={`Link${i}`} to={navItem.href}>
                  <Anchor as="span" key={`Anc${i}`}>{navItem.text}</Anchor>
                </Link>
              ))}
            </Nav>
          </Header>
    )
}

export default Head;