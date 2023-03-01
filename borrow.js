const kodomAli = {
    name:'Kodom Ali',
    money:5000,
    study:'Math',
    subjects:['calculus','Algebra','Geometry'],
    exam:function() {
        return this.name + " is participating an exam";
    },
    improveExam : function(subject) {
        this.exam();
        return `${this.name} is taking improvement Exam on ${subject}`;
    },
    treatDey:function(amount,tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();
const badamAli = {
    name:'kacha badam',
    money:8000
}
const result2 = kodomAli.exam.call(badamAli);
const badamMoney = kodomAli.treatDey.call(badamAli,400,40);
// const treatDeyMia = kodomAli.treatDey.call()
console.log(result2);
 console.log(badamMoney);
// console.log(result);
const badamMoney2=kodomAli.treatDey.apply(badamAli,[1000,10]);
console.log(badamMoney2);
const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(100,100);
console.log(remaining);
