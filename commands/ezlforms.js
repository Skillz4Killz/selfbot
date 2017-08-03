exports.run = (client, msg, args) => {
	msg.delete();
  
  msg.channel.send(`***Masters League Applications***

**NA Masters League:** <https://goo.gl/forms/0PeUusgklyZuRGpU2>
**SA Masters League:** <https://goo.gl/forms/NZkfPjdLbFt9hc1R2>
**EU Masters League:** <https://goo.gl/forms/F1QOVNCdZspA9N2J3>
**SEA Masters League:** <https://goo.gl/forms/wwxWLQTmDhDdiyjt2>
**NAes Masters League:** <https://goo.gl/forms/0DXxgKuyHiauCexA2>

***EZL Staff Applications:***

***Moderators/Recruiter:*** <https://docs.google.com/forms/d/e/1FAIpQLScxF95aX_p3ivZyo6di1S4HC_ipZzIuJco--celmrPE2u7WSg/viewform>
***Public Relations:*** <https://docs.google.com/forms/d/e/1FAIpQLSe5g9pKBki9jr5znvGlQ_Y8zqSvPhTZRKQREVFcK2BcVna-tw/viewform>
***SEA Staff:*** <https://goo.gl/forms/9oreVQ82Q0xQrrhF3>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rf']
};

exports.help = {
  name: 'ezlforms',
  description: 'All the EZL Application Form Links',
  usage: 'ezlforms'
};