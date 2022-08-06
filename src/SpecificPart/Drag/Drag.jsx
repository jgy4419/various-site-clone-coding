import React, { useCallback } from 'react';
import './Drag.scss';
import { useDropzone } from 'react-dropzone';
const Drag = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});
    return (
        <div className="drag_container" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className="drag_inner" style={{opacity: .5}}>
                        <p>Drop the files here !</p>
                    </div> :
                    <div className="drag_inner">
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
            }
        </div>
    );
};

export default Drag;
