<template>
    <div>
        
    <div class="container">
        <h2>{{ msg }}</h2>
        <the-comment v-model:myComment="myComment" buttonText="Submit" foo="bar" class="shadow" placeholder="Enter your comment"
        @continueClick="handleDialogBox"></the-comment>
        <br />
        <br />
        <hr />
        <br />
        <p>
           {{ myComment }}
        </p>

        <button  @click="handleNotification">Show Notification</button>

        <the-dialog  v-if="showDialog">
            <p>
                Are you really want to comment?
                <br />
                <button @click="handleNotification">Yes</button>
                <button @click="showDialog = false">No</button>
            </p>
        </the-dialog>
        <the-notification v-for="(n,i) in notifications" :key="i" :text="n"></the-notification>
    </div>
    </div>
</template>

<script>
    import TheComment from './TheComment.vue'
    import TheDialog from './TheDialog.vue'
    import TheNotification from './TheNotification.vue'
    export default {
        data() {
            return {
                msg: 'Credit Card Input',
               myComment: "This is my comment.",
               showDialog: false,
               notifications: [],
            };
        },
        components: {
            TheComment,
            TheDialog,
            TheNotification
        },
        methods: {
            handleDialogBox(){
                this.showDialog = true;
            },
            handleNotification(){
                this.notifications.push("Comment Submitted success");
                setTimeout(() => {
                    this.notifications.shift();
                },2222)
            },
        }
    }
</script>

<style>
    .container{
        padding: 22px;
    }
</style>