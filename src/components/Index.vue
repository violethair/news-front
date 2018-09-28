<template>
	<div>
		<Header/>
		<section>
		    <div class="wrap-content">
				<div class="text-center" style="padding: 0 0 15px 0;">
				    <a href="https://bit.ly/2OCvHx7" target="_blank">
				        <img src="/static/images/ads/v1/Banner-Top.gif">
				    </a>
				</div>
				<div class="wrap-top-news" v-if="lastest && lastest.length > 0">
					<div class="main-width">
						<div class="wrap-content-slide">
					        <div class="wrap-content-slide-left">
					            <div class="b-display-content">
					                <a :href="'/post/' + lastest[0].link" :title="lastest[0].name">
					                    <div class="bg-rgb"></div>
					                </a>
					                <div class="info-slide">
					                    <div class="author-time">
					                        <span class="category">
					                            <a :href="'/category' + lastest[0].category.link" :title="lastest[0].category.name">{{ lastest[0].category.name }}</a>
					                        </span>
					                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ lastest[0].publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
					                    </div>
					                    <a :href="'/post/' + lastest[0].link" :title="lastest[0].name" class="font-bold titlesite">{{ lastest[0].name }}</a>
					                </div>
					                <a :href="'/post/' + lastest[0].link">
					                    <img :src="API_URL + '/postThumb/' + lastest[0].images">
					                </a>
					            </div>
					        </div>

					        <div class="wrap-content-slide-right">
					            <div v-for="data,key in lastest" v-if="key != 0" :class="'b-display-content topnew' + key">
					                <a :href="'/post/' + data.link">
					                    <div class="bg-rgb1"></div>
					                </a>
					                <div class="info-slide">
					                    <a :href="'/post/' + data.link" :title="data.name" class="font-bold">{{ data.name }}</a>
					                </div>
					                <a :href="'/post/' + data.link" :title="data.name">
					                    <img :src="API_URL + '/postThumb/' + data.images" :title="data.name">
					                </a>
					            </div>
					        </div>

					    </div>
					</div>
				</div>
				<div class="main-width" v-if="pressReleases && pressReleases.length > 0">
				    <div class="wrap-releases">
				        <div class="title-releases">
				            <a href="javascript:void(0);" title="Press Releases">
				                Press Releases
				            </a>
				        </div>
				        <ul>
				            <li v-for="data in pressReleases">
				                <div class="wrap-content-releases">
				                    <a :href="'/post/' + data.link" :title="data.name">
			                    		<div :style="'float:left;margin-right:5px;width: 100px;height: 82px;background-size:cover;background-possition:center;background-image:url('+API_URL + '/postThumb/' + data.images+')'" class="image" :title="data.name" :alt="data.name">
			                    		</div>
				                    </a>
				                    <p class="text-sponsored">Sponsored</p> <a :href="'/post/' + data.link" :title="data.name">{{ data.name }}</a>
				                </div>
				            </li>
				        </ul>
				    </div>
				</div>
				<div class="main-width">
				    <div class="wrap-content-two-box">
						<div class="content-two-box-left">
						    <div class="b-title-one">
						        <a href="/category/analysis" title="Analysis" class="font-bold">
						            <i class="fa fa-star" aria-hidden="true"></i>
						            Analysis </a>
						    </div>
						    <div class="wrap-list-data-one">
						        <ul>
						            <li v-for="data in analysis">
						                <div class="wrap-content-data-one">
						                    <div class="w-img-two img-outer">
						                        <a :href="'/post/' + data.link" :title="data.name">
						                        	<div :style="'float:left;margin-right:5px;width: 250px;height: 166px;background-size:cover;background-possition:center;background-image:url('+API_URL + '/postThumb/' + data.images+')'"></div>
						                        </a>
						                    </div>
						                    <div class="author-time">
						                        <span class="category">
						                            <a href="/category/analysis" title="Analysis">
						                                Analysis </a>
						                        </span>
						                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
						                    </div>
						                    <h3>
						                        <a :href="'/post/' + data.link" :title="data.name">{{data.name}}</a>
						                    </h3>
						                    <div class="shortdes">{{data.shortdes}}</div>
						                </div>
						            </li>
						        </ul>
						    </div>
						</div>
						<Sidebar/>
				    </div>
				    <div class="wrap-content-all-box">
				        <div class="b-title-two">
				            <a href="" title="" class="font-bold">
				                <i class="fa fa-paperclip" aria-hidden="true"></i>
				                All News
				            </a>
				        </div>
						<div class="wrap-list-data-two" id="return_ajax_product">
					    <ul>
					        <li v-for="data,key in all">
								<!-- Ads -->
					            <div v-if="adsPossition.indexOf(key+1) != -1" class="text-center" style="padding: 0 0 0px 0;">
					                <a href="https://bit.ly/2LNjUPm" target="_blank">
					                    <img src="/static/images/ads/v1/AllNew1.gif">
					                </a>
					            </div>
					            <!-- News -->
					            <div v-else class="wrap-content-data-two">
					                <div class="w-img-two img-outer" style="height: 200px;overflow: hidden;">
					                    <a :href="'/post/' + data.link" :title="data.name">
					                        <img class="image" :src="API_URL + '/postThumb/' + data.images" :title="data.name">
					                    </a>
					                </div>
					                <div class="info-data">
					                    <h3>
					                        <a :href="'/post/' + data.link" :title="data.name">{{data.name}}</a>
					                    </h3>
					                    <div class="shortdes">{{data.shortdes.substring(1,200)}}</div>
					                    <div class="author-time">
					                        <span class="category">
					                            <a :href="'/category/' + data.category.link" :title="data.category.name">{{ data.category.name }}</a>
					                        </span>
					                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
					                    </div>
					                </div>
					            </div>
					        </li>
					    </ul>
					</div>
				    </div>
				</div>
				<div id="loadmore-home" class="cusor-load" style="margin-top: 35px;">
				    <button class="b-loadmore" @click="loadMore">
				        View more
				    </button>
				    <div class="load-more">
				        <img src="/static/images/load-more.png" title="Load more" alt="Load more">
				    </div>
				</div>
			</div>
		</section>
		<Footer/>
	</div>
</template>

<script>
export default {
    data () {
        return {
        	API_URL : null,
        	lastest: [],
        	pressReleases: [],
        	analysis: [],
        	all : [],
        	adsPossition: [2,8],
        	page: 0
        }
    },
    beforeMount: async function () {
    	var _this = this;
    	_this.API_URL = config.API_URL;
    	try {
    		let res = await axios.get('/getHomeData');
    		_this.lastest = res.data.lastest;
    		_this.pressReleases = res.data.pressReleases;
    		_this.analysis = res.data.analysis;
    		_this.all = res.data.all;
    	} catch (e) {
    		console.log(e);
    	}
    },
    methods: {
    	loadMore: async function (event) {
    		var _this = this;
    		try {
	    		let res = await axios.get('/getMorePost/' + (_this.page + 1));
	    		_this.all = _this.all.concat(res.data.data);
	    		$(event.target).waitMe('hide');
	    	} catch (e) {
	    		console.log(e);
	    	}
    	}
    }
}
</script>