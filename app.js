// ==========================================================================
// 1. THE COMPLETE COURSE WEIGHT MATRIX
// ==========================================================================
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

// ==========================================================================
// 2. THE NIT PROFILES (For the 6-Basket view)
// ==========================================================================
const nitProfiles = {
    "svnit_surat": {
        "Linear Algebra": [
            "Matrices, Determinant, and Rank of a Matrix",
            "Elementary Row Operations (Echelon & Normal Forms)",
            "Inverse of a Matrix via Gauss-Jordan Method",
            "Systems of Linear Homogeneous & Non-Homogeneous Equations",
            "Eigenvalues, Eigenvectors, and Cayley-Hamilton Theorem"
        ],
        "Optimization": [],
        "Probability & Statistics": [
            "Random Variables, Discrete & Continuous Distributions",
            "Probability Density Function (PDF) & Cumulative Distribution Function (CDF)",
            "Expectation, Variance, Moments, and Moment Generating Functions (MGF)",
            "Standard Distributions (Binomial, Poisson, Normal)",
            "Bivariate Distributions (Joint, Marginal, and Conditional Distributions)"
        ],
        "Stochastic Processes": [],
        "Calculus": [
            "Multivariable Calculus: Functions of several variables & Partial Derivatives",
            "Total Derivative & Euler's Theorem on Homogeneous Functions",
            "Taylor's and Maclaurin's Series for two variables",
            "Maxima & Minima of two variables and Lagrange Multipliers",
            "First-order ODEs (Exact, Reducible, Linear, Bernoulli equations)",
            "Higher-order Linear Differential Equations with Constant Coefficients",
            "Method of Variation of Parameters"
        ],
        "Non-IEOR": [
            "Curve Tracing (Cartesian and Polar forms)",
            "Evaluation of Infinite Integrals (Beta and Gamma functions)",
            "Rectification, Quadrature, Volume & Surface Area of Revolution",
            "Infinite Series Convergence (Ratio, Comparison, Integral, Root, Leibniz tests)"
        ]
    },
    "vnit_nagpur": {
        "Linear Algebra": [
            "Matrices: Rank of matrix and Consistency of linear systems",
            "Eigenvalues, Eigenvectors, and Cayley-Hamilton Theorem",
            "Diagonalization of matrices"
        ],
        "Optimization": [],
        "Probability & Statistics": [
            "Probability Theory: Axioms, Conditional Probability, and Bayes Theorem",
            "Random Variables: Discrete & Continuous variables (PMF, PDF, CDF)",
            "Mathematical Expectation: Expectation, Variance, and MGF",
            "Standard Distributions: Binomial, Poisson, and Normal Distributions"
        ],
        "Stochastic Processes": [],
        "Calculus": [
            "Partial Differentiation: Taylor's theorem, Maxima & Minima for two variables",
            "Lagrange's Multipliers for constrained optimization",
            "Multiple Integrals: Double & Triple Integrals, Change of order/variables",
            "Jacobians and structural applications to Area and Volume",
            "Vector Calculus: Gradient, Divergence, and Curl",
            "Vector Line and Surface Integrals",
            "Vector Integral Theorems: Green's, Stokes', and Gauss Divergence Theorems",
            "Ordinary Differential Equations: First-order exact differential equations",
            "Higher-order linear ODEs with constant coefficients & Variation of Parameters"
        ],
        "Non-IEOR": [
            "Fourier Series: Euler's formulae, Dirichlet's conditions, and Half-range series",
            "Numerical Methods: Roots of equations (Regula-Falsi, Newton-Raphson)",
            "Numerical Linear Algebra: Gauss elimination and Gauss-Seidel methods"
        ]
    },
    "nitc_eng_phys": {
        "Linear Algebra": [
            "Vector Spaces & Linear Transformations (Review, Minimal Polynomials, Diagonalizability)",
            "Inner Product Spaces (Norms, Orthonormal Basis, Orthogonal Complement, Direct Sum, Orthogonal Projection)",
            "Subspace Orthogonality & Operator Adjoints (Null-space & Range of Adjoint)",
            "Self-Adjoint & Normal Operators (Spectral Theorem for self-adjoint & normal operators)",
            "Advanced Structural Theorems (Schur's Theorem, Riesz Representation Theorem)",
            "Singular Value Decomposition (SVD) & Low-Rank Approximation",
            "Data & Optimization Approximations (Eckart-Young Theorem, Pseudoinverse, Least Square Approximation)"
        ],
        "Optimization": [],
        "Probability & Statistics": [
            "Probability Theory Foundations: Axioms, Conditional Probability, and Bayes Theorem",
            "Random Variables: Expectation, Mean, Variance, and Moment Generating Functions (MGF)",
            "Tail Bounds & Concentration Inequalities: Chebyshev's Inequality",
            "Discrete Probability Distributions: Binomial, Poisson, and Geometric Distributions",
            "Continuous Probability Distributions: Uniform, Exponential, Normal, Gamma, and Beta Distributions",
            "Bivariate Distributions: Joint, Marginal, and Conditional Distributions, Covariance & Correlation Coefficients",
            "Variables Transformations: Probability distribution of a function of random variables",
            "Sampling Theory: Population and Samples, Central Limit Theorem, Sampling Distributions (t, Chi-Square, and F distributions)",
            "Statistical Estimation: Point Estimation, Interval Estimation, and Confidence Intervals for Mean and Variance",
            "Hypothesis Testing: Type I & Type II errors, Z-test, t-test, and Chi-square Goodness-of-Fit test"
        ],
        "Stochastic Processes": [],
        "Calculus": [
            "Single Variable Calculus: Mean Value Theorems & Taylor expansions",
            "Multivariable Calculus: Partial derivatives, Jacobians, Maxima & Minima",
            "Lagrange Multipliers for constrained systems",
            "Multiple Integrals: Double & Triple integration (Area & Volume)",
            "Vector Calculus: Gradient, Divergence, Curl, Line & Surface integrals",
            "Vector Theorems: Green's, Stokes', and Gauss Divergence Theorems",
            "Linear ODEs: Higher-order constant coefficients & Variation of Parameters",
            "Power Series Solutions: Frobenius method, Legendre & Bessel functions"
        ],
        "Non-IEOR": [
            "Complex Analysis: Analyticity, Cauchy-Riemann equations, Conformal mappings",
            "Complex Integration: Cauchy’s Integral Theorem & Formula",
            "Series & Residues: Taylor/Laurent series & Cauchy’s Residue Theorem",
            "Laplace Transforms: Inverse transforms, Convolution, and ODE applications",
            "Fourier Analysis: Fourier Series, Half-range expansions, and Fourier Transforms"
        ]
    },
    "nitc_mech": {
        "Linear Algebra": [
            "Systems of linear equations, Gauss elimination, and Row echelon form",
            "Matrix Rank and checking the Consistency of linear systems",
            "Real Vector Spaces: Subspaces, Linear Independence, Basis & Dimension",
            "Linear Transformations and their Matrix Representations",
            "Eigenvalues, Eigenvectors, Characteristic Polynomials, and Diagonalization",
            "Cayley-Hamilton Theorem",
            "Special Real Matrices (Symmetric, Skew-symmetric, and Orthogonal matrices)"
        ],
        "Optimization": [],
        "Probability & Statistics": [
            "Random Variables: Expectations, Mean, Variance, MGF, and Chebyshev's Theorem",
            "Probability Distributions: Binomial, Poisson, Geometric, Hyper-geometric, Normal, Uniform, Gamma, and Beta",
            "Bivariate & Joint Distributions: Jointly distributed random variables, Marginal & Conditional profiles, Bi-variate Normal",
            "Sampling Distributions: Sampling distribution of Mean (Sigma known/unknown) and Variance",
            "Statistical Estimation: Point & Interval estimation of Mean/Variance, Maximum Likelihood Estimation (MLE)",
            "Hypothesis Testing: Tests concerning one/two Means, one/two Variances, and Proportions",
            "Categorical & Goodness-of-Fit Analysis: r x c Contingency Tables and Chi-square Goodness-of-Fit Test",
            "Analysis of Variance (ANOVA): Completely Randomized and Randomized Block Designs"
        ],
        "Stochastic Processes": [],
        "Calculus": [
            "Single Variable Calculus: Mean Value Theorems & Taylor expansions",
            "Multivariable Calculus: Partial derivatives, Jacobians, Maxima & Minima",
            "Lagrange Multipliers for constrained optimization systems",
            "Multiple Integrals: Double & Triple integration across Cylindrical/Spherical coordinates",
            "Vector Calculus: Gradient, Divergence, Curl, Line, Surface & Volume integrals",
            "Vector Theorems: Green's, Stokes', and Gauss Divergence Theorems",
            "Ordinary Differential Equations: First-order Linear/Bernoulli and Higher-order constant coefficient linear ODEs",
            "Method of Variation of Parameters for ODEs",
            "Partial Differential Equations: Formulation, Lagrange's PDE, and Charpit's method",
            "Higher-order linear PDEs with constant coefficients & Second-order classification",
            "Boundary Value Problems: Separation of variables for Wave, Heat, and Laplace equations"
        ],
        "Non-IEOR": [
            "Complex Variables: Analyticity, Cauchy-Riemann equations, and Conformal mappings",
            "Complex Integration: Cauchy’s Integral Theorem, Formula, and Residue Theorem",
            "Complex Series expansion: Taylor and Laurent series expansions with Singularity analysis",
            "Fourier Analysis: Fourier Series under Dirichlet conditions, Half-range series, and Fourier Transforms",
            "Laplace Transforms: Properties, Inverse transforms, Convolution, and applications to ODEs",
            "Numerical Methods: Roots of equations (Bisection, Regula-Falsi, Newton-Raphson)",
            "Numerical Integration: Trapezoidal rule, Simpson's 1/3rd, and Simpson's 3/8th rules"
        ]
    }
};

// ==========================================================================
// 3. REFERENCE ASSESSMENT LOGIC
// ==========================================================================
function evaluateBasketStatus(basketName, topicsArray) {
    const topicCount = topicsArray.length;

    if (topicCount === 0) {
        return { text: "Weak Gap", class: "status-weak" };
    }

    switch (basketName) {
        case "Linear Algebra":
            const hasAdvancedLA = topicsArray.some(t => t.toLowerCase().includes("svd") || t.toLowerCase().includes("singular value"));
            if (hasAdvancedLA) return { text: "Strong", class: "status-strong" };
            return { text: "Manageable", class: "status-manageable" };

        case "Probability & Statistics":
            const hasInference = topicsArray.some(t => t.toLowerCase().includes("inference") || t.toLowerCase().includes("hypothesis"));
            if (hasInference && topicCount > 5) return { text: "Strong", class: "status-strong" };
            return { text: "Manageable", class: "status-manageable" };

        case "Calculus":
            if (topicCount > 6) return { text: "Strong", class: "status-strong" };
            return { text: "Manageable", class: "status-manageable" };

        case "Optimization":
        case "Stochastic Processes":
            if (topicCount > 2) return { text: "Strong", class: "status-strong" };
            return { text: "Manageable", class: "status-manageable" };

        default:
            return { text: "Manageable", class: "status-manageable" };
    }
}

// ==========================================================================
// 4. SELF-STUDY RESOURCE MATRIX
// ==========================================================================
const gapStudyResources = {
    "Linear Algebra": {
        topic: "Advanced Matrix Decompositions (SVD, LU, QR Factorization, Least Squares Approximations)",
        recommendation: "Watch Gilbert Strang's Linear Algebra lectures (MIT OCW) or review 'Introduction to Linear Algebra' Chapters 6 & 7."
    },
    "Optimization": {
        topic: "Linear Programming, Simplex Method, Duality, and KKT Conditions",
        recommendation: "Refer to NPTEL's 'Numerical Optimization' series or read 'Linear and Nonlinear Programming' by Luenberger."
    },
    "Probability & Statistics": {
        topic: "Statistical Inference, Maximum Likelihood Estimation (MLE), Hypothesis Testing (Z, t, Chi-Square)",
        recommendation: "Review Harvard STAT 110 resources or NPTEL's 'Statistical Inference' by IIT Kharagpur."
    },
    "Stochastic Processes": {
        topic: "Markov Chains, Poisson Processes, and Transition Matrices",
        recommendation: "Study MIT 6.041 Probabilistic Systems Analysis or Sheldon Ross's 'Introduction to Probability Models'."
    }
};

// ==========================================================================
// 5. UPDATED UI RENDERING ENGINE (With Dynamic Status Assessment & Action Plan)
// ==========================================================================
function renderStudentBaskets(selectedCollegeKey) {
    const profile = nitProfiles[selectedCollegeKey];
    if (!profile) return;

    const basketIds = {
        "Linear Algebra": { listId: "linear-algebra-list", headerId: "la-header" },
        "Optimization": { listId: "optimization-list", headerId: "opt-header" },
        "Probability & Statistics": { listId: "probability-stats-list", headerId: "prob-header" },
        "Stochastic Processes": { listId: "stochastic-list", headerId: "stoch-header" },
        "Calculus": { listId: "calculus-list", headerId: "calc-header" },
        "Non-IEOR": { listId: "non-ieor-list", headerId: "non-header" }
    };

    let gapsFound = [];

    Object.keys(basketIds).forEach(basketName => {
        const targetIds = basketIds[basketName];
        const listContainer = document.getElementById(targetIds.listId);
        const headerContainer = document.getElementById(targetIds.headerId);
        
        if (!listContainer) return;
        listContainer.innerHTML = "";

        const topics = profile[basketName] || [];
        
        if (headerContainer) {
            const oldBadge = headerContainer.querySelector('.status-badge');
            if (oldBadge) oldBadge.remove();

            if (basketName !== "Non-IEOR") {
                const status = evaluateBasketStatus(basketName, topics);
                
                // Track gaps for the action plan
                if (status.text === "Weak Gap" || status.text === "Manageable") {
                    gapsFound.push({ name: basketName, severity: status.text });
                }

                const badgeSpan = document.createElement("span");
                badgeSpan.className = `status-badge ${status.class}`;
                badgeSpan.textContent = status.text;
                headerContainer.appendChild(badgeSpan);
            }
        }

        if (topics.length === 0) {
            listContainer.innerHTML = `
                <div class="empty-basket-alert">
                    <span class="warning-icon">⚠️</span>
                    <p class="gap-text">Critical domain vacancy. Target self-study modules before course registration.</p>
                </div>`;
        } else {
            topics.forEach(topicText => {
                const listItem = document.createElement("li");
                listItem.className = "syllabus-topic-item";
                listItem.textContent = topicText;
                listContainer.appendChild(listItem);
            });
        }
    });

    // Inject Adaptive Action Roadmaps
    const actionPlanContainer = document.getElementById("action-plan-box");
    if (actionPlanContainer) {
        actionPlanContainer.innerHTML = "";
        
        if (gapsFound.length > 0) {
            let htmlContent = `<h3>🎯 Personalized Prerequisite Action Plan</h3>`;
            htmlContent += `<p class="plan-intro">Based on your curriculum, prioritize these self-study modules before starting your first semester at IIT Bombay:</p><div class="plan-grid">`;

            gapsFound.forEach(gap => {
                const resource = gapStudyResources[gap.name] || { topic: "General Core Foundations", recommendation: "Review standard foundational textbooks." };
                htmlContent += `
                    <div class="plan-item ${gap.severity === 'Weak Gap' ? 'plan-critical' : 'plan-warning'}">
                        <h4>${gap.name} — <span class="severity-tag">${gap.severity}</span></h4>
                        <p><strong>Core Focus:</strong> ${resource.topic}</p>
                        <p class="resource-tip"><strong>Recommended Action:</strong> ${resource.recommendation}</p>
                    </div>`;
            });

            htmlContent += `</div>`;
            actionPlanContainer.innerHTML = htmlContent;
            actionPlanContainer.style.display = "block";
        } else {
            actionPlanContainer.innerHTML = `
                <div class="perfect-match-banner" style="display:flex; align-items:center; background:#eefaf2; color:#1d9d49; padding:20px; border-radius:12px; border:1px solid rgba(29,157,73,0.2);">
                    <span style="font-size:1.5rem; margin-right:15px;">🎉</span>
                    <p style="font-weight:500; font-size:0.95rem; margin:0;">Your background fully aligns with the default IITB IEOR core guidelines! No immediate prerequisite gaps detected.</p>
                </div>`;
            actionPlanContainer.style.display = "block";
        }
    }
}

// ==========================================================================
// 6 & 7. UNIFIED LIFECYCLE ENGINE & INTERACTIVITY
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Core Element Selection
    const collegeSelect = document.getElementById("college-selector");
    const basketsGrid = document.getElementById("baskets-grid");
    const actionPlanBox = document.getElementById("action-plan-box");

    // 2. Initialize the Baseline Master Table immediately on boot
    populateHomeCourseTable();

    // 3. Handle Dropdown Transitions and Deep-Dive Population
    if (collegeSelect && basketsGrid) {
        collegeSelect.addEventListener("change", (event) => {
            const selectedProgram = event.target.value;

            // Stop if choice is invalid or empty in the nitProfiles dataset
            if (!nitProfiles[selectedProgram]) return;

            // Trigger smooth visual collapse state before shifting data
            basketsGrid.classList.add("hidden");
            if (actionPlanBox) actionPlanBox.style.display = "none";

            // Allow animation frame time to settle before revealing new data
            setTimeout(() => {
                // Call your primary Section 5 engine to handle badges, lists, and resources
                renderStudentBaskets(selectedProgram);

                // Smoothly fade the populated grid back into view
                basketsGrid.classList.remove("hidden");
            }, 250);
        });
    }
});

// --- CORE ENGINE TABLE INJECTION ---

// Populate the main 76-subject curriculum mapping comparison grid
function populateHomeCourseTable() {
    const tableBody = document.getElementById("ieor-courses-table-body");
    if (!tableBody) return; // Silent exit if table container isn't present on this view
    
    tableBody.innerHTML = ""; 

    Object.keys(ieorCourseMatrix).forEach(courseName => {
        const weights = ieorCourseMatrix[courseName];
        const row = document.createElement("tr");
        row.className = "course-matrix-row";
        
        row.innerHTML = `
            <td class="course-title-cell">${courseName}</td>
            <td class="weight-cell text-center">${weights["Linear Algebra"]}%</td>
            <td class="weight-cell text-center">${weights["Optimization"]}%</td>
            <td class="weight-cell text-center">${weights["Probability & Statistics"]}%</td>
            <td class="weight-cell text-center">${weights["Stochastic Processes"]}%</td>
            <td class="weight-cell text-center">${weights["Calculus"]}%</td>
        `;
        tableBody.appendChild(row);
    });
}
