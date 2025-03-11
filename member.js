// Clase que representa a un miembro con nombre, edad y correo electrónico
class Member {
    /**
     * Constructor de la clase Member
     * @param {string} name - El nombre del miembro
     * @param {number} age - La edad del miembro
     * @param {string} email - El correo electrónico del miembro
     */
    constructor(name, age, email) {
        this.setName(name);
        this.setAge(age);
        this.setEmail(email);
    }

    // Métodos de acceso y validación

    setName(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('El nombre debe ser una cadena no vacía.');
        }
        this.name = name;
    }

    setAge(age) {
        if (typeof age !== 'number' || age <= 0) {
            throw new Error('La edad debe ser un número positivo.');
        }
        this.age = age;
    }

    setEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error('El correo electrónico no es válido.');
        }
        this.email = email;
    }

    /**
     * Método para que el miembro se presente
     */
    introduce() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }

    /**
     * Método para enviar un correo electrónico
     * @param {string} subject - El asunto del correo electrónico
     * @param {string} message - El mensaje del correo electrónico
     */
    sendEmail(subject, message) {
        if (!subject || !message) {
            throw new Error('El asunto y el mensaje son obligatorios para enviar un correo.');
        }
        console.log(`Enviando correo a ${this.email} con el asunto: "${subject}"`);
        // Aquí se colocaría el código para enviar el correo electrónico
    }
}
