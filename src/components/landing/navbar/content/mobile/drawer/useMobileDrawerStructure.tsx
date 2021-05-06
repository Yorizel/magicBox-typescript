import React, { useCallback, useContext } from 'react';
import { AuthContext } from '../../../../../../context/authContext';
import { useNavbarContentController } from '../../desktop/useNavbarContentController';
import { WriterData } from './data/writerData';
import { AdminData } from './data/adminData';
import { UserData } from './data/userData';
import { UnAuthData } from './data/unAuthData';

export const useMobileDrawerStructure = () => {
  const { auth } = useContext(AuthContext);
  const { logoutHandler, handleClick, Data } = useNavbarContentController();
  const listOptions = useCallback(() => {
    if (auth.isLogged) {
      switch (auth.user.role) {
        case 'WRITER':
          return (
            <WriterData
              handleClick={handleClick}
              logoutHandler={logoutHandler}
            />
          );
        case 'ADMIN':
          return (
            <AdminData
              handleClick={handleClick}
              logoutHandler={logoutHandler}
            />
          );
        default:
          return (
            <UserData handleClick={handleClick} logoutHandler={logoutHandler} />
          );
      }
    }
    return <UnAuthData />;
  }, [auth.isLogged]);

  return { listOptions, Data };
};
