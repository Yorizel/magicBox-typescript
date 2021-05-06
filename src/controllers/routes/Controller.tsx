import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from 'src/context/authContext';
import { WriterRoutes } from './data/writerRoutes';
import { AdminRoutes } from './data/adminRoutes';
import { UserRoutes } from './data/userRoutes';
import { UnAuthRoutes } from './data/unAuthRoutes';

export const useRoutesController = () => {
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  const routes = useCallback(() => {
    if (auth.isLogged) {
      switch (auth.user.role) {
        case 'WRITER': {
          return <WriterRoutes />;
        }
        case 'ADMIN': {
          return <AdminRoutes />;
        }
        default: {
          return <UserRoutes />;
        }
      }
    }
    return <UnAuthRoutes />;
  }, [auth.isLogged]);

  return { location, routes };
};
