<script>
    import Banner from "./base/banner.svelte";
    import BookBar from "./base/bookBar.svelte";

    const faqs = [
        {q: "Why is my fire smoking out the door?", a: "It needs to be serviced and is likely blocked with a bird nest or soot."},
        {q: "What type of wood should I burn?", a: "We recommend you burn dry wood, if purchased from an Ecan approved supplier you can guarantee this."},
    ]
</script>

<svelte:head>
  <title>About - Chimney Services</title>
  <meta name="description" content="With over 50 years experience, our qualified staff perform professional services to industry standards keeping your fire compliant and family safe.">
</svelte:head>

<Banner title={"About Us"} image={"./about-banner.webp"}/>

<!-- Content -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
    <div class="py-8 px-6">
        <h2 class="text-4xl mt-6 mb-6 text-gray-900">Experienced Staff</h2>
        <p class="text-lg mb-6">Murray’s Chimney Services has been operating in South Canterbury for over 50 years. As a family-run business currently employing three local people, we pride ourselves on being honest, hardworking and diligent to the safety standards to keep your fire in good working order and household safe.
            We have a reliable reputation in the community and continue to strive for customer satisfaction.</p>
        <p class="text-lg">With years of experience in the chimney servicing industry we make sure you get a professional and well-done job.<br>We are qualified to carry out services including:</p>
    </div>
</div>

<div class="my-16">
    <ul class="max-w-screen-xl flex mx-auto text-gray-600 flex-wrap px-8">
        <li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">$6,000 loan from ECan for heating/installation</li>
        <li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">Paid back with interest over 9 years</li>
        <li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">Ratepayer must use a registered supplier</li>
        <li class="p-4 my-2 w-full sm:w-1/2 lg:w-1/4 border-l-4 px-4 border-redTheme">Interest rate is 5.9% pa when joining before 30 June 2020</li>
    </ul>
</div>



<BookBar/>
