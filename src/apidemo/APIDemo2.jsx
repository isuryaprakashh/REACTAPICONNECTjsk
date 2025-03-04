import {useState,useEffect} from 'react'
import axios from 'axios'

export default function APIDemo2() 
{   
    const [data,setData] = useState([]) //JSON Array - array of JSON objects
    const [error,setError] = useState("") //String

    const fetchData = async () =>{  
        try
        {
          const response = await axios.get("https://fakestoreapi.com/products")
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
        <h3><u>API Demo 2 using axios</u></h3>
        {
            data.length>0?
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>IMAGE</th>
                    <th>RATING</th>
                </tr>
                {
                    data.map( (product,index) => (
                        <tr key={index}>
                                 <td>{product.id}</td>
                                 <td>{product.title}</td> 
                                 <td>{product.price}</td>
                                 <td><img src={product.image} width={50} /></td>
                                 <td>{product.rating.rate}</td>
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
