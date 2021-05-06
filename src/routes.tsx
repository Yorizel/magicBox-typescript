import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch } from 'react-router-dom';
import { useRoutesController } from 'src/controllers/routes/Controller';

export default function Routes() {
  const { routes, location } = useRoutesController();

  return (
    <TransitionGroup>
      <CSSTransition
        in={true}
        timeout={300}
        classNames={'page'}
        key={location.key}
      >
        <Switch>{routes()}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
