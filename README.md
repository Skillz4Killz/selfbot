# Evie.Selfbot

You might know me from such things as [My YouTube Channel](https://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw), 
the [discord.js guide](https://anidiotsguide.gitbooks.io/discord-js-bot-guide/) I handed over to York, my [Komada Framework](http://komada.js.org/), 
my [Guardian bot](https://github.com/eslachance/guardian) or my [Dithcord Library](https://github.com/dirigeants/komada). 

But now you can also enjoy the use of my personal selfbot! However, one caveat needs to be established:

> I AM NOT RESPONSIBLE AND CANNOT BE HELD LIABLE IF YOU MESS UP WITH SELFBOTS. THIS INCLUDES BUT IS NOT LIMITED TO LOSING PRIVILEGES, GETTING KICKED OR BANNED FROM SERVERS, OR BEING BANNED.

Also, an important point is: this requires *some* knowledge of javascript and your operating system to be able to use. If you don't know JavaScript, you're going to have a bad time.

Evie.Selfbot is built using the [Discord.js](http://discord.js.org/) library version 11.x, which is installed automatically when running `npm install` as per the install steps below.

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.0.0 or higher](https://nodejs.org)
- `a machine` to host it on. Want it to be online 24/7? Get a VPS.
- `some goddamn sense` If you don't intend to read the rest of this document, you shouldn't bother using this selfbot.
- `some knowledge of node` because I'm not there to handhold you.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/eslachance/evie.selfbot.git`

Once finished: 

- In the folder from where you ran the git command, run `cd evie.selfbot` and then run `npm install`
- Rename `config.json.example` to `config.json`
- Edit `config.json` and enter your token and other details as indicated. It should look like this afterwards: 

![](http://i.imgur.com/KH2ELvM.png)

## Getting your login token

1. From either the web application, or the installed Discord app, use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Local Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the selfbot

To start the selfbot, in the command prompt, run the following command:
`node app.js`

> If you get an error about SQLite not being available or not building, run `npm rebuild` and run the bot again.

> If at any point it says "cannot find module X" just run `npm install X` and try again.

For support join [〈evie.codes〉](https://discord.gg/PhT8scR) and talk to me, 〈evie.codes〉!

## Making your own stuff

Please see the [wiki on github](https://github.com/eslachance/evie.selfbot/wiki) for details on
adding your own commands, events, etc.

## UPDATING INFORMATION

If relevant, updating to a new version here will indicate what you need to do.


### UPDATING TO VERSION 1.2.1 (2017-07-24)

There was a change in the way that the tags, quotes and guide commands work.
These commands are now class-based (a nice exercise you can see me 
execute [on twitch in a livestream](https://www.twitch.tv/videos/157386582)). 
This required some tweak of the commands, but most notably the `tags` command
now has a slightly different storage format. Yes. Again. 
Fear not, running the following eval command will most definitely make your
tags continue to work with this new update!


```
/eval client.tags.forEach( (t,k) => {
  try { JSON.parse(t) } catch(e) { client.tags.set(k, {"contents" : t}) }
});
```

> Remember that if you've made modifications of your local files, you might
not have all the updated files using `git pull`. But, that's up to you to fix!


### UPDATING TO VERSION 1.2.0 (2017-06-11)

I have *completely* overhauled the tag and "slashes" system into one using
my new `djs-collection-persistent` which is just pure bliss. To update to the new
system, *after* running `git pull` you'll need to run the following "eval" codes:

```js
/eval bot.db.all("SELECT * FROM shortcuts").then(rows => rows.forEach(r=>bot.tags.set(r.name, r.contents)))
```

You also need to copy the tags: 

```js
/eval bot.db.all("SELECT * FROM tags").then(rows => {
  rows.forEach(r=> {
    if(bot.tags.has(r.name)) r.name = r.name + "1";
    bot.tags.set(r.name, r.contents)
  })
})
```

In the extremely rare circumstance where you might have already added stuff to
the new `quote` system, run this eval: 

```js
/eval bot.db.all("SELECT * FROM quotes").then(rows => rows.forEach(r=>{
  bot.quotes.set(r.name, {channel: r.channel, message: r.message, author: r.author, embed : r.embed})
}))
```

That should be it. You'll now get the same result from `/tag name` and `/name`, 
but now you can do `/lenny that was lewd` and it'll actually, like, output the
message. So, go wild!
