<style>
</style>
<template>
    <div class="cv-mRegion">
        <div class="accordion">
            <div class="accordion-inner">
                <div class="acc-group">
                    <div class="acc-head">
                        <a href="javascript:;">页面设置</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li> <i class="icoPic"></i>
                                    <span class="title">页面标题</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li> <i class="icoPic"></i>
                                    <span class="title">背景</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="acc-group fold">
                    <div class="acc-head">
                        <a href="javascript:;">文字模块</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li data-type="richtxt">
                                    <i class="icoPic"></i>
                                    <span class="title">富文本</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="title">
                                    <i class="icoPic"></i>
                                    <span class="title">标题</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="acc-group fold">
                    <div class="acc-head">
                        <a href="javascript:;">图片模块</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li data-type="puzzle">
                                    <i class="icoPic"></i>
                                    <span class="title">图片魔方</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="imglist">
                                    <i class="icoPic"></i>
                                    <span class="title">图片列表</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="acc-group fold">
                    <div class="acc-head">
                        <a href="javascript:;">交互模块</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li data-type="bigcarousel">
                                    <i class="icoPic"></i>
                                    <span class="title">大图轮播</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="smallcarousel">
                                    <i class="icoPic"></i>
                                    <span class="title">小图轮播</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="slideimgs">
                                    <i class="icoPic"></i>
                                    <span class="title">滑动图集</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="timingimgs">
                                    <i class="icoPic"></i>
                                    <span class="title">定时图集</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="acc-group fold">
                    <div class="acc-head">
                        <a href="javascript:;">商品模块</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li data-type="product">
                                    <i class="icoPic"></i>
                                    <span class="title">添加商品</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="searchprd">
                                    <i class="icoPic"></i>
                                    <span class="title">商品搜索</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="acc-group fold">
                    <div class="acc-head">
                        <a href="javascript:;">其它模块</a>
                    </div>
                    <div class="acc-body">
                        <div class="acc-inner">
                            <ul class="clearfix">
                                <li data-type="notice">
                                    <i class="icoPic"></i>
                                    <span class="title">滚动公告</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="contact">
                                    <i class="icoPic"></i>
                                    <span class="title">客服电话</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="auxline">
                                    <i class="icoPic"></i>
                                    <span class="title">辅助线</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="auxblank">
                                    <i class="icoPic"></i>
                                    <span class="title">辅助空白</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="floataround">
                                    <i class="icoPic"></i>
                                    <span class="title">左右浮动</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                                <li data-type="float">
                                    <i class="icoPic"></i>
                                    <span class="title">上浮动</span>
                                    <div class="addbtn">+&nbsp;添加</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
                return {
                name:"guowenfh",
                age:"2q1"
            }
        },
        props: ['dataid', 'addtype', 'isadd'],
        ready () {
            let _this = this;
            $(".accordion .acc-group .acc-head").click(function () {
                var parent = $(this);
                while (parent && !parent.hasClass('acc-group')) {
                    parent = parent.parent();
                }
                parent.toggleClass("fold");
            });

            $(".accordion .acc-group li").click(function () {
                var parent = $(this);
                while (parent && !parent.is('li')) {
                    parent = parent.parent();
                }
                _this.addtype = parent.attr("data-type");
                _this.isadd = true;
            });
        }
    }
</script>
