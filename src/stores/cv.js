import {defineStore} from "pinia";
import {reactive, ref} from 'vue';
import data from '../data.js'
import emptyData from "../empty";

export const useCvStore = defineStore('cv', () => {
    const profile = reactive({
        name: data.name,
        photo: data.photo,
        preview: '',
        address: data.address,
        phone: data.phone,
        email: data.email,
    })
    const sections = ref(data.sections)
    const workExperiences = ref(data.workExperiences)
    const editMode = ref(false)

    const addSectionItem = (section) => {
        let item = {
            from: '',
            to: '',
            name: '',
            description: '',
            details: [],
        }
        if (section.data.length > 0) {
            item = Object.assign({}, section.data[0])
            for (const prop in item) {
                if (typeof item[prop] === 'object' && item[prop].length !== 0) {
                    item[prop] = []
                } else {
                    item[prop] = ''
                }
            }
        }

        section.data.push(item)
    }

    const clear = () => {
        profile.name = emptyData.name
        profile.photo = emptyData.photo
        profile.preview = ''
        profile.address = emptyData.address
        profile.phone = emptyData.phone
        profile.email = emptyData.email
        sections.value = emptyData.sections
        workExperiences.value = emptyData.workExperiences
    }

    const moveUp = (list, index) => {
        if (index <= 0 || list.length <= 1) {
            return;
        }

        const temp = list.splice(index, 1)[0];
        list.splice(index - 1, 0, temp);
    }

    const moveDown = (list, index) => {
        if (index >= list.length - 1 || list.length <= 1) {
            return;
        }

        const temp = list.splice(index, 1)[0];
        list.splice(index + 1, 0, temp);
    }

    return {
        profile,
        sections,
        workExperiences,
        addSectionItem,
        empty: clear,
        editMode,
        moveUp,
        moveDown
    }
})
