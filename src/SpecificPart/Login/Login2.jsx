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
            if(!upper && char >= 65 && char <= 90) {
                upper = true; strengthIndicator++;
            }
            if(!numbers && char >= 48 && char <= 57) {
                numbers = true; strengthIndicator++;
            }
            if(!lower && char >= 97 && char <= 122) {
                lower = true; strengthIndicator++;
            }
        }
        setStrength(strengthLabels[strengthIndicator])
    }
    const handleChange = (event) => {
        gapStrength(event.target.value)
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