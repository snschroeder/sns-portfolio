import React, { useEffect } from 'react';
import { useSetResizeNeeded } from '../App/App';

import './ResizePixel.css';

const ResizePixel: React.FC = () => {
    const { setResizeNeeded } = useSetResizeNeeded();
    useEffect(() =>{
        setResizeNeeded(true);
    }, []);


    return (
        <div className="resize-pixel">
        </div>
    )
}

export default ResizePixel;