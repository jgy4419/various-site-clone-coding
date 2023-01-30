import React from 'react';
import Home from '../Home';

// const withHoc = ({
//     handleMouseEnter,
//     handleMouseLeave,
//     isHovered
//     }) => {
//     return (
//         <div>
//             {isHovered && <div id="hover">클릭됨?</div>}
//             <button
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >클릭</button>
//             <h5>이미지에 마우스를 올리면 이미지 제목이 표시된다.</h5>
//         </div>
//     );
// };

function withHoc({
    handleMouseEnter,
    handleMouseLeave,
    isHovered
}) {
    return (
        <div>
            {isHovered && <div id="hover">클릭됨?</div>}
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >클릭</button>
            <h5>이미지에 마우스를 올리면 이미지 제목이 표시된다.</h5>
        </div>
    )
}

export default Home(withHoc);
// export default Hoc;