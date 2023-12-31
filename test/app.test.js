const request = require('supertest');
const app = require('../app'); // Certifique-se de que o caminho esteja correto

describe('Testes de Rotas de Contatos', () => {
  it('Deve listar todos os contatos (GET /automovel)', async () => {
    const response = await request(app).get('/automovel');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('Deve criar um novo contato com campos válidos (POST /automovel)', async () => {
    const newAutomovel = {
      tipoAutomovel: 'Onix',
      placa: '85120sda',
      cpfcnpj: '123-456-7890',
      status: 'Ativo',
      tempoEntrada: '11:20',
      tempoSaida: '12:19',
      valor: '10,00',


      
    };

    const response = await request(app)
      .post('/automovel')
      .send(newAutomovel);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('_id');
  });

  it('Deve retornar erro ao criar um novo contato com campos inválidos (POST /automovel)', async () => {
    const invalidAutomovel = {
      tipoAutomovel: 'Onix',
      placa: '85120sda',
      cpfcnpj: '123-456-7890',
    };

    const response = await request(app)
      .post('/automovel')
      .send(invalidAutomovel);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty('message');
  });

  it('Deve retornar erro ao acessar uma rota inexistente (GET /rota-inexistente)', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.statusCode).toEqual(404);
    expect(response.body).toHaveProperty('message');
  });
});
