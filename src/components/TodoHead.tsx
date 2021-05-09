import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 30px;
        color: #1e099b;
    }
    .day {
        font-size: 20px;
        margin-top: 15px;
    }
`;

function TodoHead() {
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const date = new Date();
    return (
        <TodoHeadBlock>
            <h1>{date.toLocaleDateString()}</h1>
            <div className="day">{week[date.getDay()]}</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;