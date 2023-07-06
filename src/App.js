import React, { createContext } from 'react';
import './App.css';


import Context from './Component/UseContext';
import AddEffect from './Component/UseEffect';
import Add from "./Component/UseState";
import Redux from "./Component/Redux";
//import Home from "./Component/Pages/Home";
import Users from './Component/Pages/Users';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
// import {mystore} from "./Component/Store/Index";
import myreducer from './Component/Store/Index';
import Userreducer from "./Component/Reducer/UserReducer";
import { Provider } from 'react-redux';
//import Parent from "./Component/Props/Parent";
import Child from "./Component/Props/Child";
import FunctionApi from './Component/API/FunctionApi';
import ClassApi from './Component/API/ClassApi';
import Event from "./Component/ClassComponent/EventListenber";
import List from "./Component/Function Component/EventListener";
import Ref from './Component/UseRef';
import Load from "./Component/LoadDataOnlyOnce";
import ApiCall from "./Component/API/Axios";
import Main from "./Component/Pagination/Main";
//import Callback from "./Component/UseCallback";
import Arr from './Component/ArrayMapping';
import Memories from './Component/UseMemo';
import Custom from "./Component/Custom Hook/index";
import Filter from './Component/Array/Filter';
import Await from './Component/API/Async';
import Example from './Component/Interview/Example';
import Login from './Component/Pages/Login';
import Dashboard from "./Component/Pages/Dashboard";
import Callback from './Component/UseCallback';
import Lazy from './Component/Lazy/Lazy Component';
import Movie from './Component/MovieListApi/Movie';
import Video from './Component/Video Component/Video';
import Power from './Component/Power BI Embed/PowerBI';
//import Index from './Component/Excel Export';
import Multiple from './Component/Multiple Select/Multiple';
import Parent from './Component/UseCallback/Parent';
import CustomApi from './Component/API/CustomAPI';
import Index from './Redux/index';
import Task from './Task/Table';
//import Index from './Digital Triump/Index';
import Home from "./Digital Triump/Home";

// const store =createStore(myreducer);


export const UserContext = createContext();

function App() {

  const mystore = createStore(Userreducer);
  const store = createStore(myreducer);
  return (

    <div className="App">
      {/* <Provider store={store} >
        <UserContext.Provider value={'vijay'}>
        
        </UserContext.Provider>
      </Provider> */}
      <BrowserRouter>
       <Switch>
        {/* <Route path="/login" component={Login}/>
        <Route path="/home" component={Dashboard}/>
        <Route path="/callback" component={Callback}/> */}
        <Route path="/Home" component={Home}/>
        <Route path="/main" component={Index}/>
       </Switch>
      </BrowserRouter>

      {/* <FunctionApi/> */}
      {/* <CustomApi/> */}
      {/* <Lazy/> */}
      {/* <Index/> */}
      {/* <Multiple/> */}
      {/* <Parent/> */}
      {/* <Movie/> */}
      {/* <Video/> */}
      {/* <Power/> */}
      {/* <Parent/> */}
      <Index/>
      {/* <Task/> */}
      {/* <Main/> */}

      {/* <Index/> */}
    </div>

  );
}

export default App;
