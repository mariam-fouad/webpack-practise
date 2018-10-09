import React,{Component} from 'react';
import {Link,Route } from 'react-router-dom';

import User from './containers/User';
import asyncComponent from './hoc/asyncComponent';

const asycPizza = asyncComponent(()=>{
    return import('./containers/Pizza');
})
class App extends Component{
    render() {
        return(
            <div>
                <div>
                    <Link to='/' exact >Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route to='/' component={User}/>
                    <Route to='/pizza' component={asycPizza}/>
                </div>
            </div>
        );
    }
}

export default App;