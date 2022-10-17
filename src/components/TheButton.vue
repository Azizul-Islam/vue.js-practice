<template>
    <div class="the_button" :class="{'the_button_block': block}">
        <button>
            <slot></slot>
        </button>

    <div class="the_button_loading" v-if="loading">
        <img src="img/spinner.gif" alt="">
    </div>
    </div>
    
</template>
<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false,
            },
            block: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style>
.the_button{
    position: relative;
    display: inline-block;
}
.the_button_block{
    width: 100%;
}
.the_button button{
  padding: 9px 22px;
  font-size: 15px;
  background-color: rgb(48, 15, 15);
  border: 1px solid rgb(48, 15, 15);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 2px 1px #afafaf;
  border-radius: 3px;
}
.the_button button:hover{
  color: #ffdac8;
  background: #000;
  box-shadow: 0 2px 3px 2px #afafaf;
}

.the_button_loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(48,15,15); 
}
.the_button button{
    width: 100%;
}
</style>