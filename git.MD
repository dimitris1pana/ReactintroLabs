# How to Create a GitHub Account, Connect It to VS Code, and Start Uploading Your Work


## ✅ 1. Create a GitHub Account

1. Go to [https://github.com/](https://github.com/)
2. Click **Sign Up**
3. Enter:
   - Email
   - Username
   - Password
4. Verify your email
5. Log into GitHub

---

## ✅ 2. Install Git on Your Computer

Git is required for VS Code to communicate with GitHub.

### Windows
- Download Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Install with default options

### macOS
- Open Terminal → run:
```bash
git --version
```
If Git is not installed, macOS will prompt you to install it automatically.

### Linux
```bash
sudo apt install git
```

---

## ✅ 3. Install Visual Studio Code

Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)

Install it normally.

---

## ✅ 4. Log in to GitHub from VS Code

1. Open **VS Code**
2. Go to **Extensions** (left sidebar)
3. Search for: **GitHub Pull Requests and Issues**
   → Install it
4. After installation, at the bottom-left click **"Sign in to GitHub"**
5. A browser window will open → authorize VS Code

You are now connected.

---

## ✅ 5. Create a New Repository on GitHub

1. On GitHub, click **New Repository**
2. Give it a name  
   Example: `hci-assignment-1`
3. Choose **Public** or **Private**
4. Add README (optional)
5. Click **Create Repository**

---

## ✅ 6. Clone Your Repository to Your Computer

1. Copy the repository URL:
   - Go to your repo → **Code** → **HTTPS** → Copy URL
2. Open **VS Code**
3. Press `Ctrl + Shift + P` (or `Command + Shift + P` on macOS)
4. Write **Git: Clone** → Enter
5. Paste the URL
6. Choose a local folder where your project will be stored

Your project is now on your machine.

---

## ✅ 7. Add Files to Your Repository (via VS Code)

1. Add your HTML/CSS/JS/React files normally inside the folder
2. On the left sidebar, click the **Source Control** icon
3. You will see your changed files

---

## ✅ 8. Commit Your Code

1. In Source Control, write a short message:  
   Example: `initial commit`
2. Click **Commit**

---

## ✅ 9. Push Changes to GitHub

After committing:

1. Click **Sync Changes** or **Push**  
   (VS Code will ask to publish the branch the first time)
2. Enter GitHub login/token if asked

Your code is now uploaded to GitHub.

---

## ✅ 10. Updating Your Work Later

Whenever you make changes:

1. Save files
2. In VS Code → **Source Control**:
   - Stage or commit all changes
   - Click **Push**

This will upload your latest version to GitHub.

---

## ⭐ Optional: Using GitHub Desktop (Beginner Friendly)

If VS Code feels difficult, students can also use:

👉 [https://desktop.github.com/](https://desktop.github.com/)

It provides a simple GUI for clone → commit → push.

---

# 📚 Understanding Git Basics

## What is Git?

**Git** is a version control system that tracks changes in your files. Think of it as a "save game" system for your code — you can go back to any previous version.

## What is GitHub?

**GitHub** is a cloud platform that hosts your Git repositories online. It allows you to:
- Back up your code
- Collaborate with others
- Share your projects

## Key Concepts

### Repository (Repo)
A folder tracked by Git. Contains all your project files and their history.

### Commit
A snapshot of your project at a specific point in time. Like saving your game.

### Push
Uploading your local commits to GitHub (or another remote server).

### Pull
Downloading the latest changes from GitHub to your local machine.

### Branch
A separate version of your code. Useful for trying new features without breaking the main code.

### Clone
Making a copy of a repository from GitHub to your computer.

---

# 💻 Essential Git Commands

Below are the most common Git commands you'll use. You can run these in:
- **VS Code's integrated terminal** (View → Terminal)
- **Command Prompt / Terminal / PowerShell**

---

## 🔧 Setup Commands (One-Time)

### Configure your name and email
Git uses this info for every commit you make.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Check your configuration
```bash
git config --list
```

---

## 📂 Starting a Project

### Clone an existing repository
```bash
git clone https://github.com/username/repository-name.git
```

### Initialize a new Git repository in current folder
```bash
git init
```

---

## 📝 Basic Workflow Commands

### Check the status of your files
See which files are modified, staged, or untracked.
```bash
git status
```

### Add files to staging area
Prepare files to be committed.

Add a specific file:
```bash
git add filename.html
```

Add all changed files:
```bash
git add .
```

### Commit your changes
Save a snapshot with a message.
```bash
git commit -m "Your commit message here"
```

Example:
```bash
git commit -m "Added homepage layout"
```

### Push commits to GitHub
Upload your commits to the remote repository.
```bash
git push
```

First time pushing a branch:
```bash
git push -u origin main
```

### Pull latest changes from GitHub
Download and merge changes from GitHub.
```bash
git pull
```

---

## 🌿 Working with Branches

### See all branches
```bash
git branch
```

### Create a new branch
```bash
git branch feature-name
```

### Switch to a branch
```bash
git checkout feature-name
```

### Create and switch to a new branch (shortcut)
```bash
git checkout -b feature-name
```

### Merge a branch into current branch
```bash
git merge feature-name
```

### Delete a branch
```bash
git branch -d feature-name
```

---

## 🕰️ Viewing History

### View commit history
```bash
git log
```

### View compact history
```bash
git log --oneline
```

### View changes in a file
```bash
git diff filename.html
```

---

## 🔄 Undoing Changes

### Discard changes in a file (not staged)
```bash
git checkout -- filename.html
```

### Unstage a file (keep changes)
```bash
git reset filename.html
```

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo last commit (discard changes) ⚠️
```bash
git reset --hard HEAD~1
```

---

## 🔗 Working with Remote Repositories

### View remote connections
```bash
git remote -v
```

### Add a remote repository
```bash
git remote add origin https://github.com/username/repo.git
```

### Change remote URL
```bash
git remote set-url origin https://github.com/username/new-repo.git
```

---

## 📖 Typical Git Workflow Example

Here's a common workflow you'll use:

```bash
# 1. Check current status
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Implemented navigation menu"

# 4. Push to GitHub
git push

# 5. Pull latest changes (if working with others)
git pull
```

---

## 🆘 Common Issues and Solutions

### Problem: "fatal: not a git repository"
**Solution:** You're not inside a Git repository folder. Run `git init` or `cd` into your project folder.

### Problem: "Your branch is ahead of 'origin/main' by X commits"
**Solution:** You have local commits not pushed yet. Run `git push`.

### Problem: "Your branch is behind 'origin/main' by X commits"
**Solution:** Someone else pushed changes. Run `git pull` to get them.

### Problem: Merge conflicts
**Solution:** 
1. Open the conflicted files
2. Look for conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`
3. Edit the file to keep the correct code
4. Remove conflict markers
5. Run `git add .` then `git commit`

---

## 📝 Commit Message Best Practices

Good commit messages help you and others understand what changed:

✅ **Good:**
```bash
git commit -m "Added user authentication form"
git commit -m "Fixed navigation menu on mobile"
git commit -m "Updated README with installation steps"
```

❌ **Bad:**
```bash
git commit -m "stuff"
git commit -m "changes"
git commit -m "idk"
```

---

## 🎓 Tips

1. **Commit often:** Don't wait until the end. Commit after completing small tasks.
2. **Write clear messages:** Describe what you did, not what you'll do.
3. **Push regularly:** Don't lose your work if your computer crashes.
4. **Use branches for experiments:** Keep your main branch stable.
5. **Check status frequently:** `git status` is your friend.

---

## 📚 Additional Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
