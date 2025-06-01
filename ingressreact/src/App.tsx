
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Container from './layouts/container';
import { MAIN_PATH, LOGIN_PATH } from './constant';
import Main from './views/Main';
import Login from './views/Login';

function App() {

  return (
    <Routes>
      <Route element={<Container></Container>}>
      <Route path={MAIN_PATH()} element={<Main></Main>}></Route>
      <Route path={LOGIN_PATH()} element={<Login></Login>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
