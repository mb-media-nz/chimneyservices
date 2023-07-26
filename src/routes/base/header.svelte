<script>
	import { onMount } from 'svelte';
	import { updateActiveMenu } from '../../lib/common';
	
	onMount(async () => {
		updateActiveMenu(window.location.pathname)

		const mobileMenu = document.querySelector("#mobile-menu-container")
		if (mobileMenu) {
			mobileMenu.style.display = "";
		}
	});

	// Create menu links
	const links = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'FAQ',
			href: '/faq'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<div class="sticky top-0 left-0 z-50 bg-white drop-shadow-md">
	<nav class="flex justify-between p-6 max-w-screen-xl mx-auto">
		<div>
			<a href="/"
				><img src="/logo-258.webp" height=56 alt="Murray's Chimney Services Logo" class="max-h-14" /></a
			>
		</div>

		<div class="h-10">
			<div class="relative xmd:hidden">
				<!-- Hamburger Menu -->
				<div id="nav-icon">
					<span />
					<span />
					<span />
				</div>
			</div>
			<ul class="hidden xmd:flex p-4 font-heading uppercase items-center justify-center">
				{#each links as link}
					<li
						class="nav-li mx-4 transition-colors text-gray-800 hover:text-gray-600 tracking-wider"
					>
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
				<li
					class="mx-4 transition-colors text-white bg-redTheme hover:bg-redThemeDark px-4 py-2 rounded-3xl cursor-pointer tracking-widest"
				>
					<a href="tel:+64-800-132-046">0800 132 046</a>
				</li>
			</ul>
		</div>
	</nav>

	<!-- Mobile Menu -->
	<div id="mobile-menu-container" class="relative" style="display: none;">
		<ul
			class="mobile-menu z-20 absolute top-0 left-0 w-full bg-gray-100 flex flex-col xmd:hidden p-4 font-heading uppercase items-center justify-center py-10"
		>
			{#each links as link}
				<li
					class="nav-li mx-4 transition-colors text-gray-800 hover:text-gray-600 tracking-wider mb-4"
				>
					<a href={link.href}>{link.name}</a>
				</li>
			{/each}
			<li
				class="mx-4 transition-colors text-white bg-redTheme hover:bg-redThemeDark px-4 py-2 rounded-3xl cursor-pointer tracking-widest"
			>
				<a href="tel:+64-800-132-046">0800 132 046</a>
			</li>
		</ul>
	</div>
</div>

<style>
	nav .active {
		color: white;
	}
</style>
