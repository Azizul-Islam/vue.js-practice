import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://demo.test/api/";

 export default function useSkills() {
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref([]);
    const router = useRouter(); 

    const getSkills = async () => {
        const respons = await axios.get("skills");
        skills.value = respons.data.data;
    };

    const storeSkill = async (data) => {
        try {
            const response = await axios.post("skills", data);
            await router.push({name: "SkillIndex"});
        }
        catch (error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const getSkill = async (id) => {
        const response = await axios.get("skills/"+id);
        skill.value = response.data.data;
    };

    const updateSkill = async (id) => {
        try{
            await axios.put("skills/"+id, skill.value);
            await router.push({name: "SkillIndex"});
        }
        catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroySkill = async (id) => {
        if(!window.confirm('Are you sure?')) {
            return;
        }
        await axios.delete("skills/"+id);
        await getSkills();
    };

    return {
        skills,
        getSkills,
        destroySkill,
        storeSkill,
        errors,
        getSkill,
        updateSkill,
        skill,
    };
 }