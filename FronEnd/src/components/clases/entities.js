export class Class {
  constructor(
    id,
    name,
    subject,
    courseLength,
    professor,
    frec,
    price,
    type = "individual",
    image = undefined,
    description = "Sin descripcion"
  ) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.professor = professor;
    this.image = image;
    this.type = type;
    this.frec = frec;
    this.courseLength = courseLength;
    this.price = price;
    this.description = description;
  }
}

export function createClassFromDto(classDto, professor) {
  return new Class(
    classDto.id,
    classDto.name,
    classDto.subject,
    professor,
    classDto.image,
    classDto.type,
    classDto.frec,
    classDto.courseLength,
    classDto.price,
    classDto.description
  );
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

class Experience {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}
export class Professor extends User {
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
  constructor(clase, student, status = Status.Solicitada) {
    this.status = status;
    this.clase = clase;
    this.student = student;
  }

  setStatus(status) {
    this.status = status;
  }
}



export function createProfesorFromDto(proffesorDto) {
  return new Professor(
    proffesorDto.firstname,
    proffesorDto.lastname,
    proffesorDto.mail,
    proffesorDto.phone,
    proffesorDto.birthdate,
    proffesorDto.password,
    proffesorDto.contactTime,
    proffesorDto.degree,
    proffesorDto.experience.map(
      (exp) => new Experience(exp.title, exp.description)
    )
  );
}