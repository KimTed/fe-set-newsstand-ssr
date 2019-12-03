import React, { useContext } from 'react'
import styled from 'styled-components';
import { MyNewsListContext } from '../../MyNewsProvider.js';

const ContentWrap = styled.div`
    box-sizing:border-box;
    width:75%;
    padding:1rem;
    li {
        margin-top:.5rem;
    }
    display:flex;
`

const Thumbnews = styled.div`
    background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center center`};
    width: 250px;
    background-size: cover;
    position:relative;
`

const ThumbnewsTitle = styled.div`
    position: absolute;
    bottom: 0px;
    color: #fff;
    padding: .4rem;
    width: 100%;
    background: #443e3e87;
    box-sizing: border-box;
    cursor: pointer;
`

const Ul = styled.ul`
    margin-left: 1rem;
`

const NewsContentView = () => {

    const {newsList} = useContext(MyNewsListContext);

    const currentPress = newsList && newsList.find((v) => v.bCurrent);
    if (!currentPress) return null;
    const { newslist: newsListOfCurrentPress, thumbnews: { imageUrl, text: ThumbTitle} } = currentPress;

    return (
        <ContentWrap>
            <Thumbnews imageUrl={imageUrl}>
                <ThumbnewsTitle>{ThumbTitle}</ThumbnewsTitle>
            </Thumbnews>
            <Ul>
                {newsListOfCurrentPress.map((newsItem, idx) => <li key={idx} >{newsItem}</li>)}
            </Ul>
        </ContentWrap>
    )
}

export default NewsContentView;
