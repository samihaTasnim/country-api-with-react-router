
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from './Components/Countries';
import IndivisualCountry from './Components/IndivisualCountry';

function App() {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <Router>
      <h2>Hello</h2>
      <Switch>
        <Route exact path="/">
          {countries.map(x => <Countries country={x}></Countries>)}
        </Route>
        <Route path="/country/:countryName">
          <IndivisualCountry></IndivisualCountry>
        </Route>
        <Route path="*">
          <h2>Page not found! 404 error</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
