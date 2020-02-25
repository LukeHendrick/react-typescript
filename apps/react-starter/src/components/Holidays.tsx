import React from 'react'
import { RouteProps } from 'react-router-dom';
type Props = {
    state?: any
    dispatch?: any
}

const Holidays: React.FC<Props & RouteProps> = ({state, dispatch}: Props) => {
    return (
        <>
        <h1>Holidays</h1>
        </>
    )
}

export default Holidays;