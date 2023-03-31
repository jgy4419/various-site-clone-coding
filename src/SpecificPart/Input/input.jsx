import React, {useState} from 'react';
import './input.scss';

const Input = () => {
    const [inputData, setInputData] = useState('');
    return (
        <>
            <div className="input-container">
                <div className="input-group">
                    <input type="text" onChange={(e) => setInputData(e.target.value)}/>
                    {
                        inputData.length > 0
                        ? null
                        : <label>Endereco completo</label>
                    }
                </div> 
            </div>
        </>
    );
};

export default Input;