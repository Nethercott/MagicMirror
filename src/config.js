/* Magic Mirror Config Sample
 *test`
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.113.48"],

    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
				},
        {
            module: "calendar",
            header: "Upcoming Events",
            position: "top_left",
            config: {
								maximumNumberOfDays: 365,
								maximumEntries: 20,
								timeFormat: "absolute",
								urgency: 14,
								dateFormat: "MMMM Do",
								fetchInterval: "30000",
                calendars: [
									{
										symbol: "calendar-check-o ",
										url: "webcal://p32-calendars.icloud.com/published/2/FxhI-rJ-Y2-1i158HCxolB4m2Tw3kXyOK8sqwKsRn0_bDwxeHZRHc3_SxhYgzzlgpu6uMmvbUlVflxJc_kH4fIUqKaP1hw4F_VrMw7Ilo4A"
                  },
		    					{
										symbol: "calendar",
										url: "webcal://files.apple.com/calendars/UK32Holidays.ics"
									},
									/*{
										symbol: "birthday-cake",
										url: ""
									},*/
									{
    								symbol: "flag-checkered",
										url: "webcal://www.f1calendar.com/download/f1-calendar_gp.ics?t=1488716500",
									}
                ]
            }
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Rugby, GB",
                locationID: "2638978",  //ID from http://www.openweathermap.org
                appid: "ea5aa7b8956b64d896dc32af3eb5d8a1"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Rugby, GB",
                locationID: "2638978",  //ID from http://www.openweathermap.org
                appid: "ea5aa7b8956b64d896dc32af3eb5d8a1"
            }
        },
				{
					module: "MMM-Formula1",
        	position: "bottom_right",
        	header: "F1 Standings",
        	config: {
            season: "current",
						type: "DRIVER",
						maxRows: 10,
        	}
				},
				/*{
					module: "MMM-Formula1",
        	position: "bottom_right",
        	header: "F1 Standings",
        	config: {
            season: "current",
						type: "CONSTRUCTOR",
						maxRows: 10,
        	}	
				},*/
				{
					module: "DailyXKCD",
					position: "bottom_right",
					config: {
						showTite: false,
						randomComic: true,
						scrollRatio: 1.0,
						updateInterval: 150000
					}
				},
				/*{
					module: "MMM-Carousel",
					position: "bottom_right",
					config: {
							transitionalInterval: 10000,
							ignoreModules: [],
							mode: "slides",
							slides: ["DailyXKCD", "MMM-Formula1"]
					}
				},*/
				{
					module: "newsfeed",
					position: "bottom_left",
					config: {
							feeds: [
									{
											title: "BBC News",
											url: "http://feeds.bbci.co.uk/news/rss.xml"
									}
							],
							showSourceTitle: true,
							showPublishDate: true
					}
        },
				{
            module: 'MMM-Carousel',
            config: {
                transitionInterval: 150000,
                ignoreModules: [],
                mode: 'positional',
                //top_left: {enabled: true, ignoreModules: [], overrideTransitionInterval: 15000},
                bottom_right: {enabled: true, ignoreModules: ['currentweather']}
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}