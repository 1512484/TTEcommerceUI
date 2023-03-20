<template>
    <div dark class="h-full flex flex-col page-not-found">
        <div class="container">
            <h1 class="font-extrabold mb-3.5 error-code" v-if="error.statusCode === 404">404</h1>
            <h1 class="font-extrabold mb-3.5 error-code" v-else>{{ error.statusCode }}</h1>
            <h2 class="text-lg font-bold mb-1" v-if="error.statusCode === 404">{{ pageNotFound }}</h2>
            <h2 class="text-lg font-bold mb-1" v-else>{{ otherError }}</h2>
            <p v-if="error.statusCode === 404">The page you are looking for not available!</p>
    
            <div class="mt-10">
                <Button class="control-btn" @click="$router.push('/')">GO TO HOME</Button>
            </div>
        </div>
    </div>
</template>
  
<script>
import Button from "@/components/common/Button.vue";

export default {
    layout: "empty",
    components: { Button },
    props: {
        error: {
        type: Object,
        default: null,
        },
    },
    data() {
        return {
            pageNotFound: "Looks like you are lost",
            otherError: "An error occurred"
        };
    },
    head() {
        const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    },
};
</script>

<style lang="scss">
.page-not-found {
    .container {
        padding-top: 100px;
        padding-bottom: 100px;

        .error-code {
            font-size: 64px;
        }
    }
}
</style>