import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import data from "./data";
import Home from "./Home";
import EmployeeEdit from './employeeEdit';
import EmployeeList from './employeeList';



function App() {
  let [state, setState] = useState([]);
  useEffect(() => {
      //fetch("/api/employee/all").then( 
        //  res => setState(res.data)
      //)
     setState(data);
  })


  return (
    <BrowserRouter>
            <Route path='/' exact={true} component={EmployeeList}/>
            <Route path='/employees' exact={true} component={EmployeeList}/>
            <Route path='/employees/:id' component={EmployeeEdit}/>
    </BrowserRouter>
  );
}

export default App;
