 export default class Storage{
    constructor(key){
        this.key=key;
    }
    saveAll(answers){
        const stored=localStorage.getItem(this.key);
        const parsed=stored&&JSON.parse(stored);
        const updated={...parsed,...answers};
        localStorage.setItem(this.key,JSON.stringify(updated));
    }
    clearAll(){
        localStorage.removeItem(this.key);
    }

 }