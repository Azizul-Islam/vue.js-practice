<script setup>
    import useSkills from "../../composable/skills";
    import { onMounted } from "vue";

    const { skills, getSkills, destroySkill } = useSkills();

    // import TheButton from "../../components/TheButton.vue";
    // import TheModal from "../../components/TheModal.vue";
    
    // export default {
    //     data: () =>({
    //        showModal: false,
    //        vendor: {
    //         name: "",
    //         description: ""
    //        },
    //        adding: false,
    //        gettingVendors: false,
    //        vendors: [],
           
    //     }),  
    //     components: {
    //         TheButton,
    //         TheModal
    //     },
        
    // }

    onMounted(() => getSkills());
</script>

<template>
    <div class="d-flex jc-between ai-center">
        <h2>All Skill</h2>
        <RouterLink to="skills/create">Add New</RouterLink>
    </div>
    <!-- <div class="text-center" >Loading...</div> -->
    <table class="mt-4" >
        <thead>
            <tr>
                <th>S.L</th>
                <th>Skill</th>
                <th>Slug</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill,i in skills" :key="skill.id">
                <td>{{ i+1 }}</td>
                <td>{{ skill.name }}</td>
                <td>{{ skill.slug }}</td>
                <td>
                    <RouterLink :to="{name: 'SkillEdit', params: {id: skill.id}}"><img src="/img/edit.png" alt="" class="action-icon"></RouterLink>
                    <span @click="destroySkill(skill.id)"><img src="/img/trash.png" alt="" class="action-icon action-icon--delete ml-3"></span>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- <TheModal v-model="showModal" heading="Add new vendor">
        <form @submit.prevent="addNewVendor">
            <label class="block">Vendor Name</label>
            <input type="text" class="mt-1 w-100" placeholder="Enter vendor name" v-model="vendor.name">
            <label class="block">Description</label>
            <textarea type="text" class="mt-1 w-100" placeholder="Enter vendor description" v-model="vendor.description" :loadin="adding"></textarea>
            <the-button class="w-100 mt-4">Submit</the-button>
        </form>
    </TheModal> -->
</template>

