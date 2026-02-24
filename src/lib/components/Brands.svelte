<script>
	const brands = ['Bosch', 'ATE', 'Brembo', 'LUK', 'SKF', 'Mann Filter', 'Castrol', 'Motul', 'Bosch', 'ATE', 'Brembo', 'LUK'];
</script>

<section class="py-12 bg-[#050505] border-b border-gray-900 overflow-hidden flex flex-col items-center">
	<p class="text-gray-500 text-sm uppercase tracking-widest mb-8 font-medium">Pracujeme výhradně s originálními díly</p>
	<div class="relative w-full max-w-7xl mx-auto flex overflow-hidden">
		<div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
		<div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

		<div class="flex space-x-16 animate-marquee whitespace-nowrap items-center">
			{#each brands as brand}
				<span class="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-tighter hover:text-gray-600 transition-colors cursor-default">{brand}</span>
			{/each}
		</div>
	</div>
</section>