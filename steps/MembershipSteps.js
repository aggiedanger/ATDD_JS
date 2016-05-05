import { getMemberCount, addMember, reset, getMemberByUserName, getEmailOnlyCount, getEmailOnlyList } from '../src/atddair/membership/membership';
import _ from 'underscore';

module.exports = function() {

  var countBefore = 0;
  var emailCountBefore = 0;
  var errorThrown;

  this.When(/^A user provides "([^"]*)" as the username and "([^"]*)" as the email$/, function (user, email, callback) {

    countBefore = getMemberCount();
    emailCountBefore = getEmailOnlyCount();
    try{
        addMember({username: user, email: email});
    }catch(error){
      errorThrown = error;
    }

    callback();

  });

  this.Then(/^There is a user with username "([^"]*)" and email "([^"]*)"$/, function (user, email, callback) {

    var mbr = getMemberByUserName(user);

    if(mbr.username == user && mbr.email == email){

      callback();
    }else
    {

      callback(new Error("Expected user to exist and for the user to equal the passed in parms"))
    }
  })

  this.Then(/^the member count is incremented by (\d+)$/, function (increment, callback) {

    if((countBefore + increment) == getMemberCount()){

      callback();
    }else{

        callback(new Error("count did not increment by the expected value"));
    }

  })


  this.Given(/^an email "([^"]*)" exists for user "([^"]*)"$/, function (email, user, callback) {
    try{
        addMember({username: user, email: email});
    }
    catch(error){
      errorThrown = error;
    }
    callback();
  })

  this.Then(/^an exception is thrown$/, function (callback) {
    if(!errorThrown){
      
      callback(new Error("error was not thrown"));
    }else{

      callback();
    }
  })

  this.Then(/^the user is added to an email only list with email "([^"]*)"$/, function (email, callback) {
    if(_.contains(getEmailOnlyList(), email)){

      callback();
    }else{

      callback(new Error("email list did not contain email"));
    }
  })

  this.Then(/^the email only count should be incremented by (\d+)$/, function (increment, callback) {
    if((emailCountBefore + increment) == getEmailOnlyCount){

      callback();
    }else{

      callback(new Error('email only count did not increment correctly'));
    }
  })

  this.Then(/^the user "([^"]*)" is not added$/, function (user, callback) {
    if(getMemberByUserName(user)){

      callback(new Error("user should not exist"));
    }else{

      callback();
    }
  })
}
