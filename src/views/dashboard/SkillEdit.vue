<script setup>
    import useSkills from "../../composable/skills";
    import { onMounted } from 'vue';

    const { skill, getSkill, updateSkill, errors } = useSkills();
    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    })
    onMounted(() => getSkill(props.id))
</script>
<template>
    <div>
    <div class="d-flex jc-between ai-center">
        <h2>Edit Skill</h2>
        <RouterLink :to="{name: 'SkillIndex'}">Back</RouterLink>
    </div>
    <form class="mt-4" @submit.prevent="updateSkill($route.params.id)">
        <label class="block">Skill Name</label>
        <input type="text" v-model="skill.name" class="mt-1 w-100" placeholder="Enter skill name" >
        <div v-if="errors.name">
            <span style="color:red">{{ errors.name[0] }}</span>
        </div>
        <label class="block">Slug</label>
        <input type="text" v-model="skill.slug" class="mt-1 w-100" placeholder="Enter slug" >
        <div v-if="errors.slug">
            <span style="color:red">{{ errors.slug[0] }}</span>
        </div>
        <button type="submit" class="mt-4">Update</button>
    </form>
    </div>
</template>