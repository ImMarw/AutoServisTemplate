<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';
	let visible = false;

	const specs = [
		{ title: 'Příprava a STK', desc: 'Kompletní kontrola a zajištění technické kontroly bez vašich starostí.' },
		{ title: 'Rozvody a spojky', desc: 'Odborná výměna rozvodových sad a spojek s tovární zárukou.' },
		{ title: 'Brzdové systémy', desc: 'Servis brzd na špičkových komponentech ATE a Brembo pro váš bezpečný návrat.' },
		{ title: 'Čištění DPF', desc: 'Profesionální dekarbonizace a čištění filtrů pevných částic moderní metodou.' }
	];
</script>

<section class="py-24 bg-white" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="flex flex-col md:flex-row justify-between items-end mb-16" in:fly={{ y: 30, duration: 800 }}>
				<div class="max-w-2xl">
					<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Naše expertíza</span>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Nejčastější opravy</h2>
				</div>
				<a href="/sluzby" class="mt-6 md:mt-0 text-gray-900 font-semibold uppercase tracking-wider text-sm pb-1 border-b-2 border-primary hover:text-primary transition-colors flex items-center group">
					Kompletní služby
					<svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</a>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each specs as spec, i}
					<div in:fly={{ y: 40, duration: 800, delay: i * 150 }} class="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group">
						<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{spec.title}</h3>
						<p class="text-gray-600 text-sm leading-relaxed">{spec.desc}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>