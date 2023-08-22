'use client';

import { useRef, useEffect } from 'react';
import { useMousePosition, useWindowResize } from './particles.hook';
import * as particlesBusiness from './particles.business';
import { ParticlesProps } from './particles.model';
import { isParticleOutOfCanvasBounds } from './particles.validation';

export default function Particles({
	className = '',
	quantity = 30,
	staticity = 50,
	ease = 50,
	refresh = false,
}: ParticlesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasContainerRef = useRef<HTMLDivElement>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const particles = useRef<particlesBusiness.Particle[]>([]);
	const mousePosition = useMousePosition();
	const mouse = useRef<{ positionX: number; positionY: number }>({ positionX: 0, positionY: 0 });
	const canvasSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
	const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

	const onMouseMove = () => {
		if (canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const { width: w, height: h } = canvasSize.current;
			const x = mousePosition.x - rect.left - w / 2;
			const y = mousePosition.y - rect.top - h / 2;
			const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
			if (inside) {
				mouse.current.positionX = x;
				mouse.current.positionY = y;
			}
		}
	};

	const resizeCanvas = () => {
		if (canvasContainerRef.current && canvasRef.current && context.current) {
			particles.current.length = 0;
			canvasSize.current.width = canvasContainerRef.current.offsetWidth;
			canvasSize.current.height = canvasContainerRef.current.offsetHeight;
			canvasRef.current.width = canvasSize.current.width * devicePixelRatio;
			canvasRef.current.height = canvasSize.current.height * devicePixelRatio;
			canvasRef.current.style.width = `${canvasSize.current.width}px`;
			canvasRef.current.style.height = `${canvasSize.current.height}px`;
			context.current.scale(devicePixelRatio, devicePixelRatio);
		}
	};

	const clearContext = () => {
		if (context.current) {
			context.current.clearRect(0, 0, canvasSize.current.width, canvasSize.current.height);
		}
	};

	const drawParticles = () => {
		clearContext();
		particles.current = Array.from(
			{ length: quantity },
			() => new particlesBusiness.Particle(canvasSize.current.width, canvasSize.current.height)
		);
		particles.current.forEach((particle) => particlesBusiness.drawParticle(devicePixelRatio, particle, context));
	};

	const animate = () => {
		clearContext();
		particles.current.forEach((particle: particlesBusiness.Particle, index: number) => {
			// Handle the alpha value
			particlesBusiness.updateAlphaValue(particle, canvasSize.current);
			particlesBusiness.moveParticle(particle, mouse.current, staticity, ease);
			if (isParticleOutOfCanvasBounds(particle, canvasSize)) {
				particles.current[index] = new particlesBusiness.Particle(
					canvasSize.current.width,
					canvasSize.current.height
				);
			}
			particlesBusiness.drawParticle(devicePixelRatio, particle, context);
		});
		window.requestAnimationFrame(animate);
	};

	const initCanvas = () => {
		resizeCanvas();
		drawParticles();
	};

	useWindowResize(initCanvas);

	useEffect(() => {
		if (canvasRef.current) {
			context.current = canvasRef.current.getContext('2d');
		}
		initCanvas();
		animate();
	}, []);

	useEffect(() => {
		onMouseMove();
	}, [mousePosition.x, mousePosition.y]);

	useEffect(() => {
		initCanvas();
	}, [refresh]);

	return (
		<div className={className} ref={canvasContainerRef} aria-hidden="true">
			<canvas ref={canvasRef} />
		</div>
	);
}
