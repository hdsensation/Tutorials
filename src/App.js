// import logo from './logo.svg';
// import { useState } from 'react';
// import { useRef } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Filter from './componenets/Filter';
// import Login from './componenets/Login';
// import Protected from './componenets/Protected';
import Mock from './componenets/Mock';
// import Nestedroute from './componenets/Nestedroute';
// import Context from './componenets/Context';
// import Usenavi from './componenets/Usenavi';
// import Prevvalue from './componenets/Prevvalue';
// import Prevstate from './componenets/Prevstate';
// import Axiosdata from './componenets/Axiosdata';
// import Searchparam from './componenets/Searchparam';
// import Routrrsix from './componenets/Routrrsix';
// import User from './componenets/User';
// import Routrr from './componenets/Routrr';
// import Hoc from './componenets/Hoc';
// import Frwrdref from './componenets/Frwrdref';
// import Refclass from './componenets/Refclass';
// import Reffunc from './componenets/Reffunc';
// import Memo from './componenets/Memo';
// import Pure from './componenets/Pure';
// import Construck from './componenets/Construck';
// import Hook from './componenets/Hook';
// import Map from './componenets/Map';
// import Reuse from './componenets/Reuse';
// import Hide from './componenets/Hide';
// import Form from './componenets/Form';
// import Main from './componenets/Main';





function App() {
  // const [naam, setnaam] = useState(false)
 




  return (
    <div className="App">

      {/* <Filter/> */}
      
      <Mock/>

      {/* protected route */}
      {/* <BrowserRouter>
         <Routes>
           <Route path='/' element={<Protected Component={Form}/>} />
         </Routes>
      </BrowserRouter> */}

      {/* nested route */}
      {/* <BrowserRouter>
        <Link to={'/nested'}>nested</Link>
        <Routes>
          <Route path='/' element={<h1>homeee</h1>}/>
          <Route path='/nested/' element={<Nestedroute/>}>
             <Route path='lalu' element={<h1>Lalu page</h1>}/>
             <Route path='walu' element={<h1>walu page</h1>}/>
             <Route path='balu' element={<h1>balu page</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/*for  useNavigation hook react router */}
      {/* <BrowserRouter>
        <Usenavi/>
        <Routes>
          <Route path='/home' element={<h1>This is home</h1>}/>
          <Route path='/about' element={<h1>this is about</h1>}/>
        </Routes>
      </BrowserRouter> */}

      {/* <Context/> */}
      {/* <Prevvalue/> */}
      {/* <Prevstate/> */}
      {/* <Axiosdata /> */}
      {/* <Searchparam /> */}
      {/* Router six below */}
      {/* <BrowserRouter>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/user/lalu'>Lalu</NavLink>
        <NavLink to='/user/sooe'>sooe</NavLink>
        <Routes>
          <Route path='/user/:name' element={<User />} />
          <Route path='/' element={<Routrrsix />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/*' element={<Navigate  to='/'/>} />
        </Routes>
      </BrowserRouter> */}


      {/* <Routrr/> */}
      {/* <Hoc/> */}
      {/* <Refclass/> */}
      {/* <Reffunc /> */}
      {/* <Memo/> */}
      {/* <Pure/> */}
      {/* <Map /> */}
      {/* <Reuse/> */}
      {/* < Main/> */}
      {/* <Form /> */}
      {/* <input type="text" placeholder='enter name' onChange={(e)=>setnaam(e.target.value)}/> */}
      {/* { naam? <Construck></Construck>: <h1>appjs</h1> }
      <button onClick={()=>setnaam(!naam)}>toggle</button> */}
      {/* <Hook />
      <Map/> */}
      {/* <Reuse/> */}
    </div>
  );
}


export default App;
