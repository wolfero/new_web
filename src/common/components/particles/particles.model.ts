export interface ParticlesProps {
    className: string;
    quantity: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
}

export type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
};

export interface MousePosition {
    x: number;
    y: number;
}

export const createEmptyMousePosition = (): MousePosition => ({
    x: 0,
    y: 0
})