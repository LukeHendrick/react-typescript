import React from 'react'
import {Header, Box, Nav, Anchor } from 'grommet';
import { Link } from 'react-router-dom';
import { Route } from '../state/types';
import { routes } from '../state/routes';

const Head: React.FC = () => {
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
              {routes.map((navItem: Route, i: number) => (
                <Link key={`Link${i}`} to={navItem.href}>
                  <Anchor as="span" key={`Anc${i}`}>{navItem.text}</Anchor>
                </Link>
              ))}
            </Nav>
          </Header>
    )
}

export default Head;