import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../../context/authContext';
import { WriterOptions } from './data/writerOptions';
import { AdminOptions } from './data/adminOptions';
import { UserOptions } from './data/userOptions';
import { Utils } from '../../useNavbarContentController';
import { UnAuthOptions } from './data/unAuthOptions';

export const useOptionsListStructure = ({
  handleClick,
  logoutHandler
}: Utils) => {
  const { auth } = useContext(AuthContext);

  const options = () => {
    if (auth.isLogged) {
      switch (auth.user.role) {
        case 'WRITER':
          return (
            <WriterOptions
              handleClick={handleClick}
              logoutHandler={logoutHandler}
            />
          );
        case 'ADMIN':
          return (
            <AdminOptions
              handleClick={handleClick}
              logoutHandler={logoutHandler}
            />
          );
        default:
          return (
            <UserOptions
              handleClick={handleClick}
              logoutHandler={logoutHandler}
            />
          );
      }
    }
    return (
      <UnAuthOptions handleClick={handleClick} logoutHandler={logoutHandler} />
    );
  };

  return {
    options
  };
};
