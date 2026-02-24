<script>
	import { fly } from 'svelte/transition';
	import Contact from '$lib/components/Contact.svelte';

	const galleryImages = [
		{
			src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop',
			title: 'Diagnostika motoru V8',
			category: 'Mechanika'
		},
		{
			src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop',
			title: 'Kompletní repas podvozku',
			category: 'Podvozek'
		},
		{
			src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1000&auto=format&fit=crop',
			title: 'Příprava na sezónu',
			category: 'Údržba'
		},
		{
			src: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1000&auto=format&fit=crop',
			title: 'Detailing a keramika',
			category: 'Kosmetika'
		},
		{
			src: 'https://images.unsplash.com/photo-1503328427499-d9dcab29e956?q=80&w=1000&auto=format&fit=crop',
			title: 'Servis brzdového systému',
			category: 'Bezpečnost'
		},
		{
			src: 'https://images.unsplash.com/photo-1599256865203-12d8a0f907e8?q=80&w=1000&auto=format&fit=crop',
			title: 'Moderní plnění klimatizace',
			category: 'Klimatizace'
		}
	];
</script>

<svelte:head>
	<title>Galerie Naší Práce | Apex Motors</title>
	<meta name="description" content="Prohlédněte si ukázky naší práce. Od složitých mechanických oprav až po detailing a běžnou údržbu." />
</svelte:head>

<div class="pt-40 pb-20 bg-dark text-center px-4">
	<h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" in:fly={{ y: 20, duration: 800 }}>Ukázky naší práce</h1>
	<p class="text-lg text-gray-400 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800, delay: 200 }}>Neschováváme se za zavřenými dveřmi. Prohlédněte si reálné výsledky z naší dílny.</p>
</div>

<section class="py-24 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each galleryImages as img, i}
				<div in:fly={{ y: 40, duration: 800, delay: i * 100 }} class="group relative overflow-hidden rounded-xl h-80 bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">

					<img src={img.src} alt={img.title} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />

					<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

					<div class="absolute inset-0 z-10 flex flex-col justify-end p-6">
						<span class="text-primary text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">{img.category}</span>
						<h3 class="text-xl font-bold text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{img.title}</h3>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<p class="text-gray-500 mb-6">Chcete vidět více? Sledujte nás na našich sociálních sítích, kam pravidelně přidáváme novinky z dílny.</p>
			<div class="flex justify-center space-x-4">
				<a href="#" class="px-6 py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors">Instagram</a>
				<a href="#" class="px-6 py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors">Facebook</a>
			</div>
		</div>
	</div>
</section>

<Contact />