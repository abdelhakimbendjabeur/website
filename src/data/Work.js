import orange from "../assets/images/orange-logo.svg";
import kapten from "../assets/images/kapten-logo-white.png";

export default [
	{
		id: 2,
		name: "Kapten",
		designation: "Data Scientist/Software Engineer",
		dated: "October 2016 - present",
		logo: kapten,
		companyLink: "https://www.kapten.com",
		description:
			"<p>It's been almost 4 years since I joined Kapten (Chauffeur-Privé at the time) as an engineer. " +
			"I had the chance to take multiple roles " +
			"depending on what the business needed, so I started as Data Analyst, " +
			"doing exploratory data analysis to answer various business questions, " +
			"and then I took the role of a software engineer to build micro-services " +
			"that generated more data for us to work on and finally be able to address more problems " +
			"and do some Data Science.</p>" +
			"<p>Over the past two years, my job consisted of a balanced mixture of Data Analysis, " +
			"Data Science, and Software Engineering to address product-related subjects.</p>"
	},
	{
		id: 1,
		name: "Orange Labs (France Télécom R&D until January 2007)",
		designation: "Operations Research Intern",
		dated: "February 2016 - August 2016",
		logo: orange,
		companyLink: "https://lelab.orange.fr/",
		description:
			"<p> Implemented a portfolio of algorithms to solve the " +
			"<a href=\"https://en.wikipedia.org/wiki/Facility_location_problem\" style=\"color:darkorange\">" +
			"Facility Location Problem (FLP) </a> to serve Content Delivery Networks (CDNs) in 5G networks. " +
			"The end goal was to come up with a set of algorithms that can deliver satisfactory solutions " +
			"in a short amount of time compared to what a MIP solve would take to return the optimal solution." +
			"<p>I also built a few machine learning models that were able to predict the running time" +
			" of each algorithm given the problem's size. This allowed us to choose what algorithm to use " +
			"in order to have a solution within a given time frame.</p>"


	}
];
