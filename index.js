const allPosts = document.querySelector(".allPosts");
const addPost = document.querySelector("#add-post");
console.log(allPosts);
const createPost = (author, title, details) =>{
	const newCardHTML = `<!--post card start -->
		<div class="card mb-3" style="max-width: 540px;">
			<div class="row g-0">
				<div class="col-md-4 author">
					<h5 class="card-title">${author}</h5>
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">${title} <span class="material-symbols-outlined">delete</span></h5>
						
						<p class="card-text">${details}</p>
						<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</div>
		</div>
		<!--post card start -->`
		return newCardHTML;
} 
const appendNewPost = () =>{
	const newPost = createPost("Divya", "live long", "life is amazing, no!!??");
	allPosts.innerHTML += newPost;
}

addPost.addEventListener("click", appendNewPost);