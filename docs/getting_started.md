---
sidebar_position: 1
---

# Getting started

Before we dive deep into the libary, we are having a "really" simple example of tempalte forms. This so that you have a base to work with.

## Quick intro into template forms

:::tip

We expect that you have created and workerd with an Angular application before. If you don't have any experience we would recommend you to go to the following link and dive through the [Tour of Heroes](https://angular.io/tutorial).

:::

We start out with the creation a new component where we are going to implement our form.

```shell
npx ng generate c --standalone templateForm
```

Open up the `template-form.component.html` and remove the HTML that is in there and replace it with the following.

```html
<form validationId="sample-data" (ngSubmit)="onSubmit($any(form))">
  <label for="name">
    <span>Your name</span>
  </label>
  <input
    type="text"
    name="name"
    placeholder="Fill in your name"
    [(ngModel)]="model.name"
  />
  <input type="submit" value="Submit" [disabled]="form.invalid" />
</form>
```

Next step is to open up the `template-form.component.ts` file and import the `FormsModule`. Second step is to add a new property called `model` and assign it as show below.

```ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-template-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"],
})
export class TemplateFormComponent implements OnInit {
  model = { name: "This can be your own name" };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.error(data);
  }
}
```

The last thing we are going to do is making sure that we can see the state of a form field. Angular uses his own custom classes for this and we are going to sprinkle a little bit of CSS in our component.

Open up the `template-form.component.css` and add the following code:

```css
.ng-invalid.ng-dirty:not(form) {
  border: 2px solid red;
}
.ng-valid.ng-dirty:not(form) {
  border: 2px solid lightgreen;
}
```

If we not go to our application by running `ng serve` we will see a simple input filled in with _This can be your own name_. Removing this value will add a red border witch indicates is is **_invalid_** and adding a value to it will say that it is **_valid_**.

## Hooking up Validointi

Now that we have a basic concept of a model and a validation library we wil explain how to hookup the library to a form.
First we are going to install [Vest](https://vestjs.dev).

```bash
npm install vest
```

Now install the library

```bash
npm install @validointi/core
```

## Using the Validointi

When everything is installed we are ready to use the library in our project.
Validointi canbe used (as mentioned) with a variaty of different schema/ model validators. We are using Vest in our example and Vest leans on a test suite so let us write a test suite that we can add to the form.

### Test suite

```ts
const suite = create((data = {}) => {
  test("name", "Name is required", () => {
    enforce(data.name).isNotBlank();
  });

  test("name", "Name must be at least 3 characters long", () => {
    enforce(data.name).longerThan(2);
  });
});
```

### Adapters

To use this `suite` we need to register it to the library. We can register our validation function to our validation registery by using a adapter.
This adapter will do the heavy lifting for you to transform the test suite to a set of errors that we understand.
Registering a adapter is easy, just inject the registry and call `registerValidator` where you put in a unique key and the adpater with the test suite.

```ts
#vr = inject(ValidatorRegistryService);

validate = this.#vr.registerValidator("sample-data", createVestAdapter(suite));
```

:::tip

In case you are not using Vest you can use a custom function that can be registerd in the registry.

```ts
async function validateSampleData(data: any): Promise<ValidationErrors> {
  const errors = await customValidationsFunc(data).getErrors();
  return Object.entries(errors).reduce((acc, [key, err]) => {
    acc[key] = err;
    return acc;
  }, {} as ValidationErrors);
}
```
:::


### Final touch
Now that we have all things in place we just need to do one more step adding the `ValidatorDirective` to the module/ standalone component.

```ts
...
import { ValidatorDirective } from '@validointi/core';

    imports: [CommonModule, FormsModule, ValidatorDirective],
```

And we are done, now open up a browser and navigate to the application.
Change the default `name` value to a empty string and see the red border appear.
If we now look at the control is self we will see that it contains an error.

### Example app

<iframe height="500" style={{width: '100%'}} src="https://stackblitz.com/edit/validointi-sample?embed=1&file=src/app/template-form/template-form.component.ts">
</iframe>
