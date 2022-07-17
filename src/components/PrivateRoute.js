import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute ({ element: Element, ...rest }) {
    return (
        <Route {...rest}>
            render = {props => 
                localStorage.getItem('username')?(
                    <Element {...props} />
                ) : ( 
                    <Route path='/login' element={<Navigate replace to="/login"/>} />
                )
            }
        </Route>
    )
}