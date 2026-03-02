<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';
	let visible = false;

	const equipments = [
		{ title: '3D Laserová geometrie', desc: 'Milimetrová přesnost nastavení podvozku pro dokonalé jízdní vlastnosti.', img: '/img/audi.jpg' },
		{ title: 'Originální diagnostika', desc: 'Používáme certifikovaný software pro přesnou identifikaci závad elektroniky.', img: '/img/audi.jpg' },
		{ title: 'Servis klimatizací', desc: 'Plnění chladivem R134a i novým 1234yf, dezinfekce ozonem a oprava úniků.', img: '/img/audi.jpg' },
		{ title: 'Moderní pneuservis', desc: 'Šetrné přezouvání nízkoprofilových a RunFlat pneumatik bez poškození ráfku.', img: '/img/audi.jpg' }
	];
</script>

<section class="py-24 bg-gray-50" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="mb-16" in:fly={{ y: 30, duration: 800 }}>
				<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Zázemí</span>
				<h2 class="text-4xl font-bold text-gray-900 tracking-tight">Špičkové technologie</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each equipments as eq, i}
					<div in:fly={{ y: 40, duration: 800, delay: i * 150 }} class="group relative overflow-hidden rounded-2xl h-80">
						<div class="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500"></div>
						<img src={eq.img} alt={eq.title} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
						<div class="absolute inset-0 z-20 flex flex-col justify-end p-8">
							<h3 class="text-2xl font-bold text-white mb-2">{eq.title}</h3>
							<p class="text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{eq.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>