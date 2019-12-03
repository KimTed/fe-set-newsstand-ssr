import React , {useContext, useEffect} from 'react'
import styled from 'styled-components';
import NewsAsideView from './NewsAsideView.js'
import NewsContentView from './NewsContentView.js'

const ListNewsWrap = styled.div`
    width:1000px;
    display:flex;
    background-color:whitesmoke;
    min-height: 250px;
`

const ListNews = (props) => {
    return (
        <ListNewsWrap>
            <NewsAsideView />
            <NewsContentView />
        </ListNewsWrap>
    )
}

export default ListNews;
