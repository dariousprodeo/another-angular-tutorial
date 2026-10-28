# Angular tutorial.
A *healthy* amount of AI was used to make this tutorial, it was **not** fully prompted by AI.

## 00 - Setting it all up!

Getting started with Angular is fairly easy. First **make sure you have Node installed**. It's possible you have a CS-related background therefore you might already have it.

### 001 - Downloading Node.
- *How do i know if i have Node already installed?*
- If you're on **Linux/MacOS** open the terminal and type `man node`. If `No manual entry for node` comes up, it means you **may not** have Node installed. If you're on Linux the `man` command might not be available, try and type `node --version` (or `node -v`) and if something like `v26.0.0` shows then you can skip this part. Although having `man` is **not essential** it is a neat feature that allows you, once you've practiced, to easily find what you were looking for without losing tokens on Claude.
- 
- *If i don't have Node installed, what do i do?*
- Another easy task! Simply go to (https://nodejs.org/en/download)[https://nodejs.org/en/download] and proceed with the download.

### 002 - Downloading Angular.
Once you have node installed we need to download Angular. To do this open the terminal and type `npm install -g @angular/cli`.
- *What am i typing?*
- No panic! Let's break it down (okay, this sounds AI but i promise it's not). `npm` is the package manager for Node, it makes Node life easier by managing the modules. By typing `man npm` you can expand on it.

`npm install -g` allows you to **install a package**. The flag `-g` (or `--global`) indicates that the packages are installed into the prefix folder instead of the current working directory. By typing `npm help install` you can expand on it.

`@angular/cli` is the package in question.
