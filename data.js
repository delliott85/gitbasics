import {
    TYPE_SETUP,
    TYPE_STAGE,
    TYPE_BRANCH,
    TYPE_INSPECT,
    TYPE_SHARE,
    TYPE_REWRITE,
    TYPE_STASH
} from './src/utils/constants';

export const data = [
    // Setup
    {
        command: 'git init',
        type: TYPE_SETUP,
        description: 'Initialize an existing local directory as a Git repository'
    },
    {
        command: 'git clone [url]',
        type: TYPE_SETUP,
        description: 'Create a local copy of a remote repository (Github, Bitbucket, etc.) via URL'
    },
    // Stage
    {
        command: 'git status',
        type: TYPE_STAGE,
        description: 'Show modified files in the local, working, directory'
    },
    {
        command: 'git add [file]',
        type: TYPE_STAGE,
        description: 'Add a particular file to your next commit (stage)',
    },
    {
        command: 'git add .',
        type: TYPE_STAGE,
        description: 'Add all files to your next commit'
    },
    {
        command: 'git reset [file]',
        type: TYPE_STAGE,
        description: 'Unstage a file while retaining the changes in local directory'
    },
    {
        command: 'git reset --hard',
        type: TYPE_STAGE,
        description: 'Discard all local changes to all files.'
    },
    {
        command: 'git diff',
        type: TYPE_STAGE,
        description: 'See changes to your unstaged files'
    },
    {
        command: 'git diff --staged',
        type: TYPE_STAGE,
        description: 'See changes to staged, but uncommited, files'
    },
    {
        command: 'git commit -m “[descriptive message]”',
        type: TYPE_STAGE,
        description: 'Commit your staged content as a new commit snapshot'
    },
    // Branch & Merge
    {
        command: 'git branch',
        type: TYPE_BRANCH,
        description: 'List your branches. An asterik (*) will appear next to the active local branch'
    },
    {
        command: 'git branch [branch-name]',
        type: TYPE_BRANCH,
        description: 'Create a new branch at the current commit'
    },
    {
        command: 'git checkout [branch]',
        type: TYPE_BRANCH,
        description: 'Switch to another branch and check it out into your local, working, directory'
    },
    {
        command: 'git merge [branch]',
        type: TYPE_BRANCH,
        description: 'Merge the specified branch’s history into the current one'
    },
    // Inspect
    {
        command: 'git log',
        type: TYPE_INSPECT,
        description: 'Show the commit history for the currently active branch'
    },
    {
        command: 'git log --follow [file]',
        type: TYPE_INSPECT,
        description: 'Show the commits that changed file, even across renames'
    },
    {
        command: 'git diff [branchB]...[branchA]',
        type: TYPE_INSPECT,
        description: 'Show the diff of what is in branchA that is not in branchB'
    },
    {
        command: 'git show [SHA]',
        type: TYPE_INSPECT,
        description: 'Show any object in Git in human-readable format'
    },
    {
        command: 'git blame [file]',
        type: TYPE_INSPECT,
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
        type: TYPE_SHARE,
        description: 'See a list of all configured remote repo URLs'
    },
    {
        command: 'git remote add [alias] [url]',
        type: TYPE_SHARE,
        description: 'Add a git URL as a remote alias'
    },
    {
        command: 'git remove rm [alias]',
        type: TYPE_SHARE,
        description: 'Remove a remote alias from your project'
    },
    {
        command: 'git fetch [alias]',
        type: TYPE_SHARE,
        description: 'Fetch down all the branches from a specified remote URL'
    },
    {
        command: 'git merge [alias]/[branch]',
        type: TYPE_SHARE,
        description: 'Merge a remote branch into your current branch to bring it up to date'
    },
    {
        command: 'git push [alias] [branch]',
        type: TYPE_SHARE,
        description: 'Push local branch commits to the remote repository branch'
    },
    {
        command: 'git pull',
        type: TYPE_SHARE,
        description: 'Fetch and merge any commits from the tracking remote branch'
    },
    // Rewrite History
    {
        command: 'git rebase [branch]',
        type: TYPE_REWRITE,
        description: 'Apply any commits of current branch ahead of specified one'
    },
    {
        command: 'git reset --hard [commit]',
        type: TYPE_REWRITE,
        description: 'Clear staging area, rewrite working tree from specified commit'
    },
    // stash Commits
    {
        command: 'git stash',
        type: TYPE_STASH,
        description: 'Save modified and staged changes'
    },
    {
        command: 'git stash --include-untracked',
        type: TYPE_STASH,
        description: 'The same as a regular stash, but saving your untracked files too'
    },
    {
        command: 'git stash list',
        type: TYPE_STASH,
        description: 'List stack-order of stashed file changes'
    },
    {
        command: 'git stash apply',
        type: TYPE_STASH,
        description: 'Resume working on the stash at the top of your stash list while keeping the stash intact.'
    },
    {
        command: 'git stash pop',
        type: TYPE_STASH,
        description: 'Resume working on the stash at the top of your stash list and delete the stash.'
    },
    {
        command: 'git stash drop [stash-id]',
        type: TYPE_STASH,
        description: 'Delete a specific stash'
    },
    {
        command: 'git stash clear',
        type: TYPE_STASH,
        description: 'Delete all stashes'
    }
];
