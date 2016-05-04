import _ from 'lodash';

let count = 0;
let members = {
  emailOnly: []
};


export function getMemberCount(){
  return _.keys(members).length -1;
}

export function addMember(member){
  if(!members[member.username] && member.username){
      members[member.username] = member;
  }else{
    if(member.username){
      throw new Error('username already exists');
    }else{
      members.emailOnly.push(member.email);
    }

  }
}

export function reset(){
  count = 0;
  members = {
    emailOnly: []
  };
}

export function getMemberByUserName(username){
  return members[username];
}

export function getEmailOnlyCount(){
  return members.emailOnly.length;
}

export function getEmailOnlyList(){
  return members.emailOnly;
}
