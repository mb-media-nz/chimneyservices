<script>
	import Banner from './base/banner.svelte';
	import BookBar from './base/bookBar.svelte';

	const faqs = [
		{
			q: 'Why is my fire smoking out the door?',
			a: 'It needs to be serviced and is likely blocked with a bird nest or soot.'
		},
		{
			q: 'What type of wood should I burn?',
			a: 'We recommend you burn dry wood, if purchased from an Ecan approved supplier you can guarantee this.'
		},
		{
			q: 'Does sweeping make a mess in my house, is it noisy?',
			a: 'It can be noisy, we pride ourselves on being clean and efficient.'
		},
		{
			q: 'Does someone need to be home when the chimney sweep is working?',
			a: 'No. All our staff are honest and pass current police checks.'
		},
		{
			q: 'I’m buying a new house and want to know if the log burner is usable, can you help?',
			a: 'Absolutely, give us a call and we can organise a time to come around and perform safety checks alongside ECan standards.'
		},
		{ q: 'Does the chimney sweep need to come inside the house?', a: 'Yes.' },
		{
			q: 'Can I light my fire before a chimney sweep?',
			a: "No. It's important to have your fire out 24 hours before your appointment."
		},
		{
			q: 'How long does a chimney sweep take?',
			a: 'We allocate 30 minutes to carry this task out. In some cases it can take longer depending on your situation.'
		},
		{
			q: 'Is roof access required?',
			a: 'In most cases no, but some log burner models require this as access from the bottom is not possible.'
		}
	];
</script>

<svelte:head>
	<title>Healthier Homes - Chimney Services</title>
	<meta
		name="description"
		content="Finding it hard to pay for a new fire installation? Borrow $6,000 through Healthier Homes Canterbury and pay if off through your rates bill over 9 years."
	/>
</svelte:head>

<Banner title={'ECan Healthier Homes'} image={'./hh-banner.jpg'} />

<!-- Content -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
	<div class="py-8 px-6">
		<h2 class="text-4xl mt-6 mb-6 text-gray-900">Home heating assistance</h2>
		<p class="text-lg mb-6">
			Healthier Homes Canterbury is a way to help ratepayers upgrade to cleaner, more efficient home
			heating and achieve a warmer, drier, healthier home. The scheme allows you to borrow up to
			$6,000 for heating/installation costs, and put it on your rates bill to be paid back over 9
			years at a set interest rate.
		</p>
		<p class="text-lg">
			Murray’s Chimney Services is registered with Environment Canterbury to participate in the
			scheme and uses accepted products for wood burners.
		</p>
	</div>
</div>

<div class="my-16">
	<ul class="max-w-screen-xl flex mx-auto text-gray-600 flex-wrap px-8">
		<li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">
			$6,000 loan from ECan for heating/installation
		</li>
		<li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">
			Paid back with interest over 9 years
		</li>
		<li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">
			Ratepayer must use a registered supplier
		</li>
		<li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">
			Interest rate is 5.9% pa when joining before 30 June 2020
		</li>
	</ul>
</div>

<div class="flex max-w-[90%] md:max-w-screen-lg my-20 mx-auto flex-col md:flex-row">
	<div class="m-8">
		<h3 class="mb-4 text-2xl">Eligibility</h3>
		<p>You must meet the following criteria to be eligble:</p>
		<ul class="list-disc pl-8 my-4">
			<li>You need to be the ratepayer of the property</li>
			<li>Your property needs to be in Canterbury</li>
			<li>Your rates payments need to have been up-to-date for at least three years</li>
		</ul>
	</div>
	<div class="m-8">
		<h3 class="mb-4 text-2xl">Applying</h3>
		<p>Follow these steps to apply:</p>
		<ul class="list-disc pl-8 my-4">
			<li>
				Visit <a
					class="font-bold text-redTheme hover:underline"
					href="https://www.ecan.govt.nz/your-region/your-environment/air-quality/home-heating/healthier-homes-canterbury-information-for-ratepayers"
					target="_blank">ECAN</a
				> to download an application form
			</li>
			<li>Submit your application and quote/s online or by mail</li>
			<li>Arrange for the installation work to be completed by Murray's Chimney Services</li>
			<li>The repayments will appear on your rates bill starting July of the following year</li>
		</ul>
	</div>
</div>

<div class="flex justify-center mb-10 px-8">
	<a class="" href="/HHC.pdf" target="_blank"
		><img
			class="rounded-lg w-[400px]"
			src="/hh-poster.webp"
			alt="Healthier Homes Canterbury PDF"
		/></a
	>
</div>

<BookBar />
