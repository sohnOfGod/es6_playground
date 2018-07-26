import $ from 'jquery';

export class Person {
    constructor(name){
        this.name = name;
    }

    speak(text){
        return `${this.name} Says: ${text}`;

    }
}

export class SuperPerson extends Person {
    constructor(name, superpower){
        super(name);
        this.superpower = superpower;
    }

    speak(text){
        $('body').append(`<h1>${super.speak(text)}</h1>`)
    }
    saySuperPower(text){
        this.speak(`My super power is ${this.superpower}`);
    }

}


