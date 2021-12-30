const app = require('express'),
{ Client } = require('pg'),
bodyParser = require('body-parser');


const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'landing_page'
})

client.connect();

client.query('select * from vagas', (err, result) => {
    if(!err) {
        console.log(result.rows[0].categoria)
        console.log(result.rows[0].titulo)
        console.log(result.rows[0].descricao)
        for(i = 0; i <= result.rows.length; i++) {
            console.log(result.rows[i])
        }
    } else {
        throw err
    }

    client.end();
}
)