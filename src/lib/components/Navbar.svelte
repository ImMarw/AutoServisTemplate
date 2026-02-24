<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let scrolled = false;

	// Dynamická kontrola: Navigace bude plně tmavá pokud jsme scrollovali,
	// NEBO pokud se nacházíme na jakékoliv jiné podstránce než je domovská (/).
	$: isSolid = scrolled || $page.url.pathname !== '/';

	onMount(() => {
		const handleScroll = () => { scrolled = window.scrollY > 50; };
		window.addEventListener('scroll', handleScroll);

		// Zkontrolovat pozici rovnou při načtení
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed w-full z-50 transition-all duration-300 {isSolid ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center">
			<div class="flex-shrink-0">
				<a href="/" class="text-white font-bold text-2xl tracking-tighter">
					APEX<span class="text-primary">MOTORS</span>
				</a>
			</div>
			<div class="hidden md:flex space-x-6 lg:space-x-8 items-center">
				<a href="/" class="text-sm font-medium tracking-wide uppercase transition-colors {$page.url.pathname === '/' ? 'text-primary' : 'text-gray-300 hover:text-white'}">Domů</a>
				<a href="/sluzby" class="text-sm font-medium tracking-wide uppercase transition-colors {$page.url.pathname === '/sluzby' ? 'text-primary' : 'text-gray-300 hover:text-white'}">Služby</a>
				<a href="/galerie" class="text-sm font-medium tracking-wide uppercase transition-colors {$page.url.pathname === '/galerie' ? 'text-primary' : 'text-gray-300 hover:text-white'}">Galerie</a>
				<a href="/cenik" class="text-sm font-medium tracking-wide uppercase transition-colors {$page.url.pathname === '/cenik' ? 'text-primary' : 'text-gray-300 hover:text-white'}">Ceník</a>
				<a href="/#kontakt" class="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 text-sm font-medium uppercase">
					Rezervace
				</a>
			</div>
		</div>
	</div>
</nav>