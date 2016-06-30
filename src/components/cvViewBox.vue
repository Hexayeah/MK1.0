<style>
    .field-box
    , .field-box.currenteditor {
        position: relative;
    }

    .field-box {
        cursor: pointer;
        height: auto;
        overflow: hidden;
    }

    .field-box.currenteditor:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-width: 2px;
        border-color: rgba(249, 86, 86, 0.8);
        animation: animborder 3s infinite;
        -webkit-animation: animborder 3s infinite;
        border-style: dashed;
        opacity: 1;
    }

    @-webkit-keyframes animborder {
        0%,
        25%,
        51%,
        75% {
            border-style: dashed;
            opacity: .5
        }
        100%,
        26%,
        50%,
        76% {
            border-style: dashed;
            opacity: 1
        }
    }

    @keyframes animborder {
        0%,
        25%,
        51%,
        75% {
            border-style: dashed;
            opacity: .5
        }
        100%,
        26%,
        50%,
        76% {
            border-style: dashed;
            opacity: 1
        }
    }
</style>
<template>
    <cvmregion :dataid.sync="dataid" :addtype.sync="addtype" :isadd.sync="isadd"></cvmregion>
    <div class="cv-viewBox">
        <div class="vb-wrap">
            <div class="vb-bg"></div>
            <div class="vb-body"></div>
        </div>
    </div>
    <cviregion></cviregion>
</template>
<script>
    import cvmregion from './cvMRegion';
    import cviregion from './cvIRegion';

    import mdrichtxt from './mdRichTxt';
    import mdtitle from './mdTitle';
    import mdbigcarousel from './mdBigCarousel';
    import mdproduct from './mdProduct';
    import mdsearchprd from './mdSearchprd';
    import mdnotice from './mdNotice';
    import mdcontact from './mdContact';
    import mdauxline from './mdAuxline';
    import mdauxblank from './mdAuxblank';
    export default {
         data () {
            return {
                addtype: "",
                isadd: false
            }
        },
        props: ['page-data', 'dataid'],
        components: {
            cvmregion, cviregion, mdrichtxt, mdtitle, mdbigcarousel, mdproduct, mdsearchprd, mdnotice, mdcontact, mdauxline, mdauxblank
        },
        watch: {
            'isadd' (newVal, oldVal) {
                if(newVal==true) {
                    this.isadd = false;
                    if(this.addtype != "") {
                        let md = null;
                        switch(this.addtype) {
                            case "richtxt": md = Vue.extend(mdrichtxt);break;
                            case "title": md = Vue.extend(mdtitle);break;
                            case "imglist": md = Vue.extend(mdimglist);break;
                            case "bigcarousel": md = Vue.extend(mdbigcarousel);break;
                            case "smallcarousel": md = Vue.extend(mdsmallcarousel);break;
                            case "product": md = Vue.extend(mdproduct);break;
                            case "searchprd": md = Vue.extend(mdsearchprd);break;
                            case "notice": md = Vue.extend(mdnotice);break;
                            case "contact": md = Vue.extend(mdcontact);break;
                            case "auxline": md = Vue.extend(mdauxline);break;
                            case "auxblank": md = Vue.extend(mdauxblank);break;
                        }
                        if(md != null) {
                            (new md({
                                propsData: {
                                    dataid: "hello"
                                }
                            })).$mount().$appendTo('.vb-body');
                        }
                    }
                }
            },
            'dataid' (newVal, oldVal) {
                console.log(newVal);
            }
        }
    }
</script>
