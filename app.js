// ==========================================================================
// 1. THE COMPLETE COURSE WEIGHT MATRIX (FILTERED & STRATIFIED)
// ==========================================================================
const ieorCourseMatrix = {
    "Probability and Statistics": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 85, "Stochastic Processes": 5, "Calculus": 10,
        "priority": "Foundational Prerequisite"
    },
    "Data Analytics, AI/ML Lab": {
        "Linear Algebra": 10, "Optimization": 10, "Probability & Statistics": 60, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Feedback and Dynamics": {
        "Linear Algebra": 10, "Optimization": 20, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 70,
        "priority": "Fundamental Theory"
    },
    "Industrial Engineering Lab": {
        "Linear Algebra": 0, "Optimization": 20, "Probability & Statistics": 40, "Stochastic Processes": 40, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Introduction to Artificial Intelligence and Machine Learning": {
        "Linear Algebra": 30, "Optimization": 20, "Probability & Statistics": 45, "Stochastic Processes": 0, "Calculus": 5,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Nonlinear and Discrete Optimization": {
        "Linear Algebra": 20, "Optimization": 60, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 20,
        "priority": "Foundational Prerequisite"
    },
    "Linear Optimization and Network Flows": {
        "Linear Algebra": 30, "Optimization": 70, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Optimization Modeling LAB": {
        "Linear Algebra": 10, "Optimization": 90, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Optimization Models": {
        "Linear Algebra": 20, "Optimization": 80, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Probabilistic Models": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 30, "Stochastic Processes": 70, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Operations Analysis": {
        "Linear Algebra": 0, "Optimization": 40, "Probability & Statistics": 30, "Stochastic Processes": 30, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Modeling & Computation Lab": {
        "Linear Algebra": 20, "Optimization": 40, "Probability & Statistics": 20, "Stochastic Processes": 0, "Calculus": 20,
        "priority": "High Application Impact"
    },
    "Optimization Techniques": {
        "Linear Algebra": 20, "Optimization": 60, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 20,
        "priority": "Foundational Prerequisite"
    },
    "Service Engineering and Management": {
        "Linear Algebra": 0, "Optimization": 20, "Probability & Statistics": 30, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Discrete Event System Simulation": {
        "Linear Algebra": 0, "Optimization": 10, "Probability & Statistics": 40, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Systems Dynamics Modeling & Analysis": {
        "Linear Algebra": 20, "Optimization": 10, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 70,
        "priority": "Fundamental Theory"
    },
    "Engineering Statistics": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 90, "Stochastic Processes": 0, "Calculus": 10,
        "priority": "Foundational Prerequisite"
    },
    "Analysis & Control of Queues": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 10, "Stochastic Processes": 80, "Calculus": 10,
        "priority": "Fundamental Theory"
    },
    "Polyhedra and Combinatorial Optimization": {
        "Linear Algebra": 40, "Optimization": 60, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Mathematical Optimisation Techniques": {
        "Linear Algebra": 20, "Optimization": 60, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 20,
        "priority": "Foundational Prerequisite"
    },
    "Networks, Games and Algorithms": {
        "Linear Algebra": 20, "Optimization": 50, "Probability & Statistics": 10, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Introduction to Financial Engineering": {
        "Linear Algebra": 10, "Optimization": 10, "Probability & Statistics": 30, "Stochastic Processes": 40, "Calculus": 10,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Online Learning": {
        "Linear Algebra": 20, "Optimization": 40, "Probability & Statistics": 40, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Linear Systems": {
        "Linear Algebra": 60, "Optimization": 0, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 40,
        "priority": "Foundational Prerequisite"
    },
    "Data Analytics in Operations Research": {
        "Linear Algebra": 20, "Optimization": 20, "Probability & Statistics": 50, "Stochastic Processes": 10, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Decision Analysis and Game Theory": {
        "Linear Algebra": 10, "Optimization": 40, "Probability & Statistics": 30, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Advanced Stochastic Processes for Operations Research": {
        "Linear Algebra": 10, "Optimization": 0, "Probability & Statistics": 20, "Stochastic Processes": 70, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Probability and Stochastic Processes I": {
        "Linear Algebra": 10, "Optimization": 0, "Probability & Statistics": 40, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Probability and Stochastic Processes II": {
        "Linear Algebra": 10, "Optimization": 0, "Probability & Statistics": 20, "Stochastic Processes": 70, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Simulation Modeling and Analysis": {
        "Linear Algebra": 0, "Optimization": 10, "Probability & Statistics": 50, "Stochastic Processes": 40, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Facilities Planning": {
        "Linear Algebra": 20, "Optimization": 80, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Network Flow Models and Applications": {
        "Linear Algebra": 20, "Optimization": 80, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Engineering Economic Analysis": {
        "Linear Algebra": 0, "Optimization": 30, "Probability & Statistics": 40, "Stochastic Processes": 10, "Calculus": 20,
        "priority": "High Application Impact"
    },
    "Deep Learning - Theory and Practice": {
        "Linear Algebra": 40, "Optimization": 30, "Probability & Statistics": 20, "Stochastic Processes": 0, "Calculus": 10,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Industrial Scheduling": {
        "Linear Algebra": 10, "Optimization": 90, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Quality Control & Reliability": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 70, "Stochastic Processes": 30, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Applied Integer Programming": {
        "Linear Algebra": 20, "Optimization": 80, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Quantitative Analysis in Finance and Marketing": {
        "Linear Algebra": 20, "Optimization": 30, "Probability & Statistics": 30, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Modelling and Optimisation in Flexible Manufacturing System": {
        "Linear Algebra": 0, "Optimization": 30, "Probability & Statistics": 20, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Inventory Control and Management Systems": {
        "Linear Algebra": 0, "Optimization": 30, "Probability & Statistics": 30, "Stochastic Processes": 40, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "IEOR Lab": {
        "Linear Algebra": 20, "Optimization": 30, "Probability & Statistics": 30, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Neural Nets, Fuzzy Systems and Applications": {
        "Linear Algebra": 30, "Optimization": 30, "Probability & Statistics": 20, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Selected Topics in A.I. in Operations Research": {
        "Linear Algebra": 30, "Optimization": 30, "Probability & Statistics": 40, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Quantitative Methods in Project Management": {
        "Linear Algebra": 0, "Optimization": 40, "Probability & Statistics": 40, "Stochastic Processes": 20, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Pricing & Revenue Management": {
        "Linear Algebra": 0, "Optimization": 30, "Probability & Statistics": 40, "Stochastic Processes": 30, "Calculus": 0,
        "priority": "Highly Vital (Industry Trend)"
    },
    "Multi-player Decision Making Models": {
        "Linear Algebra": 20, "Optimization": 50, "Probability & Statistics": 20, "Stochastic Processes": 10, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Markov Decision Processes": {
        "Linear Algebra": 10, "Optimization": 30, "Probability & Statistics": 10, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "IEOR for Health Care": {
        "Linear Algebra": 0, "Optimization": 40, "Probability & Statistics": 20, "Stochastic Processes": 40, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "OR Applications in Infrastructural and Service Sectors": {
        "Linear Algebra": 0, "Optimization": 60, "Probability & Statistics": 10, "Stochastic Processes": 30, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Selected Application of Stochastic Models": {
        "Linear Algebra": 0, "Optimization": 0, "Probability & Statistics": 10, "Stochastic Processes": 90, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Quantitative Models for Supply Chain Management": {
        "Linear Algebra": 0, "Optimization": 50, "Probability & Statistics": 20, "Stochastic Processes": 30, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Integer Programming: Theory and Computations": {
        "Linear Algebra": 30, "Optimization": 70, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Foundational Prerequisite"
    },
    "Topics in Industrial Engineering and Operations Research": {
        "Linear Algebra": 20, "Optimization": 20, "Probability & Statistics": 20, "Stochastic Processes": 20, "Calculus": 20,
        "priority": "Fundamental Theory"
    },
    "Advanced Stochastic Simulation": {
        "Linear Algebra": 0, "Optimization": 10, "Probability & Statistics": 40, "Stochastic Processes": 50, "Calculus": 0,
        "priority": "High Application Impact"
    },
    "Convex Analysis": {
        "Linear Algebra": 30, "Optimization": 50, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 20,
        "priority": "Foundational Prerequisite"
    },
    "Advanced Topics in Discrete Optimization": {
        "Linear Algebra": 30, "Optimization": 70, "Probability & Statistics": 0, "Stochastic Processes": 0, "Calculus": 0,
        "priority": "Fundamental Theory"
    },
    "Game Dynamics": {
        "Linear Algebra": 20, "Optimization": 30, "Probability & Statistics": 10, "Stochastic Processes": 20, "Calculus": 20,
        "priority": "Highly Vital (Industry Trend)"
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
// 5. UPDATED UI RENDERING ENGINE (With Dynamic Status Assessment)
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
}

// ==========================================================================
// 6 & 7. UNIFIED LIFECYCLE ENGINE & INTERACTIVITY (WITH PRIORITY BADGES)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    const collegeSelect = document.getElementById("college-selector");
    const basketsGrid = document.getElementById("baskets-grid");
    const actionPlanBox = document.getElementById("action-plan-box");

    // 1. Initialize the filtered mathematical table immediately on window paint
    populateHomeCourseTable();

    // 2. Handle Dropdown Transitions and Deep-Dive Population smoothly
    if (collegeSelect && basketsGrid) {
        collegeSelect.addEventListener("change", (event) => {
            const selectedProgram = event.target.value;

            // FIX: Using the correct dataset variable 'nitProfiles'
            if (!nitProfiles[selectedProgram]) return;

            // Transition fade out sequence
            basketsGrid.classList.remove("visible");
            if (actionPlanBox) {
                actionPlanBox.classList.remove("visible");
                setTimeout(() => { actionPlanBox.style.display = "none"; }, 250);
            }

            // Let animation ease out before swapping data frames
            setTimeout(() => {
                renderStudentBaskets(selectedProgram);

                // Reveal dynamically with smooth ease-in animation
                basketsGrid.classList.remove("hidden");
                basketsGrid.classList.add("visible");
                
                if (actionPlanBox) {
                    // Inject the 3-Box Detailed Remediation UI
                    generateDetailedActionPlan(actionPlanBox);
                    
                    actionPlanBox.style.display = "block";
                    setTimeout(() => { actionPlanBox.classList.add("visible"); }, 50);
                }
            }, 300);
        });
    }
});

// --- CORE ENGINE INJECTIONS & FILTERS ---

// Populate the filtered mathematical curriculum mapping comparison grid
function populateHomeCourseTable() {
    const tableBody = document.getElementById("ieor-courses-table-body");
    if (!tableBody) return; 
    
    tableBody.innerHTML = ""; 

    Object.keys(ieorCourseMatrix).forEach(courseName => {
        const data = ieorCourseMatrix[courseName];
        const row = document.createElement("tr");
        row.className = "course-matrix-row";
        
        // Safety fallback just in case some courses don't have priority tags yet
        let priorityClass = "tag-default";
        const pLabel = data.priority || data.Priority || "Standard"; 

        if (pLabel.includes("Vital")) priorityClass = "tag-vital";
        if (pLabel.includes("Foundational")) priorityClass = "tag-foundational";
        if (pLabel.includes("Impact")) priorityClass = "tag-impact";

        row.innerHTML = `
            <td class="course-title-cell">
                <div class="course-meta-wrapper">
                    <span class="course-name-text">${courseName}</span>
                    <span class="priority-badge ${priorityClass}">${pLabel}</span>
                </div>
            </td>
            <td class="weight-cell text-center">${data["Linear Algebra"]}%</td>
            <td class="weight-cell text-center">${data["Optimization"]}%</td>
            <td class="weight-cell text-center">${data["Probability & Statistics"]}%</td>
            <td class="weight-cell text-center">${data["Stochastic Processes"]}%</td>
            <td class="weight-cell text-center">${data["Calculus"]}%</td>
        `;
        tableBody.appendChild(row);
    });
}

// Variable to track the active market trend priority pill state
let currentPriorityFilter = "ALL";

function applyPriorityFilter(priorityKeyword, element) {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => pill.classList.remove('active'));
    element.classList.add('active');
    currentPriorityFilter = priorityKeyword.toUpperCase();
    filterMasterTable();
}

function filterMasterTable() {
    const searchInput = document.getElementById("matrix-search");
    const textFilter = searchInput ? searchInput.value.toUpperCase() : "";
    const tableBody = document.getElementById("ieor-courses-table-body");
    if (!tableBody) return;
    
    const tr = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        const titleCell = tr[i].getElementsByClassName("course-title-cell")[0];
        if (titleCell) {
            const txtValue = titleCell.textContent || titleCell.innerText;
            const upperText = txtValue.toUpperCase();
            const matchesSearch = upperText.indexOf(textFilter) > -1;
            
            let matchesPriority = false;
            if (currentPriorityFilter === "ALL") {
                matchesPriority = true;
            } else if (upperText.indexOf(currentPriorityFilter) > -1) {
                matchesPriority = true;
            }

            if (matchesSearch && matchesPriority) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function toggleDepthDetail(elementId) {
    const target = document.getElementById(elementId);
    if (!target) return;
    if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
}

// ==========================================================================
// TARGETED SELF-STUDY ACTION PLAN GENERATOR (THE MINI BOXES)
// ==========================================================================
function generateDetailedActionPlan(container) {
    if (!container) return;

    container.innerHTML = `
        <h2>🚀 Personalized Remediation Strategy</h2>
        <p class="plan-intro">Based on your specific curriculum overlap, focus on these targeted study areas prior to IIT Bombay Semester 1 registration:</p>
        
        <div class="plan-grid">
            <div class="plan-item plan-critical">
                <h4>Stochastic Processes <span class="severity-tag">Weak Gap</span></h4>
                <p>Your undergraduate track lacks formal exposure to Markov Chains, Queuing Theory, and advanced probability models.</p>
                <div class="resource-tip">
                    <strong>📚 Remedy:</strong> Study Sheldon Ross <em>"Stochastic Processes"</em> or MIT OCW 6.262.
                </div>
            </div>

            <div class="plan-item plan-warning">
                <h4>Advanced Optimization <span class="severity-tag">Manageable</span></h4>
                <p>You have baseline engineering optimization, but IEOR requires deep mathematical proofs (KKT Conditions, Simplex).</p>
                <div class="resource-tip">
                    <strong>📺 Remedy:</strong> Review Stephen Boyd's <em>Convex Optimization</em> (Stanford YouTube).
                </div>
            </div>

            <div class="plan-item" style="border-left: 4px solid #48bb78;">
                <h4>Calculus &amp; Lin. Algebra <span class="severity-tag" style="background: #f0fff4; color: #276749; border: 1px solid #9ae6b4;">Strong Foundation</span></h4>
                <p>Your engineering background provides a rigorous base in ODEs/PDEs, Taylor series, and Matrix theory.</p>
                <div class="resource-tip">
                    <strong>✅ Remedy:</strong> Light refresher on Eigen decomposition and Multivariable Jacobians.
                </div>
            </div>
        </div>

        <div class="action-footer-note">
            <strong>Advisor Note:</strong> Do not attempt to bridge everything simultaneously. Prioritize clearing your <strong style="color: #c53030;">Weak Gaps</strong> first to prevent immediate burnout during coursework.
        </div>
    `;
}
