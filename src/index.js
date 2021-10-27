import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import uuid from 'uuid'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from './Components/add/add_contact';
import Header from './Components/header/header';
import EditContact from './Components/editcontact/editcontact'
import NotFound from './Components/404/404'




class App extends React.Component {
  state = {
    List: [
      {
        id: uuid(),
        name: "Britney Anders",
        address: "Podolsk, Best street",
        avatar: 50,
        phone: "(000)888-77-44",
        gender: "women",
        email: "anders@gmail.com",
        star: true
      },
      {
        id: uuid(),
        name: "Will Smith",
        address: "Washington, Zamarstunivska 12",
        avatar: 12,
        phone: "(000)88444-33-44",
        gender: "men",
        email: "will@smitj.com",
        star: false
      },
      {
        id: uuid(),
        name: "Will Street",
        address: "Berlin, Beribasivska 121",
        avatar: 67,
        phone: "(0833)78499-77-12",
        gender: "men",
        email: "street@gmail.com",
        star: false
      }
    ],
    currenContact:" "
  };

  onStarChange = id => {
    // console.log("onStarChange", id);
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);
      // console.log("Index = ", index);
      const tmpList = this.state.List.slice();
      tmpList[index].star = !tmpList[index].star;
      return {
        star: !this.tmpList
      };
    });
  };

onaddcontact=(name, adress, telnum, email, avatar)=>{
  let newContact={
    id: uuid(),
    name: name,
    address: address,
    avatar: avatar,
    phone: telnum,
    gender: "woman",
    email: email,
    star: false
  }

const newList=[...this.state.List, newContact];
this.setState(state=>{
  return{
  List: newList
  }
})
};

onDeleteContact = id => {
  const index = this.state.List.findIndex(elem => elem.id === id);

  const partOne = this.state.List.slice(0, index);
  const partTwo = this.state.List.slice(index + 1);
  const newList = [...partOne, ...partTwo];
  //console.log("NewList => ", newList);
  this.setState(state => {
    return {
      List: newList
    };
  });
};

onEditContact=id=>{
  const index=this.state.List.findIndex(elem=>elem.id===id);
  const currenContact=this.state.List[index]
  this.setState({
    currenContact:currenContact
  })
}

onEditCurrentContact=(id, name, adress, telnum, email, avatar)=>{
  console.log(adress, telnum)
  const index=this.state.List.findIndex(elem=>elem.id===id);
  let EditContact={
    id: id,
    name: name,
    address: adress,
    avatar: avatar,
    phone: telnum,
    gender: "woman",
    email: email,
    star: false
}
const partOne = this.state.List.slice(0, index);
const partTwo = this.state.List.slice(index + 1);
const newList = [...partOne, EditContact, ...partTwo];
this.setState({
  List:newList
})
}


  render() {
    return (
      <div className="container">
        <div id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          >

          
            <Router>
            <Header />
              <Switch>
                <Route
                path='/'
                exact
                render={()=>(
                  <ContactList
              List={this.state.List}
              onStarChange={this.onStarChange}
              OnDeleteContact={this.onDeleteContact}
              onEditContact={this.onEditContact}
              />
                )}
                />
                <Route
                path='/contact'
                exact
                render={()=> <AddContact onaddcontact={this.onaddcontact} />}
                 />
                 <Route path='/edit' exact render={()=> <EditContact currenContact={this.state.currenContact}
                 onEditCurrentContact={this.onEditCurrentContact}
                 />} />

                 <Route component ={NotFound} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
