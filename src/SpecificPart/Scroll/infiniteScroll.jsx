import React, { useState, useEffect, useCallback  } from 'react';
import './infiniteScroll.scss'
import { getPostList } from './scrollData';
export default function InfiniteScroll(){
    let [page, setPage] = useState(1);
    const [posts, setPosts] = useState(getPostList(page));
    // 스크롤을 하면서 실행할 내용 추가. (page, posts 값이 변할 때 마다 함수 재실행.)
    const handleScroll = useCallback(async () => {
        // 브라우저창 높이. (스크롤 포함 x)
        const { innerHeight } = window;
        // 브라우저 총 내용의 크기 (스크롤 포함)
        const { scrollHeight } = document.body;
        // 현재 스크롤의 위치
        const { scrollTop } = document.documentElement;
        // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다는 것은 즉, 스크롤이 가장 아래에 도달했다는 의미.
        // Math.round() 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환한다.
        if(Math.round(scrollTop + innerHeight) >= scrollHeight){
            // concat을 사용해서 게시물들을 이어서 불러오도록 하기.
            setPosts(posts.concat(getPostList(page + 1)));
            console.log(posts);
            // page를 1 증가해서 ex) page: 1인 게시물들 불러오기 => page: 2인 게시물들 불러오기
            setPage((pageIndex) => pageIndex + 1);
            console.log(page);
        }
    }, [page, posts])
    //
    useEffect(() => {
        console.log('useEffect');
        // 스크롤이 발생할 때마다 handleScroll 함수를 호출하도록 추가.
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            // 컴포넌트가 언마운트 될 때, 스크롤 이벤트를 제거한다. (안해주면 스크롤 함수 계속 실행)
            window.removeEventListener('scroll', handleScroll, true);
        }
    }, [ handleScroll ])
    return(
        <>
            <div className="infiniteScroll_contain">
                <div className="inner">
                    {
                        posts.map(post => (
                            <div className="item">
                                <div className="item_inner">
                                    <p>{post.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}