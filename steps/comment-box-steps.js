import { renderComponent, expect, $ } from '../test/test_helper';
import CommentList from '../src/components/comment-list';
import _ from 'lodash';

module.exports = function() {

  var commentListSplit;
  var component;

  this.Given(/^comments "([^"]*)"$/, function (commentList, callback) {
    commentListSplit = _.split(commentList, ',')
    console.log("comments", commentListSplit);
    callback();
  })

  this.When(/^user navigates to page$/, function (callback) {
    component = renderComponent(CommentList, null, {comments: commentListSplit});

    console.log("component", component);
    callback();
  })

  this.Then(/^All comments "([^"]*)" will display$/, function (commmentList, callback) {

    let errorThrown;

    commentListSplit.map((comment, index) => {
      try{
          expect($(component)).to.contain(comment);
      }catch(error){
        callback(error)
      }
    })
    callback();
  })
}
