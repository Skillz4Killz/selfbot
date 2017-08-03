const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	if (args.length === 0) {
		msg.edit("Hi my name is *Skillz4Killz* and am the CEO of **Esports Zodiac League LLC (EZL)**. I am hoping to have a few minutes of your time to tell you about EZL and how it can be a great place for you and your guild to be a part of. For example, how EZL gave **400,000+ ICE** in season 1 and in season 2 is over **500,000 ICE** and our upcoming **Guild Management Systems**. I would like to show you how to have your entire guild have access to this amazing opportunity. Please let me know if you have a few minutes so I can explain everything you need to know about EZL.");
	} else {
		msg.delete();

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "**__EZL Majors__**",
	    url: "https://discord.me/ezl",
	    description: `Players sign up individually to participate and be drafted onto a team with which they play and have a chance to play. Skill tiers have no importance. To balance it we use a few different methods.`,
	    fields: [{
	        name: "Draft:",
	        value: "It autobalances because if you have a team like TSM apply. Either they all apply as captains and they are on separate teams, or if FlashX applies as captain and drafts VONC, that leaves some other captain to Draft BestChuck making the teams balanced."
	      },
	      {
	        name: "eVAL",
	        value: "This is our own system we made think of it like an EZL Elo. Imagine it like a system like a team salary, where each player is assigned an eVAL based on their skill and a team can only draft based on their max amount allowed."
	      },
	      {
	        name: "Balancing",
	        value: "2 weeks of balancing and each week winners of Round 1 go up a bracket and losers go down meaning every week that passes winners face stronger opponents and losers are moved down to match their skill level. The more they play the more balanced it gets."
	      }
	    ],
	  }
	});

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "__**EZL Masters:**__",
	    url: "https://discord.me/ezl",
	    description: `Team signup so if you have 50 people in your guild you can have anywhere from 8-16 teams sign up. Everyone can participate. The minimum ICE prize for Masters is **150,000 ICE**. Once again EZL is a place for everyone, Skill Tier doesnt matter. We have had low tiers win ICE and we have had very few pros win ICE and a lot of Pros consisntently lose. Skill Tier truly doesnt affect EZL much when you play correctly and last throughout allowing the teams to be balanced week after week.`,
	    fields: [{
	        name: "Prize: Nearly 1,000,000 ICE",
	        value: "Can increase ALOT, depending on how many teams play. For example, SEA prize is **216,000 ICE**. The 150,000 is just the minimum."
	      },
	      {
	        name: "NA Masters League",
	        value: "[NA Application Form](https://goo.gl/forms/0PeUusgklyZuRGpU2)"
	      },
	      {
	        name: "SA Masters League",
	        value: "[SA Application Form](https://goo.gl/forms/NZkfPjdLbFt9hc1R2)"
	      },
	      {
	        name: "EU Masters League",
	        value: "[EU Application Form](https://goo.gl/forms/F1QOVNCdZspA9N2J3)"
	      },
	      {
	        name: "SEA Masters League",
	        value: "[SEA Application Form](https://goo.gl/forms/wwxWLQTmDhDdiyjt2)"
	      },
	      {
	        name: "NAes Masters League",
	        value: "[NAes Application Form](https://goo.gl/forms/0DXxgKuyHiauCexA2)"
	      }
	    ],
	  }
	});

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "__**EZL Staff:**__",
	    url: "https://discord.me/ezl",
	    description: `EZL is only possible because of its amazing staff. With over 100 volunteer staff who believe and see the vision & potential are building this great org, My goal is to make it so that as EZL grows their time spent here also grows in importance. One by them cementing a place in EZL because as we grow EZL will begin paying real salaries to everyone from top to bottom, no matter streamer, developer, organizer, moderator, writer or anything. We believe there is a place for everyone here and we try everyday to make that possible. If they choose not to stay in EZL they will have something to add in to their resume as they grow. Imagine having in your resume, Journalist for NFL, or MLB, or NBA. In that same terms, when EZL grows having it on a persons resume will be amazing. Furthermore, for every position we have whats called an internship program. Once again going back to EZL is the place for everyone. We dont require you to be talented to be doing something you enjoy. For example, we teach kids how to be Python Developers, Web Developers, recruiters, moderators, translators and much more.`,
	    fields: [{
	        name: "Public Relations",
	        value: "[P.R. Application Link](https://docs.google.com/forms/d/e/1FAIpQLSe5g9pKBki9jr5znvGlQ_Y8zqSvPhTZRKQREVFcK2BcVna-tw/viewform)"
	      },
	      {
	        name: "Moderating/Recruiting",
	        value: "[Mod/Recruit Application Link](https://docs.google.com/forms/d/e/1FAIpQLScxF95aX_p3ivZyo6di1S4HC_ipZzIuJco--celmrPE2u7WSg/viewform)"
	      },
	      {
	        name: "SEA Staff",
	        value: "[SEA Application Link](https://goo.gl/forms/9oreVQ82Q0xQrrhF3)"
	      }
	    ],
	  }
	});

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "__**Reasons To Join EZL:**__",
	    url: "https://discord.me/ezl",
	    description: `I personally come from a running 4 guilds so I know what it is to build a family like feeling and that is what I do here. So how can EZL be a good place for your guild.`,
	    fields: [{
	        name: "Number 1:",
	        value: "We give out tons of ICE so thats always nice."
	      },
	      {
	        name: "Number 2",
	        value: "I am constantly in talks with SEMC every day to try to get them to give more and more ICE to more people that help make incredible things. For example, EZL Journalists and EZL Developers get thousands of ICE every month. As we grow this can be made for every other department as well but till then I send them whatever ICE i can to reward them as much as i possibly can."
	      },
	      {
	        name: "Number 3",
	        value: "We are building insanely awesome guild management tools using the VG API and me coming from managing 4 guilds I know exactly what most guild needs both from leaders and members perspective. "
	      },
	      {
	        name: "Number 4",
	        value: "As a guild you get to be alongside every other guild that participate and helps EZL grow like We2Sexy, GankStars, Royal Roses(after joining EZL has gone from an EU guild to a global guild because of our huge community in every region). "
	      },
	      {
	        name: "Number 5",
	        value: "The largest VG Community made from players of all regions."
	      },
	      {
	        name: "Number 6",
	        value: "Getting tutored by top tier players to be better players through The Barracks Program. "
	      },
	      {
	      	name: "Requirements To Join",
	      	value: "No matter who they are as long as they are not toxic there will always be a place in EZL for them. We have very few requirements to be a part of EZL because it is meant to be for everyone."
	      }
	    ],
	  }
	});

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "__**Frequently Asked Questions**__",
	    url: "https://discord.me/ezl",
	    description: `These are questions that a lot of guild leaders ask me when they are recruited so I created a FAQ incase the same questions arise again.`,
	    fields: [{
	        name: "You guys give out a lot of ICE? Did you rob a bank?",
	        value: "No, we give out millions of ICE thanks to how awesome our community is and the help and love we get from SEMC."
	      },
	      {
	        name: "Does my guild have to sponsor or lose the name to join EZL?",
	        value: "This is in no means a merger or you losing your guild, this is just simply another opportunity to provide both you and your guild. You also do not need to sponsor EZL (unless you wish to lol). EZL was built for everyone not only those who sponsor. Everyone is most welcome :)"
	      }
	    ],
	  }
	});

		msg.channel.send({embed: {
    	color: 3447003,
	    title: "__**Cheers!:**__",
	    url: "https://discord.me/ezl",
	    description: `Thats the end of the summary :). Really hope you enjoy reading it. If you have any questions at all please let me know. I would be happy to help answer any questions that you or your guild mates may have.`,
	  }
	});
	}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rgl']
};

exports.help = {
  name: 'recruitGL',
  description: 'Send Recruiting Novel',
  usage: 'rgl #'
};