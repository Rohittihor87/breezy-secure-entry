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
    },
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
      question: "In addition to the initial deposit, foreign banks must deposit what percentage of their annual profit from Indian business with the RBI?",
      options: [
        { value: "a", label: "10%" },
        { value: "b", label: "15%" },
        { value: "c", label: "20%" },
        { value: "d", label: "25%" }
      ],
      answer: "c"
    },
    {
      question: "For an Indian bank with branches in more than one state, including Mumbai or Kolkata, the minimum aggregate value of paid-up capital and reserves under Section 11(3) is:",
      options: [
        { value: "a", label: "Rs. 1 lakh" },
        { value: "b", label: "Rs. 5 lakh" },
        { value: "c", label: "Rs. 10 lakh" },
        { value: "d", label: "Rs. 50 lakh" }
      ],
      answer: "c"
    },
    {
      question: "Section 12(1) of the BR Act stipulates that a banking company's subscribed capital must be not less than ______ of its authorized capital.",
      options: [
        { value: "a", label: "One-quarter" },
        { value: "b", label: "One-half" },
        { value: "c", label: "Three-quarters" },
        { value: "d", label: "The full amount" }
      ],
      answer: "b"
    },
    {
      question: "The Reserve Bank may increase the ceiling on voting rights for a shareholder from ten per cent up to:",
      options: [
        { value: "a", label: "15 per cent" },
        { value: "b", label: "20 per cent" },
        { value: "c", label: "26 per cent" },
        { value: "d", label: "49 per cent" }
      ],
      answer: "c"
    },
    {
      question: "Acquiring 5 per cent or more of the paid-up share capital or voting rights in a banking company requires prior approval from RBI under:",
      options: [
        { value: "a", label: "Section 12(2) BR Act" },
        { value: "b", label: "Section 12B BR Act" },
        { value: "c", label: "Section 19 BR Act" },
        { value: "d", label: "Section 22 BR Act" }
      ],
      answer: "b"
    },
    {
      question: "Payment of dividend by a banking company is prohibited under Section 15 BR Act until:",
      options: [
        { value: "a", label: "All loans are recovered" },
        { value: "b", label: "A specific CRAR is met" },
        { value: "c", label: "All capitalized expenses have been written off" },
        { value: "d", label: "RBI gives specific permission" }
      ],
      answer: "c"
    },
    {
      question: "Formation of subsidiaries by banking companies is restricted under Section 19 of the BR Act mainly to:",
      options: [
        { value: "a", label: "Prevent competition" },
        { value: "b", label: "Prevent banks from carrying on trading activities via subsidiaries and for specific permitted purposes" },
        { value: "c", label: "Limit the size of banks" },
        { value: "d", label: "Encourage foreign investment" }
      ],
      answer: "b"
    },
    {
      question: "Section 10A of the BR Act stipulates that at least ____ per cent of a banking company's directors must have special knowledge or practical experience in specified fields.",
      options: [
        { value: "a", label: "25" },
        { value: "b", label: "49" },
        { value: "c", label: "51" },
        { value: "d", label: "75" }
      ],
      answer: "c"
    },
    {
      question: "'Substantial interest' for a director (disqualification under Section 10A) is defined in Section 5(ne) as holding beneficial interest exceeding:",
      options: [
        { value: "a", label: "Rs 1 lakh or 5% of paid-up capital" },
        { value: "b", label: "Rs 5 lakh or 10% of paid-up capital (or 10% of firm's capital)" },
        { value: "c", label: "Rs 10 lakh or 15% of paid-up capital" },
        { value: "d", label: "Rs 2 lakh or 7% of paid-up capital" }
      ],
      answer: "b"
    },
    {
      question: "The maximum continuous period an ordinary director (not chairman/whole-time director) can hold office in a banking company is:",
      options: [
        { value: "a", label: "Five years" },
        { value: "b", label: "Eight years" },
        { value: "c", label: "Ten years" },
        { value: "d", label: "Three years" }
      ],
      answer: "b"
    },
    {
      question: "Section 10B of the BR Act mandates that every banking company must have a:",
      options: [
        { value: "a", label: "Foreign director" },
        { value: "b", label: "Government-nominated director" },
        { value: "c", label: "Whole-time or part-time chairman appointed from its directors" },
        { value: "d", label: "Minimum of 10 directors" }
      ],
      answer: "c"
    },
    {
      question: "A whole-time chairman or managing director of a banking company holds office for a period not exceeding:",
      options: [
        { value: "a", label: "Three years at a time" },
        { value: "b", label: "Five years at a time (eligible for re-appointment)" },
        { value: "c", label: "Eight years at a time" },
        { value: "d", label: "Ten years at a time" }
      ],
      answer: "b"
    },
    {
      question: "RBI can appoint additional directors to a banking company's board under which section of the BR Act?",
      options: [
        { value: "a", label: "Section 10A" },
        { value: "b", label: "Section 10B" },
        { value: "c", label: "Section 36AA" },
        { value: "d", label: "Section 36AB" }
      ],
      answer: "d"
    },
    {
      question: "Section 10 of the BR Act prohibits the employment of persons who:",
      options: [
        { value: "a", label: "Are above 60 years of age" },
        { value: "b", label: "Are undischarged insolvents, convicted of offences involving moral turpitude, or whose remuneration is excessive in RBI's opinion" },
        { value: "c", label: "Do not hold a banking degree" },
        { value: "d", label: "Are directors of subsidiary companies" }
      ],
      answer: "b"
    },
    {
      question: "RBI is empowered to remove a chairman, director, CEO, or other officer/employee of a banking company under:",
      options: [
        { value: "a", label: "Section 10B BR Act" },
        { value: "b", label: "Section 30 BR Act" },
        { value: "c", label: "Section 36AA BR Act" },
        { value: "d", label: "Section 36AB BR Act" }
      ],
      answer: "c"
    },
    {
      question: "The OECD principles of Corporate Governance emphasize:",
      options: [
        { value: "a", label: "Maximizing short-term profits" },
        { value: "b", label: "Shareholder rights, equitable treatment, stakeholder roles, disclosure & transparency, board responsibilities" },
        { value: "c", label: "Government control over boards" },
        { value: "d", label: "Strict limits on employee compensation" }
      ],
      answer: "b"
    },
    {
      question: "The body constituted by the Central Government in July 2022 for recommending appointments of whole-time directors/chairpersons in financial institutions is:",
      options: [
        { value: "a", label: "Banks Board Bureau" },
        { value: "b", label: "Reserve Bank of India" },
        { value: "c", label: "Financial Services Institutions Bureau" },
        { value: "d", label: "Department of Financial Services" }
      ],
      answer: "c"
    },
    {
      question: "As per the RBI circular (April 2022), the post of MD & CEO or WTD in a private bank cannot be held by the same incumbent for more than:",
      options: [
        { value: "a", label: "10 years" },
        { value: "b", label: "12 years" },
        { value: "c", label: "15 years" },
        { value: "d", label: "20 years" }
      ],
      answer: "c"
    },
    {
      question: "RBI issues directions to banks under which two main sections of the BR Act?",
      options: [
        { value: "a", label: "Sections 10 and 12" },
        { value: "b", label: "Sections 5 and 6" },
        { value: "c", label: "Sections 21 and 35A" },
        { value: "d", label: "Sections 24 and 25" }
      ],
      answer: "c"
    },
    {
      question: "Directions issued by RBI under Sections 21 and 35A are:",
      options: [
        { value: "a", label: "Advisory in nature" },
        { value: "b", label: "Applicable only to foreign banks" },
        { value: "c", label: "Statutory in nature and binding on the banks" },
        { value: "d", label: "Subject to approval by the Central Government" }
      ],
      answer: "c"
    },
    {
      question: "Non-statutory circulars of the Reserve Bank:",
      options: [
        { value: "a", label: "Are legally binding on customers" },
        { value: "b", label: "Cannot affect legal rights (as per State Bank of India vs. CIT)" },
        { value: "c", label: "Override the provisions of the BR Act" },
        { value: "d", label: "Are binding on all courts" }
      ],
      answer: "b"
    },
    {
      question: "Under Section 26 of the BR Act, banks must file an annual return on unclaimed deposits covering deposits not operated for:",
      options: [
        { value: "a", label: "5 years" },
        { value: "b", label: "10 years" },
        { value: "c", label: "7 years" },
        { value: "d", label: "12 years" }
      ],
      answer: "b"
    },
    {
      question: "The Depositor Education and Awareness Fund (DEAF) was established under which section inserted by the 2013 amendment?",
      options: [
        { value: "a", label: "Section 26" },
        { value: "b", label: "Section 26A" },
        { value: "c", label: "Section 35A" },
        { value: "d", label: "Section 45ZA" }
      ],
      answer: "b"
    },
    {
      question: "Nomination facility for bank deposits is provided under which section of the BR Act?",
      options: [
        { value: "a", label: "Section 45ZA" },
        { value: "b", label: "Section 45ZC" },
        { value: "c", label: "Section 45ZE" },
        { value: "d", label: "Section 45ZB" }
      ],
      answer: "a"
    },
    {
      question: "Nomination facility for articles in safe custody is provided under which section of the BR Act?",
      options: [
        { value: "a", label: "Section 45ZA" },
        { value: "b", label: "Section 45ZC" },
        { value: "c", label: "Section 45ZE" },
        { value: "d", label: "Section 45ZD" }
      ],
      answer: "b"
    },
    {
      question: "Payment made by a bank to a nominee upon the death of the depositor:",
      options: [
        { value: "a", label: "Extinguishes the rights of legal heirs against the nominee" },
        { value: "b", label: "Gives the bank a valid discharge, but does not affect the rights of legal heirs against the nominee" },
        { value: "c", label: "Requires a court order" },
        { value: "d", label: "Is prohibited if there are legal heirs" }
      ],
      answer: "b"
    },
    {
      question: "RBI is empowered to control loans and advances by banking companies under:",
      options: [
        { value: "a", label: "Section 10 BR Act" },
        { value: "b", label: "Section 21 BR Act" },
        { value: "c", label: "Section 24 BR Act" },
        { value: "d", label: "Section 45ZA BR Act" }
      ],
      answer: "b"
    },
    {
      question: "Section 20 of the BR Act (as applicable to co-operative societies) restricts granting loans against:",
      options: [
        { value: "a", label: "Gold jewellery" },
        { value: "b", label: "The security of the bank's own shares and unsecured loans to directors/firms they are interested in" },
        { value: "c", label: "Immovable property" },
        { value: "d", label: "Government securities" }
      ],
      answer: "b"
    },
    {
      question: "Which system replaced the BPLR system for pricing loans effective July 1, 2010?",
      options: [
        { value: "a", label: "MCLR System" },
        { value: "b", label: "Base Rate System" },
        { value: "c", label: "External Benchmark System" },
        { value: "d", label: "Prime Lending Rate System" }
      ],
      answer: "b"
    },
    {
      question: "The Marginal Cost of Fund Based Lending Rate (MCLR) system replaced the Base Rate system from:",
      options: [
        { value: "a", label: "July 1, 2010" },
        { value: "b", label: "April 1, 2016" },
        { value: "c", label: "October 1, 2019" },
        { value: "d", label: "April 1, 2020" }
      ],
      answer: "b"
    },
    {
      question: "From October 1, 2019, all new floating rate personal/retail loans and MSME loans must be benchmarked to:",
      options: [
        { value: "a", label: "MCLR" },
        { value: "b", label: "Base Rate" },
        { value: "c", label: "An External Benchmark (like Repo Rate, T-Bill Yield etc.)" },
        { value: "d", label: "The bank's discretion" }
      ],
      answer: "c"
    },
    {
      question: "The Usurious Loans Act, 1918, was intended to protect borrowers from:",
      options: [
        { value: "a", label: "Banking regulations" },
        { value: "b", label: "Exorbitant interest rates charged primarily by moneylenders" },
        { value: "c", label: "Foreign exchange fluctuations" },
        { value: "d", label: "Stock market volatility" }
      ],
      answer: "b"
    },
    {
      question: "Which section was inserted in the BR Act to protect interest rates charged by banks from being challenged in court as excessive?",
      options: [
        { value: "a", label: "Section 21" },
        { value: "b", label: "Section 21A" },
        { value: "c", label: "Section 35A" },
        { value: "d", label: "Section 45S" }
      ],
      answer: "b"
    },
    {
      question: "The RBI Working Group on Internet Banking focused on which three major areas?",
      options: [
        { value: "a", label: "Marketing, HR, and Branch layout" },
        { value: "b", label: "Technology & Security, Legal issues, and Regulatory & Supervisory issues" },
        { value: "c", label: "Product development, Pricing, and Customer service" },
        { value: "d", label: "ATMs, Mobile Banking, and Point-of-Sale terminals" }
      ],
      answer: "b"
    },
    {
      question: "Regulation of Money Market Instruments like Call/Notice Money, CDs, CPs falls under which Section of the RBI Act?",
      options: [
        { value: "a", label: "Section 42" },
        { value: "b", label: "Section 17" },
        { value: "c", label: "Section 45W" },
        { value: "d", label: "Section 22" }
      ],
      answer: "c"
    },
    {
      question: "The Integrated Ombudsman Scheme, 2021, merged how many previous RBI Ombudsman schemes?",
      options: [
        { value: "a", label: "One" },
        { value: "b", label: "Two" },
        { value: "c", label: "Three" },
        { value: "d", label: "Four" }
      ],
      answer: "c"
    },
    {
      question: "Under the Integrated Ombudsman Scheme, 2021, the ground for filing a complaint is broadly defined as:",
      options: [
        { value: "a", label: "High interest rates" },
        { value: "b", label: "Poor branch ambience" },
        { value: "c", label: "'Deficiency in service'" },
        { value: "d", label: "Lack of ATM machines" }
      ],
      answer: "c"
    },
    {
      question: "Every banking company incorporated in India must transfer annually a sum equivalent to not less than ____ of its profits to the Reserve Fund before declaring dividend (Sec 17 BR Act).",
      options: [
        { value: "a", label: "10%" },
        { value: "b", label: "20% (since increased to 25% by RBI circular)" },
        { value: "c", label: "15%" },
        { value: "d", label: "30%" }
      ],
      answer: "b"
    },
    {
      question: "Maintenance of Cash Reserve Ratio (CRR) for Scheduled Banks is governed by:",
      options: [
        { value: "a", label: "Section 18 BR Act" },
        { value: "b", label: "Section 24 BR Act" },
        { value: "c", label: "Section 42 RBI Act" },
        { value: "d", label: "Section 17 BR Act" }
      ],
      answer: "c"
    },
    {
      question: "Maintenance of Statutory Liquidity Ratio (SLR) is mandated by:",
      options: [
        { value: "a", label: "Section 18 BR Act" },
        { value: "b", label: "Section 24 BR Act" },
        { value: "c", label: "Section 42 RBI Act" },
        { value: "d", label: "Section 25 BR Act" }
      ],
      answer: "b"
    },
    {
      question: "Under Section 25 of the BR Act, assets in India of every banking company must not be less than ____ percent of its demand and time liabilities in India at the end of every quarter.",
      options: [
        { value: "a", label: "50" },
        { value: "b", label: "60" },
        { value: "c", label: "75" },
        { value: "d", label: "90" }
      ],
      answer: "c"
    },
    {
      question: "Annual accounts and balance sheets of banking companies must be prepared as stipulated in:",
      options: [
        { value: "a", label: "Section 17 BR Act" },
        { value: "b", label: "Section 29 BR Act" },
        { value: "c", label: "Section 35 BR Act" },
        { value: "d", label: "Section 42 RBI Act" }
      ],
      answer: "b"
    },
    {
      question: "The auditors of a banking company must be qualified to be auditors under the:",
      options: [
        { value: "a", label: "RBI Act, 1934" },
        { value: "b", label: "BR Act, 1949" },
        { value: "c", label: "Companies Act, 2013" },
        { value: "d", label: "SEBI Act, 1992" }
      ],
      answer: "c"
    },
    {
      question: "Prior approval of which authority is required before a bank appoints, re-appoints, or removes its statutory auditor (Section 30(1A) BR Act)?",
      options: [
        { value: "a", label: "Central Government" },
        { value: "b", label: "SEBI" },
        { value: "c", label: "RBI" },
        { value: "d", label: "Institute of Chartered Accountants of India" }
      ],
      answer: "c"
    },
    {
      question: "RBI can order a special audit of a banking company under:",
      options: [
        { value: "a", label: "Section 30(1) BR Act" },
        { value: "b", label: "Section 30(1B) BR Act" },
        { value: "c", label: "Section 35 BR Act" },
        { value: "d", label: "Section 36AA BR Act" }
      ],
      answer: "b"
    },
    {
      question: "The return on liquid assets (SLR) under Section 24(3) must be submitted within ____ days from the end of the month to which it relates.",
      options: [
        { value: "a", label: "10" },
        { value: "b", label: "15" },
        { value: "c", label: "20" },
        { value: "d", label: "30" }
      ],
      answer: "c"
    },
    {
      question: "Preservation of bank records is governed by rules made under which section of the BR Act?",
      options: [
        { value: "a", label: "Section 26A" },
        { value: "b", label: "Section 35" },
        { value: "c", label: "Section 45Y" },
        { value: "d", label: "Section 46" }
      ],
      answer: "c"
    },
    {
      question: "Under the PMLA Rules, records of certain cash transactions above ______ must be maintained.",
      options: [
        { value: "a", label: "Rs 1 Lakh" },
        { value: "b", label: "Rs 5 Lakh" },
        { value: "c", label: "Rs 10 Lakh" },
        { value: "d", label: "Rs 50 Lakh" }
      ],
      answer: "c"
    },
    {
      question: "Under PMLA, records relating to customer identification and transactions must generally be preserved for how long after the business relationship ends?",
      options: [
        { value: "a", label: "3 years" },
        { value: "b", label: "5 years (10 years for certain specific cases under the Act)" },
        { value: "c", label: "8 years" },
        { value: "d", label: "12 years" }
      ],
      answer: "b"
    },
    {
      question: "The RBI conducts Annual Financial Inspection (AFI) of banking companies under:",
      options: [
        { value: "a", label: "Section 30 BR Act" },
        { value: "b", label: "Section 35 BR Act" },
        { value: "c", label: "Section 45Y BR Act" },
        { value: "d", label: "Section 42 RBI Act" }
      ],
      answer: "b"
    },
    {
      question: "The Board for Financial Supervision (BFS) was set up by RBI in:",
      options: [
        { value: "a", label: "1991" },
        { value: "b", label: "1994" },
        { value: "c", label: "1998" },
        { value: "d", label: "2002" }
      ],
      answer: "b"
    },
    {
      question: "The Central Government can acquire the undertaking of a banking company under Section 36AE BR Act if:",
      options: [
        { value: "a", label: "The bank makes excessive profits" },
        { value: "b", label: "The bank repeatedly fails to comply with RBI directions or is managed detrimentally to depositors' interests" },
        { value: "c", label: "The bank refuses to lower interest rates" },
        { value: "d", label: "The bank opens too many branches" }
      ],
      answer: "b"
    },
    {
      question: "Voluntary amalgamation of one banking company with another requires a scheme approved under:",
      options: [
        { value: "a", label: "Section 45 BR Act" },
        { value: "b", label: "Section 44A BR Act" },
        { value: "c", label: "Section 36AE BR Act" },
        { value: "d", label: "Companies Act, 2013" }
      ],
      answer: "b"
    },
    {
      question: "RBI can apply to the Central Government for an order of moratorium for a banking company under:",
      options: [
        { value: "a", label: "Section 37 BR Act" },
        { value: "b", label: "Section 45 BR Act" },
        { value: "c", label: "Section 38 BR Act" },
        { value: "d", label: "Section 44A BR Act" }
      ],
      answer: "b"
    },
    {
      question: "The High Court shall order the winding up of a banking company if:",
      options: [
        { value: "a", label: "It makes losses for three consecutive years" },
        { value: "b", label: "It is unable to pay its debts or RBI applies for winding up under Sec 37/38" },
        { value: "c", label: "Its CRAR falls below 10%" },
        { value: "d", label: "It changes its registered office" }
      ],
      answer: "b"
    },
    {
      question: "Who appoints the Court Liquidator attached to the High Court for winding up banking companies under Section 38A BR Act?",
      options: [
        { value: "a", label: "Reserve Bank of India" },
        { value: "b", label: "Chief Justice of the High Court" },
        { value: "c", label: "Central Government" },
        { value: "d", label: "State Government" }
      ],
      answer: "b"
    },
    {
      question: "The merger of associate banks with SBI, completed in 2017, was sanctioned under which Act?",
      options: [
        { value: "a", label: "State Bank of India Act, 1955 (Section 35)" },
        { value: "b", label: "Banking Regulation Act, 1949" },
        { value: "c", label: "RBI Act, 1934" },
        { value: "d", label: "Companies Act, 2013" }
      ],
      answer: "a"
    },
    {
      question: "Differentiated Banks, like Payments Banks and Small Finance Banks, primarily aim to:",
      options: [
        { value: "a", label: "Compete directly with large universal banks in all segments" },
        { value: "b", label: "Cater to the needs of specific sectors or demographic segments, often promoting financial inclusion" },
        { value: "c", label: "Focus solely on international banking" },
        { value: "d", label: "Provide only high-value corporate loans" }
      ],
      answer: "b"
    },
    {
      question: "The Narasimham Committee I (1991) primarily focused on reforms in the:",
      options: [
        { value: "a", label: "Insurance Sector" },
        { value: "b", label: "Financial System (mainly banking)" },
        { value: "c", label: "Capital Markets" },
        { value: "d", label: "Foreign Exchange Market" }
      ],
      answer: "b"
    },
    {
      question: "The Financial Sector Development Council (FSDC) is chaired by the:",
      options: [
        { value: "a", label: "Governor, RBI" },
        { value: "b", label: "Secretary, Department of Economic Affairs" },
        { value: "c", label: "Union Finance Minister" },
        { value: "d", label: "Prime Minister" }
      ],
      answer: "c"
    },
    {
      question: "Under the revised Scale Based Regulatory Structure for NBFCs effective Oct 2022, NBFCs are divided into how many layers?",
      options: [
        { value: "a", label: "Two Layers (Deposit taking and Non-deposit taking)" },
        { value: "b", label: "Three Layers (Small, Medium, Large)" },
        { value: "c", label: "Four Layers (Base, Middle, Upper, Top)" },
        { value: "d", label: "Five Layers based on asset size only" }
      ],
      answer: "c"
    }
  ]
};
