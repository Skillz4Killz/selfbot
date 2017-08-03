exports.run = (client, msg, args) => {
	let channelIds = ['259032982784835584'/*reddit*/, '287298930344067072'/*vg main*/, '289047518191419393'/*Gythian Tavern*/, '282571611733753857'/*EZL Staff*/, '236563778362146817'/*EZL Main*/, '337046506198532097'/*OverPowered*/, '293070163316572161'/*VG Community*/, '259771980331483137'/*EU VG Tournaments*/, '255752298339368971'/*VG EU Community*/, '242734894118076417'/*Hammers*/];
	
	for (let i = 0; i < channelIds.length; i++) {
		client.channels.get(channelIds[i]).send({embed: {
			color: 9246789,
		    title: "__**Latest EZL Update:**__",
		    url: "https://discord.me/ezl",
		    description: `Make sure to apply to EZL Masters League for Season 2!

Apply with Premade Teams and play games for an entire season! The registration period is not very long and you may not be able to apply in the future. If you have 50 people in your guild you can have anywhere from 8-16 teams sign up. Everyone can participate. 

The minimum ICE prize for Masters is **150,000 ICE**. Once again EZL is a place for everyone, Skill Tier doesnt matter.`,
		    fields: [{
		        name: "Prize: Nearly 1,000,000 ICE",
		        value: "Can increase ALOT, depending on how many teams play. For example, SEA prize is **216,000 ICE**. The 150,000 is just the minimum."
		      },
		      {
		        name: "NA Masters League Link",
		        value: "[NA Application Form](https://goo.gl/forms/0PeUusgklyZuRGpU2)"
		      },
		      {
		        name: "SA Masters League Link",
		        value: "[SA Application Form](https://goo.gl/forms/NZkfPjdLbFt9hc1R2)"
		      },
		      {
		        name: "EU Masters League Link",
		        value: "[EU Application Form](https://goo.gl/forms/F1QOVNCdZspA9N2J3)"
		      },
		      {
		        name: "SEA Masters League Link",
		        value: "[SEA Application Form](https://goo.gl/forms/wwxWLQTmDhDdiyjt2)"
		      },
		      {
		        name: "NAes Masters League Link",
		        value: "[NAes Application Form](https://goo.gl/forms/0DXxgKuyHiauCexA2)"
		      }
		    ],
		    image: {
		    	url: "https://goo.gl/cicCq8"
		    },
		    footer: {
		      icon_url: "https://cdn.discordapp.com/attachments/282541228904546305/341316829865574411/public-relations.jpg",
		      text: "Public Relations Department of Esports Zodiac League (EZL) LLC"
		    },
		  }
		});
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pl']
};

exports.help = {
  name: 'ezlpromote',
  description: 'Promote to all community servers',
  usage: 'ezlpromote [arg1] [arg2]'
};