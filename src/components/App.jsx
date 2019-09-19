import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import KegController from './KegController';
import NewKegForm from './NewKegForm'
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList
            kegList={this.state.masterKegList} />} />
          <Route path='/updateKegs' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} /> } />
          <Route path='/admin' render={(props)=><KegController
            kegList={this.state.masterKegList}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg ={this.state.selectedKeg}
            currentRouterPath={props.location.pathname}/>} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
