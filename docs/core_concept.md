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

## Hookup the lib

Now that we have a basic concept of a model and a validation library we wil explain how to hookup the library to a form.
First we are going to install [Vest](https://vestjs.dev).

```bash
npm install vest
```

Now install the library
```bash
npm install @validointi/core
```