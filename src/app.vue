<style lang="sass">
</style>
<template>
    <div class="c-view">
        <cvviewbox :page-data.sync="pageData" :dataid.sync="dataid"></cvviewbox>
        <cvfooter></cvfooter>
    </div>
</template>
<script>
    import store from './store';
    import cvviewbox from './components/cvViewBox';

    import cvfooter from './components/cvFooter';
    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            let pageData = store.fetch();
            return {
                pageData: pageData,
                dataid: pageData.dataid
            }
        },
        components: {
            cvviewbox, cvfooter
        }
    }
</script>
