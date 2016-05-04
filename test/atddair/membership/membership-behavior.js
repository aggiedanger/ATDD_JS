import { getMemberCount, addMember, reset, getMemberByUserName, getEmailOnlyCount, getEmailOnlyList } from '../../../src/atddair/membership/membership';
import _ from 'underscore';
import { expect } from 'chai';

describe('Membership API', () => {

  context('When adding members', () => {

    afterEach('teardown', () => {
      reset();
    });

    it('initial member count should be 0', () => {
      let memberCount = getMemberCount();
      expect(memberCount).to.eql(0);
    });

    it('after a member as been added, count should be 1', () => {
      addMember({username: 'bob', email: 'bob@gmail.com'});
      let memberCount = getMemberCount();

      expect(memberCount).to.eql(1);
    });

  });

  context('when two members are added', () => {

    let mbrBob;
    let mbrSue;

    before('adding members', () => {

      addMember({username: 'bob', email: 'bob@gmail.com'});
      addMember({username: 'sue', email: 'sue@gmail.com'});

      mbrBob = getMemberByUserName('bob');
      mbrSue = getMemberByUserName('sue');

    });

    it('member bob should have the correct email', () => {
      expect(mbrBob.email).to.eql('bob@gmail.com');
    });

    it('member bob should have the correct user name', () => {
      expect(mbrBob.username).to.eql('bob');
    });

    it('member sue should have the correct email', () => {
      expect(mbrSue.email).to.eql('sue@gmail.com');
    });

    it('member sue should have the correct user name', () => {
      expect(mbrSue.username).to.eql('sue');
    });

    after('tear down', () => {
      reset();
    });
  });

  context('username already exists and attempt is made to add another member with same username', () => {

    let mbr;
    let errorThrown;

    before('setup', () => {
      addMember({username: 'bob', email: 'bob@gmail.com'});

      try{
          addMember({username: 'bob', email: 'sue@gmail.com'});
      }catch(error){
        errorThrown = error;
      }

      mbr = getMemberByUserName('bob');
    });

    it('should still only have 1 member', () => {
      expect(getMemberCount()).to.eql(1);
    });

    it('should have the correct member information for bob', () => {
      expect(mbr.email).to.eql('bob@gmail.com');
    });

    it('should have an error', () => {
      expect(errorThrown).to.exist;
    });

    after('teardown', () => {
      reset();
    });

  });

  context('initial email tests', () => {

    it('initial count should be 0', () => {
      expect(getEmailOnlyCount()).to.eql(0);
    });

  });

  context('email only test adding a single member', () => {

    beforeEach('setup', () => {
        addMember({username: null, email:'bob@gmail.com'});
        addMember({username: null, email:'sue@gmail.com'});
        addMember({username: null, email:'bill@gmail.com'});
    });

    it('should be 3 after adding email only members', () => {
      console.log(getEmailOnlyList());
      expect(getEmailOnlyCount()).to.eql(3);
    });

    it('should have bob@gmail.com as an entry', () => {
      console.log("email only", getEmailOnlyList());
      expect(_.contains(getEmailOnlyList(), 'bob@gmail.com')).to.be.true;
    });

    it('should have sue@gmail.com as an entry', () => {
      console.log("email only", getEmailOnlyList());
      expect(_.contains(getEmailOnlyList(), 'sue@gmail.com')).to.be.true;
    });

    it('should have bill@gmail.com as an entry', () => {
      console.log("email only", getEmailOnlyList());
      expect(_.contains(getEmailOnlyList(), 'bill@gmail.com')).to.be.true;
    });

    afterEach('teardown', () => {
      reset();
    });

  });



});
