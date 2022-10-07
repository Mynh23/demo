# Basic Git Flow

## 1. Workflow

Local repository consists of `three` "trees" maintained by git.

    1. Working Directory: holds the actual files.
    2. Index: Staging area.
    3. HEAD: points to the last commit you've made.

## 2. Basic Git

**Create new repository**

    git init

**Copy of a local repository**

Create a new folder that have a same name as repo' name

    git clone /path/to/repository

**Manage branches**

Create a local branch

        git branch branch_name

Switch branch

        git checkout branch_name

Switch and create a local branch

        git checkout -b branch_name

List all remote or local branches

        git branch -a

Delete branch

         git branch -d branch_name

**Pushing changes**

Take a snapshot of the contents of files under the current directory and stored in a `Staging area` which Git calls the "index" .

    Push all files:  git add .
    Push file_name:  git add file_name

After adding, use `Commit` to permanently store the contents of the index in the `Local Respository`:

    git commit -m "Message"

**Viewing Project History**

View the history of your changes

    git log

See only the commits of a certain author

    git log --author=author_name

See only which files have changed

    git log --name-status

Show any changes that have made but not yet added to the `staging area`

    git diff

**Pushing changes to remote repository**

Send changes to your `remote repository`

        git push origin branch_name

**Update & Merge**

Update your `local repository` to the newest commit

        git pull

The "pull" command thus performs two operations: it `fetches` changes from a remote branch, then `merges` them into the current branch if there was no conflict.

# How to use git stash, git reset, git cherry pick

## 1. Git stash

The git stash command takes your uncommitted changes, saves them away for later use, and then reverts them from your working copy.

    git stash

**Listing your stashes**

Stashes are saved in a last-in-first-out (LIFO) approach:

    git stash list

Show detail of stash

    // Show detail of most recent stash
        git stash show
    // Show detail of stash by index
        git stash show stash@{index}

**Save stash with description**

    git stash save <description>

**Retrieving stashed changes**

Both `git stash apply` and `git stash pop `commands reapply the changes stashed in the latest stash.

    git stash apply

`Git stash apply` will take the changes you have stored in a stash and apply them to the working directory of your currently checked out branch and will also `keep the stash intact`.

    git stash pop

`Git stash pop` will also apply your stashed changes to the working directory of your currently checked out branch but will `delete the stash after the changes have been applied`.

**Cleaning up the stash**

    // Emptie the stash list by removing all the stashes.
        git stash clear
    // Delete a particular stash from the stash list.
        git stash drop <stash_id>

**Checking out to a new branch**

Usage: The changes in a branch and your stash diverge, causing a conflict when you attempt to reapply the stash.
A clean fix for this is to use the command

    git stash branch <new_branch_name stash_id>
Create a new branch based on the commit the stash was created from and pops the stashed changes to it

## 2. Git reset
Reset current HEAD to the specified state.

    git reset 
## 3. Git cherry pick
The cherry pick command takes changes from a target commit and places them on the HEAD of the currently checked out branch

    git log
    git checkout branch_name
    git cherry-pick <commit>
    
What’s the difference between `cherry picking` and `merging` in Git?