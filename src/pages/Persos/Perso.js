// @flow

export const sexes = {
  Unknown: 'Unknown',
  Homme: 'Homme',
  Femme: 'Femme',
};
type Sexe = $Keys<typeof sexes>;

type Caracteristiques = {
  courage: number,
  intelligence: number,
  charisme: number,
  adresse: number,
  force: number,
};

type Richesses = {
  or: number,
  argent: number,
  thritil: number,
  berylium: number,
  autre: string,
};

type Arme = {
  nom: string,
  bonusMalus: number,
  pointsImpacts: number,
  rupture: number,
  description: string,
};

type Protection = {
  nom: string,
  bonusMalus: number,
  resistanceNaturelle: number,
  resistanceMagique: number,
  rupture: number,
};

type Objet = {
  nom: string,
  nombre: number,
  effets: string,
};

export type Identite = {
  name: string,
  origine: string,
  metier: string,
  sexe: Sexe,
};

export type Perso = {
  identite: Identite,
  caracteristiques?: {
    base: Caracteristiques,
    modifiees: Caracteristiques,
  },
  experience?: number,
  niveau: number,
  pointDestin: number,
  energieVitaleMax?: number,
  competences?: string[],
  richesses?: Richesses,
  bonusFO?: number,
  armes?: Arme[],
  protections?: Protection[],
  trucDeMauviette?: boolean,
  equipementsEtTrucs?: string[],
};

type Erudit = Perso & {
  energieAstraleMax: number,
  magiePhysique: number,
  magiePsychique: number,
  livres: string[],
  ingredients: string[],
  potionsEtFioles: Objet[],
  objetsCharges: Objet[],
  objetsSpeciaux: string[],
};

type ItemSpecial = {
  nom: string,
  details: string,
};
type Munition = {
  type: string,
  effet: string,
};

type Baroudeur = Perso & {
  armesPoudreEtSpeciales: ItemSpecial[],
  monturesAnimaux: ItemSpecial[],
  munitions: Munition[],
};

function createPerso(): Perso {
  return {
    identite: {
      name: '',
      origine: '',
      metier: '',
      sexe: sexes.Unknown,
    },
    niveau: 1,
    pointDestin: 0,
  };
}
