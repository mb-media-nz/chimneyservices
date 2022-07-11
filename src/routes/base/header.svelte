<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		// Check url and set link to active
		const links = document.querySelectorAll('.nav-li a');
		const url = window.location.pathname;
		console.log(url);
		links.forEach((link) => {
			link.classList.remove('text-gray-500');
			if (link.getAttribute('href') === url) {
				link.classList.add('text-gray-500');
			}
		});

		// When click nav-icon, toggle mobile menu
		const navIcon = document.querySelector('#nav-icon');
		const menuList = document.querySelector('.mobile-menu');

		if (navIcon) {
			navIcon.addEventListener('click', () => {
				console.log('clikc');
				navIcon.classList.toggle('open');
				menuList.classList.toggle('open');
			});
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
			name: 'Healthier Homes',
			href: '/healthier-homes'
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
				><img src="/logo-258.webp" alt="Murray's Chimney Services Logo" class="max-h-14" /></a
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
	<div class="relative">
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
