import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({name, id, clicked}) => (
    <Fragment>
    <NavLink to={'/shows/' + id} onClick={clicked}>{name}</NavLink>
    <br></br>
    </Fragment>
);

export default Item;