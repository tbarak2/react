import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker  from 'faker';

const App = ()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 04:45PM"
                commentText="Great add!!"
                avatar={faker.image.avatar()}
            /></ApprovalCard>
             <ApprovalCard>
            <CommentDetail
                author="Bill"
                timeAgo="Today at 02:00AM"
                commentText="Oh no :) "
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Yesterday at 01:01AM"
                commentText="You should do it!"
                avatar={faker.image.avatar()}
            /></ApprovalCard>
        </div>
        );
};
ReactDOM.render(<App />, document.getElementById('root'));

