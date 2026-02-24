<script>
	import { fly } from 'svelte/transition';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Ceník služeb | Apex Motors</title>
	<meta name="description" content="Transparentní ceník údržby a oprav." />
</svelte:head>

<div class="pt-40 pb-20 bg-dark text-center px-4">
	<h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" in:fly={{ y: 20, duration: 800 }}>Transparentní Ceník</h1>
	<p class="text-lg text-gray-400 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800, delay: 200 }}>Žádné skryté poplatky. Vždy víte, za co platíte.</p>
</div>

<section class="py-24 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

		<div class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
				<span class="w-10 h-10 rounded bg-primary text-white flex items-center justify-center mr-4 text-sm shadow-md shadow-primary/30">01</span>
				Hodinové sazby
			</h2>
			<div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
				<table class="w-full text-left border-collapse">
					<tbody class="divide-y divide-gray-200">
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Základní mechanické práce</td>
						<td class="py-5 px-6 text-right font-bold text-primary text-lg">1 200 Kč / h</td>
					</tr>
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Diagnostika a elektroinstalace</td>
						<td class="py-5 px-6 text-right font-bold text-primary text-lg">1 500 Kč / h</td>
					</tr>
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Složité opravy motorů a převodovek</td>
						<td class="py-5 px-6 text-right font-bold text-primary text-lg">1 800 Kč / h</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
				<span class="w-10 h-10 rounded bg-dark text-white flex items-center justify-center mr-4 text-sm shadow-md shadow-dark/30">02</span>
				Časté úkony (orientační ceny prací)
			</h2>
			<div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
				<table class="w-full text-left border-collapse">
					<tbody class="divide-y divide-gray-200">
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Vyčtení paměti závad (diagnostika)</td>
						<td class="py-5 px-6 text-right font-bold text-lg">800 Kč</td>
					</tr>
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Základní servis klimatizace (vč. chladiva R134a do 500g)</td>
						<td class="py-5 px-6 text-right font-bold text-lg">1 500 Kč</td>
					</tr>
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Měření a seřízení 3D geometrie</td>
						<td class="py-5 px-6 text-right font-bold text-lg">1 200 Kč</td>
					</tr>
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="py-5 px-6 font-medium text-gray-900">Příprava a zajištění STK a EMISÍ</td>
						<td class="py-5 px-6 text-right font-bold text-lg">od 3 500 Kč</td>
					</tr>
					</tbody>
				</table>
			</div>
			<p class="text-sm text-gray-500 mt-6 leading-relaxed">* Všechny uvedené ceny jsou bez DPH 21%. Konečná cena se odvíjí od konkrétního modelu vozu a rozsahu poškození. Vždy vám předem zavoláme pro schválení kalkulace.</p>
		</div>
	</div>
</section>

<Contact />