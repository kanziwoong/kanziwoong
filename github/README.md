# Git

## Command Line

1. Commit

    ```
    // If multiple -m options are given, their values are concatenated as separate paragraphs.
    $ cd $GitRepoDIR
    $ git commit -m "COMMIT_MESSAGE"
    ```

1. Push

    ```
    $ cd $GitRepoDIR
    $ git remote add origin https://github.com/kanziwoong/NEW_REPOSITORY_NAME.git
    $ git push -u origin master
    ```

1. Pull

    ```
    $ cd $GitRepoDIR
    $ git pull
    ```

1. Create a new repository on the command line

    ```
    $ cd $GitRepoDIR
    $ echo # NEW_REPOSITORY_NAME >> README.md
    $ git init
    $ git add README.md
    $ git commit -m "first commit"
    $ git remote add origin https://github.com/kanziwoong/NEW_REPOSITORY_NAME.git
    $ git push -u origin master
    ```


