<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';

	let visible = false;

	const usps = [
		{ title: 'Náhradní vůz', desc: 'Po dobu servisu vám zapůjčíme prémiový náhradní vůz zcela zdarma.', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
		{ title: 'Video-report', desc: 'Transparentnost je základ. Z každé opravy obdržíte detailní videozáznam.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
		{ title: 'Experti', desc: 'Naši mechanici jsou pravidelně certifikováni samotnými automobilkami.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
		{ title: 'Garance termínu', desc: 'Čas je luxus. Vždy dodržíme sjednaný termín předání vozu.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
	];
</script>

<section class="py-24 bg-dark relative z-20 border-b border-gray-900" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
				{#each usps as usp, i}
					<div in:fly={{ y: 40, duration: 800, delay: i * 150 }} class="flex flex-col items-start group">
						<div class="w-14 h-14 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300">
							<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={usp.icon}></path>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-white mb-3 tracking-wide">{usp.title}</h3>
						<p class="text-gray-400 leading-relaxed text-sm">{usp.desc}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>