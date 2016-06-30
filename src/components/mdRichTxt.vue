<template>
    <div class="field-box currenteditor">
        <mdopbtns></mdopbtns>
        <div class="mag-title mag-title">
            <div style="text-align:center;color: #333333;" class="ng-scope"><p class="ng-binding">标题文字</p></div>
        </div>
    </div>
</template>

<script>
    import mdopbtns from './mdOPBtns';
    export default {
        data () {
            return {
            }
        },
        props:['dataid'],
        ready () {
            console.log(this.dataid);
        },
        components: {
            mdopbtns
        }
    }
</script>

<style>
    .mag-title div{
    	font-weight:bold;
    	font-size:18px;
    	text-indent:0em;
    	padding:8px 5px 8px 15px;
    	background-color: rgba(255,255,255,0);
    	margin: 0px 0 0px 0;
    }
    .mag-title div p{margin-bottom: 0;}
    .mag-title .title-three span:after{
        content: "";
        border: 1em solid #ff5d5d;
        border-left: none;
        border-right-color: transparent;  border-top-width:15px;
        border-right-width: 14px;
        border-bottom-width:15px;position: absolute;
        right: -14px;top: 0;
    }
</style>
