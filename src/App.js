import login from './login';
import Users from "./Users";

const App=() => {
  const baseurl=process.env.REACT_APP_BASE_URL;
  console.log({baseurl})
return(
  <div>
    {/* <login/> */}
    <Users/>
  </div>
)
}
export default App;








