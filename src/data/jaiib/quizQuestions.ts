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
  ],
  
  // Add the Module A final challenge questions
  'Module A': [
    {
      question: "Which two primary Acts mainly govern banking in India according to the introduction?",
      options: [
        { value: "a", label: "Companies Act, 2013 and SEBI Act, 1992" },
        { value: "b", label: "Banking Regulation Act, 1949 and Reserve Bank of India Act, 1934" },
        { value: "c", label: "SBI Act, 1955 and RRB Act, 1976" },
        { value: "d", label: "FEMA Act, 1999 and PMLA Act, 2002" }
      ],
      answer: "b"
    },
    {
      question: "The applicability of regulatory provisions under the RBI Act and BR Act depends on a bank's:",
      options: [
        { value: "a", label: "Size of deposits" },
        { value: "b", label: "Number of branches" },
        { value: "c", label: "Constitution (statutory corporation, banking company, co-operative society)" },
        { value: "d", label: "Geographical location" }
      ],
      answer: "c"
    },
    {
      question: "According to Section 5(b) of the Banking Regulation Act, 1949, \"Banking\" means accepting deposits for the purpose of:",
      options: [
        { value: "a", label: "Safekeeping only" },
        { value: "b", label: "Trading in goods" },
        { value: "c", label: "Lending or investing" },
        { value: "d", label: "Providing insurance" }
      ],
      answer: "c"
    },
    {
      question: "What are the two essential functions necessarily performed by a bank as per the definition in Section 5(b)?",
      options: [
        { value: "a", label: "Issuing credit cards and providing lockers" },
        { value: "b", label: "Acceptance of deposits from the public and Lending or investment of such deposits" },
        { value: "c", label: "Foreign exchange services and managing mutual funds" },
        { value: "d", label: "Accepting deposits and issuing demand drafts only" }
      ],
      answer: "b"
    },
    {
      question: "Deposits accepted by a bank must be repayable:",
      options: [
        { value: "a", label: "Only on demand" },
        { value: "b", label: "Only after a fixed period" },
        { value: "c", label: "Only by cheque" },
        { value: "d", label: "On demand or otherwise (after a period), and withdrawable by cheque, draft, order or otherwise" }
      ],
      answer: "d"
    },
    {
      question: "What is the primary purpose of Know Your Customer (KYC) norms as mentioned in the text?",
      options: [
        { value: "a", label: "To determine the creditworthiness of a customer" },
        { value: "b", label: "To properly identify customers, prevent frauds, and combat money laundering/terrorism financing" },
        { value: "c", label: "To offer customized loan products" },
        { value: "d", label: "To assess the customer's investment preferences" }
      ],
      answer: "b"
    },
    {
      question: "Under Section 49A of the Banking Regulation Act, who is generally authorised to accept deposits withdrawable by cheque besides banking companies and SBI?",
      options: [
        { value: "a", label: "Any company registered under the Companies Act" },
        { value: "b", label: "Non-Banking Financial Companies (NBFCs)" },
        { value: "c", label: "Reserve Bank of India and persons notified by the Central Government" },
        { value: "d", label: "Co-operative Societies only" }
      ],
      answer: "c"
    },
    {
      question: "The acceptance of deposits by Non-Banking Financial Companies (NBFCs) is regulated by the RBI under:",
      options: [
        { value: "a", label: "Section 22 of the Banking Regulation Act" },
        { value: "b", label: "Chapter IIIB of the Reserve Bank of India Act" },
        { value: "c", label: "Section 49A of the Banking Regulation Act" },
        { value: "d", label: "The Companies Act, 2013" }
      ],
      answer: "b"
    },
    {
      question: "To commence or carry on banking business in India, a company requires a licence from the RBI under which section of the Banking Regulation Act, 1949?",
      options: [
        { value: "a", label: "Section 5(b)" },
        { value: "b", label: "Section 7" },
        { value: "c", label: "Section 22" },
        { value: "d", label: "Section 49A" }
      ],
      answer: "c"
    },
    {
      question: "According to Section 7 of the BR Act, every banking company must use which word as part of its name?",
      options: [
        { value: "a", label: "Finance" },
        { value: "b", label: "Corporation" },
        { value: "c", label: "Limited" },
        { value: "d", label: "Bank" }
      ],
      answer: "d"
    },
    {
      question: "Which section of the Banking Regulation Act details the forms of business in which banking companies may engage (Permitted Business)?",
      options: [
        { value: "a", label: "Section 5(b)" },
        { value: "b", label: "Section 6(1)" },
        { value: "c", label: "Section 8" },
        { value: "d", label: "Section 9" }
      ],
      answer: "b"
    },
    {
      question: "Section 8 of the Banking Regulation Act prohibits banking companies from engaging directly or indirectly in:",
      options: [
        { value: "a", label: "Accepting deposits" },
        { value: "b", label: "Lending money" },
        { value: "c", label: "Trading activities and undertaking trading risks (buying/selling/bartering goods)" },
        { value: "d", label: "Providing guarantee and indemnity services" }
      ],
      answer: "c"
    },
    {
      question: "As per Section 9 of the BR Act, a banking company cannot hold any immovable property, except for its own use, for a period exceeding:",
      options: [
        { value: "a", label: "Three years from acquisition" },
        { value: "b", label: "Five years from acquisition" },
        { value: "c", label: "Seven years from acquisition (extendable by RBI up to five more years)" },
        { value: "d", label: "Ten years from acquisition" }
      ],
      answer: "c"
    },
    {
      question: "Public Sector Banks (other than SBI) were constituted under which Acts?",
      options: [
        { value: "a", label: "State Bank of India Act, 1955 and SBI (Subsidiary Banks) Act, 1959" },
        { value: "b", label: "Banking Companies (Acquisition and Transfer of Undertakings) Acts, 1970 and 1980" },
        { value: "c", label: "Regional Rural Banks Act, 1976" },
        { value: "d", label: "Companies Act, 1956" }
      ],
      answer: "b"
    },
    {
      question: "Regional Rural Banks (RRBs) were constituted under the:",
      options: [
        { value: "a", label: "RBI Act, 1934" },
        { value: "b", label: "Banking Regulation Act, 1949" },
        { value: "c", label: "Regional Rural Banks Act, 1976" },
        { value: "d", label: "State Co-operative Societies Act" }
      ],
      answer: "c"
    },
    {
      question: "Foreign Banks operating in India are primarily governed by which two Acts with regard to their banking business?",
      options: [
        { value: "a", label: "Companies Act, 2013 and FEMA, 1999" },
        { value: "b", label: "Banking Regulation Act, 1949 and RBI Act, 1934" },
        { value: "c", label: "Their home country laws only" },
        { value: "d", label: "SEBI Act, 1992 and IRDA Act, 1999" }
      ],
      answer: "b"
    },
    {
      question: "The dual control over Co-operative Banks (operating in one state) rests with:",
      options: [
        { value: "a", label: "RBI and SEBI" },
        { value: "b", label: "Central Government and RBI" },
        { value: "c", label: "State Government (Registrar of Co-operative Societies) and Reserve Bank of India" },
        { value: "d", label: "NABARD and State Government" }
      ],
      answer: "c"
    },
    {
      question: "Which Act was amended in 2020 to increase the powers of the RBI over Co-operative Banks?",
      options: [
        { value: "a", label: "Reserve Bank of India Act, 1934" },
        { value: "b", label: "Banking Regulation Act, 1949" },
        { value: "c", label: "Multi-State Cooperative Societies Act, 2002" },
        { value: "d", label: "Companies Act, 2013" }
      ],
      answer: "b"
    },
    {
      question: "The primary aim of the Reserve Bank of India Act, 1934, at the time of enactment was:",
      options: [
        { value: "a", label: "To regulate NBFCs" },
        { value: "b", label: "To supervise commercial banks" },
        { value: "c", label: "To regulate the issue of Bank notes and manage currency & credit system for monetary stability" },
        { value: "d", label: "To manage foreign exchange reserves" }
      ],
      answer: "c"
    },
    {
      question: "A 'Scheduled Bank' is a bank included in the Second Schedule of the:",
      options: [
        { value: "a", label: "Banking Regulation Act, 1949" },
        { value: "b", label: "Reserve Bank of India Act, 1934" },
        { value: "c", label: "Companies Act, 2013" },
        { value: "d", label: "State Bank of India Act, 1955" }
      ],
      answer: "b"
    },
    {
      question: "The role of the RBI as the 'lender of last resort' primarily involves:",
      options: [
        { value: "a", label: "Providing loans directly to the public" },
        { value: "b", label: "Offering funds to banks or financial institutions facing financial difficulty or liquidity risk" },
        { value: "c", label: "Managing the government's borrowing program" },
        { value: "d", label: "Printing currency notes" }
      ],
      answer: "b"
    },
    {
      question: "The 2019 amendment to the RBI Act regarding NBFCs enhanced the minimum Net Owned Funds (NOF) requirement for certain categories from Rs. 2 crores to:",
      options: [
        { value: "a", label: "Rs. 10 crores" },
        { value: "b", label: "Rs. 50 crores" },
        { value: "c", label: "Rs. 100 crores" },
        { value: "d", label: "Rs. 500 crores" }
      ],
      answer: "a"
    },
    {
      question: "The Banking Regulation (Amendment) Act, 2020, empowered RBI regarding Co-operative banks in terms of:",
      options: [
        { value: "a", label: "Setting up new co-operative societies" },
        { value: "b", label: "Regulating agricultural activities only" },
        { value: "c", label: "Management, capital, audit, liquidation, and supersession of the Board" },
        { value: "d", label: "Fixing service conditions of all co-operative employees" }
      ],
      answer: "c"
    },
    {
      question: "Section 3 of the BR Act, as amended in 2020, states the Act shall NOT apply to:",
      options: [
        { value: "a", label: "All co-operative societies" },
        { value: "b", label: "Foreign banks" },
        { value: "c", label: "Primary agricultural credit societies and certain long-term agricultural finance co-op societies (under conditions)" },
        { value: "d", label: "Nationalized Banks" }
      ],
      answer: "c"
    },
    {
      question: "The Banking Regulation (Amendment) Act, 2017 inserted Sections 35AA and 35AB to authorize RBI to:",
      options: [
        { value: "a", label: "Issue currency notes" },
        { value: "b", label: "Direct banks to initiate the insolvency resolution process under the IBC, 2016" },
        { value: "c", label: "Set up the Depositor Education and Awareness Fund (DEAF)" },
        { value: "d", label: "Regulate NBFCs" }
      ],
      answer: "b"
    },
    {
      question: "The Depositor Education and Awareness Fund (DEAF) was set up to take over accounts inoperative for:",
      options: [
        { value: "a", label: "3 years or more" },
        { value: "b", label: "5 years or more" },
        { value: "c", label: "10 years or more" },
        { value: "d", label: "7 years or more" }
      ],
      answer: "c"
    },
    {
      question: "One of the major roles currently played by the RBI, besides its original functions, is:",
      options: [
        { value: "a", label: "Direct lending to industries" },
        { value: "b", label: "Regulator of Banks and other financial institutions like NBFCs" },
        { value: "c", label: "Managing the stock exchanges" },
        { value: "d", label: "Auditing government accounts" }
      ],
      answer: "b"
    },
    {
      question: "Under Section 7(1) of the RBI Act, the Central Government can give directions to the RBI:",
      options: [
        { value: "a", label: "On any matter without restriction" },
        { value: "b", label: "Only regarding foreign exchange policy" },
        { value: "c", label: "Whenever considered important in public interest, in consultation with the RBI Governor" },
        { value: "d", label: "Only for managing government debt" }
      ],
      answer: "c"
    },
    {
      question: "An appeal against the cancellation of a banking license (Section 22, BR Act) by RBI lies with:",
      options: [
        { value: "a", label: "The High Court" },
        { value: "b", label: "The Supreme Court" },
        { value: "c", label: "The Central Government" },
        { value: "d", label: "SEBI" }
      ],
      answer: "c"
    },
    {
      question: "As per amended Section 56 of the BR Act, references to \"banking company\" in the Act, when applied to co-operative societies, shall be construed as references to:",
      options: [
        { value: "a", label: "State Government" },
        { value: "b", label: "Co-operative bank" },
        { value: "c", label: "Registrar of Co-operative Societies" },
        { value: "d", label: "NABARD" }
      ],
      answer: "b"
    },
    {
      question: "Banks dealing in securities like shares and debentures are subject to regulation by:",
      options: [
        { value: "a", label: "RBI only" },
        { value: "b", label: "IRDA" },
        { value: "c", label: "Securities and Exchange Board of India (SEBI)" },
        { value: "d", label: "Ministry of Finance" }
      ],
      answer: "c"
    },
    {
      question: "The requirement for a banking license under Section 22 of the BR Act is primarily meant to:",
      options: [
        { value: "a", label: "Generate revenue for the RBI" },
        { value: "b", label: "Ensure only banks operating on sound lines continue and prevent indiscriminate formation" },
        { value: "c", label: "Restrict the number of banks in the country" },
        { value: "d", label: "Control foreign investment in banks" }
      ],
      answer: "b"
    },
    {
      question: "Before granting a license under Section 22(3), RBI needs to be satisfied about the applicant bank's:",
      options: [
        { value: "a", label: "Branch network size" },
        { value: "b", label: "Marketing strategy" },
        { value: "c", label: "Ability to pay depositors, non-detrimental affairs, management character, capital adequacy, earning prospects, public interest" },
        { value: "d", label: "Number of employees" }
      ],
      answer: "c"
    },
    {
      question: "For licensing foreign banks, RBI considers factors like:",
      options: [
        { value: "a", label: "The bank's advertising budget" },
        { value: "b", label: "Home country supervision standards, economic/political relations, financial soundness, ownership pattern, international ranking" },
        { value: "c", label: "The number of ATMs planned" },
        { value: "d", label: "The colour scheme of the branches" }
      ],
      answer: "b"
    },
    {
      question: "The \"Guidelines for 'on tap' licensing of Universal Banks in the Private Sector\" were issued by RBI in:",
      options: [
        { value: "a", label: "2013" },
        { value: "b", label: "2014" },
        { value: "c", label: "2015" },
        { value: "d", label: "2016" }
      ],
      answer: "d"
    },
    {
      question: "A Small Finance Bank must be registered as a:",
      options: [
        { value: "a", label: "Private limited company" },
        { value: "b", label: "Public limited company under the Companies Act, 2013" },
        { value: "c", label: "Co-operative society" },
        { value: "d", label: "Partnership firm" }
      ],
      answer: "b"
    },
    {
      question: "RBI can cancel a banking license under Section 22(4) if the company:",
      options: [
        { value: "a", label: "Changes its name" },
        { value: "b", label: "Opens a new branch" },
        { value: "c", label: "Ceases banking business, fails to comply with license conditions, or fails conditions of Sec 22(3)/(3A)" },
        { value: "d", label: "Appoints a new director" }
      ],
      answer: "c"
    },
    {
      question: "Approval for opening a new place of business in India or changing the location outside the same city/town/village requires prior permission from RBI under:",
      options: [
        { value: "a", label: "Section 22 BR Act" },
        { value: "b", label: "Section 23 BR Act" },
        { value: "c", label: "Section 24 BR Act" },
        { value: "d", label: "Section 26 BR Act" }
      ],
      answer: "b"
    },
    {
      question: "A foreign bank operating in Mumbai and Kolkata needs to deposit with RBI a minimum amount (under Section 11(2) BR Act) of:",
      options: [
        { value: "a", label: "Rs. 5 lakh" },
        { value: "b", label: "Rs. 10 lakh" },
        { value: "c", label: "Rs. 15 lakh" },
        { value: "d", label: "Rs. 20 lakh" }
      ],
      answer: "d"
    },
    {
      question: "In addition to the initial deposit
