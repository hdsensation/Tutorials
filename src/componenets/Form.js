import React,{useState} from 'react'

function Form() {                             //pass props param to use props
    function getform(e){
        e.preventDefault()
        if (name.length <3 || email.length <3){
            alert('not match')
        }
        else{
            alert('match')
        }
        console.log(name,comic,gender,email,tnc)
        }

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState(null)
    const [comic, setcomic] = useState(null)
    const [tnc, settnc] = useState(null)
    return (
        <>
        <div>
            <form onSubmit={getform}>
                <label>Name</label>
                <input type="text" onChange={(e)=>setname(e.target.value)}/>{name.length<3?<span>Enter in format</span>:''} <br /> 
                <label>Email</label>
                <input type='email' onChange={(e)=>setemail(e.target.value)}/> <br />
                <label>Choose Comic</label>
                <select onChange={(e)=>setcomic(e.target.value)}>
                    <option value="marvel">marvel</option>
                    <option value="DC">DC</option>
                    <option value="Hindi">Hindi</option>
                </select> <br />
                <label>Gender</label> <br />
                <label >Male</label>
                <input type="radio" name="Gender" id="Gender" value='male' onChange={(e)=>setgender(e.target.value)}/>
                <label >Female</label>
                <input type="radio" name="Gender" id="Gender" value='female' onChange={(e)=>setgender(e.target.value)}/><br />
                <input type="checkbox" name="check" id="check" onChange={(e)=>settnc(e.target.checked)}/>
                <label >Accepted</label> <br />
                <input type="submit" disabled={!tnc} value="submit" id='butt'/>
            </form>
        </div>
        
        </>
    )
}

export default Form
