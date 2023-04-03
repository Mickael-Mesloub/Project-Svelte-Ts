<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/news">News</a></li>
	</ul>
</nav>

<style lang="stylus">

    ul 
        display: flex
        justify-content: center
        padding: 20px

        li 
            list-style: none
            background: var(--dark-purple)
            border-radius: 4px
            padding: 8px
            margin-right: 15px
            transition: transform .3s ease-in-out

            &:hover 
                background: var(--light-purple)
                transform: scale(1.2)
                opacity: .9
                transition: transform .3s ease-in-out

            &:hover a
                color: var(--dark-purple)

            a 
                font-family: "Delius Swash Caps", serif
                text-decoration: none
                font-weight: 700
                color: var(--beige)
</style>
