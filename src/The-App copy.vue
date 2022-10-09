<template>
    <div>
        <h2>{{ msg }}</h2>

        <contact-details 
        v-for="contact in contacts" :key="contact.name" :name="contact.name"  :phone-number="contact.phoneNumber" :email="contact.email"></contact-details>
    </div>
</template>

<script>
    import ContactDetails from './ContactDetails.vue'
    export default {
        data() {
            return {
                msg: 'Hello This is vue js 3.',
                contacts: [
                {
                    name: 'Azizul Islam',
                    phoneNumber: '01738040305',
                    email: 'cseazizul@gmail.com'
                },
                {
                    name: 'Rasel Khan',
                    phoneNumber: '01738040301',
                    email: 'rasel@gmail.com'
                },
                {
                    name: 'Nahid Khan',
                    phoneNumber: '01738040302',
                },
                ]
            };
        },
        components: {
            ContactDetails
        }
    }
</script>