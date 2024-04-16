const url = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch(url)
// .then((response) => response.json())
// .then(data => console.log(data))


const fn = async()=>{
    const response = await fetch(url,{
        method: 'POST',//GET ,POST ,PUT , PATCH, DELETE
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer aquivaeltoken'
        },
        body: JSON.stringify({
            name: 'hola',
            website:'google.com'
        })
    })
    const data =await response.json()
    console.log(data);
}
fn()