import React, { useEffect } from 'react';
import { useSetResizeNeeded } from '../App/App';

import './ResizePixel.css';

const ResizePixel: React.FC = () => {
    const { resizeNeeded, setResizeNeeded } = useSetResizeNeeded();
    
    useEffect(() => {
        setResizeNeeded(!resizeNeeded);
    }, []);


    return (
        <div className="resize-pixel">
        </div>
    )
}

export default ResizePixel;