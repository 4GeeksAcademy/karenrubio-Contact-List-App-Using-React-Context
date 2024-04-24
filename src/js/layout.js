import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ContactForm from "./component/contactForm";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add" element={<ContactForm />} />
						<Route path="/edit/:id" element={<ContactForm />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

/*
-crear un formulario donde obtengamos los datos
-crear boton de add contact que te mande al formulario
-que los datos obtenidos se renderizen en forma de tarjeta de contacto
-que los datos de contacto se envien a la API
-darle vista a la tarjeta de contacto
-crear el boton de editar que al dar click te mande al formulario y te permita guardar contactos
-crear boton de eliminar con la alerta y que al dar click se elimine de la api y se renderize otra vez la api para mostrar los cambios
-mostrar todos los contactos visualmente
-link or get back to the contacts
-
-

 */