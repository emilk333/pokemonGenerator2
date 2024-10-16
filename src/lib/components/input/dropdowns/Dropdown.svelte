<script lang="ts">

    // TODO This needs to take props. 

    const pokemonAmountOptions = [
        { id: 1, value: 1},
        { id: 2, value: 5},
        { id: 3, value: 10}
    ]
    
    let selectedValue: number;

    function handleSelect(selectedValue: number) {
        console.log(selectedValue) // TODO remove this
    }
    
</script>

<!-- Formless select component -->
<select bind:value={selectedValue} on:change={() => handleSelect(selectedValue)}>
    {#each pokemonAmountOptions as pokemonOption}
        <option value={pokemonOption.value}>
            {pokemonOption.value}
        </option>
    {/each}
</select>