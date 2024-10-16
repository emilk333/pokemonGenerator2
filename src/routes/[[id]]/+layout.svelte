<script lang="ts">
    import type { LayoutData } from '../$types';
    import "../../app.css";
    
    export let data: LayoutData;
</script>

<svelte:head>
    <title>Second try without BS</title>
</svelte:head>

<div class="h-screen w-screen flex items-center justify-center">
    <slot />
</div>