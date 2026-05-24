<script>
</script>

<div id="rainbow"></div>
<div id="stripe"></div>

<div>
	<div>
		<h3>EXTRA</h3>
		<span>Download hundreds of great games</span>
	</div>
</div>

<style>
	#rainbow {
		height: 10%;
		width: 100%;
		padding: 1em;
		display: block;
		margin-bottom: 1rem;
		background-image: linear-gradient(
			90deg,
			red,
			orange 20%,
			yellow 40%,
			green 60%,
			blue 80%,
			violet 90%
		);
	}

	#stripe {
		height: 10%;
		width: 100%;
		display: block;
		padding: 1rem;
		background-image: linear-gradient(55deg, #4097ff, #ffbe00, #4097ff);
		/* background-repeat: repeat; */
	}
	div > div {
		width: 50%;
		padding: 1em;
		margin: auto;
		border-radius: 30px;
		border: 10px solid transparent;
		background-clip: padding-box;
		outline: 1px solid blue;
		background:
			url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmagic.com%2Fproduct_images%2Fred-solid-circle-png-image.png&f=1&nofb=1&ipt=63f7cb78cd36461c9802dea1813af8c205b61bc7ca819d82d6a79aab898f98de'),
			url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230330%2Foriginal%2Fpngtree-red-color-gradient-brush-stroke-png-image_9011033.png&f=1&nofb=1&ipt=02da492a324b053e0d06f5e9ab990e455d598ce59c65af0e62e469f48fa4b166');

		background-position:
			top left,
			bottom right;
		background-size: 30px, 30px;
		background-repeat: no-repeat, no-repeat;
		background-color: rgb(255, 196, 0);
		background-clip: padding-box;
		box-shadow: 10px 10px black;
	}

	h3 {
		margin: 0;
	}
</style>
