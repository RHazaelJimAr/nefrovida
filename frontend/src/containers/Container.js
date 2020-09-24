import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const SimpleContainer = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" >
            Home
          </Link>
          <Link color="inherit" href="/">
            List
          </Link>
        </Breadcrumbs>
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;