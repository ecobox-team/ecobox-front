import React,{ Component, Fragment } from 'react';
import * as style from './style/Global'
import Layout from './containers/Layout';

class App extends Component {
  render(){
    return(
    <Fragment> 
      <style.GlobalStyle/>
      <Layout />
    </Fragment>  
    );
  }
}

export default App;
