import Loader from './components/UI/Loader';
import Products from './components/Products';
import Twitter from './components/Twitter';
import Badge from './components/Badge';
import Posts from './components/Posts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Products />

      <br/>
      <hr/>
      <br/>

      <Twitter username='Antonette'>
        {(user, isUserLoading) => isUserLoading && !Object.values(user).length
          ? <Loader />
          : <Badge info={user} />}
      </Twitter>

      <br /><br /><br />

      <Posts />
    </div>
  );
}

export default App;
