// method in object

const student = {
    name:'Kodom Ali',
    money:5000,
    study:'Math',
    subjects:['calculus','Algebra','Geometry'],
    exam:function() {
        return this.name + "is participating an exam";
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
const output = student.exam();
const improveExam = student.improveExam('Algebra');
const afterTreat = student.treatDey(900,100);
console.log(afterTreat);
console.log(output);
console.log(improveExam);
const dolaRemaining = student.treatDey(500,50);
console.log(dolaRemaining);
