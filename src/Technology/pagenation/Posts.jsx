import styled from 'styled-components';
import Pagination from './Pagination';
import Post from './Post';

function Posts({ posts, limit, setLimit, offset, page, setPage}) {
    const postOption = [10, 20, 30, 40, 50];
    return (
        <Layout>
            <h1>게시물 목록</h1>

            <label>
                페이지 당 표시할 게시물 수:&nbsp;
                <select
                    type="number"
                    value={limit}
                    onChange={({target: {value}}) => setLimit(Number(value))}
                >
                    {
                        postOption.map(option => (
                            <option value={option}>{option}</option>                            
                        ))
                    }
                </select>
            </label>
            
            <main>
                {
                    posts.slice(offset, offset + limit).map(({ id, title, body }) => (
                        <article key={id}>
                            <Post id={id} title={title} body={body} />
                        </article>
                    ))
                }
            </main>
            <footer>
                <Pagination
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                >
                </Pagination>
            </footer>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
`


export default Posts;