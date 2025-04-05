
import { QuizQuestionType } from "@/components/jaiib/QuizQuestion";

export type QuizQuestionsData = Record<string, QuizQuestionType[]>;

export const quizQuestions: QuizQuestionsData = {
  'Indian Economy – An Overview': [
    {
      question: "What type of economy does India have?",
      options: [
        { value: "a", label: "Capitalist" },
        { value: "b", label: "Socialist" },
        { value: "c", label: "Mixed Economy" },
        { value: "d", label: "Communist" }
      ],
      answer: "c"
    },
    {
      question: "Who is known as the father of Indian planning?",
      options: [
        { value: "a", label: "Mahatma Gandhi" },
        { value: "b", label: "Pandit Jawaharlal Nehru" },
        { value: "c", label: "M. Vishveshwarya" },
        { value: "d", label: "B.R. Ambedkar" }
      ],
      answer: "c"
    },
    {
      question: "What is the primary sector of the Indian economy?",
      options: [
        { value: "a", label: "Agriculture" },
        { value: "b", label: "Manufacturing" },
        { value: "c", label: "Banking" },
        { value: "d", label: "IT Services" }
      ],
      answer: "a"
    },
    {
      question: "Which institution is responsible for formulating India's monetary policy?",
      options: [
        { value: "a", label: "NITI Aayog" },
        { value: "b", label: "Ministry of Finance" },
        { value: "c", label: "Reserve Bank of India (RBI)" },
        { value: "d", label: "SEBI" }
      ],
      answer: "c"
    },
    {
      question: "GDP is calculated at which levels?",
      options: [
        { value: "a", label: "Market Prices" },
        { value: "b", label: "Factor Cost" },
        { value: "c", label: "Both (a) and (b)" },
        { value: "d", label: "None of the above" }
      ],
      answer: "c"
    },
    {
      question: "What does the term \"Fiscal Deficit\" refer to?",
      options: [
        { value: "a", label: "Excess of total revenue over total expenditure" },
        { value: "b", label: "Excess of total expenditure over total revenue" },
        { value: "c", label: "Total borrowings of the government" },
        { value: "d", label: "None of the above" }
      ],
      answer: "b"
    },
    {
      question: "Which sector contributes the highest to India's GDP?",
      options: [
        { value: "a", label: "Agriculture" },
        { value: "b", label: "Industry" },
        { value: "c", label: "Services" },
        { value: "d", label: "Mining" }
      ],
      answer: "c"
    },
    {
      question: "Which index measures inflation in India?",
      options: [
        { value: "a", label: "Consumer Price Index (CPI)" },
        { value: "b", label: "Wholesale Price Index (WPI)" },
        { value: "c", label: "Both (a) and (b)" },
        { value: "d", label: "None of the above" }
      ],
      answer: "c"
    },
    {
      question: "Who publishes the Economic Survey of India?",
      options: [
        { value: "a", label: "RBI" },
        { value: "b", label: "NITI Aayog" },
        { value: "c", label: "Ministry of Finance" },
        { value: "d", label: "Planning Commission" }
      ],
      answer: "c"
    },
    {
      question: "Which organization estimates India's GDP?",
      options: [
        { value: "a", label: "Ministry of Finance" },
        { value: "b", label: "NITI Aayog" },
        { value: "c", label: "National Statistical Office (NSO)" },
        { value: "d", label: "RBI" }
      ],
      answer: "c"
    },
    {
      question: "What is the role of NITI Aayog?",
      options: [
        { value: "a", label: "Formulating Monetary Policy" },
        { value: "b", label: "Financial Regulation" },
        { value: "c", label: "Economic Planning and Policy Implementation" },
        { value: "d", label: "Tax Collection" }
      ],
      answer: "c"
    },
    {
      question: "Which of the following is NOT a function of RBI?",
      options: [
        { value: "a", label: "Printing Currency Notes" },
        { value: "b", label: "Controlling Foreign Exchange" },
        { value: "c", label: "Providing Loans to the Public" },
        { value: "d", label: "Managing Monetary Policy" }
      ],
      answer: "c"
    },
    {
      question: "What is \"Repo Rate\"?",
      options: [
        { value: "a", label: "Rate at which RBI lends to commercial banks" },
        { value: "b", label: "Rate at which banks deposit with RBI" },
        { value: "c", label: "Rate at which public borrows from banks" },
        { value: "d", label: "None of the above" }
      ],
      answer: "a"
    },
    {
      question: "What is the full form of MSME?",
      options: [
        { value: "a", label: "Ministry of Small and Medium Enterprises" },
        { value: "b", label: "Micro, Small and Medium Enterprises" },
        { value: "c", label: "Mega, Small and Medium Enterprises" },
        { value: "d", label: "Micro, Subsidized, and Medium Enterprises" }
      ],
      answer: "b"
    },
    {
      question: "Which tax is NOT a part of GST?",
      options: [
        { value: "a", label: "Excise Duty" },
        { value: "b", label: "Sales Tax" },
        { value: "c", label: "Custom Duty" },
        { value: "d", label: "VAT" }
      ],
      answer: "c"
    },
    {
      question: "What is FDI?",
      options: [
        { value: "a", label: "Foreign Domestic Investment" },
        { value: "b", label: "Foreign Direct Investment" },
        { value: "c", label: "Foreign Development Indicator" },
        { value: "d", label: "None of the above" }
      ],
      answer: "b"
    },
    {
      question: "What is the main function of SEBI?",
      options: [
        { value: "a", label: "Regulate Stock Market" },
        { value: "b", label: "Control Inflation" },
        { value: "c", label: "Regulate Banking Sector" },
        { value: "d", label: "Manage Government Finances" }
      ],
      answer: "a"
    },
    {
      question: "Which of the following is a direct tax?",
      options: [
        { value: "a", label: "GST" },
        { value: "b", label: "Income Tax" },
        { value: "c", label: "Sales Tax" },
        { value: "d", label: "Custom Duty" }
      ],
      answer: "b"
    },
    {
      question: "What is the current base year for GDP calculation in India?",
      options: [
        { value: "a", label: "2004-05" },
        { value: "b", label: "2011-12" },
        { value: "c", label: "2014-15" },
        { value: "d", label: "2016-17" }
      ],
      answer: "b"
    },
    {
      question: "What is the function of NABARD?",
      options: [
        { value: "a", label: "Regulate Banking Sector" },
        { value: "b", label: "Develop Rural Economy & Agriculture Financing" },
        { value: "c", label: "Manage Forex Reserves" },
        { value: "d", label: "None of the above" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is an employment guarantee scheme?",
      options: [
        { value: "a", label: "PM Kisan" },
        { value: "b", label: "MGNREGA" },
        { value: "c", label: "Startup India" },
        { value: "d", label: "Make in India" }
      ],
      answer: "b"
    },
    {
      question: "What is the full form of PSL in banking?",
      options: [
        { value: "a", label: "Public Sector Lending" },
        { value: "b", label: "Priority Sector Lending" },
        { value: "c", label: "Private Sector Lending" },
        { value: "d", label: "Primary Stock Lending" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is NOT a poverty alleviation program?",
      options: [
        { value: "a", label: "PMAY" },
        { value: "b", label: "RERA" },
        { value: "c", label: "NRLM" },
        { value: "d", label: "PM Garib Kalyan Yojana" }
      ],
      answer: "b"
    },
    {
      question: "Which financial inclusion scheme provides bank accounts to all households?",
      options: [
        { value: "a", label: "PM Awas Yojana" },
        { value: "b", label: "PM Jan Dhan Yojana" },
        { value: "c", label: "Stand-Up India" },
        { value: "d", label: "Mudra Yojana" }
      ],
      answer: "b"
    },
    {
      question: "Which organization regulates microfinance institutions in India?",
      options: [
        { value: "a", label: "RBI" },
        { value: "b", label: "NABARD" },
        { value: "c", label: "SEBI" },
        { value: "d", label: "SIDBI" }
      ],
      answer: "a"
    },
    {
      question: "What is the full form of FRBM Act?",
      options: [
        { value: "a", label: "Financial Regulatory & Banking Management" },
        { value: "b", label: "Fiscal Responsibility and Budget Management" },
        { value: "c", label: "Foreign Reserve & Banking Mechanism" },
        { value: "d", label: "None of the above" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is a financial stability indicator?",
      options: [
        { value: "a", label: "Forex Reserves" },
        { value: "b", label: "HDI" },
        { value: "c", label: "Green GDP" },
        { value: "d", label: "Inflation Rate" }
      ],
      answer: "d"
    },
    {
      question: "Which year was the LPG reforms introduced in India?",
      options: [
        { value: "a", label: "1980" },
        { value: "b", label: "1991" },
        { value: "c", label: "1995" },
        { value: "d", label: "2000" }
      ],
      answer: "b"
    },
    {
      question: "Which country is the largest trading partner of India (as of recent data)?",
      options: [
        { value: "a", label: "China" },
        { value: "b", label: "USA" },
        { value: "c", label: "UAE" },
        { value: "d", label: "Russia" }
      ],
      answer: "a"
    },
    {
      question: "Which organization releases the Human Development Index (HDI)?",
      options: [
        { value: "a", label: "World Bank" },
        { value: "b", label: "IMF" },
        { value: "c", label: "United Nations Development Programme (UNDP)" },
        { value: "d", label: "ADB" }
      ],
      answer: "c"
    }
  ]
};
