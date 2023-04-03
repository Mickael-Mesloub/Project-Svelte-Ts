<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Article from '../../components/article/Article.svelte';

	const src = `${env.PUBLIC_URL}/src/assets/img/welcome.jpg`;
	const alt = 'Welcome image';
	const title = 'Bienvenue sur mon site';
	const content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi orci, suscipit eget urna vestibulum, accumsan porta diam. Vestibulum nec turpis lectus. Pellentesque rhoncus nulla viverra, pellentesque enim aliquet, malesuada justo. Curabitur in tortor nulla. Vestibulum at sagittis metus, vitae laoreet justo. Integer rhoncus consectetur eros, quis dapibus odio pulvinar non. Maecenas ut diam ultrices, dictum mi sed, pretium neque. Vivamus cursus laoreet quam auctor fringilla. Morbi pulvinar lacinia sem. Nullam pulvinar augue eget dignissim ultrices. Morbi suscipit erat sem, non elementum tellus maximus id. Nunc et bibendum diam. Suspendisse maximus eu tellus et posuere. Nunc faucibus urna odio, id vehicula purus rhoncus ut.  Vestibulum gravida nec massa nec varius. Sed nec lectus vel lorem feugiat bibendum. Phasellus pulvinar ut ante id porta. Proin vel rhoncus quam. Donec ac libero malesuada, pulvinar justo at, bibendum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla in leo quam. Fusce efficitur mauris arcu, eget convallis odio rhoncus vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec felis velit, ultrices ac est ac, bibendum hendrerit sapien. Aliquam vulputate nisl vulputate libero semper, eu interdum nisl interdum. Nullam non luctus velit, sit amet dignissim velit. Ut dignissim, quam elementum fringilla elementum, mauris ipsum dapibus augue, ut placerat quam lacus vel lorem. Vivamus interdum tellus aliquet magna consectetur maximus. Integer ultrices nulla non nisl ultricies, ac placerat tortor tempus.';
</script>

<h2>News</h2>
<section>
	<Article {src} {alt} {title} {content} />
	<Article {src} {alt} {title} {content} />
	<Article {src} {alt} {title} {content} />
	<Article {src} {alt} {title} {content} />
	<Article {src} {alt} {title} {content} />
	<Article {src} {alt} {title} {content} />
</section>

<style lang="stylus">
    section 
        display: flex
        flex-wrap: wrap
        justify-content: center
        gap: 1em
        box-sizing: border-box

</style>
