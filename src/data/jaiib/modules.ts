
export type JaiibModule = {
  id: string;
  title: string;
  name: string;
  chapters: string[];
  freeChapters: number;
};

export const modules: JaiibModule[] = [
  {
    id: 'module-a',
    title: 'Module A',
    name: 'Indian Economic Architecture',
    chapters: [
      'Indian Economy – An Overview',
      'Economic Planning in India',
      'Economic Policies',
      'Infrastructure & Economic Development',
      'Globalisation – Impact on India'
    ],
    freeChapters: 2 // First 2 chapters are free
  },
  {
    id: 'module-b',
    title: 'Module B',
    name: 'Economic Concepts Related to Banking',
    chapters: [
      'Fundamentals of Economics',
      'Microeconomics and Macroeconomics',
      'Monetary Policy and Fiscal Policy',
      'Inflation and Business Cycles',
      'Money Supply & Banking System'
    ],
    freeChapters: 2 // First 2 chapters are free
  },
  {
    id: 'module-c',
    title: 'Module C',
    name: 'Indian Financial Architecture',
    chapters: [
      'Indian Financial System – An Overview',
      'Financial Markets in India',
      'Financial Regulators in India',
      'Role of RBI in Financial System',
      'Development Financial Institutions'
    ],
    freeChapters: 2 // First 2 chapters are free
  },
  {
    id: 'module-d',
    title: 'Module D',
    name: 'Financial Products and Services',
    chapters: [
      'Payment Systems in India',
      'Digital Banking and Financial Inclusion',
      'Alternative Banking Channels',
      'Mutual Funds and Insurance',
      'Derivatives and Other Financial Products'
    ],
    freeChapters: 2 // First 2 chapters are free
  },
  {
    id: 'module-e',
    title: 'Final Challenge',
    name: 'Final Assessment',
    chapters: [
      'Module A',
      'Module B',
      'Module C', 
      'Module D',
      'Indian Economy & Indian Financial System I',
      'Indian Economy & Indian Financial System II',
      'Indian Economy & Indian Financial System III',
      'Indian Economy & Indian Financial System IV'
    ],
    freeChapters: 1 // Only first challenge is free
  }
];
