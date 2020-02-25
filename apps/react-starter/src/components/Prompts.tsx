import React from 'react'
import { RouteProps } from 'react-router-dom';
type Props = {
    state?: any
    dispatch?: any
}

const Prompts: React.FC<Props & RouteProps> = ({state, dispatch}: Props) => {
    return (
        <>
        <h1>Prompts</h1>
        </>
    )
}

export default Prompts;