import React, { useEffect,useState } from 'react'

function Filter() {

const [det, setdet] = useState([]) 
const [filter, setfilter] = useState(det)



    const get=async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        setdet(await res.clone().json())
        setfilter(await res.json())
    }

    useEffect(() => {
       get();
    },[])
    

    function change(cat) {
        let fdata=det.filter((x)=>x.category === cat)
        setfilter(fdata)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={()=>change('jewelery')}>filter</button>
            {filter.map(e=>
            <p key={e.id}>{e.title}</p>
                )}
           
            <h1>hello</h1>
        </div>
    )
}

export default Filter
