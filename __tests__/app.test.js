const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('fungal routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new fungi to add to the database', async() => {
    return request(app)
    .post('/api/v1/fungi')
    .send({fungiName: 'oyster', fungiDescription: 'a delicious treat'})
    .then(res => {
      expect(res.body).toEqual({
        id: '1',
        fungiName: 'oyster',
        fungiDescription: 'a delicious treat'
      });
    });
  })
  // it('gets all the fungus in the database', async() => {
  //   return request(app)
  //   .post('/api/v1/fungi')
  //   .send({fungiName: 'oyster', fungiDescription: 'a delicious treat'})
  //   .then(res => {
  //     expect(res.body).toEqual({
  //       id: '1',
  //       fungiName: 'oyster',
  //       fungiDescription: 'a delicious treat'
  //     });
  //   });
  // })

});
