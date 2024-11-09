Type in typescript is like a Lego box label. In the box, the label shows that it's a car or a boat. A car will have its pieces and a boat will have its pieces. Same in typescript, a variable can have a type and it's property. For example, a car variable and its property are,
type Car = {
	wheels: number;
	doors: number;
	model: string;
}

Union: Union types are like choosing one option from two or more. For instance, a kid wants to play but the kid can only play with either car or boat Lego box. Not both. 
const play = Car | Boat;

Intersection: Intersection types are like choosing both options. Like the previous example, a kid wants to play and he can play with both now. So, kids will take both Lego boxes and maybe make something with both Lego pieces.
const play = Car & Boat;

In typescript, Union and Intersection types give flexibility. Developers can check types by it and fulfill different conditions. It makes better error handling, as developers will know which property they can use at the time of the initialization, which will save a lot of time. It keeps the code clean.
A few usage examples:
In a database, the admin and user have some common properties, such as name, id, etc, also admin has more properties depending on the role. A union type can check and find out if the requester is an admin or user by their respective properties and provide them with appropriate access.
On an e-commerce site, there are two types of reward memberships, one is regular and one is special. But the customer has to be a regular member to be a special one as well. So, using intersection type, developers can check whether the requester is a regular member or not, if yes, then it will check for special member properties. This will reduce the runtime and error handling better.