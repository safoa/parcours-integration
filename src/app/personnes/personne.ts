import {Evenement} from '../evenements/evenement';

export class Personne {
  id: string;
  nom: string;
  prenom: string;
  date_de_naissance: string;
  photo?: string;
  mail_pro?: string;
  mail_perso?: string;
  tel_pro?: number;
  tel_perso?: number;
  poste?: string;
  date_debut_contrat: string;
  date_visite_medical?: string;
  periode_essai_valide?: boolean;
  evenements?: Evenement[];
}