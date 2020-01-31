export const data = [
    // Setup
    {
        command: 'git config --global user.name “[firstname lastname]”',
        type: 'setup',
        description: 'Set some identifying credentials for when reviewing version history'
    },
    {
        command: 'git config --global user.email “[valid-email]”',
        type: 'setup',
        description: 'Set an email address that will be associated with each history marker'
    },
    {
        command: 'git init',
        type: 'setup',
        description: 'Initialize an existing local directory as a Git repository'
    },
    {
        command: 'git clone [url]',
        type: 'setup',
        description: 'Retrieve an entire repository from a hosted location (Github, Bitbucket, etc.) via URL'
    },
    // Stage
    {
        command: 'git status',
        type: 'stage',
        description: 'Show modified files in the local, working, directory.'
    },
    {
        command: 'git add [file]',
        type: 'stage',
        description: 'Add a file to your next commit (stage)',
    },
    {
        command: 'git reset [file]',
        type: 'stage',
        description: 'Unstage a file while retaining the changes in local directory'
    },
    {
        command: 'git diff',
        type: 'stage',
        description: 'See changes to your unstaged files'
    },
    {
        command: 'git diff --staged',
        type: 'stage',
        description: 'See changes to staged, but uncommited, files'
    },
    {
        command: 'git commit -m “[descriptive message]”',
        type: 'stage',
        description: 'Commit your staged content as a new commit snapshot'
    },
    // Branch & Merge
    {
        command: 'git branch',
        type: 'branch',
        description: 'List your branches. An asterik (*) will appear next to the active local branch'
    },
    {
        command: 'git branch [branch-name]',
        type: 'branch',
        description: 'Create a new branch at the current commit'
    },
    {
        command: 'git checkout',
        type: 'branch',
        description: 'Switch to another branch and check it out into your local, working, directory'
    },
    {
        command: 'git merge [branch]',
        type: 'branch',
        description: 'Merge the specified branch’s history into the current one'
    },
    // Inspect
    {
        command: 'git log',
        type: 'inspect',
        description: 'Show the commit history for the currently active branch'
    },
    {
        command: 'git log --follow [file]',
        type: 'inspect',
        description: 'Show the commits that changed file, even across renames'
    },
    {
        command: 'git diff [branchB]...[branchA]',
        type: 'inspect',
        description: 'Show the diff of what is in branchA that is not in branchB'
    },
    {
        command: 'git show [SHA]',
        type: 'inspect',
        description: 'Show any object in Git in human-readable format'
    },
    {
        command: 'git blame [file]',
        type: 'inspect',
        description: 'See who changed what and when they did it in a particular file'
    },
    // Tracking
    {
        command: 'git rm [file]',
        type: 'tracking',
        description: 'Delete the file from your project and stage the removal for commit'
    },
    {
        command: 'git mv [existing-path] [new-path]',
        type: 'tracking',
        description: 'Change an existing file path and stage the move'
    },
    {
        command: 'git log --stat -M',
        type: 'tracking',
        description: 'Show all commit logs with indicators of any paths that have moved'
    },
    // Share & Update
    {
        command: 'git remote -v',
        type: 'share',
        description: 'See a list of all configured remote repo URLs'
    },
    {
        command: 'git remote add [alias] [url]',
        type: 'share',
        description: 'Add a git URL as a remote alias'
    },
    {
        command: 'git remove rm [alias]',
        type: 'share',
        description: 'Remove a remote alias from your project'
    },
    {
        command: 'git fetch [alias]',
        type: 'share',
        description: 'Fetch down all the branches from a specified remote URL'
    },
    {
        command: 'git merge [alias]/[branch]',
        type: 'share',
        description: 'Merge a remote branch into your current branch to bring it up to date'
    },
    {
        command: 'git push [alias] [branch]',
        type: 'share',
        description: 'Push local branch commits to the remote repository branch'
    },
    {
        command: 'git pull',
        type: 'share',
        description: 'Fetch and merge any commits from the tracking remote branch'
    },
    // Rewrite History
    {
        command: 'git rebase [branch]',
        type: 'rewrite',
        description: 'Apply any commits of current branch ahead of specified one'
    },
    {
        command: 'git reset --hard [commit]',
        type: 'rewrite',
        description: 'Clear staging area, rewrite working tree from specified commit'
    },
    // Temporary Commits
    {
        command: 'git stash',
        type: 'temporary',
        description: 'Save modified and staged changes'
    },
    {
        command: 'git stash --include-untracked',
        type: 'temporary',
        description: 'The same as a regular stash, but saving your untracked files too'
    },
    {
        command: 'git stash list',
        type: 'temporary',
        description: 'List stack-order of stashed file changes'
    },
    {
        command: 'git stash pop',
        type: 'temporary',
        description: 'Resume working on the stash at the top of your stash list.'
    },
    {
        command: 'git stash drop [stash-id]',
        type: 'temporary',
        description: 'Delete a particular stash'
    },
    {
        command: 'git stash clear',
        type: 'temporary',
        description: 'Delete all stashes'
    }
];
