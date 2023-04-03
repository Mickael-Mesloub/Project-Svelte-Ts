<script lang="ts">
	export let src = '';
	export let alt = '';
	export let title = '';
	export let content = '';
</script>

<article>
	<div class="article-box">
		<div class="article-img">
			<img {src} {alt} />
		</div>
		<h3>{title}</h3>
		<div class="content">
			{content}
		</div>
	</div>
</article>

<style lang="stylus">

    article 
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        flex-wrap: wrap
        margin-bottom: 20px
        width: 31%
        box-shadow: 5px 5px 10px var(--dark-purple)

        @media screen and (max-width: 768px)
            width: 100% 
        
        .article-box
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            background: var(--light-purple)
            padding: 20px
            border-radius: 8px

        .article-img
            height: 200px
            width: 100%
            box-sizing: border-box

            img
                height: 100%
                width: 100%
                border-radius: 4px

</style>
