import React from 'react'

import axios from 'axios'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class BeneficiarioDetail extends React.Component {
    state = {
        beneficiario: {}
    }

    componentDidMount() {
        const benefID = this.props.match.params.beneficiarioID;
        axios.get(`http://127.0.0.1:8000/api/${benefID}`)
            .then(res => {
                this.setState({
                    beneficiario: res.data
                });
            })
    }

    render()
    {
        return (
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.state.beneficiario.nombre}
                    </Typography>
                    <Typography color="textSecondary">
                        edad: {this.state.beneficiario.edad}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default BeneficiarioDetail;