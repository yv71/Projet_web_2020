import { LotGrains } from './lotGrains.model';
import { Client } from './client.model';
import { EnumTypeGrains } from './enumTypeGrains.model';


export class Commande {

  private numCommande : number;
  private client : Client;
  private typeGrains : EnumTypeGrains;
  private satisfaite : boolean;

  constructor(numCommande : number, client : Client, typeGrains: EnumTypeGrains)
  {
    this.numCommande = numCommande;
    this.client = client;
    this.typeGrains = typeGrains;
    this.satisfaite = false;
  }

  getNumCommande() : number
  {
    return this.numCommande;
  }

  getClient() : Client
  {
    return this.client;
  }

  getTypeGrains() : EnumTypeGrains
  {
    return this.typeGrains;
  }

  getSatisfaite() : boolean
  {
    return this.satisfaite;
  }

  commandeSatisfaite()
  {
    this.satisfaite = true;
  }
}
