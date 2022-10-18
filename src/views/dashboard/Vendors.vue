<template>
    <div class="d-flex jc-between ai-center">
        <h2>All vendors</h2>
        <TheButton @click="showModal = true">Add New</TheButton>
    </div>
    <div class="text-center" v-if="gettingVendors">Loading...</div>
    <table class="mt-4" v-else>
        <thead>
            <tr>
                <th>S.L</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(number,i) in 10" :key="i">
                <td>{{ i+1 }}</td>
                <td>Azizul Islam</td>
                <td>Description</td>
                <td>
                    <img src="/img/edit.png" alt="" class="action-icon">
                    <img src="/img/trash.png" alt="" class="action-icon action-icon--delete ml-3">
                </td>
            </tr>
        </tbody>
    </table>
    <TheModal v-model="showModal" heading="Add new vendor">
        <form @submit.prevent="addNewVendor">
            <label class="block">Vendor Name</label>
            <input type="text" class="mt-1 w-100" placeholder="Enter vendor name" v-model="vendor.name">
            <label class="block">Description</label>
            <textarea type="text" class="mt-1 w-100" placeholder="Enter vendor description" v-model="vendor.description" :loadin="adding"></textarea>
            <the-button class="w-100 mt-4">Submit</the-button>
        </form>
    </TheModal>
</template>

<script>
    import TheButton from "../../components/TheButton.vue";
    import TheModal from "../../components/TheModal.vue";
    import axios from "axios";

    export default {
        data: () =>({
           showModal: false,
           vendor: {
            name: "",
            description: ""
           },
           adding: false,
           gettingVendors: false,
           vendors: [],
           
        }),  
        components: {
            TheButton,
            TheModal
        },
        mounted(){
            this.getAllVendors();
        },  
        methods: {
            resetForm(){
                this.vendor = { name: "", description: "" }
            },
            getAllVendors(){
                this.gettingVendors = true;
                axios.get("https://api.rimoned.com/api/pharmacy-management/v1/private/vendor")
                .then((res) => {
                   this.vendors = res.data;
                    
                })
                .catch((err) =>{
                    let errorMessage = "Something went wrong!";
                    if(err.response) {
                        errorMessage = err.response.data.message;
                    }
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: errorMessage
                    });
                   
                })
                .finally(() => {
                    this.gettingVendors = false;
                    
                });
            },
            addNewVendor(){
                console.log(this.vendor);
                axios.post("https://api.rimoned.com/api/pharmacy-management/v1/private/vendor", this.vendor)
                .then((res) => {
                    console.log(res.data);
                    this.$eventBus.emit("toast", {
                        type: "Success",
                        message: res.data.message,
                    });
                    
                })
                .catch((err) =>{
                    let errorMessage = "Something went wrong!";
                    if(err.response) {
                        errorMessage = err.response.data.message;
                    }
                    this.$eventBus.emit('toast', {
                        type: "Error",
                        message: errorMessage
                    });
                    this.resetForm();
                    this.showModal = false;
                })
                .finally(() => {
                    this.adding = false;
                    
                });
                
            }
        }
    }
</script>