import React, {useState, useEffect} from 'react'
import { AuthUtil } from '../utils/auth'
import { Box, Heading } from 'grommet'

type Props = {
    state?: any
    dispatch?: any
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
          if (state.authState === "unauthenticated") {
            setShow(false)
            const Authorizer = new AuthUtil()
            const isAuth = await Authorizer.isAuthenticated();
            if (isAuth) {
              setShow(true)
              dispatch({type: 'setAuthState', value: 'authenticated'})
              const isAdmin = await Authorizer.isAdmin();
              if (isAdmin) {
                dispatch({type: 'setIsAdmin', value: true})
              }
            } else {
              Authorizer.initAuth()
            }
          } else {
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