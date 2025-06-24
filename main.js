class Maktab {
    constructor(nomi, joylashuv, oquvchilar, tashkilYili) {
        this.nomi = nomi;
        this.joylashuv = joylashuv;
        this.oquvchilar = oquvchilar;
        this.tashkilYili = tashkilYili;
    }

    info() {
        return `${this.nomi} maktabi ${this.joylashuv}da joylashgan. ${this.tashkilYili}-yilda ochilgan. O'quvchilar soni: ${this.oquvchilar}.`;
    }
}

class Universitet extends Maktab {
    constructor(nomi, joylashuv, oquvchilar, tashkilYili, fakultetlar, reyting) {
        super(nomi, joylashuv, oquvchilar, tashkilYili);
        this.fakultetlar = fakultetlar;
        this.reyting = reyting;
    }

    batafsilInfo() {
        return `${this.info()} Fakultetlar soni: ${this.fakultetlar}. Reyting: ${this.reyting}.`;
    }
}


const uni = new Universitet("TATU", "Toshkent", 12000, 1955, 8, "Top 1000");

console.log(uni.batafsilInfo());
