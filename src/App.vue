<template>
  <login></login>
  <div class="toasts">
    <the-toast v-for="(toast,i) in toasts" :key="i" :message="toast.message" :toastType="toast.type" ></the-toast>
  </div>
</template>

<script>
  import Login from './components/Login.vue';
  import TheToast from './components/TheToast.vue';
  export default {
    data: ()=>({
      toasts: [
        // {
        //   type: 'Success',
        //   message: "Done Successfully!"
        // },
        // {
        //   type: 'Error',
        //   message: "Something went wrong!"
        // }
      ]
    }),
    components: {
      Login,
      TheToast
    },
    mounted() {
      this.$eventBus.on('toast', data => {
        this.toasts.push(data);
        this.removeOnToast();
      });
    },
    methods: {
      removeOnToast() {
       setTimeout(() => {
        this.toasts.shift();
       }, 2000)
      }
    }
  }
</script>