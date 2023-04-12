import React, {useState} from 'react';
import './Login2.scss'

const strengthLabels = [
    "weak", "medium", "strong"
];
const Login2 = () => {
    const [strength, setStrength] = useState("");

    const gapStrength = (password) => {
        let strengthIndicator = -1;
        let [upper, lower, numbers] = [false, false, false];

        for(let index = 0; index < password.length; index++) {
            const char = password.charCodeAt(index);
            console.log(char);
            // 대문자 A ~ Z까지
            if(!upper && char >= 65 && char <= 90) {
                upper = true; strengthIndicator++;
            }
            // 0 ~ 9까지
            if(!numbers && char >= 48 && char <= 57) {
                numbers = true; strengthIndicator++;
            }
            // 소문자 a ~ z
            if(!lower && char >= 97 && char <= 122) {
                lower = true; strengthIndicator++;
            }
        }
        setStrength(strengthLabels[strengthIndicator]);
    }
    const handleChange = (event) => {
        gapStrength(event.target.value);
    }
    return (
        <>
            <div className="control">
                <input 
                    name="password"
                    type="password"
                    spellCheck="false"
                    className='control'
                    placeholder='Passwords'
                    onChange={handleChange}
                />
                {/* 
                    strengthIndicator가 0이면 weak (33.33%)
                    strengthIndicator가 1이면 meduium (66.66%)
                    strengthIndicator가 2이면 strong (100%)
                 */}
                <div className={`bars ${strength}`}>
                    <div></div>
                </div>
                <div className="strength">
                    {
                        strength &&
                        <>{strength} password</>
                    }
                </div>
            </div>
        </>
    );
};

export default Login2;