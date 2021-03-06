import React, {useState, useEffect} from 'react'
import { AuthUtil } from '../utils/auth'
import { Box, Heading } from 'grommet'
import { actionType, stateTypes } from '../state/types'

type Props = {
    state: stateTypes
    dispatch: React.Dispatch<actionType>
    children?: any
}

const CheckingAuth = () => {
    return (
      <Box>
        <Heading margin="medium" textAlign="center" alignSelf="center">
          Checking Auth Status...
        </Heading>
      </Box>
    )
  }

const AuthWrapper: React.FC<Props> = ({state, dispatch, children}: Props) => {
    const [show, setShow] = useState()
    useEffect(() => {
        const asyncWrap = async () => {
          const Authorizer = new AuthUtil()
          if (state.authState === "unauthenticated") {
            setShow(false)
            
            const isAuth = await Authorizer.isAuthenticated();
            if (isAuth) {
              setShow(true)
              dispatch({component: "auth", type: 'setAuthState', value: 'authenticated'})
              const isAdmin = await Authorizer.isAdmin();
              if (isAdmin) {
                dispatch({component: "auth", type: 'setIsAdmin', value: true})
              }
            } else {
              Authorizer.initAuth()
            }
          } else {
            Authorizer.getCreds()
            setShow(true);
          }
        }
        asyncWrap();
      }, [dispatch, state.authState])
    return (
        <>
            {show && children}
            {!show && <CheckingAuth />}
        </>
    )
}

export default AuthWrapper