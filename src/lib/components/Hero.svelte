<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
	{#if mounted}
		<div class="absolute inset-0 z-0 animate-slow-zoom" in:fade={{duration: 1500}}>
			<div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-dark z-10"></div>
			<img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" alt="Prémiová dílna" class="w-full h-full object-cover" />
		</div>

		<div class="relative z-20 text-center px-4 max-w-5xl mx-auto w-full pt-20">
            <span class="block text-primary font-semibold tracking-widest uppercase mb-4 text-sm md:text-base" in:fly={{ y: 20, duration: 800, delay: 300 }}>
                Exkluzivní automobilová péče
            </span>
			<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight" in:fly={{ y: 30, duration: 1000, delay: 500 }}>
				Péče o váš vůz <br/>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">bez kompromisů.</span>
			</h1>
			<p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light" in:fly={{ y: 30, duration: 1000, delay: 700 }}>
				Jsme specializovaný servis pro prémiové a sportovní vozy. Vašemu autu poskytneme maximální péči, diskrétnost a špičkovou technologii.
			</p>
			<div in:fly={{ y: 30, duration: 1000, delay: 900 }}>
				<a href="#kontakt" class="inline-block bg-primary hover:bg-primary-hover text-white font-medium text-lg px-10 py-4 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
					Objednat do servisu
				</a>
			</div>
		</div>
	{/if}
</section>