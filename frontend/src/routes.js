import React from 'react'
import { Route } from 'react-router-dom'

import BeneficiarioList from './containers/BeneficiarioListView'
import BeneficiarioDetail from './containers/BeneficiarioDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={BeneficiarioList}/>
        <Route exact path='/:beneficiarioID' component={BeneficiarioDetail}/>
    </div>
);

export default BaseRouter;