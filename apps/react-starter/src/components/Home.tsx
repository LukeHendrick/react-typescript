import React from 'react'
import { RouteProps, Link } from 'react-router-dom';
import { Button, Box } from 'grommet';
import { routes } from '../state/routes';
type Props = {
    state?: any
    dispatch?: any
}

const Home: React.FC<Props & RouteProps> = ({state, dispatch}: Props) => {
    return (
        <>
        <h1>Home</h1>
        <Box direction="row" gap="medium">        
            {routes
            .filter(route => route.text !== "Sign Out")
            .map((route, i) => (    
                <Link key={`Link${i}`} to={route.href}>
                    <Button plain={false} gap="medium">{route.text}</Button>
                </Link>
            ))}
        </Box>
        </>
    )
}

export default Home;