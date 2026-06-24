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

// 3. THE NIT PROFILES (For the 6-Basket view)
const nitProfiles = {
    "svnit_surat": {
        "Linear Algebra": [
            "Matrices, Determinant, and Rank of a Matrix",
            "Elementary Row Operations (Echelon & Normal Forms)",
            "Inverse of a Matrix via Gauss-Jordan Method",
            "Systems of Linear Homogeneous & Non-Homogeneous Equations",
            "Eigenvalues, Eigenvectors, and Cayley-Hamilton Theorem"
        ],
        "Optimization": [], // Left empty intentionally
        "Probability & Statistics": [
            "Random Variables, Discrete & Continuous Distributions",
            "Probability Density Function (PDF) & Cumulative Distribution Function (CDF)",
            "Expectation, Variance, Moments, and Moment Generating Functions (MGF)",
            "Standard Distributions (Binomial, Poisson, Normal)",
            "Bivariate Distributions (Joint, Marginal, and Conditional Distributions)"
        ],
        "Stochastic Processes": [], // Left empty intentionally
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
    }
    "vnit_nagpur": {
        "Linear Algebra": [
            "Matrices: Rank of matrix and Consistency of linear systems",
            "Eigenvalues, Eigenvectors, and Cayley-Hamilton Theorem",
            "Diagonalization of matrices"
        ],
        "Optimization": [], // Left empty intentionally
        "Probability & Statistics": [
            "Probability Theory: Axioms, Conditional Probability, and Bayes Theorem",
            "Random Variables: Discrete & Continuous variables (PMF, PDF, CDF)",
            "Mathematical Expectation: Expectation, Variance, and MGF",
            "Standard Distributions: Binomial, Poisson, and Normal Distributions"
        ],
        "Stochastic Processes": [], // Left empty intentionally
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
    }
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
        "Optimization": [], // Left empty intentionally
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
        "Stochastic Processes": [], // Left empty intentionally
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
    }
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
        "Optimization": [], // Left empty intentionally
        "Probability & Statistics": [
            "Random Variables: Expectations, Mean, Variance, MGF, and Chebyshev's Theorem",
            "Probability Distributions: Binomial, Poisson, Geometric, Hyper-geometric, Normal, Uniform, Gamma, and Beta",
            "Bivariate & Joint Distributions: Jointly distributed random variables, Marginal & Conditional profiles, Bi-variate Normal",
            "Sampling Distributions: Sampling distribution of Mean (Sigma known/unknown) and Variance",
            "Statistical Estimation: Point & Interval estimation of Mean/Variance, Maximum Likelihood Estimation (MLE)",
            "Hypothesis Testing: Tests concerning one/two Means, one/two Variances, and Proportions",
            "Categorical & Goodness-of-Fit Analysis: r x c Contingency Tables and Chi-square Goodness-of-Fit Test",
            "Analysis of Variance (ANOVA): Completely Randomized and Randomized Block Designs",
        ],
        "Stochastic Processes": [], // Left empty intentionally
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

// 4. THE UI RENDERING ENGINE
function renderStudentBaskets(selectedCollegeKey) {
    const profile = nitProfiles[selectedCollegeKey];
    
    if (!profile) {
        console.error("Profile key not found in database:", selectedCollegeKey);
        return;
    }

    // Array matching your 6 structural DOM container IDs in index.html
    const basketIds = {
        "Linear Algebra": "linear-algebra-list",
        "Optimization": "optimization-list",
        "Probability & Statistics": "probability-stats-list",
        "Stochastic Processes": "stochastic-list",
        "Calculus": "calculus-list",
        "Non-IEOR": "non-ieor-list"
    };

    // Loop through each domain and inject the structured syllabus items
    Object.keys(basketIds).forEach(basketName => {
        const containerElement = document.getElementById(basketIds[basketName]);
        if (!containerElement) return;

        // Clear out any placeholder content first
        containerElement.innerHTML = "";

        const topics = profile[basketName];

        if (!topics || topics.length === 0) {
            // Render a clear, stylized "Empty State" indicating a structural gap
            containerElement.innerHTML = `
                <div class="empty-basket-alert">
                    <span class="warning-icon">⚠️</span>
                    <p class="gap-text">No prerequisite topics covered in your college curriculum.</p>
                </div>`;
        } else {
            // Build out the bulleted mapping list item by item
            topics.forEach(topicText => {
                const listItem = document.createElement("li");
                listItem.className = "syllabus-topic-item";
                listItem.textContent = topicText;
                containerElement.appendChild(listItem);
            });
        }
    });
}

// 5. EVENT LISTENERS (Optimized for Slide-In Grid Animation)
document.addEventListener("DOMContentLoaded", () => {
    const collegeSelectElement = document.getElementById("college-selector");
    const basketsGridElement = document.getElementById("baskets-grid");

    if (collegeSelectElement && basketsGridElement) {
        collegeSelectElement.addEventListener("change", (event) => {
            const selectedValue = event.target.value;

            // Step 1: Temporarily hide grid to trigger smooth transition reset
            basketsGridElement.classList.add("hidden");

            setTimeout(() => {
                // Step 2: Render the updated database mapping array items
                renderStudentBaskets(selectedValue);

                // Step 3: Remove the hidden class to execute the clean 3D upward slide-in
                basketsGridElement.classList.remove("hidden");
            }, 250); // Small timeout allows smooth visual pacing
        });
    }
});
