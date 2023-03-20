<template>
    <div class="container payment-options-page">
        <div class="options-content">
            <h2 class="text-4xl font-extrabold text-center mb-10">Payment options</h2>

            <h3>VTC Pay</h3>
            <div class="flex items-center gap-6">
                <img src="@/assets/images/payment/visa.svg" />
                <img src="@/assets/images/payment/mastercard.svg" />
            </div>
            <p>We accept Visa, Mastercard and JCB through VTCPay. Note, cards issued by local banks which do not carry one of these logos will not be accepted by our global processing service, in which case we recommend PayPal as an alternative.</p>

            <h3>Paypal</h3>
            <img src="@/assets/images/payment/paypal.svg" />
            <p>Use any payment method on the growing list of ways to fund a PayPal account in your country. Once you have funded your PayPal account, you can use our single-click PayPal express feature to speed through checkout.</p>

            <h3>Payment security</h3>
            <p>All transactions submitted to us are encrypted with SSL software which encrypts information you input to protect it from interception by outside parties. ELPIS is committed to maintaining the highest levels of security and protection against fraud. We stay up-to-date with the latest in security technologies to ensure that your credit card information, contact information and shipping/billing information are confidential and safe.</p>

            <h3>Other verification</h3>
            <p>Orders may be subject to payment verification. For the protection of our customers, we want to ensure that every order that we ship out was authorized by the cardholder. If your order is placed on hold, we will reach out to you right away to ensure that the delays are minimal.</p>

            <h3>Currency</h3>
            <p>When possible, Elpis will try processing your payment in your local currency. There are however some limitations and special cases in which we will have to charge your card in USD. In those cases, the conversion is handled by your financial institution.</p>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/pages/payment-options.scss";
</style>