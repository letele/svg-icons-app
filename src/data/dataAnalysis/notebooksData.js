export const notebooksData = [
    {
        name: "Exploratory data analysis",
        repo:"https://github.com/letele/exploratory-data-analysis#readme",
        description: [
            "An overview of key concepts used when analysing and exploring patterns in data.",
            "There are two  successive notebooks:"
        ],
        notebooks: [
            {
                name: "1. data_variables",
                url:"https://github.com/letele/exploratory-data-analysis/blob/main/data_variables.ipynb",
                description:[
                    "Defines terms used in data analysis.",
                    "Explores data variables and their characteristics.",
                    "Explores graphical representations of data variables."
                ]
            },
            {
                name: "2. descriptive_statistics",
                url:"https://github.com/letele/exploratory-data-analysis/blob/main/descriptive_statistics.ipynb",
                description:[
                    "Describes statistical terms used to summarize data sets.",
                    " Explores graphical representations of locations and dispersions of data variables.",
                ]
            },
        ],
        packages: ["matplotlib","numpy","openpyxl","pandas"]
    },
    {
        name: "Hello digits",
        repo:"https://github.com/letele/hello-digits#readme",
        description:[
            "A neural network model that identifies hand written digits.",
            "The model follows a three layer architecture(Input, 1 hidden, and output layer).",
            "There is 1 notebook in this repository:"
        ],
        notebooks:[
            {
                name:"hello_digits",
                url:"https://github.com/letele/hello-digits/blob/main/hello-digits.ipynb",
                description:[
                    "The model is tested with data of 10000 data points, ",
                    "The model is able to make 9642 correct predictions",
                    "The error rate of the model is 3.58%"
                ]
            }
        ],
        packages: ["imageio","matplotlib","numpy"]
    },
    {
        name:"Introduction to language models",
        repo:"https://github.com/letele/introduction-to-language-models#readme",
        description:[
            "An autoregressive character level language model for creating names.",
            "There are two  successive notebooks:"
        ],
        notebooks:[
            {
                name:"1. bigram_model",
                url:"https://github.com/letele/introduction-to-language-models/blob/main/bigram_model.ipynb",
                description:[
                    "Defines key concepts of a bigram model and how it can be build.",
                    "Introduces a single layer neural network using pytorch."
                ]
            },
            {
                name:"2. mlp_model",
                url:"https://github.com/letele/introduction-to-language-models/blob/main/mlp_model.ipynb",
                description:[
                    "Builds a more powerful language model using neural networks with multi-layer perceptrons.",
                    "Introduces key concepts in multi-layer perceptrons."
                ]
            }
        ],
        packages: ["matplotlib","pytorch"]
    }
]