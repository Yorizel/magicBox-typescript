import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from 'src/pages/landing';
import PostPage from '../../../pages/post';

export const AdminRoutes = () => {
  const data = [
    { id: 1, path: '/', children: <LandingPage /> },
    { id: 2, path: '/post', children: <PostPage /> }
    // { id: 3, path: '/profile', children: <ProfilePage /> },
    // { id: 4, path: '/admin-panel', children: <DashboardPage /> }
  ];

  return (
    <>
      {data.map((item) => (
        <Route key={item.id} exact path={item.path}>
          {item.children}
        </Route>
      ))}
    </>
  );
};
