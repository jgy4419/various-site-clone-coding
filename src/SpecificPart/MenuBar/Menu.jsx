import './Menu.scss';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
export default function Menu(){
    return(
        <>
            <div className="menu1">
                {/* <Menu1/> */}
            </div>
            <div className="menu2">
                <Menu2/>
            </div>
        </>
    )
}