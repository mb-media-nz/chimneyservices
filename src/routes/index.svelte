<script lang="ts">
import { onDestroy, onMount } from 'svelte';

	import Banner from './base/banner.svelte';
	import BookBar from './base/bookBar.svelte';




	const homeServices = [
		{
			image: 'home-service-1.webp',
			title: 'Chimney service',
			description: 'Annual chimney cleaning helps to stop soot build up and prolongs the life of your log burner. We also perform a 10-point safety inspection with every service.'
		},
		{
			image: 'home-service-2.webp',
			title: 'Log burner repairs',
			description: 'We stock and repair all log burners. We carry parts for all the main brands - Metro, Masport, Jayline, Kent, Yunca.'
		},
		{
			image: 'home-service-3.webp',
			title: 'Log burner installation',
			description: 'As registered members of New Zealand Home Heating Association we supply and install log burners - from consent to sign off we can do it all.'
		},
		{
			image: 'home-service-4.webp',
			title: 'New home buyers',
			description: 'We can inspect the age, condition, safety, Ecan and maintenance requirements of any log burner or fire in a home before you buy.'
		},
		{
			image: 'home-service-5.webp',
			title: 'Flue replacement',
			description: 'We can repair and replace burnt-out flues to keep your home smoke free and compliant.'
		},
		{
			image: 'home-service-6.webp',
			title: 'Fire brick replacement',
			description: 'Due to age fire bricks can crack, lowering the safety and efficiency of your burner. We can perform professional repairs to keep you warm all winter.'
		},
		{
			image: 'home-service-7.webp',
			title: 'Roof flashing repairs',
			description: 'If leaks are getting through your chimney our qualified technicians can re-seal and replace roof flashing around your flue.'
		},
		{
			image: 'home-service-8.webp',
			title: 'Bird proofing',
			description: 'Keeping your chimney nest-free is an essential aspect of maintaining a safe log burner.'
		}
	];

	const testimonials = [
		{
			name: "Matt Smith",
			quote: "An absolute joy to deal with. Prompt return of my phone call and he came round the next day. Polite and efficient on the job and explained exactly what he was doing as he worked. I’m so glad I used him. Would highly recommend. AAA+++",
		},
		{
			name: "Nix Cudmore",
			quote: "The guys managed to squeeze me in, for an emergency clean. My partner was getting out of hospital and I needed to warm the house. In and out in under half an hour, offered great advice to extend the life of my fire and were really reasonably priced. YES ... I would definitely recommend them. And thanks for helping me out guys, you've got big hearts!",
		},
		{
			name: "Claire Carran Review",
			quote: "Fabulous service and first class work. We had Edward come and fix our fire door and do some maintenance on the fire box. We are extremely happy with the results and will be using Murray's Chimney Services every time.",
		},
		{
			name: "Felicity Gabites",
			quote: "Fantastic service! very fast service, rang one day, here the next. tidy and efficient. thanks heaps :) highly recommend.",
		},
		{
			name: "Michelle Whinwray",
			quote: "We had Edward out today for a chimney sweep which turned into some needed fire box repairs everything was done for us in no time at all and he was very knowledgeable and helpful highly recommend.",
		},
		{
			name: "Corrina Lynn Worthington",
			quote: "Thanks so much for a fast appointment, Fab service from Edward, he cleaned my chimney in no time, fast and friendly. I will be referring you guys to all my mates. Awesome job, thanks again.",
		}
	]

	// Find testimonial with most words in quote
	const largestTestimonal = testimonials.reduce((acc, curr) => {
		const words = curr.quote.split(' ').length;
		return words > acc.words ? { ...curr, words } : acc;
	}, { words: 0 });
	//console.log(largestTestimonal);

	let currentTestimonial = 0

	const moveLeft = () => {
		currentTestimonial = (currentTestimonial > 0) ? currentTestimonial-1 : testimonials.length - 1
		updateTestimonial()
	}
	const moveRight = () => {
		currentTestimonial = (currentTestimonial == testimonials.length-1) ? 0 : currentTestimonial+1
		updateTestimonial()
	}

	// Update which testimonial is shown
	const updateTestimonial = () => {
		console.log("currentTestimonial: ", currentTestimonial)

		// Update every .testimonial-card to have class of opacity-0
		document.querySelectorAll('.testimonial-card').forEach((el)=> {
			el.classList.add('opacity-0')
		})
		
		document.querySelectorAll('.testimonial-card')[currentTestimonial].classList.remove('opacity-0')
	}

	
	let homeTimer:any = null	

	onMount( () => {

		// Remove style from .home-text-container
		const homeTextContainer = document.querySelectorAll('.home-text-container')

		homeTextContainer.forEach(el => {
			el.style.display = ''
			console.log("removed")
		})



		// Every 4 seconds change the banner text
		let currentHomeBannerText = 0

		homeTimer = setInterval(() => {
			currentHomeBannerText = (currentHomeBannerText == 2) ? 0 : currentHomeBannerText+1 
			document.querySelectorAll('.home-text-container').forEach((el)=> {
				el.classList.add('opacity-0')
			})
			document.querySelectorAll('.home-text-container')[currentHomeBannerText].classList.remove('opacity-0')
		} , 4500)
	});

	onDestroy( () => {
		clearInterval(homeTimer)
	} )

	



	 

</script>

<svelte:head>
	<title>Home - Chimney Services</title>
	<meta
		name="description"
		content="With over 50 years experience, our qualified staff perform professional services to industry standards keeping your fire compliant and family safe."
	/>
</svelte:head>

<!-- Home Banner -->
<div
	style="background-image: url('./home-banner.webp')"
	class="bg-center flex justify-center items-center min-h-[500px] relative bg-no-repeat bg-cover"
>
	<div class="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30" />

	<div class="home-text-container transition-opacity absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-10 text-white text-center">
		<h1 class=" text-4xl bg-redTheme bg-opacity-60 p-1  relative mb-10 p-2">Murray’s Chimney Services</h1>
		<p class="max-w-screen-md text-white p-2">South Canterbury log burner inspections, chimney sweeping, repairs, installations and more.</p>
		<div class="absolute bottom-4 flex">
			<div class="mx-1 bg-white w-2 h-2 rounded-full"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
		</div>
	</div>

	<div style="display: none;" class="opacity-0 transition-opacity home-text-container absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-10 text-white text-center">
		<h2 class="text-center text-4xl  bg-opacity-60 p-1 z-10 relative mb-10 p-2">Healthier Homes Canterbury</h2>
		<p class="max-w-screen-md text-white p-2">Borrow up to $6,000 for heating/installation costs, and put it on your rates bill to be paid back over 9 years at a set interest rate through ECan's Healthier Homes Canterbury scheme.</p>
		<a
			href="/healthier-homes"
			class="mt-10 uppercase inline-block text-white bg-redTheme hover:bg-redThemeDark transition-colors px-8 mb-10 py-3 text-sm"
			>Scheme Info</a
		>
		<div class="absolute bottom-4 flex">
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
		</div>
	</div>

	<div style="display: none;" class="opacity-0 transition-opacity home-text-container absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-10 text-white text-center">
		<h2 class=" text-center text-4xl bg-opacity-60 p-1 z-10 relative mb-10 p-2">Contact Us Online</h2>
		<p class="max-w-screen-md text-white p-2">Contact is today to book your chimney sweep by calling us or via email on the Contact page.</p>
		<a
			href="/contact"
			class="mt-10 uppercase inline-block text-white bg-redTheme hover:bg-redThemeDark transition-colors px-8 mb-10 py-3 text-sm"
			>Contact Details</a
		>
		<div class="absolute bottom-4 flex">
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full opacity-30"></div>
			<div class="mx-1 bg-white w-2 h-2 rounded-full"></div>
		</div>
	</div>

	
	
</div>


<!-- Intro -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
	<div class="py-8 px-6">
		<h2 class="text-4xl mt-6 mb-6 text-gray-900">Cleaner, Safer, Compliant</h2>
		<p class="text-lg mb-6">
			Based in Timaru, South Canterbury, Murray’s Chimney Services offer a wide range of services to help keep your family safe and home fire-compliant. We recommend annual inspections and chimney cleans to make sure your log burner is efficient and smoke free.
		</p>
		<p class="text-lg">
			Give us a call to set up a chimney sweep appointment or visit the <a class="font-bold text-redTheme hover:underline" href="/faq">FAQ page</a> for answers to common questions.
		</p>
	</div>
</div>

<!-- Services -->
<div class="max-w-screen-lg flex flex-wrap mx-auto mb-10">
{#each homeServices as service}
	<div class="p-4 w-full sm:w-1/2 md:w-1/4 mb-4 p-6">
		<div class="rounded-lg w-full pb-[70%] relative overflow-hidden">
			<img class="absolute top-0 left-0 origin-center hover:scale-125 transition-transform duration-500" src="{service.image}" alt="">
		</div>
		<h5 class="text-xl mt-4 mb-4 text-gray-700">{service.title}</h5>
		<p>{service.description}</p>
	</div>
{/each}
</div>


<!-- Testimonials -->
<div class="bg-[url('/home-reviews-bg.webp')] bg-center bg-cover bg-no-repeat relative p-14">
	<div class="bg-black absolute top-0 left-0 w-full h-full opacity-60"></div>
	<div class="relative z-1 max-w-screen-md mx-auto">
		
		<!-- Invisible to set the height -->
		<div class="w-full py-0 md:py-20 opacity-0 select-none ">
			<p class="text-white text-xl">{largestTestimonal.quote}</p>
			<p class="text-white font-bold mt-6 ">- {largestTestimonal.name}</p>
		</div>

		<div class="flex justify-center align-middle">
			<div on:click="{moveLeft}" class="cursor-pointer transition-transform hover:-translate-x-1"><img class="w-8 mx-6" src="icon-arrow-left.png" alt="Left Arrow Icon"></div>
			<div on:click="{moveRight}" class="cursor-pointer transition-transform hover:translate-x-1"><img class="w-8 mx-6" src="icon-arrow-right.png" alt="Left Arrow Icon"></div>
		</div>
		

		{#each testimonials as testimonial, index}
			<div class="testimonial-card transition-opacity z-10 w-full absolute top-1/2 -translate-y-1/2 left-0 {(!index) ? "" : "opacity-0"}">
				<p class="text-white text-xl">{testimonial.quote}</p>
				<p class="text-white font-bold mt-6">- {testimonial.name}</p>
			</div>
		{/each}
	</div>
</div>


<!-- About -->
<div class="flex flex-col md:flex-row max-w-screen-lg mx-auto my-10 md:my-20 p-8">
	<div class="w-full md:w-2/3">
		<h4 class="text-4xl mt-6 mb-6 text-gray-900">About Us</h4>
		<p>Murray’s Chimney Services has been operating in South Canterbury for over 50 years, servicing locally as well as in the surrounding districts.</p>
		<p>Working with our technicians provides the following benefits:</p>
		<ul class="list-disc pl-10 mt-4 mb-10">
			<li>Ecan Healthier Homes Scheme approved contractor</li>
			<li>NZHHA accredited installer</li>
			<li>NZHHA accredited chimney sweep</li>
			<li>Gold card NZ</li>
		</ul>
		<a
			href="/about"
			class="uppercase inline-block text-white bg-redTheme hover:bg-redThemeDark transition-colors px-8 mb-10 py-3 text-sm"
			>Our Practices</a
		>
	</div>
	<div class="w-full flex md:block md:w-1/3 p-2 md:p-8">
		<img class="w-1/3 md:w-full" src="/logo-ecan-long.webp" alt="ECan Logo">
		<img class="w-1/3 md:w-full" src="/logo-hha-long.webp" alt="NZ HHA Logo">
		<img class="w-1/3 md:w-full" src="/logo-super-gold-long.webp" alt="Super Gold Logo">
	</div>

</div>

<BookBar />

