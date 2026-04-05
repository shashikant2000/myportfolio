import { useEffect, useRef } from 'react';

const useOverscrollStretch = (maxStretch = 80) => {
	const isOverscrolling = useRef(false);
	const startY = useRef(0);

	useEffect(() => {
		const root = document.getElementById('root');
		if (!root) return;

		let currentStretch = 0;
		let rafId = null;

		const ease = (val) => {
			// Rubber-band easing — diminishing returns as you pull further
			return maxStretch * (1 - Math.exp(-val / (maxStretch * 3)));
		};

		const applyStretch = (amount) => {
			currentStretch = amount;
			root.style.transform = `scaleY(${1 + amount / window.innerHeight * 0.15})`;
			root.style.transformOrigin = amount > 0 ? 'top center' : 'bottom center';
		};

		const snapBack = () => {
			if (Math.abs(currentStretch) < 0.5) {
				root.style.transform = '';
				root.style.transformOrigin = '';
				currentStretch = 0;
				return;
			}
			currentStretch *= 0.85;
			applyStretch(currentStretch);
			rafId = requestAnimationFrame(snapBack);
		};

		const onWheel = (e) => {
			const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2;
			const atTop = window.scrollY <= 0;

			if (atBottom && e.deltaY > 0) {
				e.preventDefault();
				const stretch = ease(Math.abs(currentStretch) + Math.abs(e.deltaY));
				applyStretch(-stretch);
				isOverscrolling.current = true;
			} else if (atTop && e.deltaY < 0) {
				e.preventDefault();
				const stretch = ease(Math.abs(currentStretch) + Math.abs(e.deltaY));
				applyStretch(stretch);
				isOverscrolling.current = true;
			} else if (isOverscrolling.current) {
				isOverscrolling.current = false;
				cancelAnimationFrame(rafId);
				snapBack();
			}
		};

		const onWheelEnd = () => {
			if (isOverscrolling.current) {
				isOverscrolling.current = false;
				cancelAnimationFrame(rafId);
				snapBack();
			}
		};

		// Touch support
		const onTouchStart = (e) => {
			startY.current = e.touches[0].clientY;
		};

		const onTouchMove = (e) => {
			const deltaY = startY.current - e.touches[0].clientY;
			const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2;
			const atTop = window.scrollY <= 0;

			if (atBottom && deltaY > 0) {
				const stretch = ease(Math.abs(deltaY));
				applyStretch(-stretch);
				isOverscrolling.current = true;
			} else if (atTop && deltaY < 0) {
				const stretch = ease(Math.abs(deltaY));
				applyStretch(stretch);
				isOverscrolling.current = true;
			}
		};

		const onTouchEnd = () => {
			if (isOverscrolling.current) {
				isOverscrolling.current = false;
				cancelAnimationFrame(rafId);
				snapBack();
			}
		};

		let wheelTimer;
		const onWheelWrapper = (e) => {
			onWheel(e);
			clearTimeout(wheelTimer);
			wheelTimer = setTimeout(onWheelEnd, 150);
		};

		window.addEventListener('wheel', onWheelWrapper, { passive: false });
		window.addEventListener('touchstart', onTouchStart, { passive: true });
		window.addEventListener('touchmove', onTouchMove, { passive: true });
		window.addEventListener('touchend', onTouchEnd, { passive: true });

		return () => {
			window.removeEventListener('wheel', onWheelWrapper);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('touchend', onTouchEnd);
			cancelAnimationFrame(rafId);
			clearTimeout(wheelTimer);
			root.style.transform = '';
			root.style.transformOrigin = '';
		};
	}, [maxStretch]);
};

export default useOverscrollStretch;
