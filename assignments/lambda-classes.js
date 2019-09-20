// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name,
        this.age = att.age,
        this.location = att.location;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(att){
        super(att)
        this.specialty = att.specialty,
        this.favLanguage = att.favLanguage,
        this.catchPhrase = att.catchPhrase;
    }
    demo(subject){
        return `Today we are going to learn about ${subject}`
    }//this ends the demo
    score(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`
    }//this end the grade
    gradePoints(student, min, max){
        let studentGrade = Math.floor(Math.random() * (max-min + 1)) + min 
        let variable = Math.random()
        if (variable < .5){
            studentGrade *= -1
        } 
        if (studentGrade < 0){
           return `${student.name}'s grade is ${student.grade += studentGrade * -1}`
        } else {
        return `${student.name}'s grade is ${student.grade += studentGrade}`}
    }//this ends gradePoints

}

class Student extends Person{
    constructor(att){
        super(att)
        this.previousBackground = att.previousBackground,
        this.className = att.className,
        this.favSubjects = att.favSubjects,
        this.grade = att.grade;
    }
    graduate(){
        if(this.grade >= 70){
            return `CONGRATULATIONS ${this.name}! You have graduated!`
        }else {
            return `Sorry, ${this.name} you'll get it next time.`
        }
    }//this is the end of graduate

    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`
    }//this is the end of PRAssignment
    sprintChallenge(subject){
        return `${this.name} has begun their sprint challenge on ${subject}`
    }//this is the end of sprintchallenge
    listsSubjects(){
        return `${this.favSubjects.forEach(function(item){
            console.log(item)})}`
    }//this is the end of listsSubjects
}

class ProjectManager extends Instructor{
    constructor(att){
        super(att)
        this.gradClassName = att.gradClassName,
        this.favInstructor = att.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }// this ends standUp
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }//this is the end of debugsCode
}

const luis = new Student({
    name: 'Luis',
    age: 27,
    location: 'Denver, CO',
    previousBackground: 'Delivery Driver',
    className: 'Web24',
    favSubjects: ['HTML','CSS', 'JavaScript',],
    grade: 0
})


const don = new ProjectManager({
    name:"Don",
    age:33,
    location:"East Coast", 
    specialty:"React",
    favLanguage:"Python",
    catchPhrase:"Let me just wave my hand so this works",
    gradClassName: "Web??",
    favInstructor: "Brit"
})
console.log(don.name);
console.log(don.age);
console.log(don.location);
console.log(don.specialty);
console.log(don.favLanguage);
console.log(don.catchPhrase);
console.log(don.gradClassName);
console.log(don.favInstructor);
console.log(don.standUp("Web24"));
console.log(don.debugsCode(luis, "javascript"))



const brit = new Instructor({
    name:"Brit",
    age:30,
    location:"Canada", 
    specialty:"Web Development",
    favLanguage:"javascript",
    catchPhrase:"I'm just gonna pop this into Slack"
})

console.log(brit.name);
console.log(brit.age);
console.log(brit.location);
console.log(brit.specialty);
console.log(brit.favLanguage);
console.log(brit.catchPhrase);
console.log(brit.demo("LESS"));
console.log(brit.score(luis, "Javascript"));
console.log(brit.gradePoints(luis, 1, 100))



console.log(luis.name);
console.log(luis.age);
console.log(luis.location);
console.log(luis.previousBackground);
console.log(luis.className);
luis.listsSubjects();
console.log(luis.sprintChallenge("javacript"))
console.log(luis.PRAssignment("JavaScript-IV"))
console.log(luis.graduate())
// Stretch Problem
// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.

// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.

// Add a graduate method to a student.\

// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School

// If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

