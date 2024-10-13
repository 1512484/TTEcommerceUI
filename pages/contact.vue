<template>
    <div class="container contact-page">
        <div class="flex contact-content">
            <div class="left-content">
                <div class="relative map">
                    <!-- <img :src="image" class="absolute-full" /> -->
                    <GmapMap 
                        :center="center"
                        :zoom="15"
                        map-type-id="terrain"
                        class="absolute-full">
                        <GmapMarker ref="myMarker"
                            :position="google && new google.maps.LatLng(center.lat, center.lng)" />
                    </GmapMap>
                </div>
            </div>
            <div class="right-content">
                <h2 class="text-4xl font-extrabold mb-7 page-title">Contact us</h2>
                <p class="text-lg font-extrabold mb-1.5">Informations</p>
                <p class="mb-4">Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                
                <div class="contact-info">
                    <div class="info-item">
                        <div>
                            <img src="@/assets/images/icon/location.svg" class="mb-2" />
                            <p class="item-title mb-1">Address</p>
                            <p>Afhgahajaagsgsj</p>
                        </div>
                    </div>
                    <div class="border-t hidden-sm-and-up divider"></div>
                    <div class="info-item">
                        <div>
                            <img src="@/assets/images/icon/mail.svg" class="mb-2" />
                            <p class="item-title mb-1">Email</p>
                            <p>thanhle@12345</p>
                        </div>
                    </div>
                    <div class="border-t hidden-sm-and-up divider"></div>
                    <div class="info-item">
                        <div>
                            <img src="@/assets/images/icon/phone.svg" class="mb-2" />
                            <p class="item-title mb-1">Phone</p>
                            <p>(+84) 97382627</p>
                        </div>
                    </div>
                </div>

                <p class="text-lg font-extrabold mb-3">Get a quote</p>

                <a-form :form="form" @submit="handleSubmit">
                    <label class="font-bold block mb-2">Email</label>
                    <Input placeholder="abc@gmail.com" v-model="email" name="email" :rules="rules.email" type="email" />
                    <label class="font-bold block mb-2">Message</label>
                    <Input placeholder="" v-model="message" name="message" :rules="rules.message">
                        <template #suffix>
                            <a-icon type="link" />
                        </template>
                    </Input>
                    <div class="flex justify-end mt-7 control-btn-group">
                        <Button class="control-btn submit-btn" type="submit">SEND</Button>
                    </div>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import Input from "@/components/common/Input.vue";
import { images } from "@/static/data.js";
import { gmapApi } from 'vue2-google-maps';

export default {
    components: { Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'contact_rule' }),
            image: images[Math.floor(Math.random() * images.length)],
            email: "",
            message: "",
            rules: {
                email: [
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }
                ],
                message: [
                    {
                        required: true,
                        message: 'Please input your Message!',
                    }
                ],
            },
            center: {
                lat: 10.7978613,
                lng: 106.6842687
            }
        }
    },
    computed: {
        google: gmapApi
    },
    methods: {
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    
                } else {
                    console.log('Error: ', err);
                }
            });
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/contact.scss";
</style>