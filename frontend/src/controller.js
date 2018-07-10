getValue = () => {
    let valor 
    fetch('http://localhost:3003/api/modclima')
        .then(res => res.json())
        .then(data => valor = data)
        .then(() => document.getElementById('home').innerHTML = `Welcome to Modclima, Value: ${valor[0].value}`)
        .then(() => console.log(valor))
}

postValue = () => {
    var body = { value: '50 (ESTE VALOR VEIO DO DB)' }
    fetch('http://localhost:3003/api/modclima',  { 
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
}
