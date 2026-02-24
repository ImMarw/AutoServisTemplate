let observer;

function getObserver() {
	if (!observer && typeof window !== 'undefined') {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.dispatchEvent(new CustomEvent('enterViewport'));
						// Po zobrazení přestat sledovat, aby animace proběhla jen jednou
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px', threshold: 0.15 }
		);
	}
	return observer;
}

export function viewport(element) {
	const obs = getObserver();
	if (obs) obs.observe(element);

	return {
		destroy() {
			if (obs) obs.unobserve(element);
		}
	};
}
