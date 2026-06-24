// 1. THE COMPLETE COURSE WEIGHT MATRIX (For the Home Table View)
// Represents the percentage influence of each domain on all 76 items in the IITB IEOR CSV.
const ieorCourseMatrix = {
    "Introduction to IE and OR": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Probability and Statistics": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 85,
        "Stochastic Processes": 5,
        "Calculus": 10
    },
    "Data Analytics, AI/ML Lab": {
        "Linear Algebra": 10,
        "Optimization": 10,
        "Probability & Statistics": 60,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Digital Enterprise Systems Lab": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Data Structures and Algorithms": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Feedback and Dynamics": {
        "Linear Algebra": 10,
        "Optimization": 20,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 70
    },
    "Industrial Engineering Lab": {
        "Linear Algebra": 0,
        "Optimization": 20,
        "Probability & Statistics": 40,
        "Stochastic Processes": 40,
        "Calculus": 0
    },
    "Introduction to Artificial Intelligence and Machine Learning": {
        "Linear Algebra": 30,
        "Optimization": 20,
        "Probability & Statistics": 45,
        "Stochastic Processes": 0,
        "Calculus": 5
    },
    "Industrial Systems": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Nonlinear and Discrete Optimization": {
        "Linear Algebra": 20,
        "Optimization": 60,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 20
    },
    "Linear Optimization and Network Flows": {
        "Linear Algebra": 30,
        "Optimization": 70,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Optimization Modeling LAB": {
        "Linear Algebra": 10,
        "Optimization": 90,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Programming & Computing Lab": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Optimization Models": {
        "Linear Algebra": 20,
        "Optimization": 80,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Probabilistic Models": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 30,
        "Stochastic Processes": 70,
        "Calculus": 0
    },
    "Operations Analysis": {
        "Linear Algebra": 0,
        "Optimization": 40,
        "Probability & Statistics": 30,
        "Stochastic Processes": 30,
        "Calculus": 0
    },
    "Modeling & Computation Lab": {
        "Linear Algebra": 20,
        "Optimization": 40,
        "Probability & Statistics": 20,
        "Stochastic Processes": 0,
        "Calculus": 20
    },
    "Computer Programming Lab": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Optimization Techniques": {
        "Linear Algebra": 20,
        "Optimization": 60,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 20
    },
    "Service Engineering and Management": {
        "Linear Algebra": 0,
        "Optimization": 20,
        "Probability & Statistics": 30,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "Discrete Event System Simulation": {
        "Linear Algebra": 0,
        "Optimization": 10,
        "Probability & Statistics": 40,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "Systems Dynamics Modeling & Analysis": {
        "Linear Algebra": 20,
        "Optimization": 10,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 70
    },
    "Engineering Statistics": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 90,
        "Stochastic Processes": 0,
        "Calculus": 10
    },
    "Analysis & Control of Queues": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 10,
        "Stochastic Processes": 80,
        "Calculus": 10
    },
    "Polyhedra and Combinatorial Optimization": {
        "Linear Algebra": 40,
        "Optimization": 60,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Mathematical Optimisation Techniques": {
        "Linear Algebra": 20,
        "Optimization": 60,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 20
    },
    "Networks, Games and Algorithms": {
        "Linear Algebra": 20,
        "Optimization": 50,
        "Probability & Statistics": 10,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Introduction to Financial Engineering": {
        "Linear Algebra": 10,
        "Optimization": 10,
        "Probability & Statistics": 30,
        "Stochastic Processes": 40,
        "Calculus": 10
    },
    "Online Learning": {
        "Linear Algebra": 20,
        "Optimization": 40,
        "Probability & Statistics": 40,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Linear Systems": {
        "Linear Algebra": 60,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 40
    },
    "Data Analytics in Operations Research": {
        "Linear Algebra": 20,
        "Optimization": 20,
        "Probability & Statistics": 50,
        "Stochastic Processes": 10,
        "Calculus": 0
    },
    "Decision Analysis and Game Theory": {
        "Linear Algebra": 10,
        "Optimization": 40,
        "Probability & Statistics": 30,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Advanced Stochastic Processes for Operations Research": {
        "Linear Algebra": 10,
        "Optimization": 0,
        "Probability & Statistics": 20,
        "Stochastic Processes": 70,
        "Calculus": 0
    },
    "Probability and Stochastic Processes I": {
        "Linear Algebra": 10,
        "Optimization": 0,
        "Probability & Statistics": 40,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "Probability and Stochastic Processes II": {
        "Linear Algebra": 10,
        "Optimization": 0,
        "Probability & Statistics": 20,
        "Stochastic Processes": 70,
        "Calculus": 0
    },
    "Simulation Modeling and Analysis": {
        "Linear Algebra": 0,
        "Optimization": 10,
        "Probability & Statistics": 50,
        "Stochastic Processes": 40,
        "Calculus": 0
    },
    "Facilities Planning": {
        "Linear Algebra": 20,
        "Optimization": 80,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Network Flow Models and Applications": {
        "Linear Algebra": 20,
        "Optimization": 80,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Engineering Economic Analysis": {
        "Linear Algebra": 0,
        "Optimization": 30,
        "Probability & Statistics": 40,
        "Stochastic Processes": 10,
        "Calculus": 20
    },
    "Deep Learning - Theory and Practice": {
        "Linear Algebra": 40,
        "Optimization": 30,
        "Probability & Statistics": 20,
        "Stochastic Processes": 0,
        "Calculus": 10
    },
    "Industrial Scheduling": {
        "Linear Algebra": 10,
        "Optimization": 90,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Quality Control & Reliability": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 70,
        "Stochastic Processes": 30,
        "Calculus": 0
    },
    "Applied Integer Programming": {
        "Linear Algebra": 20,
        "Optimization": 80,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Quantitative Analysis in Finance and Marketing": {
        "Linear Algebra": 20,
        "Optimization": 30,
        "Probability & Statistics": 30,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Modelling and Optimisation in Flexible Manufacturing System": {
        "Linear Algebra": 0,
        "Optimization": 30,
        "Probability & Statistics": 20,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "Inventory Control and Management Systems": {
        "Linear Algebra": 0,
        "Optimization": 30,
        "Probability & Statistics": 30,
        "Stochastic Processes": 40,
        "Calculus": 0
    },
    "IEOR Lab": {
        "Linear Algebra": 20,
        "Optimization": 30,
        "Probability & Statistics": 30,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "MSc.Phd. Research Project I": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "MSc.Phd. Research Project II": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "R & D Project": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "MSc-PhD Project II": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Seminar": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "MSc-PhD Project III": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Neural Nets, Fuzzy Systems and Applications": {
        "Linear Algebra": 30,
        "Optimization": 30,
        "Probability & Statistics": 20,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Introduction to Knowledge Based Systems and Applications": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Selected Topics in A.I. in Operations Research": {
        "Linear Algebra": 30,
        "Optimization": 30,
        "Probability & Statistics": 40,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Quantitative Methods in Project Management": {
        "Linear Algebra": 0,
        "Optimization": 40,
        "Probability & Statistics": 40,
        "Stochastic Processes": 20,
        "Calculus": 0
    },
    "Pricing & Revenue Management": {
        "Linear Algebra": 0,
        "Optimization": 30,
        "Probability & Statistics": 40,
        "Stochastic Processes": 30,
        "Calculus": 0
    },
    "Multi-player Decision Making Models": {
        "Linear Algebra": 20,
        "Optimization": 50,
        "Probability & Statistics": 20,
        "Stochastic Processes": 10,
        "Calculus": 0
    },
    "Markov Decision Processes": {
        "Linear Algebra": 10,
        "Optimization": 30,
        "Probability & Statistics": 10,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "IEOR for Health Care": {
        "Linear Algebra": 0,
        "Optimization": 40,
        "Probability & Statistics": 20,
        "Stochastic Processes": 40,
        "Calculus": 0
    },
    "OR Applications in Infrastructural and Service Sectors": {
        "Linear Algebra": 0,
        "Optimization": 60,
        "Probability & Statistics": 10,
        "Stochastic Processes": 30,
        "Calculus": 0
    },
    "Selected Application of Stochastic Models": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 10,
        "Stochastic Processes": 90,
        "Calculus": 0
    },
    "Quantitative Models for Supply Chain Management": {
        "Linear Algebra": 0,
        "Optimization": 50,
        "Probability & Statistics": 20,
        "Stochastic Processes": 30,
        "Calculus": 0
    },
    "Integer Programming:  Theory and Computations": {
        "Linear Algebra": 30,
        "Optimization": 70,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Communication Skills -II": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "I Stage Project": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "II Stage Project": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Topics in Industrial Engineering and Operations Research": {
        "Linear Algebra": 20,
        "Optimization": 20,
        "Probability & Statistics": 20,
        "Stochastic Processes": 20,
        "Calculus": 20
    },
    "Advanced Stochastic Simulation": {
        "Linear Algebra": 0,
        "Optimization": 10,
        "Probability & Statistics": 40,
        "Stochastic Processes": 50,
        "Calculus": 0
    },
    "Convex Analysis": {
        "Linear Algebra": 30,
        "Optimization": 50,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 20
    },
    "Advanced Topics in Discrete Optimization": {
        "Linear Algebra": 30,
        "Optimization": 70,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    },
    "Game Dynamics": {
        "Linear Algebra": 20,
        "Optimization": 30,
        "Probability & Statistics": 10,
        "Stochastic Processes": 20,
        "Calculus": 20
    },
    "Communication Skills": {
        "Linear Algebra": 0,
        "Optimization": 0,
        "Probability & Statistics": 0,
        "Stochastic Processes": 0,
        "Calculus": 0
    }
};
