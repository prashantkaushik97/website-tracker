import { useEffect, useState } from 'react';
import './App.css';
import DetailBox from './DetailBox';
import Header from './Header';
import axios from "axios";
import moment from "moment"
function App() {
  const [url, seturl] = useState("")

  const [flag, setflag] = useState(true)

  const [responseArray, setresponseArray] = useState([])

  const handleSubmit = async (e) => {


    e.preventDefault()
    console.log('PRE', url);
    await localStorage.setItem(url, moment().format("hh:mm"));
    //  document.getElementsByClassName('input').defaultValue = '';

    setflag(!flag)

  }
  const checkStatus = () => {
    setresponseArray([])


    Object.keys(localStorage).forEach(element => {
      let res = {}
      if ('http' != element.substring(0, 4)) {

        element = 'https://' + element
      }
      const body = { url: element };
      console.log(element)
      axios.post('http://localhost:8000/check', body)
        .then(response => {
          console.log(response.data)
          res.url = element
          res.status = response.data.status
          res.title = response.data.title
          res.time = moment().format()
          setresponseArray(responseArray => [...responseArray, res])
        }
        )
    });
  }
  useEffect(() => {
    checkStatus()
  }, [flag])
  useEffect(() => {

    const interval = setInterval(() => {
      checkStatus(JSON.parse(localStorage.getItem("data")));
    }, 900000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Header count={localStorage.length} />
      <hr />
      <div className='app_search'>
        <form onSubmit={handleSubmit}>
          <input className='app_searchInput' type='text' value={url} onChange={e => { seturl(e.target.value) }} placeholder='Enter a url' />

          <input type='submit' value='Add Website' className='app_searchButton'  ></input>
        </form>
      </div>
      <div className='app_list'>
        <p>WEBSITES</p>
        {responseArray.map((website, index) => (
          <div key={index}>
            <DetailBox url={website.url} status={website.status} title={website.title} time={website.time} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
