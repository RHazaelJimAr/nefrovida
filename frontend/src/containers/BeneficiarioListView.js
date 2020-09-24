import React from 'react'

import Beneficiarios from '../components/Beneficiario'

const listData = [];
for(let i = 0; i < 5; i++)
{
    listData.push({
        nombre: 'Trash'
    });
}

class BeneficiarioList extends React.Component {
    render()
    {
        return (
            <Beneficiarios data={listData}/>
        )
    }
}

export default BeneficiarioList;