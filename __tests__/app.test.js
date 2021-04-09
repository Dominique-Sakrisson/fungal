const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('fungal routes', () => {
  beforeAll(() => {
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
  it('gets all the fungus in the database', async() => {
    return request(app)
    .get('/api/v1/fungi/')
    .then(res => {
      expect(res.body).toEqual([{
        id: '1',
        fungiName: 'oyster',
        fungiDescription: 'a delicious treat'
      }]);
    });
  })
  it('gets a particular fungi from the database', async() => {
    return request(app)
    .get('/api/v1/fungi/1')
    .then(res => {
      expect(res.body).toEqual({
        id: '1',
        fungiName: 'oyster',
        fungiDescription: 'a delicious treat'
      })
    });
  });
  it('gets a particular fungi from the database', async() => {
    return request(app)
    .put('/api/v1/fungi/1')
    .send({fungiName: 'lobster', fungiDescription: 'the vampire fungus'})
    .then(res => {
      expect(res.body).toEqual({
        id: '1',
        fungiName: 'lobster',
        fungiDescription: 'the vampire fungus'
      })
    });
  });
  it('gets a particular fungi from the database', async() => {
    return request(app)
    .delete('/api/v1/fungi/1')
    .then(res => {
      expect(res.body).toEqual({
        id: '1',
        fungiName: 'lobster',
        fungiDescription: 'the vampire fungus'})
    });
  });
});
