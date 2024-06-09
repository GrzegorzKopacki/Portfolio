import ONE from "../assets/projectOneHero.png";
import TWO from "../assets/Horizon.png";

export const PROJECTS = [
	{
		id: 1,
		title: "Wearhouse e-commerce app",
		image: ONE,
		live: "https://react-shop-front-end.vercel.app",
		github: "https://github.com/GrzegorzKopacki/ReactShop",
		technologies: ["JavaScript", "React", "React Router", "Vite"],
		description:
			"Wearhouse is a web application built using React, React Router and Vite, allowing users to browse products, manage their cart and favorite items, and complete their orders. The backend of the application is based on db-json.",

		descriptionPL:
			"Moja aplikacja e-commerce to aplikacja webowa stworzona przy użyciu React, React Router i Vite, która umożliwia użytkownikom przeglądanie produktów, zarządzanie koszykiem i ulubionymi przedmiotami, oraz finalizowanie zamówień. Backend aplikacji opiera się na db-json.",
	},
	{
		id: 2,
		title: "Horizon banking app",
		image: TWO,
		live: "https://banking-app-seven-navy.vercel.app/",
		github: "https://github.com/GrzegorzKopacki/banking_app",
		technologies: [
			"TypeScript",
			"React",
			"Next.js",
			"AppWrite",
			"Plaid",
			"Dwolla",
			"React Hook Form",
			"TailwindCSS",
			"Chart.js",
			"ShadCN",
		],
		description:
			"Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",

		descriptionPL:
			"Zbudowany przy użyciu Next.js, Horizon to platforma finansowa typu SaaS, która łączy się z wieloma kontami bankowymi, wyświetla transakcje w czasie rzeczywistym, umożliwia użytkownikom przekazywanie pieniędzy innym użytkownikom platformy oraz zarządza ich finansami jako całością.",
	},
	{
		id: 3,
		title: "some title",
		image: ONE,
		live: "some link",
		github: "some github",
		technologies: ["TypeScript", "Next.js", "React", "Vite"],
		description:
			"In a magical garden full of colorful flowers, three friends met: an owl, a rabbit, and a hedgehog. They talked about their dreams and plans for the future, while admiring the sunset painting the sky with pink and orange hues.",

		descriptionPL:
			"W magicznym ogrodzie pełnym kolorowych kwiatów, spotkały się trzy przyjaciółki: sowa, zając i jeżyk. Rozmawiały o swoich marzeniach i planach na przyszłość, podziwiając jednocześnie zachód słońca malujący niebo różowymi i pomarańczowymi barwami.",
	},
	{
		id: 4,
		title: "some title",
		image: ONE,
		live: "some link",
		github: "some github",
		technologies: ["JavaScript", "React", "Vite"],
		description:
			"In a magical garden full of colorful flowers, three friends met: an owl, a rabbit, and a hedgehog. They talked about their dreams and plans for the future, while admiring the sunset painting the sky with pink and orange hues.",

		descriptionPL:
			"W magicznym ogrodzie pełnym kolorowych kwiatów, spotkały się trzy przyjaciółki: sowa, zając i jeżyk. Rozmawiały o swoich marzeniach i planach na przyszłość, podziwiając jednocześnie zachód słońca malujący niebo różowymi i pomarańczowymi barwami.",
	},
];
