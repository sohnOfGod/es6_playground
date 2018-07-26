/*
import elementToBody from './add_to_dom';
import $ from 'jquery';

elementToBody('h1', 'Something Different');

elementToBody('p', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

$('body').append('<h1>i came from jquery</h1>');

*/

import {Person, SuperPerson} from "./person";

'./person';

const bob = new Person('bob');

console.log(bob.speak('hello'));

const superSarah = new SuperPerson('Sarah', 'ice-cream vision');

superSarah.speak('hi I am Sarah?');

superSarah.saySuperPower();



