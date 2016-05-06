import CommentList from '../../src/components/comment-list';
import { renderComponent, expect, $ } from '../test_helper';

describe('Comment List features', () => {

  context('does this comment list exist with proper stuff', () => {

    let component;

    before('renders component', () => {
      component = renderComponent(CommentList);
    });

    it('exists', () => {
      expect(component).to.exist;
    });

    it('first element is a section', () => {
      console.log("component", component);
      expect(component.tagName).to.eql('SECTION');
    })

    it('should have an unordered list', () => {
      expect(component.querySelector('ul')).to.exist;
    })

    it('unordered list should have class comment-list', () => {
      expect($(component.querySelector('ul'))).to.have.class('comment-list');
    })

  });

  context('does the comment list show comments', () => {

    let component;
    let comments = ['comment1', 'comment2', 'comment3']

    before('renders component', () => {
      component = renderComponent(CommentList, null, {comments: comments});
    });

    it('should have 3 list items', () => {
      expect($(component).find('li').length).to.eql(3);
    })

    it('should contain all comments', () => {
      comments.map(comment => {
        expect($(component)).to.contain(comment);
      })
    })

  })

});
