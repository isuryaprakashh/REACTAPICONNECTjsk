import React from 'react'

export default function Demo2() 
{
    const courses = ["FSAD","MSWD","AWS","JFSD"] //string array

    return (
    <div>
        <h3><u>Courses List using Map function</u></h3>
        {
            courses.length>0 ?
            <table border={1}>
                <tr>
                    <th>S1. No</th>
                    <th>Courses Name</th>
                </tr>
                {
                    courses.map( (course,i) =>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{course}</td>
                        </tr>
                    ) )
                }
            </table>:
            <p>Data Not Found</p>
        }
    </div>
  )
}
