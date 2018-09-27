<template>
	<div>
		<Header/>
		<section>
		    <div class="wrap-content">
				<div class="text-center" style="padding: 0 0 15px 0;">
				    <a href="https://bit.ly/2OCvHx7" target="_blank">
				        <img src="static/images/ads/v1/Banner-Top.gif">
				    </a>
				</div>                
				<div class="main-width">
				    <div class="wrap-content-two-box">
				        <div class="content-two-box-left">
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
				        </div>
				    </div>
				</div>
				<div id="loadmore-home" class="cusor-load" style="margin-top: 35px;">
				    <button class="b-loadmore">
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
        	
        }
    },
}
</script>