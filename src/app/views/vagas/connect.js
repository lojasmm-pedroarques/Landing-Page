var Client = require('pg').Client;
var client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'landing_page'
});
client.connect();
client.query('select * from vagas', function (err, result) {
    if (!err) {
        for (var i = 0; i < result.rows.length; i++) {
            addCard(montaCard(result.rows[i].categoria, result.rows[i].titulo, result.rows[i].descricao));
        }
        console.log(result.rows[0].titulo);
    }
    client.end();
});
function montaCard(categoria, titulo, descricao) {
    var card = document.createElement("mat-card");
    var title = document.createElement("mat-card-title");
    title.textContent = titulo;
    var description = document.createElement("mat-card-content");
    description.textContent = descricao;
    card.appendChild(title);
    card.appendChild(description);
    return card;
}
function addCard(card) {
    var cards = document.querySelector("#cards");
    cards.appendChild(card);
}
function oi() {
    console.log('oi definitivo');
}
