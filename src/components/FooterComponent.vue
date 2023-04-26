<template>
   <footer>
        <!-- FOOTER TOP -->
        <div class="f-top text-center">
            FOOTER TOP
        </div>
        <!-- FOOTER BOTTOM -->
        <div class="f-bottom text-center">
            FOOTER BOTTOM
        </div>
   </footer>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'FooterComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-top{
        height: 450px;
        border: 1px solid red;
    }
    .f-bottom{
        height: 150px;
        border: 1px solid red;
    }
</style>