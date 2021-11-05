export const AGENTE = [
    { name: 'ADV SERVICE' },
    { name: 'BE1 AMG GAS - EDISON' },
    { name: 'ESPOSAT RIF_ CAROLLO BARTOLOMEO' },
    { name: 'GLOBAL' },
    { name: 'MAXEL' },
    { name: 'MELITA' },
    { name: 'NUMBERS' },
    { name: 'OPTIMA' },
    { name: 'VND' }
]

export const DATAPRATICA = [
  { date: new Date(2021, 3, 15)},
  { date: new Date(2021, 1, 30)},
  { date: new Date(2021, 10, 18)},
  { date: new Date(2021, 9, 5)},
  { date: new Date(2021, 2, 24)},
  { date: new Date(2021, 5, 31)},
  { date: new Date(2021, 8, 7)},
  { date: new Date(2021, 11, 15)},
  { date: new Date(2021, 1, 8)},
  { date: new Date(2021, 7, 18)},
  { date: new Date(2021, 4, 23)},
  { date: new Date(2021, 3, 7)}

]

export const STATOPRATICA = [
    {stato: "attesa"},
    {stato: "completa"},
    {stato: "fallita"},
    {stato: "in delivery"},
    {stato: "bozza"},
    {stato: "completa"},
    {stato: "in delivery"},
    {stato: "in delivery"},
    {stato: "scartato"},
    {stato: "bozza"},
]

export const CODICEFISCALE = [
    {codice: "ABAFDAFSAKLFJ"},
    {codice: "SAFSAFSAFSFSF"},
    {codice: "JJALSKFJOJSFD"},
    {codice: "ISOAFJLJKJASL"},
    {codice: "ABAFDAFSAKLFJ"},
    {codice: "JAOISJFLSJAFL"},
    {codice: "SAFKLJSALDFKJ"},
    {codice: "SAIOFJLKJASFL"},
    {codice: "ABAFDAFILJSLF"},
    {codice: "OPOIPOIEKJJKK"},
    {codice: "ABAFDAFSAKLFJ"}
]

export const NOMINATIVO = [
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"},
    {name: "name"}
]

export const GESTORE = [
    { name: 'GAS WAY' },
    { name: 'HO MOBILE' },
    { name: 'IBERDROLA' },
    { name: 'LINKEM' },
    { name: 'LUCE E GAS' },
    { name: 'LYCA MOBILE' },
    { name: 'MELITA' },
    { name: 'NOITEL' },
    { name: 'NUMBERS' },
    { name: 'OPTIMA' },
    { name: 'RATEIZZAZIONE TIM' },
    { name: 'RETE FISSA TIM CONSUMER' },
    { name: 'RETE FISSA VODAFONE BUSINESS' },
    { name: 'RETE FISSA VODAFONE CONSUMER' },
    { name: 'RETE FISSA VODAFONE FWA' },
    { name: 'SEGNALAZIONE ATTIVAZIONE LUCE E GAS' },
    { name: 'SEGNALAZIONE ATTIVAZIONE FIBRA' },
    { name: 'SEGNALAZIONE BONUS FIBRA TIM' },

]


export class CONTRACTS{

    constructor(){}
    
    public agents = AGENTE;
    public manager = GESTORE;
    public codiceFiscale = CODICEFISCALE;
    public name = NOMINATIVO;
    public status = STATOPRATICA;
    public date = DATAPRATICA;
}