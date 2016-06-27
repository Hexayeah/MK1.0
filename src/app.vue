<style lang="sass">
</style>
<template>
    <div class="c-view">
        <cvmregion></cvmregion>
        <cvviewbox></cvviewbox>
        <cviregion></cviregion>
        <cvfooter></cvfooter>
    </div>
</template>
<script>
    import cvmregion from './components/cvMRegion';
    import cvviewbox from './components/cvViewBox';
    import cviregion from './components/cvIRegion';
    import cvfooter from './components/cvFooter';
    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q1"
            }
        },
        components: {
            cvmregion, cvviewbox, cviregion, cvfooter
        }
    }
</script>
