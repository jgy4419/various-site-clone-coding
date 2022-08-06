// 매개변수로 받은 페이지번호와 동일한 데이터(객체)들만 return 해준다.
export const getPostList = (pageNumber) => {
    return postList.filter(data => data.page === pageNumber);
}

export const postList = [
    {
        bookID: 1, 
        title: "title1 text", 
        page: 1
    },
    {
        bookID: 2, 
        title: "title2 text", 
        page: 1
    },
    {
        bookID: 3, 
        title: "title3 text", 
        page: 1
    },
    {
        bookID: 4, 
        title: "title4 text", 
        page: 1
    },
    {
        bookID: 5,
        title: "title5 text", 
        page: 2
    },
    {
        bookID: 6, 
        title: "title6 text", 
        page: 2
    },
    {
        bookID: 7, 
        title: "title7 text",
        page: 2
    },
    {
        bookID: 8, 
        title: "title8 text",
        page: 2
    },{
        bookID: 9, 
        title: "title9 text",
        page: 3
    },
    {
        bookID: 10, 
        title: "title10 text",
        page: 3
    },
    {
        bookID: 11, 
        title: "title11 text",
        page: 3
    },
    {
        bookID: 12, 
        title: "title12 text",
        page: 3
    },
]