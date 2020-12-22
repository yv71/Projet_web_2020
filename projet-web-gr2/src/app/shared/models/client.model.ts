export class Client {
    
    private numClient : number;
    private nom : string;
    private adresse : string;
    
    constructor(numClient: number, nom:  string, adresse: string ){
        this.numClient = numClient;
        this.nom = nom;
        this.adresse = adresse;
    }
    
    getNumClient() : number
    {
        return this.numClient;
    }

    getNom() : string
    {
        return this.nom;
    }

    getAdresse() : string
    {
        return this.adresse;
    }
}
