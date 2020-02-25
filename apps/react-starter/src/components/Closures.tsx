import React from 'react'
import { RouteProps } from 'react-router-dom';
type Props = {
    state?: any
    dispatch?: any
}

const Closures: React.FC<Props & RouteProps> = ({state, dispatch}: Props) => {
    return (
        <>
        <h1>Closures</h1>
        </>
    )
}

export default Closures;