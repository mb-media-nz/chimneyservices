<script>
	import '../app.css';
	import Header from './base/header.svelte';
	import Footer from './base/footer.svelte';

	import { navigating } from '$app/stores';
	import { hideMobileMenu, updateActiveMenu } from '../lib/common';

	$: if($navigating) {
		updateActiveMenu($navigating?.to.pathname);
		hideMobileMenu()
	} 
	
	

</script>

<Header />
<slot />
<Footer />
