<footer>
	<div class="footer-content">
		<p>Info 1</p>
		<p>Info 2</p>
		<p>Info 3</p>
	</div>
</footer>

<style lang="stylus">

    :root 
        --dark-purple: rgba(36, 0, 84, .8)
    footer 
        min-height: 100px
        background: var(--dark-purple)
        padding-top: 50px

        .footer-content
            display: flex
            margin: 0 auto
            width: 90%
            border-top: 1px solid white
            justify-content: space-around

            p 
                color: white
</style>
