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


## Adapters

Adapters are simple functions that do some heavy lifting for you with one of the above mentioned validation libraries. A adapter can be used when registering the validation set.
This will look something like

```ts
validate = this.#vr.registerValidator("sample-data", createSomeLibAdapter(suite));
```

:::caution

At this moment we **ONLY** support a *Vest* Adapter [`createVestAdapter`][vest adapter] and a *Joi* Adapter [`createJoiAdapter`][joi adapter]

:::



[vest adapter]: https://github.com/validointi/validointi/blob/1c9a1897b741bd079a7c17bb8af058bcb3edcaf7/projects/validointi/core/src/lib/vestAdapter.ts#L7
[joi adapter]: https://github.com/validointi/validointi/blob/1c9a1897b741bd079a7c17bb8af058bcb3edcaf7/projects/validointi/core/src/lib/joiAdapter.ts#L7
