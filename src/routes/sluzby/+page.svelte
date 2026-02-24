<script>
	import { fly } from 'svelte/transition';
	import Contact from '$lib/components/Contact.svelte';

	const categories = [
		{
			title: "Mechanické práce",
			items: [
				{ name: "Výměny rozvodových sad a vodních pump", desc: "Zásadní úkon pro životnost motoru. Používáme výhradně originální nebo prémiové OEM sady." },
				{ name: "Opravy brzdových systémů", desc: "Výměny kotoučů, destiček, brzdové kapaliny a repase třmenů. Měříme házivost kotoučů." },
				{ name: "Servis spojek a převodovek", desc: "Výměny spojkových sad, dvouhmotových setrvačníků a výplachy automatických převodovek." },
				{ name: "Podvozky a tlumiče", desc: "Výměny čepů, ramen, tlumičů a pružin. Následné seřízení geometrie." }
			]
		},
		{
			title: "Diagnostika a Elektro",
			items: [
				{ name: "Počítačová diagnostika", desc: "Čtení chybových kódů, logování dat za jízdy a kódování jednotek." },
				{ name: "Odhalování složitých závad", desc: "Práce s osciloskopem pro přesné určení závady na elektroinstalaci." },
				{ name: "Servis DPF / FAP", desc: "Diagnostika zaplnění, nucené regenerace a zajištění strojového čištění." },
				{ name: "Výměna a kódování autobaterií", desc: "Pro moderní vozy se systémy Start-Stop a power managementem." }
			]
		}
	];
</script>

<svelte:head>
	<title>Naše Služby | Apex Motors</title>
	<meta name="description" content="Kompletní přehled mechanických a diagnostických prací v našem autoservisu." />
</svelte:head>

<div class="pt-40 pb-20 bg-dark text-center px-4">
	<h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" in:fly={{ y: 20, duration: 800 }}>Kompletní přehled služeb</h1>
	<p class="text-lg text-gray-400 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800, delay: 200 }}>Od běžné údržby až po složité generální opravy motorů.</p>
</div>

<section class="py-24 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="space-y-20">
			{#each categories as category}
				<div>
					<h2 class="text-3xl font-bold text-gray-900 mb-10 pb-4 border-b-2 border-primary inline-block">{category.title}</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						{#each category.items as item}
							<div class="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
								<h3 class="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
								<p class="text-gray-600 leading-relaxed">{item.desc}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<Contact />