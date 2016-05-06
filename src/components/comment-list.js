import React, {Component} from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderListItems(){
    let listItems = [];

    listItems.push(this.props.comments.map(function(comment, index) {
      return <li key={index}>{comment}</li>
    }));

    return listItems;
  }

  render() {
    return(
      <section>
        <ul className='comment-list'>
          {this.renderListItems()}
        </ul>
      </section>
    );
  }
}

function mapStatToProps(state){
  return{
    comments: state.comments
  }
}

export default connect(mapStatToProps, null)(CommentList);
