<script setup>
import { defineProps } from 'vue';

const InputType = {
    Text: 'text',
    Email: 'email',
    Password: 'password'
};

const props = defineProps({
    props: {
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

    }
})
</script>


<template>
    <div>
        <label :for="forName">{{ label }}</label>
        <div>
            <input :type="type"  :id="forName"  :placeholder="placeholder" required/>
            <div>
                <slot></slot>
            </div>
            
        </div>
    </div>
</template>

<style></style>