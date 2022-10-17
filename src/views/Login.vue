<template>
    <div class="login-page">
        <div class="login-card">
            <div class="text-center">
                <img class="login-card-icon" src="img/lock.png" alt="">
                <h2>User Login</h2>
            </div>
            <form action="#" @submit.prevent="handleLoginForm">
                <label class="block">Username</label>
                <input type="text" ref="username" v-model="formData.username" placeholder="Enter your username">
                <label class="block mt-3">Password</label>
                <input type="password" ref="password" v-model="formData.password" placeholder="Enter password">
                
                <p class="text-center mt-3" v-if="loggingIn">Logging in...</p>
                <!-- <button type="submit" class="w-100 mt-3" v-else>Login</button> -->
                <TheButton :block="true"  class="mt-3">Login</TheButton>
                <div class="d-flex jc-between mt-3">
                    <div>
                        <label>
                            <input type="checkbox">
                            Remember Me
                        </label>
                    </div>
                    <div>
                        <a href="#">Forgot Password</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import TheButton from '../components/TheButton.vue';

    export default {
        data: () => ({
        formData: {
                username: "",
                password: "",
            },
            loggingIn: false,
        }),
        methods: {
            handleLoginForm(){
                if(!this.formData.username){
                    // alert('username field must be required!');
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: "username field must be required!"
                    });
                    this.$refs.username.focus();
                    return;
                }
                if(!this.formData.password){
                    // alert('Password field must be required!');
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: "Password field must be required!"
                    });
                    this.$refs.password.focus();
                    return;
                }
                // if(this.formData.password < 6){
                //     // alert('Password must be at least 6 character!');
                //     this.$eventBus.emit('toast', {
                //         type: "Error",
                //         message: "Password must be at least 6 character!"
                //     });
                //     this.$refs.password.focus();
                //     return;
                // } 
                // console.log(this.formData);
                this.loggingIn = true;
                axios.post("https://api.rimoned.com/api/pharmacy-management/v1/login", this.formData)
                .then((res) => {
                    this.$eventBus.emit('toast', {
                        type: "Success",
                        message: res.data.message
                    });
                })
                .catch((err) => {
                    let errorMessage = "Something went wrong!";
                    if(err.response) {
                        errorMessage = err.response.data.message;
                    }
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: errorMessage
                    });
                    this.$router.push("/dashboard");
                })
                .finally(() => {
                    this.loggingIn = false;
                });
            }
        },
        components: {
            TheButton
        }
    }
</script>

<style>
    .login-page{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(235,235,235);
    }
    .login-card{
        width: 400px;
        min-height: 193px;
        box-shadow: 0px 2px 9px 4px #dfdfdf;
        background-color: #fff;
        border-radius: 5px;
        padding: 44px 33px;
        
    }
    .login-card input[type="text"],
    .login-card input[type="password"]{
        width: 100%
    }
    .login-card-icon{
        max-width: 77px;
    }
</style>