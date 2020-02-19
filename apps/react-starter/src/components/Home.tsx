import React from 'react'
import { RouteProps } from 'react-router-dom';
type Props = {
    state?: any
    dispatch?: any
}

const Home: React.FC<Props & RouteProps> = ({state, dispatch}: Props) => {
    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home;