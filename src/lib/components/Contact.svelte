<script>
	import { viewport } from '$lib/actions/viewport';
	import { fly } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let visible = false;

	// Stavy formuláře pro UI
	let loading = false;
	let success = false;
	let errorMessage = '';

	// Automatické formátování telefonního čísla (xxx xxx xxx)
	const handlePhoneInput = (event) => {
		let input = event.target;
		let cleaned = input.value.replace(/[^\d+]/g, '');
		let hasPlus = cleaned.startsWith('+');
		let numbersOnly = cleaned.replace(/\+/g, '');
		let formatted = numbersOnly.replace(/(\d{3})(?=\d)/g, '$1 ');
		input.value = (hasPlus ? '+' : '') + formatted;
	};

	// Automatické formátování SPZ/VIN (Max 17 znaků, velká písmena)
	const handleVinInput = (event) => {
		let input = event.target;
		let cleaned = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
		input.value = cleaned.slice(0, 17);
	};

	const submitHandler = () => {
		loading = true;
		success = false;
		errorMessage = '';

		return async ({ result, update }) => {
			loading = false;

			if (result.type === 'success') {
				success = true;
				update({ reset: true });
				setTimeout(() => { success = false; }, 5000);
			} else if (result.type === 'failure') {
				errorMessage = result.data?.message || 'Něco se pokazilo. Zkontrolujte údaje a zkuste to znovu.';
			} else if (result.type === 'error') {
				errorMessage = 'Chyba serveru. Zkontrolujte nastavení e-mailu.';
				console.error(result.error);
			} else {
				errorMessage = 'Neočekávaná chyba komunikace se serverem.';
			}
		};
	};
</script>

<section id="kontakt" class="py-32 bg-white" use:viewport on:enterViewport={() => visible = true}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

				<div in:fly={{ x: -50, duration: 1000 }} class="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
					<h2 class="text-3xl font-bold text-gray-900 mb-2">Rezervace termínu</h2>
					<p class="text-gray-500 mb-8">Zanechte nám na sebe kontakt, ozveme se vám do 30 minut.</p>

					{#if success}
						<div class="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-lg" in:fly={{y: -10, duration: 300}}>
							<p class="font-medium">Rezervace byla úspěšně odeslána!</p>
							<p class="text-sm mt-1">Náš technik se vám brzy ozve pro potvrzení termínu.</p>
						</div>
					{/if}

					{#if errorMessage}
						<div class="mb-6 p-4 bg-red-50 border-l-4 border-primary text-red-700 rounded-r-lg" in:fly={{y: -10, duration: 300}}>
							<p class="text-sm font-medium">{errorMessage}</p>
						</div>
					{/if}

					<form method="POST" action="/?/submit" use:enhance={submitHandler} class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Jméno a příjmení *</label>
								<input id="name" name="name" type="text" required class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Jan Novák">
							</div>
							<div>
								<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
								<input id="phone" name="phone" type="tel" on:input={handlePhoneInput} required class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+420 777 000 000">
							</div>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="brand" class="block text-sm font-medium text-gray-700 mb-2">Značka a model vozu</label>
								<input id="brand" name="brand" type="text" class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Např. Porsche 911">
							</div>
							<div>
								<label for="vin" class="block text-sm font-medium text-gray-700 mb-2">SPZ / VIN</label>
								<input id="vin" name="vin" type="text" maxlength="17" on:input={handleVinInput} class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="1A1 1111">
							</div>
						</div>

						<div>
							<label for="date" class="block text-sm font-medium text-gray-700 mb-2">Preferovaný termín</label>
							<input id="date" name="date" type="date" class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-600">
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Popis problému / Požadavek</label>
							<textarea id="message" name="message" rows="4" class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Krátce popište, s čím potřebujete pomoci..."></textarea>
						</div>

						<button type="submit" disabled={loading} class="w-full bg-dark hover:bg-gray-900 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group">
							{#if loading}
								<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Odesílám...
							{:else}
								<span class="group-hover:-translate-y-0.5 transition-transform duration-300">Odeslat nezávaznou poptávku</span>
							{/if}
						</button>
					</form>
				</div>

				<div in:fly={{ x: 50, duration: 1000, delay: 200 }} class="flex flex-col justify-center">
					<h3 class="text-3xl font-bold text-gray-900 mb-8">Přímý kontakt</h3>

					<div class="space-y-8 mb-12">
						<div class="flex items-start">
							<div class="flex-shrink-0 mt-1">
								<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
							</div>
							<div class="ml-4">
								<p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Volejte přímo technikovi</p>
								<a href="tel:+420777123456" class="text-3xl font-bold text-gray-900 hover:text-primary transition-colors block mt-1">+420 777 123 456</a>
							</div>
						</div>

						<div class="flex items-start">
							<div class="flex-shrink-0 mt-1">
								<svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.151.927 3.181 0 5.768-2.586 5.769-5.766 0-3.181-2.586-5.769-5.771-5.769zM16.02 14.262c-.2.597-1.15.155-1.597-.058-.452-.213-1.642-.871-2.493-2.12-.851-1.249-1.229-1.954-1.229-2.618 0-.664.316-1.144.502-1.341.186-.197.433-.244.597-.244.164 0 .323.003.456.008.133.005.297-.052.482.385.186.438.643 1.543.689 1.636.046.094.077.202.016.326-.062.124-.108.212-.217.341-.108.129-.23.282-.325.385-.108.118-.225.244-.108.452.116.208.52 .866 1.114 1.393.766.681 1.408.892 1.603.992.193.1.309.083.425-.05.116-.134.498-.58.63-.777.132-.198.264-.165.441-.1.178.066 1.12.529 1.313.628.194.099.324.149.371.231.047.082.047.474-.153 1.071z"/></svg>
							</div>
							<div class="ml-4">
								<p class="text-sm font-medium text-gray-500 uppercase tracking-wider">WhatsApp podpora</p>
								<a href="https://wa.me/420777123456" target="_blank" rel="noopener noreferrer" class="text-xl font-bold text-gray-900 hover:text-green-500 transition-colors block mt-1">Zaslat zprávu / fotku</a>
							</div>
						</div>

						<div class="flex items-start">
							<div class="flex-shrink-0 mt-1">
								<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
							</div>
							<div class="ml-4">
								<p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Adresa dílny</p>
								<p class="text-lg text-gray-900 mt-1 font-medium">Na Břehu 63, Liberec</p>
							</div>
						</div>
					</div>

					<div class="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
						<iframe
							title="Mapa autoservisu Apex Motors"
							width="100%"
							height="100%"
							frameborder="0"
							style="border:0"
							src="https://www.google.com/maps/embed/v1/place?key=ZDE_VLOZTE_SVOJ_API_KEY_NEBO_POUZIJTE_IFRAME_NIZKE&q=Na+Břehu+63,Liberec"
							class="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
							allowfullscreen
						></iframe>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.341113280058!2d15.088656177004655!3d50.75073126581977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47094dadd4d46d0d%3A0xc31616150e0600b7!2zTmEgQsWZZWh1IDYzLCA0NjMgMTEgTGliZXJlYy1MaWJlcmVjIDMw!5e0!3m2!1scs!2scz!4v1708806200000!5m2!1scs!2scz"
							width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
							class="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
						></iframe>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>