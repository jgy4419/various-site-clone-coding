import React, {useState, useEffect} from 'react';
import './imgCarousel.scss';
import testImg from '../../img/testImg.png';
import testShoseimg1 from '../../img/testShoseimg1.png';
import testShoseimg2 from '../../img/testShoseImg2.png';
import testShoseimg3 from '../../img/testShoseImg3.png';

const ImgCarousel = () => {
    let imageSrc = [
        testImg, testShoseimg1, testShoseimg2,
        testShoseimg3, testShoseimg1, testShoseimg2
    ];
    let images
    let mainPhoto
    const uploadImage = (index) => {
        console.log(images[index]);
        mainPhoto.src = images[index].src;
    }
    useEffect(() => {
        images = document.querySelectorAll('.imgCarousel')
        mainPhoto = document.querySelector('.mainPhoto');
    }, []);
    return (
        <div className="imgcarousel-contain">
            <section className='wrapper'>
                <img id="mainPhoto" className="mainPhoto" src={testImg} alt="ㅠㅠ" />
                <div className="image-wrapper">
                    {
                        imageSrc.map((item, index) => {
                            return (
                                <img
                                    onClick={() => uploadImage(index)}
                                    src={item} alt="" className="imgCarousel" />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default ImgCarousel;