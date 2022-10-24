---
sidebar_position: 2
title: Core concepts
description: Understand the core concepts of  validointi.
---

# Core Concept

The core concept of Validointi is that you use a model, a validation library by your choice and **one** directive that will make your template form have super powers.

## Model

A model contains information and it shouldn't have any behavior. This model contains the information that we will use in our form. Below an example off a simple model that represants a simple form.

```typescript
{
    name: 'Your name',
    email: 'info@example.org',
    password: 'a-p-a-s-s-w-o-r-d'
    confirmPassword: 'a-p-a-s-s-w-o-r-d'
}
```

## Validation library

When using Angular we have a set off default validators like: `required`, `min`, `max`. These are HTML5 validations hooked up to Angular, Angular uses several directives to support these validations in template driven forms.
When a form is getting **more** complex we need custom "validation", here it is where validation librarys come in. Validation library have a purpose, make validation easy! There is a brought set of validation / schema validator libraries, below a set of libraries that could be intressting, in our documentation we always will look at [Vest](https://vestjs.dev).

- [Vest](https://vestjs.dev)
- [Joi](https://joi.dev)
- [Ajv](https://ajv.js.org)

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

To use this `suite` we need to register it to the library. This will go into two steps.

Step one, make a generic function that is called by the library when validation is needed. This function has the purpose to call the model validation and map the errors to `Promise<ValidationErrors>`

### Validation function

```ts
async function validateSampleData(data: any): Promise<ValidationErrors> {
  const errors = await suite(data).getErrors();
  return Object.entries(errors).reduce((acc, [key, err]) => {
    acc[key] = err;
    return acc;
  }, {} as ValidationErrors);
}
```

We can now safely register our validation function to our validation registery.
The validation registry is a place where N validation functions live ready to validate a specific set of data.
Registering a validation function is easy, just inject the registry and call `registerValidator` where you put in a unique key and the validation function.

```ts
#vr = inject(ValidatorRegistryService);

validate = this.#vr.registerValidator("sample-data", validateSampleData);
```

Add the `ValidatorDirective` to the module/ standalone component.

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
