<template>
    <teleport to="body">
    <transition name="fade">
    <div class="modal" v-show="modelValue">
        <transition name="zoom">
        <div class="modal_container" v-show="modelValue">
            <div class="modal_header d-flex jc-between ai-center">
                <div class="p-2 pl-3">
                    {{ heading }}
                </div>
                <div class="modal_close" @click="closeModal">X</div>

            </div>
            <div class="modal_body">
                <slot></slot>
            </div>
        </div>
    </transition>
    </div>
</transition>
</teleport>
</template>
<script>
    export default {
        props: {
            heading: {
                type: String,
                default: "Default Heading",
            },
            modelValue: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            closeModal(){
                this.$emit('update:modelValue', false);
            }
        }
    }
</script>
<style>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal_container {
        width: 444px;
        min-height: 222px;
        background-color: rgb(235,235,235);
        border-radius: 9px;
        box-shadow: 0 0 15px 5px rgb(0 0 0 / 20%);
    }
    .modal_container_lg{
        width: 555px;
    }
    .modal_header{
        font-size: 22px;
        font-weight: bold;
        color: rgb(48, 15, 15);
    }
    .modal_close{
        cursor: pointer;
        padding: 3px 9px;
        font-weight: bold;
    }
    .modal_close:hover{
        color: red;
    }
    .modal_body{
        padding: 44px;
        padding-top: 22px;
    }
</style>