import React from 'react'

import Beneficiarios from '../components/Beneficiario'
import axios from 'axios'


class BeneficiarioList extends React.Component {
    state = {
        beneficiarios: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    beneficiarios: res.data
                });
                console.log(res.data);
            })
    }

    render()
    {
        return (
            <Beneficiarios data={this}/>
        )
    }
}

export default BeneficiarioList;