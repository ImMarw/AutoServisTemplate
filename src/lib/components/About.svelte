<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly, fade } from 'svelte/transition';

	let visible = false;
</script>

<section id="o-nas" class="py-32 bg-white" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div in:fly={{ x: -50, duration: 1000 }}>
					<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Kdo jsme</span>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Klinika pro váš stroj</h2>
					<p class="text-lg text-gray-600 mb-6 leading-relaxed">
						Náš prostor nevypadá jako běžný autoservis. Věříme, že špičková práce vyžaduje špičkové prostředí. Naše dílna připomíná spíše operační sál – absolutní čistota, nejmodernější diagnostické přístroje a nástroje kalibrované s chirurgickou přesností.
					</p>
					<p class="text-lg text-gray-600 mb-10 leading-relaxed">
						Tým vede hlavní technik s 15 lety zkušeností ze závodních stájí Porsche a BMW. S vaším vozem nebudeme experimentovat, budeme přesně vědět, co potřebuje.
					</p>
					<div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
						<div>
							<span class="block text-4xl font-bold text-gray-900 mb-2">15+</span>
							<span class="text-sm text-gray-500 uppercase tracking-wider">Let zkušeností</span>
						</div>
						<div>
							<span class="block text-4xl font-bold text-gray-900 mb-2">100%</span>
							<span class="text-sm text-gray-500 uppercase tracking-wider">Garance kvality</span>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4" in:fly={{ x: 50, duration: 1000, delay: 200 }}>
					<img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1000&auto=format&fit=crop" alt="Čistá dílna" class="w-full h-64 object-cover rounded-lg shadow-md" />
					<img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" alt="Mechanik při práci" class="w-full h-64 object-cover rounded-lg shadow-md mt-8" />
				</div>
			</div>
		{/if}
	</div>
</section>