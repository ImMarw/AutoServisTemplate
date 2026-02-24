<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main class="min-h-screen bg-white">
	<slot />
</main>

<Footer />