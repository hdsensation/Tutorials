import React,{useState} from 'react'

function Main() {
    let bal = 5000;
    // let depval = document.getElementById('deposit')
    // let widhval = document.getElementById('withdraw')
    let depo = []

    function fndep(params) {
        let depval = prompt('enter')
        let val1 = parseInt(depval)
        depo.push(val1)
        console.log(depo)
        bal += val1
        console.log(bal)
        alert('Balance Updated')
        document.getElementById('flash').innerHTML =bal;
    }

    function fnwid(params) {
        let widval = prompt('enter')
        let val2 = parseInt(widval)
        depo.push(val2)
        console.log(depo)
        bal -= val2
        console.log(bal)
        alert('Balance Updated')
        document.getElementById('flash').innerHTML =bal;
    }

    const [data, setdata] = useState(0)
    const [print, setprint] = useState(false)

    function chng(wal) {
        setdata(wal.target.value)
    }


    return (
        <>
        <h2>BALANCE LEFT : <span id='flash'>{bal}</span></h2>
        <div>
            <label><h2>Deposit</h2></label>
            <button id='depo' onClick={fndep}>Deposit</button>
            <label><h2>withdraw</h2></label>
            <button id='with' onClick={fnwid}>Withdraw</button>
        </div>
        <section>
            <div>
                {print?<h1>{data}</h1>: null}
                <input type="text" onChange={chng}/>
                <button onClick={()=>setprint(!print)}>Print</button>
            </div>
        </section>
        </>
    )
}

export default Main
