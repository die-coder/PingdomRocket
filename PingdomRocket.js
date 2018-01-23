var config = {
	author: 'Pingdom',
	channel: '#server',
	upcolor: '#228B22',
	downcolor: '#8B0000',
	interactive: {
		enabled: false,
		upemoji: ':white_check_mark:',
		downemoji: ':negative_squared_cross_mark:'
	},
	emoji: ':Pingdom:' // you need to create a new emoji for this
};

class Script {

	process_incoming_request({ request }) {
		var text1, text2, color, emoji;

		if(request.content){
			var pcontent = request.content;

			text1 = 'Pingdom Alert for ' + pcontent.check_name;
			text2 = pcontent.check_name + ' is ';

			if(pcontent.current_state === 'DOWN'){
				color = config.downcolor;
				text2 = text2 + 'DOWN';

				if(config.interactive.enabled === true){
					emoji = config.interactive.downemoji;
				}else{
					emoji = config.emoji;
				}
			}

			if(pcontent.current_state === 'UP'){
				color = config.upcolor;
				text2 = text2 + 'UP';

				if(config.interactive.enabled === true){
					emoji = config.interactive.upemoji;
				}else{
					emoji = config.emoji;
				}
			}
		}

		return {
			content: {
				channel: config.channel,
				alias: config.author,
				emoji: emoji,
				text: text1,
				attachments: [{
					"color": color,
					"author_name": config.author,
					"text": text2
				}]
			}
		};
	}
}