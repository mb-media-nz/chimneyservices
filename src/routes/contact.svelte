<script>
	import Banner from './base/banner.svelte';
	import BookBar from './base/bookBar.svelte';
</script>

<svelte:head>
	<title>Contact - Chimney Services</title>
	<meta
		name="description"
		content="Keep your home and family safe, log burner up to Ecan standards and learn how to burn efficiently with Murray's Chimney Services."
	/>
</svelte:head>

<Banner title={'Contact Us'} image={'./contact-banner.webp'} />

<!-- Content -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
	<div class="py-8 px-6">
		<h2 class="text-4xl mt-6 mb-6 text-gray-900">Get in touch</h2>
		<p class="text-lg mb-6">
			Feel free to ask any questions or use this contact form to book Chimney Sweeps online.<br/>We will respond, confirming your booking.
		</p>
	</div>
</div>

<!-- Contact Icons -->
<div class="flex flex-wrap max-w-screen-md mx-auto">
    <div class="flex items-center w-1/2 p-3">
        <img class="w-8" src="./icon-phone.png" alt="">
        <a href="tel:+64+800-132-046" class="font-bold ml-3 text-lg">0800 132 046</a>
    </div>
    <div class="flex items-center w-1/2 p-3">
        <img class="w-8" src="./icon-phone.png" alt="">
        <a href="+64-3-684-7646" class="font-bold ml-3 text-lg">03 684 7646</a>
    </div>
    <div class="flex items-center w-1/2 p-3">
        <img class="w-8" src="./icon-facebook.png" alt="">
        <a href="https://facebook.com/murrayschimneys/" target="_blank" class="font-bold ml-3 text-lg">facebook.com/murrayschimneys/</a>
    </div>
    <div class="flex items-center w-1/2 p-3">
        <img class="w-8" src="./icon-clock.png" alt="">
        <span class="font-bold ml-3 text-lg">7am - 7pm, Monday - Friday</span>
    </div>
</div>

<!-- Contact Form -->


<BookBar />

