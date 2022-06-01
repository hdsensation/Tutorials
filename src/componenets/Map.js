import React from 'react'
import Reuse from './Reuse';

function Map() {
    const arr = [
        { name: 'lalu', contact: '989', address :[
            {HN: 51,city:'bhopal',pincode:4899}
        ] },
        { name: 'lalr', contact: '98967', address :[
            {HN: 51,city:'nagpur',pincode:4899}
        ] },
        { name: 'lalw', contact: '9888', address :[
            {HN: 51,city:'delhi',pincode:4899}
        ] }
    ]
    return (
        <div>
            <h1>lalLLL</h1>
            
                {/* <table className='table' variant='dark'>
                    <tbody>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                        </tr>
                {arr.map((data,i) =>
                        <tr key={i}>
                            <th scope='row'>*</th>
                            <td>{data.name}</td>
                            <td>{data.contact}</td>
                        </tr>
                )}
                    </tbody>
                </table> */}

                {/* <table className='table'>
                    <tbody>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Adress</th>
                    </tr>
                    </tbody>
                    
                    { arr.map((item,i)=>
                    <tbody key={i}>
                       <tr >
                           <td>{i+1}</td>
                           <td>{item.name}</td>
                           <td>{item.contact}</td>
                           <td>{ item.address.map((data,i)=>
                               <tr key={i}>
                                   <td>{data.HN}</td>
                                   <td>{data.city}</td>
                                   <td>{data.pincode}</td>
                               </tr>
                           )}</td>
                       </tr>
                       </tbody>
                    
                    )}
                </table> */}
            {arr.map((d)=>
            <Reuse data={d} />
            )}
        </div>
    );
}

export default Map
