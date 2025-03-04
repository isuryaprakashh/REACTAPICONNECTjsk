import {useState} from 'react'

export default function Demo1() 
{
    const [product,setProduct] = useState("") //string
    const [productlist,setProductList] = useState([]) //array


    const handleChange = (e) => {
        setProduct(e.target.value)
    }
    //spread operator will add the value by making the array as iterable.

    const addproduct = () => 
    {
        if(product.length==0)
        {
            alert("Enter Product Name")
            document.getElementById("p").focus()
        }
        else
        {
        setProductList([...productlist,product])
        }
        document.getElementById("p").value=""
        setProduct("")
    }

  return (
    <div>
         <h3><u> Dynamic array using Map function</u></h3>
        Enter Product Name <input type="text"  id="p" onChange={handleChange}/>
        <button onClick={addproduct}>Add</button>
        {
            productlist.length>0 ?
            <table border={1}>
                <tr>
                    <th>S1. No</th>
                    <th>Product Name</th>
                </tr>
                {
                    productlist.map( (p,i) =>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{p}</td>
                        </tr>
                    ) )
                }
            </table>:
            <p>Data Not Found</p>
        }

    </div>
  )
}
