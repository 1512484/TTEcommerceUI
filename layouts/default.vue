<template>
    <div class="h-full flex flex-col">
        <header>
            <the-header />
        </header>

        <main class="flex-grow">
            <nuxt />
        </main>

        <footer>
            <the-footer />
        </footer>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

export default {
    components: { TheHeader, TheFooter }
}
</script>