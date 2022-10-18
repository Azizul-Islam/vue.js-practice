import { ref } from "vue";
import axios from "axios";


 export default function useSkills() {
    const skills = ref([]);
    const skill = ref([]);

    const getSkills = async () => {
        const respons = await axios.get("http://demo.test/api/skills");
        skills.value = respons.data.data;
    };

    const destroySkill = async (id) => {
        if(!window.confirm('Are you sure?')) {
            return;
        }
        await axios.delete("http://demo.test/api/skills/"+id);
        await getSkills();
    };

    return {
        skills,
        getSkills,
        destroySkill,
    };
 }