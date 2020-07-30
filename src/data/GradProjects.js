import quiz from '../assets/images/projects/quiz.svg'

export default [
    {
        id: 1,
        title: "Consensual Classification applied on intrusion detection",
        icon: quiz,
        description: "Proposed a solution to achieve consensus between classifier agents in a multi-agent system " +
            "whose role is to detect intrusions based on traffic data in the network. This work was inspired by " +
            "the Paxos family of protocols that solve consensus in a network of unreliable processors.",
        githubPath: null,
        demoPath: null,
        year: "2015 - 2016",
        techUsed: "Java, JADE, WEKA, Multi-Agent Systems"
    },
    {
      id: 2,
      title: "Design of a Control Architecture for Habit Learning in Robots",
      description: "Implemented the work described in the research paper that hypothesizes that robots can learn habits, " +
          "detect when these habits are appropriate to avoid costly computations of its planning system. " +
          "The work showed that the two systems have complementary advantages and can be combined for performance " +
          "improvement.",
      icon: quiz,
      githubPath: null,
      demoPath: null,
      year: "2015 - 2016",
      techUsed: "Python, Reinforcement Learning, Adaptive Behaviour, Habit Learning"
    }
]
