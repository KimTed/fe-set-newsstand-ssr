import React, { useContext } from 'react'
import styled from 'styled-components';
import { MyNewsListContext, MyNewsListDispatchContext } from '../../MyNewsProvider.js';

const ULWrap = styled.ul`
    box-sizing:border-box;
    width:25%;
    border-right:1px solid gray;
    padding:1rem;
`

const NewsItem = styled.li`
    &+& { 
        margin-top:.5rem;
    }
    &:hover {
        //background-color: gray;
        //color:#fff;
        text-decoration:underline;
    }
    color: ${props => (props.bCurrent) && 'red'};
    padding:0 .5rem;
    box-sizing:border-box;
    cursor : pointer;
`

const NewsAsideView = () => {
    const {newsList} = useContext(MyNewsListContext);
    const dispatch = useContext(MyNewsListDispatchContext);

    const filtedList = newsList && newsList.filter(({bSubscription}) => bSubscription)

    const selectCurrentCompany = ({ target }) => {
        dispatch({ type: "SET_CURRENT_PRESS", payload: target.textContent })
    }

    return (
        <ULWrap>
            {filtedList.map(({ id, company, bCurrent }) => {
                return (
                    <NewsItem
                        key={id}
                        bCurrent={bCurrent}
                        onClick={selectCurrentCompany}>
                        {company}
                    </NewsItem>
                )
            }
            )}

        </ULWrap>
    )
}

export default NewsAsideView;