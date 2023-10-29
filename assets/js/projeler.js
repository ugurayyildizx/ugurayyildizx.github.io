const Projects = [
	{
		title: 'ShowHiddenChannels',
		description: 'A plugin for BetterDiscord that allows users to view information about hidden channels in a Discord server, such as their name, description and which roles or users have access to these hidden channels.<br><br>Please note that this plugin will not allow you to read the messages in these channels, it will only show you information about them.',
		
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/return-ShowHiddenChannels'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=js',
				link: 'https://raw.githubusercontent.com/JustOptimize/return-ShowHiddenChannels/main/ShowHiddenChannels.plugin.js'
			}
		],

		icon: "/assets/images/icons/lock.svg",
		img: 'https://user-images.githubusercontent.com/54294419/225766894-48d40546-ed7a-4794-888f-f0aafba26100.png'
	}

]

// Show popup with project description
function showDesc(prTitle){
	let project = Projects.find(x => x.title === prTitle);

	let titleElement = document.getElementById("prTitle");
	let dateElement = document.getElementById("prDate");

	// Set project attributes
	titleElement.innerHTML = prTitle;
	document.getElementById("prDesc").innerHTML = project.description;

	let img = document.getElementById("prImg");
	if(project.img){
		img.src = project.img;
		img.style.display = "block";
	}else{
		img.style.display = "none";
	}

	if(project.date){
		dateElement.innerHTML = "(" + project.date + ")";
		dateElement.style.display = "block";

		titleElement.style.marginBottom = "5px";
	}else{
		dateElement.style.display = "none";

		titleElement.style.marginBottom = "10px";
	}

	// Set links
	document.getElementById("prLink").innerHTML = "";

	if(project?.links?.length > 0){
		project.links.forEach(link => {
			let a = document.createElement("a");

			if(link.icon){
				let img = document.createElement("img");

				img.src = link.icon;
				img.title = link.name;

				img.style.marginRight = "5px";
				a.appendChild(img);
			}

			a.href = link.link;

			document.getElementById("prLink").appendChild(a);
		});
	}

	// Show popup
	document.getElementById("popup").style.display = "flex";
}

// Add a listener to to close the popup when the user clicks outside of it
window.addEventListener("click", function(event) {
	if (
		event.target != document.getElementById("popup") &&
		!document.getElementById("popup").contains(event.target) &&
		!document.getElementById("projects").contains(event.target)
	) {

		document.getElementById("popup").style.display = "none";
	}
})

// Add projects to the page
Projects.forEach(project => {
	let a = document.createElement("a");
	// a.className = "project";

	let icon = document.createElement("img");
	icon.src = project.icon;
	icon.title = project.title;

	icon.addEventListener("click", function(){
		showDesc(project.title);
	});

	a.appendChild(icon);
	
	// Spacer
	a.appendChild(document.createTextNode(" "));

	document.getElementById("projects").appendChild(a);

	// Prelaod image
	if(!project.img) return;

	let preload = document.createElement("img");
	preload.src = project.img;
});