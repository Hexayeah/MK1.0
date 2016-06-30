<template>
    <div class="modal-operatebtns clearfix">
        <span class="upmove" title="上移"><i class="icon_up"></i></span>
        <span class="downmove" title="下移"><i class="icon_down"></i></span>
        <span class="delmove ng-scope" title="删除"><i class="icon_del"></i></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }, components: {}
    }
</script>

<style>
    .modal-operatebtns {
        overflow: hidden;
        position: absolute;
        top: -20px;
        right: 0;
        z-index: 1;
        transition: .3s;
    }
    .field-box .modal-operatebtns span {
        float: left;
        height: 18px;
        width: 19px;
        overflow: hidden;
        line-height: 19px;
        color: #fff;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        background-color: rgba(60, 66, 71, 0.88);
    }

    .field-box .modal-operatebtns span:hover {
        background-color: #f95665;
    }

    .field-box:hover .modal-operatebtns{
        top: 0;
    }
</style>
