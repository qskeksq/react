import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="post1" avatar={faker.image.avatar() } />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="Alex" timeAgo="Today at 3:45PM" content="post2" avatar={faker.image.avatar() } />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="Jane" timeAgo="Yesterday at 6:45PM" content="post3" avatar={faker.image.avatar() } />
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                </div>
                Are you sure?
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));