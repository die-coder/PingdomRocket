# PingdomRocket

## Overview
Install this webhook to get Pingdom notifications to Rocket.Chat.

## Installation

### Download
Download or copy the PingdomRocket.js content.

### Create a new Incoming WebHook
Create a new Webhook and set all needed informations.

### Configure Pingdom
Follow the [instructions](https://help.pingdom.com/hc/en-us/articles/207081599) on Pingdom help.

## Configuration
You can change a little bit of configuration.

    var config = {
    	author: 'Pingdom', // Author and Alias Name
    	channel: '#server', // Channel to post
    	upcolor: '#228B22', // Color for UP messages
    	downcolor: '#8B0000', // Color for DOWN messages
    	interactive: {
    		enabled: false, // Change the Bot avatar depending on the status.
    		upemoji: ':white_check_mark:', // Emoji for up messages
    		downemoji: ':negative_squared_cross_mark:' // Emoji for down messages
    	},
    	emoji: ':Pingdom:' // you need to create a new emoji for this
    };
    
### Custom Emoji
You can create a custom emoji with the Pingdom logo. Download [here](https://www.pingdom.com/company/brand-assets)