import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import ProdutosFavoritos from './pages/ProdutosFavoritos';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favoritos" exact component={ProdutosFavoritos} />
    </Switch>
  );
}