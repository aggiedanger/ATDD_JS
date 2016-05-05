import { getMemberCount, addMember, reset, getMemberByUserName, getEmailOnlyCount, getEmailOnlyList } from '../../src/atddair/membership/membership';

var myAfterHooks = function () {
  this.After(function (scenario) {
    reset();
  });
};

module.exports = myAfterHooks;
