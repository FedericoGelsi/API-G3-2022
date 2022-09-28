export class Class {
  constructor(
    name,
    subject,
    courseLength,
    professor,
    frec,
    price,
    type = "individual",
    image = undefined
  ) {
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

export class User {
  constructor(firstname, lastname, mail, phone, birthdate, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.mail = mail;
    this.phone = phone;
    this.birthdate = birthdate;
    this.password = password;
  }

  getFullName() {
    return this.firstname + " " + this.lastname;
  }
}

export class Proffesor extends User {
  constructor(
    firstname,
    lastname,
    mail,
    phone,
    birthdate,
    password,
    contactTime,
    degree,
    experience
  ) {
    super(firstname, lastname, mail, phone, birthdate, password);
    this.contactTime = contactTime;
    this.degree = degree;
    this.experience = experience;
  }
}
export class Student extends User {
  constructor(
    firstname,
    lastname,
    mail,
    phone,
    birthdate,
    password,
    degree,
    contactTime,
    requestDescription
  ) {
    super(firstname, lastname, mail, phone, birthdate, password);
    this.contactTime = contactTime;
    this.degree = degree;
    this.requestDescription = requestDescription;
  }
}

export var Status = {
    Solicitada: "solicitada",
    Aceptada: "aceptada",
    Finalizada: "finalizada",
    Cancelada: "cancelada",
  };
export class Contratacion {
  
  constructor(course, student, status = Status.Solicitada) {
    this.status = status;
    this.course = course;
    this.student = student;
  }

  setStatus(status) {
    this.status = status;
  }
}
