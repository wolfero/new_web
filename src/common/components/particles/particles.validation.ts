import { MutableRefObject } from "react";
import { Particle } from "./particles.business";

export const isParticleOutOfCanvasBounds = (
    particle: Particle,
    canvasSize: MutableRefObject<{
        width: number;
        height: number;
    }>
): boolean => {
    const outOfXBounds =
        particle.positionX < -particle.size ||
        particle.positionX > canvasSize.current.width + particle.size;
    const outOfYBounds =
        particle.positionY < -particle.size ||
        particle.positionY > canvasSize.current.height + particle.size;

    return outOfXBounds || outOfYBounds;
};