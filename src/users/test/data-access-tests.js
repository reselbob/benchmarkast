const chai = require('chai');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const  {getUser, getUsers} = require('../datastore');
const {createRandomUserSync} =  require('../utilties/seeder');


describe('Data Access Tests USER', () => {

    it('Can GET users', (done) => {
        getUsers()
            .then(result => {
                expect(result).to.be.an('array');
                done();
            })
    });

    it('Can create and get new user', (done) => {
        const mock = createRandomUserSync();
        getUser()
            .then(user => {
                expect(user).to.be.an('object');
                for (let prop in mock) {
                    user[prop] = mock[prop];
                };
                return user.save();
            })
            .then(result => {
                expect(result.id).to.be.an('string');
                return getUser(result.id);
            })
            .then(result => {
                expect(result).to.be.an('object');
                done();
            })
            .catch(err => {
                console.error(err);
                done(err);
            });
    });
});
