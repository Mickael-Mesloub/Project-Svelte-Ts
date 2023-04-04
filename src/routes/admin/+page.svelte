<script>
	let title = '';
	let content = '';
	let image = '';
</script>

<div class="add-article">
	<h2>Admin</h2>
	<h3>Ajouter un article</h3>
	<form method="POST" action="?/createArticle">
		<label for="title">Titre</label>
		<input type="text" name="title" bind:value={title} />
		<label for="content">Contenu</label>
		<input type="text" name="content" bind:value={content} />
		<label for="image">Image</label>
		<input type="text" name="image" bind:value={image} />
		<button>OK</button>
	</form>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 90%;
		max-width: 600px;
		margin: auto;
		padding: 40px;
	}
</style>
