import { useState, useEffect } from 'react';
import { MousePosition, createEmptyMousePosition } from './particles.model';

export function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>(createEmptyMousePosition);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mousePosition;
}

export const useWindowResize = (callback: () => void) => {
    useEffect(() => {
        window.addEventListener('resize', callback);
        return () => {
            window.removeEventListener('resize', callback);
        };
    }, [callback]);
};