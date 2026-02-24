<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';
	let visible = false;

	const reviews = [
		{ name: 'David K.', car: 'BMW M4', text: 'Jediný servis, kde se nebojím nechat své auto. Úroveň komunikace a fotodokumentace z opravy je neuvěřitelná.' },
		{ name: 'Petr S.', car: 'Porsche 911', text: 'Vyřešili problém s převodovkou, který v autorizáku chtěli řešit pouze kompletní výměnou. Tady mají zlaté ruce.' },
		{ name: 'Jan M.', car: 'Audi RS6', text: 'Keramická ochrana laku provedena s naprostou precizností. Auto vypadá lépe, než když vyjelo ze showroomu.' }
	];
</script>

<section class="py-24 bg-dark text-white border-t border-gray-900" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

				<div class="lg:col-span-1 text-center lg:text-left" in:fly={{ x: -30, duration: 800 }}>
					<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Sociální důkaz</span>
					<h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Co o nás říkají klienti</h2>

					<div class="flex items-center justify-center lg:justify-start space-x-4 mb-4">
						<span class="text-6xl font-bold text-white">4.9</span>
						<div class="flex flex-col">
							<div class="flex text-primary mb-1">
								{#each Array(5) as _}
									<svg class="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
							</div>
							<span class="text-sm text-gray-400 font-medium">Na Google Maps</span>
						</div>
					</div>

					<p class="text-gray-400 leading-relaxed mb-8">
						Hodnocení je založeno na více než <strong>150+ ověřených recenzích</strong> od našich reálných zákazníků. Neděláme kompromisy v kvalitě a naši klienti to oceňují.
					</p>

					<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-white border border-gray-700 hover:border-primary hover:bg-primary/10 transition-colors px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide">
						Zobrazit všechny recenze
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
					</a>
				</div>

				<div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each reviews as review, i}
						<div in:fly={{ y: 40, duration: 800, delay: 200 + (i * 150) }} class="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors relative flex flex-col justify-between {i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}">
							<div class="flex text-primary mb-6">
								{#each Array(5) as _}
									<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
							</div>
							<p class="text-gray-300 italic mb-8 leading-relaxed">"{review.text}"</p>
							<div>
								<p class="font-bold text-white uppercase tracking-wider text-sm">{review.name}</p>
								<p class="text-xs text-gray-500 mt-1 uppercase">{review.car}</p>
							</div>
						</div>
					{/each}
				</div>

			</div>
		{/if}
	</div>
</section>