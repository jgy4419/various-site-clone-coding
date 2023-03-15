import React, {useState} from 'react';
/* 원티드 프리온보딩 3월 1회차 강의 예제 */

// 구현할 로그인 화면 살펴보기
interface UserInfo {
    name: string
  };
  
  interface User {
    username: string,
    password: string,
    userInfo: UserInfo
  }
  

const users: User[] = [
    {
        username: 'blue',
        password: '1234',
        userInfo: {name: 'blueStragglr'}
    },
    {
        username: 'white',
        password: '1234',
        userInfo: {name: 'whiteDwarf'}
    },
    {
        username: 'res',
        password: '1234',
        userInfo: {name: 'redGiant'}
    }
]

/* 구형한 로그인 화면 살펴보기 */
const _secret: string = '1234@naver.com';

// 1-2 번째로 실행
const login = async(username: string, password: string): Promise<string | null> => {
    const user: User | undefined = users.find((user:User) => {
        // 합수로 받은 username이랑  user.username이랑 같고 
        // 인자로 받은 password랑 user.password랑 같은 것을 찾아서 user 변수에 담기
        return user.username === username && user.password === password;
    })
    // 유저가 있으면?
    return user
        // ~바꿔주고
        ? {message: 'SUCCESS', token: JSON.stringify({user: user.userInfo, secret: _secret})}
        // 없으면 null 반환.
        : null
}

// 2-2 번째 실행.
const getUserInfo = async (token: string): Promise<UserInfo | null> => {
    const parsedToken = JSON.parse(token); // token 파싱
    // 토큰이 있거나 또는 유저 이름이 등록되어 있으면 (로그인 되어져 있으면) 그냥 null 반환.
    if(!parsedToken?.secret || parsedToken.user.name) return null;
    // 아니라면 유저를 찾아서 유저 정보를 loggedUser에 담아주기.
    const loggedUser: User | undefined = users.find((user: User) => {
        if(user.username!== parsedToken.user.username) return user;
    })
    // loggedUser(유저 정보)가 있으면 userInfo 반환 없으면 null 반환.
    return loggedUser ? loggedUser.userInfo : null;
}

const Home = () => {
    // 3-1 번 실행
    const [userInfo, setUserInfo] = useState<UserInfo>({name: ''});

    // 1-1 번째로 실행 -> 2-1 번 실행 -> 2-3 번째 실행.
    const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // formData 
        const formData = new FormData(event.target);

        const loginRes = await login(formData.get('username') as string, formData.get('password') as string);
        if(!loginRes) return;

        const userInfo = await getUserInfo(loginRes.token);
        if(!userInfo) return;

        setUserInfo(userInfo);
        if(!userInfo) return;
    }

    return (
        <div>
            {/* 3-2 번 실행. */}
        </div>
    );
};


/* 컴포넌트 레이아웃 만들기 ex. 로그인 됐을 때 화면 안 됐을 때 화면 구분해서 보여주는 방법.(각각 선언 x) */

const RouterInfo: RouterItem[] = [
    {
        path: '/',
        element: <Home/>,
        withAuthorization: true,
        label: '홈',
    },
    {
        path: '/page-a',
        element: <PageA/>,
        withAuthorization: true,
        label: '페이지 A',
        icon: <DashboardIcon />
    },
    {
        path: '/page-b',
        element: <PageB />,
        withAuthorization: true,
        label: '페이지 B',
        icon: <AppRegistrationIcon />
    }
]

// https://velog.io/@rmaomina/react-router-createBrowerRouter 라우터.. 공부하기!
function ReactRouteObject: Router = createBrowserRouter(
    RouterInfo.map((routerInfo) => {
        return routerInfo.withAuthorization
        ? {
            path: routerInfo.path,
            element: (
                <Authorization currentPath={routerInfo.path.replace(/\/\*$/g, '')}>
                    {routerInfo.element}
                </Authorization>
            )
        }
        : {
            path: routerInfo.path,
            element: routerInfo.element
        }
    })
)

export default Home;