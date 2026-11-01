# Angular tutorial.

A _healthy_ amount of AI was used to make this tutorial, it was **not** fully prompted by a LLM.

## 🦹 00 - Setting it all up!

Getting started with Angular is fairly easy. First **make sure you have Node installed**. It's possible you have a CS-related background therefore you might already have it.

### 🧩 001 - Downloading Node.

❓ _How do i know if i have Node already installed?_

If you're on **Linux/MacOS** open the terminal and type `man node`. If `No manual entry for node` comes up, it means you **may not** have Node installed. If you're on Linux the `man` command might not be available, try and type `node --version` (or `node -v`) and if something like `v26.0.0` shows up, then you can skip this part.

Although having `man` is **not essential**, it is a neat feature that allows you, once you've practiced, to easily find what you were looking for without losing tokens on Claude.

❓ _If i don't have Node installed, what do i do?_

Another easy task! Simply go to [https://nodejs.org/en/download] and proceed with the download.

### 🌶️ 002 - Downloading Angular.

Once you have node installed we need to download Angular. To do this open the terminal and type `npm install -g @angular/cli`.

❓ _What am i typing?_

No panic! Let's break it down (okay, this sounds AI but i promise it's not). `npm` is the package manager for Node, it makes Node life easier by managing the modules. By typing `man npm` you can expand on it.

`npm install -g` allows you to **install a package**. The flag `-g` (or `--global`) indicates that the packages are installed into the prefix folder instead of the current working directory. By typing `npm help install` you can expand on it.

`@angular/cli` is the package in question.

Now that you have Angular, open the terminal and type `ng --version`, the version of Angular will come up. You can type `ng v` (or `ng version`) to check **both the Angular and Node.js versions**. `ng help` shows a list of possible commands with corresponding descriptions.

### 🍾 003 - Creating the folder.

If you are a real hacker and followed my earlier suggestion of typing `ng help`, you may already know what's next! Type `ng new angular-tutorial` to create a Angular workspace. Of course if you type `ng new my-angular-app` nothing important will change, just the name of the workspace.

❓ _Do i need to create a folder, change directory to that folder and then executing `ng new angular-tutorial`?_

**No**, if you do this you will have nested folders; the Angular workspace will be inside the folder you've just created. Unless that's what you want (i don't judge), simply execute the command in your project directory.

You will be asked to select the stylesheet system you would like to use (for this tutorial we will use CSS), if you want to enable Server-Side Rendering (SSR) and Static Site Generation (for this tutorial we will select `N`) or which AI tools you want Angular to integrate with (for this tutorial we **will not** use any AI tools).

### 👁️ 004 - Having a visual taste.

Once the download is done, let's run whatever we have downloaded! If you open the `angular-tutorial` (if you named it that way) a bunch of files you might be familiar with will come up, such as `index.html` or `styles.css`, they have to do something, _right_? The answer is **yes**!

Now, open a terminal and type `ng serve`. Make sure your current directory is `angular-tutorial` and **not** the parent, if you execute `ng serve` while in the parent folder the following error will pop up:

```bash
This command is not available when running the Angular CLI outside a workspace.
```

Once the building is done, the terminal itself will tell you where to look at, that is `localhost:4200`, you can change the port by running

```bash
✘ [ERROR] Could not resolve "./angular-tutorial/src/main.ts"
```

❓ How come it still says `main.ts` if i renamed it to `test.ts`?

Because Angular is configured in a way that certain file names will be used for specific reasons, in this case `main.ts`. Now, interrupt the execution from the terminal and from your editor, go to the file `/angular.json`.

This is the file responsable for the error. Pay attention to the following part of the file:

```json
...
"options": {
  "browser": "src/main.ts",
  "tsConfig": "tsconfig.app.json",
  ...
}
```

if you edit it in the following way:

```json
...
"options": {
  "browser": "src/test.ts", // <--- This changed!
  "tsConfig": "tsconfig.app.json",
  ...
}
```

and re-execute `ng serve` (while keeping `test.ts` instead of `main.ts`), the error won't show up again!

### 🏗️ 013 - Your second simple app.

Now that we are somewhat familiar with Angular, let's spice things up and get a glance of Angular potential! Don't worry, no big code ahead... for now.

```typescript
// main.ts
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "root",
  template: "<h1>Hi, my name is {{name}} {{lastName}}</h1>",
  styleUrl: "styles.css",
})
class MyApp {
  name = "John";
  lastName = "Doe";
}

bootstrapApplication(MyApp);
```

We should be familiar with this code, expect for the following:

1. `styleUrl`: pretty straightforward, it refers to the **relative path** of the css file. In this case, `styles.css` shares the same directory as the `main.ts` file. In the next diver section we expand on this.

2. `template: "<h1>Hi, my name is {{name}} {{lastName}}</h1>",`: in general, it is still an inline element _but_ the nested curly braces
   refer to the _dynamic text_, this text is taken from the typescript class.

### 🤿 - _Diver section_

❓ _So if i want to import a stylesheet file from another directory, i just have to change the `styleUrl` with its relative path?_

Unfortunately it's not like that! What will happen is that, if you have the following:

```typescript
// main.ts
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "root",
  template: "<h1>Hi, my name is {{name}} {{lastName}}</h1>",
  styleUrl: "./styleDirectory/mystyle.css",
})
class MyApp {
  name = "John";
  lastName = "Doe";
}

bootstrapApplication(MyApp);
```

**both** `mystyle.css` and `styles.css` will be considered. As you might have guessed, `angular.json` is responsable for this. Open it and you will find this section:

```json
// angular.json
...
"styles": ["src/styles.css"]
...
```
