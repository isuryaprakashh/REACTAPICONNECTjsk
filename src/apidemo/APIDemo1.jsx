import {useState,useEffect} from 'react'
import axios from 'axios'

export default function APIDemo1() 
{   
    const [data,setData] = useState([]) //JSON Array - array of JSON objects
    const [error,setError] = useState("") //String

    const fetchData = async () =>{
        try
        {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
          setData(response.data) //response in JSON format
        }
        catch(error)
        {
            setError(error.message)
        }
    }
    // fetchData()
    useEffect(()=>{
        fetchData();
    },[]); //empty dependency (input)

  return (
    <div>
        <h3><u>API Demo 1 using axios</u></h3>
        {
            data.length>0?
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    <th>LATITUDE</th>
                </tr>
                {
                    data.map( (user,index) => (
                        <tr key={index}>
                                 <td>{user.id}</td>
                                 <td>{user.name}</td> 
                                 <td>{user.email}</td>
                                 <td>{user.address.city}</td>
                                 <td>{user.address.geo.lat}</td>
                        </tr>
                    ) )
                }
            </table>:
            error?
            <p>{error}</p>:
            <p>Fetching the Data ...</p>

        }
    </div>
  )
}
