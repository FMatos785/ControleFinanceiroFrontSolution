<script setup>
import { defineProps, defineEmits  } from 'vue';

const InputType = {
    Text: 'text',
    Email: 'email',
    Password: 'password'
};


const props = defineProps({
    type: {
        type: String,
        required: true
    },
    forName: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
    },
    label: {
        type: String,
        required: true,

    }
})



const emit = defineEmits();

const fieldValue = '';

const emitChange = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)


    console.log("opas")
  emit('change', event.target.value);
};

</script>


<template>
    <div class="form-elementos">
        <label :for="forName">{{ label }}</label>
        <div class="form-input-img">
            <!-- <input :type="type" :id="forName" :placeholder="placeholder"  required> -->
            <input :type="type" :id="forName" :placeholder="placeholder" v-model="fieldValue"  @input="emitChange" required>

            <div class="form-img">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<style scoped>
.form-elementos {
    /* background-color: red; */
    width: 100%;
    margin: 20px 0;

    label {
        color: var(--text-color);
        font-weight: 400;
    }


    .form-input-img {
        display: flex;
        width: 100%;
        margin: 10px 0;

        /* padding: 10px 0; */
        /* background-color: red; */
        background-color: var(--gray-bg);
        color: var(--text-color);
        border-radius: 5px 0 0 5px;


        input {
            width: 100%;
            border-radius: 5px 0 0 5px;
            border: none;
            background-color: var(--gray-bg);
            color: var(--text-color);

            

        }

        .form-img {
            background-color: var(--primary-color);
            padding: 10px 10px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }



    }
}
</style>