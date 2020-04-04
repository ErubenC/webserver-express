const http = require('http')

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'aplication/json' })

        let salida = {
            nombre: 'ruben',
            edad: 30,
            url: req.url
        }

        //res.write('Hola Mundo')
        res.write(JSON.stringify(salida))
        res.end()

    })
    .listen(8080)

console.log('Escuchando puerto 8080');