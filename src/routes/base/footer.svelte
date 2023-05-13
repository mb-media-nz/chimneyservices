<script>
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

	const currentYear = new Date().getFullYear();
</script>

<footer class=" bg-gray-100 p-10">
	<div class="flex justify-around max-w-screen-lg mx-auto flex-wrap">
		<div class="mb-8 w-full md:w-auto md:mb-0 flex justify-center">
			<img src="/logo-258.webp" alt="Murray's Chimney Services Logo" class="max-h-14" />
		</div>

		<div class="flex flex-col w-full text-center sm:text-left mb-4 sm:mb-0 sm:w-1/3 md:w-auto">
			<p class="font-normal text-gray-800 mb-1 sm:mb-6">MENU</p>
			<ul class="uppercase p-0">
				{#each links as link}
					<li
						class="transition-colors mb-1 text-gray-700 hover:text-gray-600 tracking-wider font-light"
					>
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex flex-col text-center sm:text-left w-full sm:w-1/3 md:w-auto">
			<p class="font-normal text-gray-800 mb-1 sm:mb-6">CONTACT</p>
			<ul class="p-0 break-all">
				<li
					class="transition-colors mb-1 text-gray-700 hover:text-gray-600 tracking-wider font-light"
				>
					<a href="tel:+64-800-132-046">0800 132 046</a>
				</li>
				<li
					class="transition-colors mb-1 text-gray-700 hover:text-gray-600 tracking-wider font-light"
				>
					<a href="mailto:admin@chimneyservices.co.nz">admin@chimneyservices.co.nz</a>
				</li>
				<li
					class="transition-colors mb-1 text-gray-700 hover:text-gray-600 tracking-wider font-light"
				>
					PO Box 794<br />Timaru, New Zealand
				</li>
				<li class="mt-6 flex justify-center sm:justify-start">
					<a href="https://www.facebook.com/murrayschimneys" target="_blank"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="hover:fill-redTheme transition-colors"
							><path
								d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
							/></svg
						></a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>
<div class="bg-gray-200 text-center text-sm p-2 text-gray-500">
	© {currentYear}. Website created by
	<a href="https://mediahost.nz" target="_blank" class="font-bold">MediaHost.nz</a>
</div>
