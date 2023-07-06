import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import Button from './components/Button';
import Input from './components/Input';
import User from './components/User';
import Provider from './context/context';
import Box from './components/Box';
import Private from './components/Private';
import Lists from './components/Lists';
function App() {

  const name = {
    fname: 'Sonam',
    lname: 'Sinha'
  }

  const names = [
    {
      fname: 'Nihal',
      lname: 'Khan',
    },
    {
      fname: 'Sourabh',
      lname: 'Pathak',
    },
    {
      fname: 'Suraj',
      lname: 'Mishra',
    }
  ]
  return (
    <div className="App">
      <Greet name='Sonam' />
      <Person name={name} names={names} status='Failed' />
      {/*  Failed , Loading */}
      <Button handleClick={() => { alert('Button Clicked') }}
        handleEventClick={(event) => alert('event clicked')}
        style={{ padding: 10, borderRadius: 4, border: 2, }} />
      <Input value='hello' handleChange={event => console.log(event)} />
      <User />
      <Provider>
        <Box />
      </Provider>
      <Private isLoggedIn={false} Component={User} />
      <Lists items={[1, 2, 3]} />
    </div>
  );
}

export default App;
