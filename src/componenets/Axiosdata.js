import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosdata() {

    const [post, setpost] = useState('')    
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [id, setid] = useState(1)
    useEffect(() => {
        axios.get(`${url}/1`).then((resp)=>{
            console.log(resp.data);
            setpost(resp.data)
        })    
    }, [])

    

    function Nxt() {
        setid(id+1)
        axios.get(`${url}/${id}`).then((rx)=>{
            console.log(rx.data)
            setpost(rx.data)
        })
    }


    // function entry() {
    //     axios.post(url,{
    //         title:'lalan party',
    //         body:'huhu'
    //     }).then((result)=>{
    //         setpost(result.data)
    //     })
        
    // }

    return (
        <div>
            <h1>{post.title}</h1>
            <button onClick={Nxt}>set</button>
        </div>
    )
}

export default Axiosdata
