<style lang="sass">
</style>
<template>
    <div class="cv-iRegion">
        <div class="iTitleBox clearfix">
            <span class="title">标题</span>
            <a href="javascript:;" class="helpBtn FR" @click="helpTarget">帮助</a>
        </div>
        <div class="iHelpBox ease-trans">
            {{helpMsg}}
        </div>
    </div>
</template>
<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                helpMsg: "这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助这是帮助"
            }
        },
        methods: {
            helpTarget (e) {
                $(".iHelpBox").toggleClass("fold");
            }
        }
    }
</script>
