import {useState,useEffect} from 'react'
import products from './products.json'
export default function JSONDemo() 
{
    const [data,setData] = useState([]) //JSON Array contains objects
    
    useEffect(()=>                   
    { 
        setData(products)
    },[])

  return (
    <div>
        <h3><u>JSON Demo</u></h3>
        {
            <table border={1}>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Cost</th>
                </tr>
                {
                data.map((product,index) =>(
                <tr key={index}>
                    <td>{product.pid}</td>
                    <td>{product.pname}</td>
                    <td>{product.pcost}</td>
                    <br/>
                </tr>
                ) )
                }
            </table>
        }
    </div>
  )
}
