const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// función para importar contactos
			getContacts: async () => {
				const resp = await fetch(process.env.BACKEND_URL + "agendas/morpheus/") 
					// Process permite acceder a las variables de entorno en .env
				const data = await resp.json();
				console.log(data);
				setStore({contacts: data.contacts}) // esto permite actualizar los contactos
			},
			// función para enviar nuevos contactos creados a la DB
			createContact: async (newContact) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				const resp = await fetch(process.env.BACKEND_URL + "agendas/morpheus/contacts", {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(newContact)
				}) 
					// Process permite acceder a las variables de entorno en .env
				if (resp.ok) {
					await getActions().getContacts();
				}
			}
		}
	};
};

export default getState;
