<script>
    import Banner from "./base/banner.svelte";
    import BookBar from "./base/bookBar.svelte";

    const faqs = [
        {q: "Why is my fire smoking out the door?", a: "It needs to be serviced and is likely blocked with a bird nest or soot."},
        {q: "What type of wood should I burn?", a: "We recommend you burn dry wood, if purchased from an Ecan approved supplier you can guarantee this."},
        {q: "Does sweeping make a mess in my house, is it noisy?", a: "It can be noisy, we pride ourselves on being clean and efficient."},
        {q: "Does someone need to be home when the chimney sweep is working?", a: "No. All our staff are honest and pass current police checks."},
        {q: "I’m buying a new house and want to know if the log burner is usable, can you help?", a: "Absolutely, give us a call and we can organise a time to come around and perform safety checks alongside ECan standards."},
        {q: "Does the chimney sweep need to come inside the house?", a: "Yes."},
        {q: "Can I light my fire before a chimney sweep?", a: "No. It's important to have your fire out 24 hours before your appointment."},
        {q: "How long does a chimney sweep take?", a: "We allocate 30 minutes to carry this task out. In some cases it can take longer depending on your situation."},
        {q: "Is roof access required?", a: "In most cases no, but some log burner models require this as access from the bottom is not possible."},
    ]
</script>

<svelte:head>
  <title>FAQ - Chimney Services</title>
  <meta name="description" content="What type of wood should I burn? How often should I have my chimney cleaned? How long does a chimney sweep take? Find the answers to common questions here.">
</svelte:head>

<Banner title={"Frequently Asked Questions"} image={"./faq-banner.webp"}/>

<!-- Content -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
    <div class="py-8 px-6">
        <h2 class="text-4xl mt-6 mb-6 text-gray-900">FAQ</h2>
        <p class="text-lg mb-6">The question we get the most at Murray’s Chimney Services is:<br><span class="text-gray-900 font-semibold">How often should I have my chimney cleaned and fire serviced?</span></p>
        <p class="text-lg">The NZ Fire Service, NZHHA and your insurance company encourages you to service your fire annually. In some cases this is required more often depending on what you're burning. Regular cleaning makes sure your fire works efficiently and removes flammable creosote (soot) build-up.</p>
    </div>
</div>

<ul class="flex flex-wrap max-w-screen-lg mx-auto pb-20 px-6">
{#each faqs as faq}
    <li class="p-4 w-full md:w-1/2 mb-4 p-8">
        <h3 class="text-2xl mt-4 mb-6 text-gray-700">Q. {faq.q}</h3>
        <hr class="w-20 h-5">
        <p>{faq.a}</p>
    </li>
{/each}
</ul>

<BookBar/>

