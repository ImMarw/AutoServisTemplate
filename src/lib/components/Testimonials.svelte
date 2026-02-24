<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';

	let visible = false;

	const reviews = [
		{ name: 'David K., BMW M4', text: 'Jediný servis, kde se nebojím nechat své auto. Úroveň komunikace a fotodokumentace z opravy je neuvěřitelná.' },
		{ name: 'Petr S., Porsche 911', text: 'Vyřešili problém s PDK převodovkou, který v autorizáku chtěli řešit pouze kompletní výměnou za nesmysl. Tady mají zlaté ruce.' },
		{ name: 'Jan M., Audi RS6', text: 'Keramická ochrana laku provedena s naprostou precizností. Auto vypadá lépe než když vyjelo ze showroomu.' }
	];
</script>

<section id="reference" class="py-32 bg-dark text-white" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="text-center max-w-3xl mx-auto mb-20" in:fly={{ y: 30, duration: 800 }}>
				<h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Důvěřují nám majitelé těch nejlepších vozů</h2>
				<div class="flex items-center justify-center space-x-2 text-primary">
					{#each Array(5) as _}
						<svg class="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
					{/each}
				</div>
				<p class="mt-4 text-gray-400">Hodnocení 4.9/5 na základě 120+ recenzí</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each reviews as review, i}
					<div in:fly={{ y: 50, duration: 800, delay: i * 200 }} class="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
						<div class="flex text-primary mb-4">
							{#each Array(5) as _}
								<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
							{/each}
						</div>
						<p class="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
						<p class="font-bold text-white uppercase tracking-wider text-sm">{review.name}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>