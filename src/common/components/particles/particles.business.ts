import { MutableRefObject } from "react";

export class Particle {
    positionX: number;
    positionY: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.positionX = Math.floor(Math.random() * canvasWidth);
        this.positionY = Math.floor(Math.random() * canvasHeight);
        this.translateX = 0;
        this.translateY = 0;
        this.size = Math.floor(Math.random() * 2) + 0.1;
        this.alpha = 0;
        this.targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        this.dx = (Math.random() - 0.5) * 0.2;
        this.dy = (Math.random() - 0.5) * 0.2;
        this.magnetism = 0.1 + Math.random() * 4;
    }
}

export const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
};

export const drawParticle = (
    devicePixelRatio: number,
    particle: Particle,
    context: MutableRefObject<CanvasRenderingContext2D | null>
) => {
    if (context.current) {
        const { positionX, positionY, translateX, translateY, size, alpha } = particle;
        context.current.translate(translateX, translateY);
        context.current.beginPath();
        context.current.arc(positionX, positionY, size, 0, 2 * Math.PI);
        context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        context.current.fill();
        context.current.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }
};

export const updateAlphaValue = (
    particle: Particle,
    currentCanvasSize: {
        width: number;
        height: number;
    }
) => {
    const edge = [
        particle.positionX + particle.translateX - particle.size,
        currentCanvasSize.width - particle.positionX - particle.translateX - particle.size,
        particle.positionY + particle.translateY - particle.size,
        currentCanvasSize.height -
        particle.positionY -
        particle.translateY -
        particle.size,
    ];
    const closestEdge = edge.reduce((a, b) => Math.min(a, b));
    const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
    if (remapClosestEdge > 1) {
        particle.alpha += 0.02;
        if (particle.alpha > particle.targetAlpha) {
            particle.alpha = particle.targetAlpha;
        }
    } else {
        particle.alpha = particle.targetAlpha * remapClosestEdge;
    }
};

export const moveParticle = (
    particle: Particle,
    currentMouse: {
        positionX: number;
        positionY: number;
    },
    staticity: number,
    ease: number
) => {
    particle.positionX += particle.dx;
    particle.positionY += particle.dy;
    particle.translateX +=
        (currentMouse.positionX / (staticity / particle.magnetism) - particle.translateX) /
        ease;
    particle.translateY +=
        (currentMouse.positionY / (staticity / particle.magnetism) - particle.translateY) /
        ease;
};