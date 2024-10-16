<script lang="ts">

    export let wrappedComponent
	$: ({wrappedComponent, ...passThroughProps} = $$props)

</script>

<article class="h-[125px] rounded-lg border-yellow border-[12px] w-[320px] p-3 flex items-center">
    <svelte:component this={wrappedComponent} {...passThroughProps} />
</article>