import React from 'react'
import Form from './Form'
import FormState from './FormState'
import FormRef from './FormRef'
import Card from './Card'
import '../styles/App.css'
import {BrowserRouter as Router , Switch, Route ,Link} from 'react-router-dom';


const App = () => {
  return (
    <Router>
       <div style={{padding:"20px"}}>
        <h1>React Form Handling with Routing </h1>
        <nav>
          <ul style={{listStyle: "none", padding: 0}}>
            <li>
              <Link id="form-link" to="/form">Section 1: Form Layout</Link>
            </li>
            <li>
              <Link id="form-ref-link" to="/form-ref">Section 2: Form with useRef</Link>
            </li>
            <Link id='form-state-link' to="/form-ref">Section 3: Form with useState</Link>
          </ul>
        </nav>
        <switch>
          <Route path="/form" component={Form}/>
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </switch>
       </div>
    </Router>
  )
}

export default App