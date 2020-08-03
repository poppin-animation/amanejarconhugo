const form = document.querySelector("#info")
const email = = document.queryselector("#email")
const emailHelp = = document.queryselector("#emailHelp")
const nombre = = document.queryselector("#nombre")
const nombreHelp = = document.queryselector("#nombreHelp")
const curso = = document.queryselector("#curso")
const Localidad = = document.queryselector("#Localidad")

	form.addEventlistener("submit", (event) => {
		event.preventDefault()
		//queremos validar que se estan trayendo los datos
		if(email.value === "" || nombre.value === "") 
			{
			if(email.value === "" ) {
				emailHelp.innerText = "¡Por favor completar esta información!";
						}
			if(nombre.value === "" ) {
				nombreHelp.innerText = "¡Por favor completar esta información!";
			}
		} 	else 	{
			form.submit();
			}
	})


	