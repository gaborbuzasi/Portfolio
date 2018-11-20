<template>
    <div class="about">
			<img src="../assets/me.jpg" class="me" />
			<h1>Gabor Buzasi</h1>
			<h2>SOFTWARE ENGINEER</h2>

			<hr class="grey" />
			<p class="bio">
				Gabor is an apprentice graduate web developer mainly working with the Microsoft stack.
				He is enthusiastic about learning new technologies and practices. In his free-time
				he also enjoys hillwalking, cycling and socializing.
			</p>
		</div>
</template>
<style scoped>
h1 {
	color: white;
	font-size: 50px;
	font-weight: normal;
	margin-bottom: 0;
}

h2 {
	color: white;
	font-size: 18px;
	margin-top: 0;
}

.bio {
	color: white;
	font-size: 16px;
}

.me {
	height: 150px;
	border-radius: 100%;
	border-style: solid;
	border-color: white;
	margin-top: 40px;
}

.about {
	width: 400px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	background-color: rgba(14, 13, 13, 0.788);
	padding: 10px;
	border-radius: 10px;
	animation: aboutAppear 2s 2s;
}

.grey {
	height: 3px;
	background-color: #919191;
	border: none;
	width: 50px;
}

.footer {
	bottom: 0;
	height: 25px;
	width: 480px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	background: rgba();
	color: white;
}

.footer > a {
	color: white;
	padding: 10px;
	text-decoration: none;
}
</style>
