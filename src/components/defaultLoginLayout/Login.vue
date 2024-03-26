<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    primaryBtnText: {
        type: String,
        required: true
    },
    secundaryBtnText: {
        type: String,
        required: true
    }
});

</script>


<template>
    <main>
        <section class="form-section">
            <img src="/src/assets/logo.svg" />
            <h2>{{ title }}</h2>

            <slot></slot>

            <p class="forget"><a>Forget Password?</a></p>
            <button class="primaryBtnText">{{ primaryBtnText }}</button>
            <div class="or">
                <div></div>
                <span>
                    or
                </span>
                <div></div>
            </div>
            <button class="secundaryBtnText">{{ secundaryBtnText }}</button>
        </section>
        <section class="img-section">
            <h1>Organize sua vida</h1>
            <img src="/src/assets/mobills.svg" />
        </section>
    </main>
</template>

<style>
@import '../../styles/variaveis.css';

main {
    display: flex;
    flex-wrap: wrap;

    h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
margin: 20px 0 ;
    }

    p {
        font-size: 14px;
        text-align: right;
        width: 100%;
        font-weight: 400;
        color: var(--secondary-color)
    }

    .forget {
        margin-bottom: 20px;
    }

    section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .img-section {
        flex-grow: 1;
        background-color: var(--gray-bg);

        h1 {
            font-size: 32px;
            font-weight: 500;
            line-height: 48px;

        }
    }

    .form-section {
        flex-grow: 0.3;
        /* background-color: blue; */
        margin: 0 20px;

        button {
            background-color: var(--primary-color);
            width: 100%;
            height: 50px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }

        .primaryBtnText {
            color: var(--write-btn);
            box-shadow: 0px 8px 12px 0px #9440FF33;

        }

        .secundaryBtnText {
            border: 1px solid var(--primary-color);
            background: var(--write-btn);
            color: var(--primary-color);

        }

        .or {
            display: flex;
            flex-direction: row;
            margin: 20px 0;
            align-items: center;
            gap: 10px;
            width: 100%;
        }

        .or>span {
            color: var(--or-divisor);
        }

        .or>div {
            height: 1px;
            width: 100%;
            background-color: var(--or-divisor);
            border-radius: 1px;


        }



    }


}
</style>