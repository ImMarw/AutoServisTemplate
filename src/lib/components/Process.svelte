<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';
	let visible = false;

	const steps = [
		{ num: '01', title: 'Přijetí vozu', desc: 'Vyslechneme vás, provedeme vizuální prohlídku a pečlivě sepíšeme zakázku.' },
		{ num: '02', title: 'Diagnostika a cena', desc: 'Zjistíme závadu a zavoláme vám přesnou cenu. Neděláme práce bez schválení.' },
		{ num: '03', title: 'Odborná oprava', desc: 'Auto opravíme pomocí ověřených dílů, postupů výrobce a moderního vybavení.' },
		{ num: '04', title: 'Předání', desc: 'Vysvětlíme, co se přesně dělalo, předáme staré díly a funkční vůz.' }
	];
</script>

<section class="py-32 bg-dark text-white relative border-t border-gray-900" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="text-center max-w-3xl mx-auto mb-20" in:fly={{ y: 30, duration: 800 }}>
				<span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Transparentnost</span>
				<h2 class="text-4xl md:text-5xl font-bold tracking-tight">Jak u nás probíhá servis</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
				<div class="hidden md:block absolute top-12 left-0 w-full h-px bg-gray-800 z-0"></div>

				{#each steps as step, i}
					<div in:fly={{ y: 50, duration: 800, delay: i * 200 }} class="relative z-10 flex flex-col items-center text-center">
						<div class="w-24 h-24 rounded-full bg-[#111] border-2 border-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
							<span class="text-3xl font-bold text-white">{step.num}</span>
						</div>
						<h3 class="text-xl font-bold text-white mb-4">{step.title}</h3>
						<p class="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>