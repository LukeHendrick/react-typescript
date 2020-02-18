import React from 'react'
import { RouteProps } from 'react-router-dom';
type Props = {
    state?: any
    dispatch?: any
    history: any
}
const Admin: React.FC<Props & RouteProps> = ({state, dispatch, history}: Props) => {

    return (
        <>
        { state.isAdmin 
        ? 
                <h1>Admin</h1>
        : 
                <>{history.push('/')}</>
        }
        </>
    )
}

export default Admin;