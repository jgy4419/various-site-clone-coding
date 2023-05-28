import React, { useEffect, useState } from 'react';
import './HoverEffectCard.scss';

const HoveEffectCard = () => {
    const [content, setContent] = useState({
        mainText: ['Hello Git', 'Hello Twitter'],
        subText: ['github', 'twitter'],
        image: [
            'data:image/png;base64,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',
            'data:image/png;base64,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'
        ]
    });

    return (
        <>
            <div className="hover_effect_card_container">
                <ul className="hover_effect_cards">
                {
                    content.image.map((img, index) => {
                        return (
                            <li className="hover_effect_card" key={index}>
                                <div className="hover_effect_text">
                                    <p className="hover_effect_main_text">
                                        {content.mainText[index]}
                                    </p>
                                    <p className="hover_effect_sub_text">
                                        {content.subText[index]}
                                    </p>
                                </div>
                                <img src={img} alt="이미지" />
                            </li>           
                        )
                    })
                }
                </ul>
            </div>
        </>
    );
};

export default HoveEffectCard;