class Addres {
    city: string;
    street: string;
    numOfHouse: number;
    zipCode: number;

    constructor(city: string, street: string, numOfHouse: number, zipCode: number) {
        this.city = city;
        this.street = street;
        this.numOfHouse = numOfHouse;
        this.zipCode = zipCode;
    }

    print() {
        return `city: ${this.city}, 
                street: ${this.street}
                numOfHouse: ${this.numOfHouse}
                zipCode: ${this.zipCode} `
    }
}

class Shoop {
    goods: string;
    stock: number;
    mSquer: number;
    addres: Addres;
    static bigShoop = 'small';

    constructor(goods: string, stock: number, mSquer: number, addres: Addres) {
        this.goods = goods;
        this.stock = stock;
        this.mSquer = mSquer;
        this.addres = addres;
        if (mSquer > 500) {
            Shoop.bigShoop = 'big';
        }
    }
    print() {
        return `goods: ${this.goods}, 
                in stock: ${this.stock}
                meter squer: ${this.mSquer}
                addres: ${this.addres}
                size of the shoop ${Shoop.bigShoop} `
    }
}
class Maneger {
    name: string;
    lastName: string;
    tz: number;
    addres: Addres;
    sallery: number;

    constructor(name: string, lastName: string, tz: number, addres: Addres, sallery: number) {
        this.name = name;
        this.lastName = lastName;
        this.tz = tz;
        this.addres = addres;
        this.sallery = sallery;
    }
    print() {
        return `name: ${this.goods} ${this.lastName}, 
                ssn: ${this.tz}
                sallery: ${this.sallery}
                addres: ${this.addres} `
    }
}
class clint {
    name: string;
    lastName: string;
    CCK: string;
    _CCN: number;
    CCD: Date;
    CCV: number;

    get CCN() {
        return this._CCN;
    }
    set CCN(x) {
        let CCNArr = [];
        
        while (x != 0) {
            CCNArr.push(x % 10);
            x /= 10;
        }
        for (let i = 0; i < 9; i++) {
            CCNArr[i] = CCNArr[i] * i % 2 == 0 ? 1 : 2
        
        while(CCNArr[i] > 9 ){
             CCNArr[i] = CCNArr[i] % 10 + CCNArr[i] / 10
        }
       }

       const sum = CCNArr.reduce(function(sum, x) {
           return sum+= x;
     
       })
    
    }

    constructor(name: string, lastName: string, CCK: string, CCN: number, CCD: Date, CCV: number) {
        this.name = name;
        this.lastName = lastName;
        this.CCK = CCK;
        this.CCN = CCN;
        this.CCD = CCD;
        this.CCV = CCV;
    }
    print() {
        return `name: ${this.goods} ${this.lastName}, 
                    CCK: ${this.CCK}
                    CCN: ${this.CCN}
                    CCD: ${this.CCD}
                    CCV: ${this.CCV} `
    }
}
