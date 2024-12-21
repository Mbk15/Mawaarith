import type { Heir, InheritanceShares } from '../types/heir';

export function calculateShares(heirs: Heir[]): InheritanceShares {
  const shares: InheritanceShares = {
    spouse: 0,
    father: 0,
    mother: 0,
    sons: 0,
    daughters: 0,
    brothers: 0,
    sisters: 0
  };

  // Basic Islamic inheritance rules implementation
  const hasChildren = heirs.some(heir => heir.relationship === 'child');
  
  heirs.forEach(heir => {
    switch (heir.relationship) {
      case 'spouse':
        shares.spouse = heir.gender === 'male' ? (hasChildren ? 0.25 : 0.5) : (hasChildren ? 0.125 : 0.25);
        break;
      case 'parent':
        if (heir.gender === 'male') {
          shares.father = hasChildren ? 0.167 : 0.25;
        } else {
          shares.mother = hasChildren ? 0.167 : 0.25;
        }
        break;
      case 'child':
        if (heir.gender === 'male') {
          shares.sons += 1;
        } else {
          shares.daughters += 0.5;
        }
        break;
      case 'sibling':
        if (heir.gender === 'male') {
          shares.brothers += 1;
        } else {
          shares.sisters += 0.5;
        }
        break;
    }
  });

  return shares;
}