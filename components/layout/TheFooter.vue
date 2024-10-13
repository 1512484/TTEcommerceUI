<template>
    <div class="the-footer-component">
        <div class="container grid gap-8 pt-10 pb-7 footer-content">
            <div>
                <p class="text-base font-bold mb-2.5">SHOP/COMPANY</p>
                <!-- <NuxtLink to="/" class="block mb-1">Company information</NuxtLink>
                <NuxtLink to="/" class="block mb-1">Address</NuxtLink> -->
                <p class="mb-1">Company information...</p>
                <p class="mb-1">Address...</p>
            </div>
            <div>
                <p class="text-base font-bold mb-2.5">MENU</p>
                <NuxtLink to="/" class="block w-max-content mb-1">Home</NuxtLink>
                <NuxtLink to="/item" class="block w-max-content mb-1">Products</NuxtLink>
                <NuxtLink to="/promotion" class="block w-max-content mb-1">Promotions</NuxtLink>
                <NuxtLink to="/post" class="block w-max-content mb-1">Blog</NuxtLink>
                <NuxtLink to="/contact" class="block w-max-content mb-1">Contact</NuxtLink>
            </div>
            <div>
                <p class="text-base font-bold mb-2.5">INFORMATION</p>
                <!-- <NuxtLink to="/" class="block w-max-content mb-1">About</NuxtLink>
                <NuxtLink to="/" class="block w-max-content mb-1">Customer Service</NuxtLink> -->
                <NuxtLink to="/shipping-returns" class="block w-max-content mb-1">Shipping & Returns</NuxtLink>
                <NuxtLink to="/privacy-policy" class="block w-max-content mb-1">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms" class="block w-max-content mb-1">Terms & Conditions</NuxtLink>
            </div>
            <!-- <div>
                <p class="text-base font-bold mb-2.5">CUSTOMER SERVICE</p>
                <NuxtLink to="/" class="block w-max-content mb-1">Orders And Returns</NuxtLink>
                <NuxtLink to="/contact" class="block w-max-content mb-1">Contact Us</NuxtLink>
                <NuxtLink to="/" class="block w-max-content mb-1">Theme FAQs</NuxtLink>
                <NuxtLink to="/" class="block w-max-content mb-1">Consultant</NuxtLink>
                <NuxtLink to="/" class="block w-max-content mb-1">Store Locations</NuxtLink>
            </div> -->
            <div>
                <p class="text-base font-bold mb-2.5">KEEP IN TOUCH</p>
                <div class="flex items-center gap-3.5 mb-6">
                    <NuxtLink to="/"><img src="@/assets/images/icon/facebook-white.svg" class="social-icon" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/instagram-white.svg" class="social-icon" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/youtube-white.svg" class="social-icon" /></NuxtLink>
                </div>
                <p class="text-base font-bold mb-2">PAYMENT ACCEPT</p>
                <div class="flex items-center gap-3.5">
                    <NuxtLink to="/"><img src="@/assets/images/icon/visa.svg" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/mastercard.svg" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/paypal.svg" /></NuxtLink>
                </div>
            </div>
        </div>
        <a-divider class="m-0" />
        <div class="text-center p-4">
            © 2022 Demo
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/components/layout/the-footer.scss";
</style>