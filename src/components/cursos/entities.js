export class Course {
    constructor(name, subject, courseLength, professor, frec, price, type="individual", image=undefined){
        this.name = name;
        this.subject = subject;
        this.professor = professor;
        this.image = image;
        this.type = type;
        this.frec = frec;
        this.courseLength = courseLength;
        this.price = price;
    }
}


export class User{
    constructor(firstname, lastname, mail, phone, birthdate, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
        this.phone = phone;
        this.birthdate = birthdate;
        this.password = password;
    }
}

export class Proffesor extends User{
    constructor(firstname, lastname, mail, phone, birthdate, password, contactTime, degree, experience, ){
        super(firstname, lastname, mail, phone, birthdate, password);
        this.contactTime = contactTime;
        this.degree = degree;
        this.experience = experience;
    }

    getFullName(){
        return this.firstname + " " + this.lastname;
    }
}
export class Student extends User{
    constructor(firstname, lastname, mail, phone, birthdate, password, degree, contactTime){
        super(firstname, lastname, mail, phone, birthdate, password);
        this.contactTime = contactTime;
        this.degree = degree;
    }
}

export class Contratacion{
    constructor(course, status="solicitada"){
        this.status = status;
        this.course = course;   
    }
}
