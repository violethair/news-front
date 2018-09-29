<template>
    <footer>
    <div class="wrap-content-footer" v-if="setting">
        <div class="main-width">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12">
                        <div class="logoft">
                            <a href="/" title="">
                                <img src="/static/images/logoft.png" title="" alt="" />
                            </a>
                            <div v-html="setting.footer"></div>
                            <div class="email-contact">
                                Contact us:
                                <span>{{ setting.email }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="wrap-category">
                            <label>Category</label>
                            <ul>
                                <li v-for="data in category">
                                    <a :href="'/category/' + data.link" :title="data.name">
                                        <i class="fa fa-caret-right" aria-hidden="true"></i>{{data.name}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="wrap-category" style="padding-left: 0;">
                            <label>Follow us</label>
                        </div>
                        <div class="wrap-link-share-ft">
                            <ul>
                                <li>
                                    <a :href="setting.tiwter" target="_blank">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="setting.youtube" target="_blank">
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="setting.facebook" target="_blank">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="setting.instagram" target="_blank">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="setting.reddit" target="_blank">
                                        <i class="fa fa-reddit-alien" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul class="share2">
                                <li>
                                    <a href=""
                                       target="_blank">
                                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href=""
                                       target="_blank">
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="coppyright">
        <div class="main-width">
            iholding.io - Copyright @2018. All right reserved.
        </div>
    </div>

    <div class="fix-icon-right" id="fixedmenu">
        <ul class="unstyled">
            <li>
                <a href="" title="Top" class="scrollup">
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>

    <div class="share-right" v-if="setting">
        <ul>
            <li>
                <a :href="setting.tiwter" target="_blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.youtube" target="_blank">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.facebook" target="_blank">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.instagram" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.reddit" target="_blank">
                    <i class="fa fa-reddit-alien" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.google" target="_blank">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a :href="setting.telegram" target="_blank">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>

</footer>
</template>

<script>
export default {
    data () {
        return {
            setting : null,
            category: []
        }
    },
    beforeCreate : async function () {
        var _this = this;
        try {
            var res = await axios.get('/getSetting');
            this.setting = res.data.data;
            var res = await axios.get('/getCategory');
            this.category = res.data.data;
            $("html meta[name='description']").attr('content',_this.setting.meta_des);
        } catch (e) {
            console.log(e.message);
        }
    }
}
</script>