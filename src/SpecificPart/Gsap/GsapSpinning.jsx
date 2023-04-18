import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Gsap from './Gsap';
import './GsapSpinning.scss'

const GsapSpinning = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ease: "power1", duration: 3});

        const tl = gsap.timeline();
        tl.from(".section03", {xPercent: -100})
        .from(".section04", {xPercent: 100})
        .from(".section05", {yPercent: 400});

        ScrollTrigger.create({
            animation: tl,
            trigger: "#container",
            start: "top top", 
            end: "+=4000",
            pin: true,
            scrub: true,
            anticipatePin: 1
        });
    }, []);
    return (
        <div className='gsap_spinning_contain'>
            <div className="section01"><p>TEXT1</p></div>
            <div id="container">
                <section className="section02"><p>TEXT2</p></section>
                <section className="section03"><p>TEXT3</p></section>
                <section className="section04"><p>TEXT4</p></section>
                <section className="section05">
                    <Gsap/>
                </section>
            </div>
        </div>
    );
};

export default GsapSpinning;