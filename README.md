# Angular tutorial.

A _healthy_ amount of AI was used to make this tutorial, it was **not** fully prompted by a LLM.

## 🦹 00 - Setting it all up!

Getting started with Angular is fairly easy. First **make sure you have Node installed**. It's possible you have a CS-related background therefore you might already have it.

### 🧩 001 - Downloading Node.

- _How do i know if i have Node already installed?_
- If you're on **Linux/MacOS** open the terminal and type `man node`. If `No manual entry for node` comes up, it means you **may not** have Node installed. If you're on Linux the `man` command might not be available, try and type `node --version` (or `node -v`) and if something like `v26.0.0` shows up, then you can skip this part. Although having `man` is **not essential**, it is a neat feature that allows you, once you've practiced, to easily find what you were looking for without losing tokens on Claude.

- _If i don't have Node installed, what do i do?_
- Another easy task! Simply go to [https://nodejs.org/en/download] and proceed with the download.

### 🌶️ 002 - Downloading Angular.

Once you have node installed we need to download Angular. To do this open the terminal and type `npm install -g @angular/cli`.

- _What am i typing?_
- No panic! Let's break it down (okay, this sounds AI but i promise it's not). `npm` is the package manager for Node, it makes Node life easier by managing the modules. By typing `man npm` you can expand on it.

`npm install -g` allows you to **install a package**. The flag `-g` (or `--global`) indicates that the packages are installed into the prefix folder instead of the current working directory. By typing `npm help install` you can expand on it.

`@angular/cli` is the package in question.

Now that you have Angular, open the terminal and type `ng --version`, the version of Angular will come up. You can type `ng v` (or `ng version`) to check **both the Angular and Node.js versions**. `ng help` shows a list of possible commands with corresponding descriptions.

### 🍾 003 - Creating the folder.

If you are a real hacker and followed my earlier suggestion of typing `ng help`, you may already know what's next! Type `ng new angular-tutorial` to create a Angular workspace. Of course if you type `ng new my-angular-app` nothing important will change, just the name of the workspace.

- _Do i need to create a folder, change directory to that folder and then executing `ng new angular-tutorial`?_
- **No**, if you do this you will have nested folders; the Angular workspace will be inside the folder you've just created. Unless that's what you want (i don't judge), simply execute the command in your project directory.
  You will be asked to select the stylesheet system you would like to use (for this tutorial we will use CSS), if you want to enable Server-Side Rendering (SSR) and Static Site Generation (for this tutorial we will select `N`) or which AI tools you want Angular to integrate with (for this tutorial we **will not** use any AI tools).

### 👁️ 004 - Having a visual taste.

Once the download is done, let's run whatever we have downloaded! If you open the `angular-tutorial` (if you named it that way) a bunch of files you might be familiar with will come up, such as `index.html` or `styles.css`, they have to do something, _right_? The answer is **yes**! Now, open a terminal and type `ng serve`. Make sure your current directory is `angular-tutorial` and **not** the parent, if you execute `ng serve` while in the parent folder the following error will pop up: `This command is not available when running the Angular CLI outside a workspace.` Once the building is done, the terminal itself will tell you where to look at, that is `localhost:4200`, you can change the port by running `ng serve --port [port number]` but keep in mind that next time you execute `ng serve` you will have to consider the 4200 port again. At this point, you will see a simple landing page, and that's it for this section, well done!

## 🏗️ 01 - Messing around.

When i first started learning Angular, i didn't know where to begin, so the first thing i did was paying attention to the things i may already know, like the HTML and CSS files most of you are familiar with.

### 🦕 011 - First slow steps.

Let's start from there, go to `src/index.html` and edit the **title tag**, like so `<title>test</title>` and save the change. What you will see are two different things:

1. As soon as you save, the page automatically refreshes.
2. Some information appears in the terminal.

That information is extremely important, it will help you understand where a potential error lies.

For example, let's induce an error, go to `src/main.ts`, edit `bootstrapApplication(App, appConfig) ...` into `bootstrapApplication(App, AppConfig)` and save. The terminal will tell you everything you need to know about what went wrong, without using big words.

### 🏗️ 012 - Your first simple app.

Now let's make something of our own, go to `src/main.ts` and cancel everything, don't worry nothing will explode and no error will show in the terminal. The landing page will disappear and we will soon understand why. An important concept to grasp is that in Angular we have the so called **Angular components**, which are basically reusable pieces of the user interface. It will soon be clear what _reusable_ mean. To define an Angular component, we use `@Component` associated with a **TypeScript class**. Paste the following code into `main.ts`:

```typescript
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: "<h1>Lorem ipsum!</h1>",
})
class MyApp {}

bootstrapApplication(MyApp);
```

Let's understand what we just did.

`@Component` is **not** available in TypeScript vanilla, so we have to take it from somewhere, and that somewhere has to do something with Angular itself.

```typescript
import { Component } from "@angular/core";
```

The module `@angular/core` is the _where_.

```typescript
import { bootstrapApplication } from "@angular/platform-browser";
```

Same thing, just the module changes.

```typescript
@Component({
  selector: "app-root",
  template: "<h1>Lorem ipsum!</h1>",
})
```

This is the interesting part. The parameter of the `@Component` is an object that specifies how the component is rendered; in this case:

1. `selector:` refers to the **html tag** that is in the `index.html` file.
2. `template:` refers to an **inline html element**. Keep in mind that **only one** template is allowed, if you do the following:

```typescript
@Component({
  selector: "app-root",
  template: "<h1>Lorem ipsum!</h1>",
  template: "<h2>Lorem ipsum!</h2>",
})
```

you will have the following error:

```bash
✘ [ERROR] TS1117: An object literal cannot have multiple properties with the same name.
```

- Given that the `selector` property refers to the HTML tag that's in `index.html`, what if i change either of them?

- If they **don't match** a blank page will show up, you will **not** have any error. As long as they match, you can change their names.

```html
<body>
  <root></root>
</body>
```

```typescript
@Component({
  selector: "root",
  template: "<h1>Lorem ipsum!</h1>",
})
class MyApp {}
```

`bootstrapApplication(MyApp)` allows you to display the component. It _can_ accept more than one parameter. Try and comment it out, and let me know if you get an error or a blank page!
