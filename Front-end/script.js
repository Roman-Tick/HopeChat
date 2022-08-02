
let responses = []

async function call() {

    const msg = document.getElementById("test").value
    
    console.log(msg)
    data = {
        message: msg
    }
    responses.push(data)

    const net = await fetch("http://localhost:5000/processMessage", {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })

    responses.push(await net.json()) 
    
    console.log(responses) 

    let doc = ""
    for(let i = 0; i < responses.length; i++) {

        if(i % 2 == 0 ){
            doc += `<div>You: ${responses[i].message}</div>`

        } else {
            doc += `<div>HopeChat: ${responses[i].message}</div>`

        }
    }
    
    document.getElementById("response").innerHTML = doc

}
