# Basic Git Flow
## 1. Workflow
Local repository consists of `three` "trees" maintained by git.
    
    1. Working Directory: holds the actual files.
    2. Index: Staging area.
    3. HEAD: points to the last commit you've made.
    
## 2. Command
**Create new repository**

    git init

**Copy of a local repository**

Create a new folder that have a same name as repo' name

    git clone /path/to/repository

**Manage branches**

Create a local branch
    
        git branch branch_name
Switch  branch

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

After adding, use `Commit` to  permanently store the contents of the index in the `Local Respository`:

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

**Pushing changes**

Send changes to your  `remote repository`

        git push origin branch_name

**Update & Merge**

Update your `local repository` to the newest commit

        git pull

The "pull" command thus performs two operations: it `fetches` changes from a remote branch, then `merges` them into the current branch if there was no conflict.


