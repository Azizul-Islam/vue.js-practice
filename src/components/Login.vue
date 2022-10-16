<template>
    <div class="login-page">
        <div class="login-card">
            <div class="text-center">
                <img class="login-card-icon" src="img/lock.png" alt="">
                <h2>User Login</h2>
            </div>
            <form action="#" @submit.prevent="handleLoginForm">
                <label class="block">Email</label>
                <input type="email" ref="email" v-model="formData.email" placeholder="Enter your email">
                <label class="block mt-3">Password</label>
                <input type="password" ref="password" v-model="formData.password" placeholder="Enter password">
                <button type="submit" class="w-100 mt-3">Login</button>
            
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
    export default {
        data: () => ({
        formData: {
                email: "",
                password: "",
            },
        }),
        methods: {
            handleLoginForm(){
                if(!this.formData.email){
                    // alert('Email field must be required!');
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: "Email field must be required!"
                    });
                    this.$refs.email.focus();
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
            }
        },
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
    .login-card input[type="email"],
    .login-card input[type="password"]{
        width: 100%
    }
    .login-card-icon{
        max-width: 77px;
    }
</style>