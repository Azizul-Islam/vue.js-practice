<script setup>
   import { reactive } from "vue";
   import useSkills from "../../composable/skills";
   const { storeSkill, errors } = useSkills();
   const formData = reactive({
    name: "",
    slug: "",
   });

</script>
<template>
    <div>
    <div class="d-flex jc-between ai-center">
        <h2>Create Skill</h2>
        <RouterLink to="/dashboard/skills">Back</RouterLink>
    </div>
    <form class="mt-4" @submit.prevent="storeSkill(formData)">
        <label class="block">Skill Name</label>
        <input type="text" v-model="formData.name" class="mt-1 w-100" placeholder="Enter skill name" >
        <div v-if="errors.name">
            <span style="color:red">{{ errors.name[0] }}</span>
        </div>
        <label class="block">Slug</label>
        <input type="text" v-model="formData.slug" class="mt-1 w-100" placeholder="Enter slug" >
        <div v-if="errors.slug">
            <span style="color:red">{{ errors.slug[0] }}</span>
        </div>
        <button type="submit" class="mt-4">Submit</button>
    </form>
    </div>
</template>