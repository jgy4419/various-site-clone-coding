import React,  {useEffect, useState, useRef} from 'react';
import './Parallax2.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import testShoseimg1 from '../../img/testShoseimg1.png'
import testShoseImg2 from '../../img/testShoseImg2.png'
import testShoseImg3 from '../../img/testShoseImg3.png'


const Parallax2 = () => {
    const container = useRef();
    const [title, setTitle] = useState(['HTML', 'CSS', 'JS']);
    const [img, setImg] = useState([testShoseimg1, testShoseImg2,testShoseImg3]);
    const [content, setContent] = useState(['HTML 설명입니다.', 'CSS 설명입니다.', 'JS 설명입니다.']);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); 
        const sections = gsap.utils.toArray('.panel');
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container", // 객체 기준 범위
                pin: true, // 고정
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + container.offsetWidth
            }
        })
    }, []);
    // useEffect(() => {
    //     gsap.to('.box', {
    //         rotation: 27,
    //         x: 500,
    //         duration: 2
    //     })
    // }, []);
    return (
        <>
        {/* <div className="box green"></div>
        <div className="box orange"></div>
        <div className="box grey"></div> */}
        
            <div ref={container} className='container'>
                <section className='panel'>
                    <div className="banner">
                        
                    </div>
                </section>
                <div className="sections">
                {
                   title.map((title, index) => {
                        return (
                            <div className="parallax2__container">
                                <img className="parallax2__image" src={img[index]}/>
                                <h1 className="parallax2__title">{title}</h1>
                                <p className="parallax2__content">
                                    {content[index]}
                                </p>
                            </div>
                        )
                   }) 
                }
                </div>
                {
                   title.map((title, index) => {
                        return (
                            <div className="parallax2__container">
                                <img className="parallax2__image" src={img[index]}/>
                                <h1 className="parallax2__title">{title}</h1>
                                <p className="parallax2__content">
                                    {content[index]}
                                </p>
                            </div>
                        )
                   }) 
                }
            </div>
        </>
    );
};

export default Parallax2;