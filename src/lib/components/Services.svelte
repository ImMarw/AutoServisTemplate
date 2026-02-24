<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';

	let visible = false;

	const services = [
		{ title: 'Garanční a sezónní prohlídky', desc: 'Kompletní diagnostika, proplach motoru a výměna kapalin s využitím špičkových maziv specifikovaných výrobcem.', price: 'od 4 500 Kč' },
		{ title: 'Opravy motorů a převodovek', desc: 'Specializujeme se na generální opravy vysokoobjemových motorů a precizní servis dvouspojkových převodovek.', price: 'Hodinová sazba: 1 800 Kč' },
		{ title: 'Detailing a keramika', desc: 'Vícekrokové leštění laku, aplikace prémiové keramické ochrany s výdrží až 5 let pro dokonalý zrcadlový lesk.', price: 'od 15 000 Kč' }
	];
</script>

<section id="sluzby" class="py-32 bg-gray-50" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="text-center max-w-3xl mx-auto mb-20" in:fly={{ y: 30, duration: 800 }}>
				<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Naše expertíza</span>
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Prémiové Služby & Ceník</h2>
				<div class="w-24 h-1 bg-primary mx-auto mt-8"></div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each services as service, i}
					<div in:fly={{ y: 50, duration: 800, delay: i * 200 }} class="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
						<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
						<p class="text-gray-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
						<div class="pt-6 border-t border-gray-100 mt-auto">
							<span class="block text-sm text-gray-400 uppercase tracking-wider mb-1">Cena</span>
							<span class="text-xl font-bold text-gray-900">{service.price}</span>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-16 text-center" in:fly={{ y: 30, duration: 800, delay: 600 }}>
				<p class="text-gray-500 mb-6 text-sm">Ceny jsou uvedeny bez DPH. Pro přesnou kalkulaci nás prosím kontaktujte.</p>
				<a href="#kontakt" class="text-gray-900 font-semibold uppercase tracking-wider text-sm pb-1 border-b-2 border-primary hover:text-primary transition-colors">Vyžádat individuální nacenění</a>
			</div>
		{/if}
	</div>
</section>