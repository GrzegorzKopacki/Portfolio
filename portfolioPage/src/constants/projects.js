import ONE from "../assets/projectOneHero.png";
import TWO from "../assets/Horizon.png";
import THREE from "../assets/quizz.png";
import FOUR from "../assets/memory.png";

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
			"Wearhouse to aplikacja webowa stworzona przy użyciu React, React Router i Vite, która umożliwia użytkownikom przeglądanie produktów, zarządzanie koszykiem i ulubionymi przedmiotami, oraz finalizowanie zamówień. Backend aplikacji opiera się na db-json.",
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
		title: "QuizzCreator App",
		image: THREE,
		live: "https://quizzcreator.netlify.app/",
		github: "https://github.com/GrzegorzKopacki/QuizApp",
		technologies: ["JavaScript", "React", "Vite", "Firebase"],
		description:
			"QuizzCreator is a web application built with React and Firebase, allowing users to create and take quizzes. It provides functionality for adding new questions, deleting existing questions, and summarizing quiz results.",

		descriptionPL:
			"QuizzCreator to aplikacja internetowa zbudowana przy użyciu React i Firebase, umożliwiająca użytkownikom tworzenie i rozwiązywanie quizów. Zapewnia funkcjonalność dodawania nowych pytań, usuwania istniejących pytań oraz podsumowywania wyników quizu.",
	},
	{
		id: 4,
		title: "Memory numbers",
		image: FOUR,
		live: "https://memorynumbers.netlify.app/",
		github: "https://github.com/GrzegorzKopacki/memoryGameReact",
		technologies: ["JavaScript", "HTML", "CSS", "React", "Vite"],
		description:
			"Memory Numbers is a simple card game where the player needs to find all pairs of numbers within a limited time. The game is written in React using JavaScript, HTML, and CSS.",

		descriptionPL:
			"Memory Numbers to prost gra, w której gracz musi odnaleźć wszystkie pary liczb w ograniczonym czasie. Gra jest napisana w React przy użyciu języków JavaScript, HTML i CSS.",
	},
];
