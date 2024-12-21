export interface Heir {
  id: string;
  relationship: 'spouse' | 'child' | 'parent' | 'sibling';
  gender: 'male' | 'female';
  share: number;
}

export interface InheritanceShares {
  spouse: number;
  father: number;
  mother: number;
  sons: number;
  daughters: number;
  brothers: number;
  sisters: number;
}