<script>
	import Banner from './base/banner.svelte';
	import BookBar from './base/bookBar.svelte';

/*
    const sendEmail = () => {
        const data = {
            name: 'John',
            email: 'john@domain.com',
            phone: '123',
            message: 'Receiving forms is easy and simple now!',
        };

        const url = 'https://script.google.com/macros/s/AKfycbz9vBDqYGlNIRbX9VlO7ITOltmHVGuz14QfEtyBrBySFv8w96TDoBMoKZzZRBAsYm_a8A/exec';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));
    }
    */
    

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
<div class="text-center max-w-screen-lg mx-auto">
	<div class="py-8 px-6">
		<h2 class="text-4xl mt-6 mb-6 text-gray-900">Get in touch</h2>
		<p class="text-lg mb-6">
			Feel free to ask any questions or use this contact form to book Chimney Sweeps online.<br/>We will respond, confirming your booking.
		</p>
	</div>
</div>

<!-- Contact Icons -->
<div class="flex flex-wrap max-w-screen-md mx-auto mb-10">
    <div class="flex items-center justify-center w-full md:justify-start md:w-1/2 p-3">
        <img class="w-8" src="./icon-phone.png" alt="">
        <a href="tel:+64+800-132-046" class="font-bold ml-3 text-md transition-colors hover:text-redTheme">0800 132 046</a>
    </div>
    <div class="flex items-center justify-center w-full md:justify-start md:w-1/2 p-3">
        <img class="w-8" src="./icon-phone.png" alt="">
        <a href="tel:+64-3-684-7646" class="font-bold ml-3 text-md transition-colors hover:text-redTheme">03 684 7646</a>
    </div>
    <div class="flex items-center justify-center w-full md:justify-start md:w-1/2 p-3">
        <img class="w-8" src="./icon-facebook.png" alt="">
        <a href="https://facebook.com/murrayschimneys/" target="_blank" class="font-bold ml-3 text-md transition-colors hover:text-redTheme">facebook.com/murrayschimneys/</a>
    </div>
    <div class="flex items-center justify-center w-full md:justify-start md:w-1/2 p-3">
        <img class="w-8" src="./icon-clock.png" alt="">
        <span class="font-bold ml-3 text-md">7am - 7pm, Monday - Friday</span>
    </div>
</div>

<!-- Contact Form -->
<form on:submit|preventDefault name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="flex flex-col max-w-xl mx-auto px-6 mb-20">
    <input required class="border p-2 my-2" type="text" name="name" placeholder="Name" />
    <input required class="border p-2 my-2" type="email" name="Email" placeholder="Email" />
    <input class="border p-2 my-2" type="tel" name="Phone" placeholder="Phone" />
    <input class="hidden" name="bot-field" />
    <textarea required class="border p-2 my-2" rows="5" name="message" placeholder="Message"></textarea>
    <button type="submit" class="uppercase text-white bg-redTheme hover:bg-redThemeDark transition-colors px-8 py-3 text-sm inline-flex w-[100px]">Send</button>

  </form>

<BookBar />

