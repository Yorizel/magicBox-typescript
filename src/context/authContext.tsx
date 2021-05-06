import React, { createContext, useCallback, useEffect, useState } from 'react';
import { UserFactory } from 'src/models/factories/UserFactory';
import PropTypes from 'prop-types';
import { UserModel } from 'src/models/UserModel';

const factory = new UserFactory();
interface Auth {
  token: string;
  isLogged: boolean;
  user: UserModel;
}

type setter = React.Dispatch<Auth>;
interface Values {
  auth: Auth;
  setAuth: setter | Function;
}
export const AuthContext = createContext<Values>({
  auth: { token: '', isLogged: false, user: factory.create() },
  setAuth: ({ token, isLogged, user }: Auth) => {
    return { token, isLogged, user };
  }
});
type child = React.ReactNode | any;
function AuthProvider({ children }: child) {
  const [auth, setAuth] = useState({
    token: '',
    isLogged: false,
    user: factory.create()
  });
  const getUserInfo = useCallback(async () => {
    const userToken = await sessionStorage.getItem('token');
    const user: any = await sessionStorage.getItem('user');
    const factorizedUser = factory.create({
      object: JSON.parse(user) || {}
    });
    if (userToken && user)
      return setAuth((prevState) => ({
        ...prevState,
        token: userToken,
        isLogged: true,
        user: factorizedUser
      }));
  }, []);
  const setUserInfo = useCallback(
    async (token = '', user = factory.create()) => {
      await sessionStorage.setItem('token', token);
      await sessionStorage.setItem('user', JSON.stringify(user));
    },
    []
  );
  useEffect(() => {
    getUserInfo().then();
  }, [getUserInfo]);
  useEffect(() => {
    setUserInfo(auth.token, auth.user).then();
  }, [auth, setUserInfo]);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
export default AuthProvider;
