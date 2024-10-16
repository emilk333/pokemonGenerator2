<script lang="ts">
    
	import type { Button } from "../../../types/IButtons";

    export let buttonConfig: Button.Buttonprops

</script>


<button>
    {buttonConfig.text}
</button>