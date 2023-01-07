import Text1 from './Text1';
import Text2 from './Text2';

export default function Text(){
    const defualtStyle = {
        width: '100vw',
        height: '100vh',
        margin: 'auto',
        // backgroundColor: '#000'
    };
    return(
        <>
            <div style={defualtStyle}>
                <Text1 />
                <Text2 />
            </div>
        </>
    )
}