import pregnancy from '../assets/images/projects/pregnancy.svg'
import like from '../assets/images/projects/social.svg'
import dare from '../assets/images/projects/dare.svg'
import journey from '../assets/images/projects/journey.svg'
import vision from '../assets/images/projects/vision.svg'
import search from '../assets/images/projects/search.svg'

export default [
    {
        id: 8,
        title: "Driver Acceptance Prediction",
        icon: search,
        description: "Built and deployed a binary classifier that predicts whether a driver is going to accept " +
            "or refuse a ride offer: It helped increase the number of rides as well as improve user experience. " +
            "I also did a detailed analysis that showed the added value of such model before implementing the " +
            "micro-service.",
        githubPath: null,
        demoPath: null,
        year: "2020",
        techUsed: "Python, Flask, LightGBM, MongoDB, GCP, Docker, Kubernetes"
    },
    {
        id: 7,
        title: "Marketplace Simulation Tool",
        icon: search,
        description: "Built a first version of a marketplace simulator that allows the testing of new algorithms/ideas " +
            "without having to deploy a new feature in production, and to go though the AB testing phase. " +
            "I used state machines to model drivers and passengers behaviours. " +
            "Transitions can be governed by existing machine learning models that are already in the stack " +
            "to makes the simulation more realistic, it also allows testing potential changes in these models " +
            "or to create new ones. The results of the simulation are charts showing the main KPIs of the business " +
            "to have a better idea of should we invest our time into to improve a given KPI.",
        githubPath: null,
        demoPath: null,
        year: "2020",
        techUsed: "Python, MESA, State Machines"
    },
    {
        id: 6,
        title: "Credit Approval",
        icon: search,
        description: "Built and deployed a binary classifier that predicts whether a client can pay the ride in " +
            "the near future when payment authorization fails: we decide to give them a credit when the model " +
            "is confident that the rider will pay the ride in time. It avoids missing out on would-be rides, " +
            "improves user experience, builds trust and reduces fraud. I also did the integration of this in a very " +
            "delicate place in the stack, lead the AB testing phase where this model proved to be better than " +
            "previous systems.",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "Python, Flask, LightGBM, MongoDB, GCP, Docker, Kubernetes"
    },
    {
        id: 5,
        title: "Driver Segmentation",
        icon: vision,
        description: "Participated in writing the micro-service that performs weekly segmentation on the " +
            "drivers fleet from a performance perspective: It helped us build a more effective incentives " +
            "program and helped the Partner Relations to adapt their way of communicating with the drivers " +
            "given the cluster they were in. It also gave a better understanding of the fleet in general.",
        githubPath: null,
        demoPath: null,
        year: "2018",
        techUsed: "Python, Flask, scikit-learn, Postgres"
    },
    {
        id: 4,
        title: "Routing Engine",
        icon: like,
        description: "Participated in building an in-house routing engine that uses historical data to provide " +
            "accurate ETAs (estimated times of arrivals): " +
            "It helped limit our costs while maintaining our user experience. It proved to be better than OSRM " +
            "basic ETAs and it had an average error of 1 minute when compared to Google ETAs.",
        githubPath: null,
        demoPath: null,
        year: "2020",
        techUsed: " Python, OSRM, GCP, Docker, Kubernetes"
    },
    {
        id: 3,
        title: "Machine Learning Architecture",
        icon: dare,
        description: "Participated in building the Kapten’s Machine Learning Architecture:\n" +
            "- built a project template generator for Machine Learning micro-services that contains\n" +
            "all the common elements that can exist in ML micro-services: the API, the database\n" +
            "connector, the message broker client, etc. " +
            "I participated in the the creation of the our Data Provider Gateway. " +
            "This architecture helped increase the team’s productivity by spending less time on writing similar code " +
            "in different places and to spend more time delivering value.",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "Python, Flask, NodeJS, AMQP, GCP"
    },
    {
        id: 3,
        title: "Datalake Realtime Sync",
        icon: dare,
        description: "Wrote a micro-service that fed BigQuery tables by data coming in realtime in the message " +
            "broker (rabbitMQ). It allowed us to get more data in our data-lake to address more problems such us " +
            "\"Driver Acceptance Prediction\", \"Ride Offer Screen AB Test\".",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "Python, AMQP, GCP (BigQuery)"
    },
     {
        id: 3,
        title: "Aggregate Drivers KPIs",
        icon: dare,
        description: "Participated in writing my very first micro-service in GoLang. It aggregates data in realtime " +
            "coming in the message broker and stores the results in a Mongo Database, " +
            "it exposes an API to show different KPIS on the BackOffice, and in the App.",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "GoLang, MongoDB, AMQP"
    },
    {
        id: 2,
        title: "Driver Switch POC",
        icon: journey,
        description: "Built and deployed a micro-service prototype that switches rides between drivers " +
            "during the approach to reduce ETAs and increase bother riders and drivers user experience: " +
            "We used graph theory and applied a linear programming algorithm to solve this problem.",
        githubPath: null,
        demoPath: null,
        year: "2018",
        techUsed: " Python, Graph Theory, MongoDB, AMQP, NetworkX"
    },
    {
        id: 1,
        title: "Drivers Incentives Strategies",
        icon: pregnancy,
        description: "Proposed drivers incentives strategies to kick-start the business when the market was " +
            "supply-constrained. It relied on the driver segmentation mentioned earlier. " +
            "I built a simulation tool to prove the return on investment. " +
            "And I also participated in the development of the micro-service and the monitoring.",
        githubPath: null,
        demoPath: null,
        year: "2018",
        techUsed: "Python, Flask, MongoDB, AMQP, Docker, Kubernetes, Tableau Software"
    }
];
