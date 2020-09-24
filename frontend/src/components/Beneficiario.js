import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Beneficiarios = (props) => {
    const classes = useStyles();
    
    return (
    <div className={classes.root}>
      
        <List component="nav" aria-label="main mailbox folders">
          {props.data.state.beneficiarios.map(item => {
            return (
              <ListItemLink key={item.id} href={`/${item.id}`}>
                <ListItemText  primary={item.nombre}/>
              </ListItemLink>
            );
          })}
        </List>
    </div>
  );
}

export default Beneficiarios;
  