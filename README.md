# cloud-archiver

Cloud archiver helps you to backup data from different cloud services. This plugin makes it possible to run multiple commands at once which is helpfull if you want to run your backups using a scheduler like cron or systemd-timers.

## setup

Install the plugin into your cloud archiver configuration directory.

```shell
$ npm install --save @cloud-archiver/tasks
```

Edit your configuration to load the plugin and define your tasks.

```javascript
plugins: [
// ...
  require('@cloud-archiver/tasks')
// ...
]

tasks: {
  daily: [
    'spotify:playlists some_user',
    'spotity:playlists some_other_user'
  ]
}
```
All commands are interpreted as cloud-archiver sub commands. To run them use the `task:run` command.

```shell
$ node_modules/.bin/cloud-archiver task:run daily
```

## license

MIT

