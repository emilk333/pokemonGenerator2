<script lang="ts">
	import SkeletonImage from "./SkeletonImage.svelte";
	import SkeletonText from "./SkeletonText.svelte";
</script>

<div role="status" class="space-y-6 animate-pulse md:space-y-0 md:space-x-6 rtl:space-x-reverse md:flex md:items-center">
    <SkeletonImage/>
    <SkeletonText/>
</div>

