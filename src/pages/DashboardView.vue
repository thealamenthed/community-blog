<template>
<div class="p-6 text-6xl text-slate-900">
    {{user.getUser.email}}
</div>

</template>


<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()

</script>