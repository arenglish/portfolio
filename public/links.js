
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    start();
});

const start = () => {
    let columns = [
        {
            name: 'Walmart',
            icon: './images/links/walmart.png',
            links: [
                {
                    name: 'Box',
                    url: 'https://walmartglobal.ent.box.com/folder/0'
                },
                {
                    name: 'Oneops',
                    url: 'https://oneops.prod.walmart.com/#/list_item/1335'
                },
                {
                    name: 'Wmlink',
                    url: 'http://wmlink'
                },
                {
                    name: 'Timesheet',
                    url: 'https://clarity.wal-mart.com/niku/nu#action:timeadmin.currentTimesheet'
                },
                {
                    name: 'Eurest Menu',
                    url: 'http://eurestcafes.compass-usa.com/walmart/Pages/Menu.aspx?lid=b1'
                },
                {
                    name: 'Looper Docs',
                    url: 'http://looper.walmart.com/docs/getting-started/first-looper-project.html'
                },
                {
                    name: 'Invision',
                    url: 'https://walmart.invisionapp.com/d/main#/projects'
                },
                {
                    name: 'Cafe Menu',
                    url: 'http://eurestcafes.compass-usa.com/walmart/Pages/Menu.aspx?lid=b1'
                },
                {
                    name: 'Betterworks',
                    url: 'https://app.betterworks.com/app/#/goals?currentView=goals'
                }
            ]
        },
        {
            name: 'Github',
            icon: './images/links/github.png',
            mainLink: 'https://gecgithub01.walmart.com/eden',
            links: [
                {
                    name: 'gec.github',
                    url: 'https://gecgithub01.walmart.com/eden'
                },
                {
                    name: 'Muse Docs',
                    url: 'https://gecgithub01.walmart.com/eden/docs'
                },
                {
                    name: 'Almanac API',
                    url: 'https://gecgithub01.walmart.com/eden/almanac-api'
                },
                {
                    name: 'Almanac',
                    url: 'https://gecgithub01.walmart.com/eden/almanac'
                }
            ]
        },
        {
            name: 'Looper',
            icon: './images/links/looper.png',
            links: [
                {
                    name: 'Almanac',
                    url: 'https://ci.walmart.com/job/Eden/job/almanac-ui/'
                },
                {
                    name: 'Desktop Library',
                    url: 'https://ci.walmart.com/job/Eden/job/eden-desktop-library/'
                },
                {
                    name: 'Icons',
                    url: 'https://ci.walmart.com/job/Eden/job/icons/'
                }
            ]
        },
        {
            name: 'JIRA',
            icon: './images/links/jira.png',
            mainLink: 'https://tracker.wal-mart.com/secure/RapidBoard.jspa?rapidView=1682&view=planning.nodetail&selectedIssue=EDEN-977',
            links: [
                {
                    name: 'Almanac',
                    url: 'https://tracker.wal-mart.com/secure/RapidBoard.jspa?rapidView=6159&quickFilter=22776'
                },
                {
                    name: 'Almanac Bugs',
                    url: 'https://tracker.wal-mart.com/secure/RapidBoard.jspa?rapidView=6159&quickFilter=22776&quickFilter=31277'
                }
            ]
        },
        {
            name: 'Misc',
            icon: './images/links/misc.png',
            links: [
                {
                    name: 'Slack Apps',
                    url: 'https://api.slack.com/apps'
                },
                {
                    name: 'Bitrex',
                    url: 'https://bittrex.com/account/login'
                },
                {
                    name: 'Coinbase',
                    url: 'https://coinbase.com/signin'
                },
                {
                    name: 'Shutterstock',
                    url: 'https://submit.shutterstock.com/dashboard?language=en'
                },
                {
                    name: 'mySQL CheatSheet',
                    url: 'http://cse.unl.edu/~sscott/ShowFiles/SQL/CheatSheet/SQLCheatSheet.html'
                }
            ]
        },
        {
            name: 'Almanac',
            icon: './images/links/almanac.png',
            links: [
                {
                    name: 'App Dev',
                    url: 'https://almanac.eden.dev.walmart.com/'
                },
                {
                    name: 'App Stage',
                    url: 'https://almanac.eden.stg.walmart.com/'
                },
                {
                    name: 'App Production',
                    url: 'https://almanac.eden.walmart.com/'
                },
                {
                    name: 'App Local',
                    url: 'http://localhost:4200'
                },
                {
                    name: 'App QA',
                    url: 'http://slack-api-202311100-1-409734910.dev.sandbox.eden.qa.walmart.com:8080/spec-management/products'
                },
                {
                    name: 'Karma Testing Local',
                    url: 'http://localhost:9876/debug.html'
                }
            ]
        }
    ];

    let row = document.getElementById('tableRow');
    let headers = document.getElementById('tableHeaders');
    headers.style.verticalAlign = 'bottom';
    let tableColumns = [];
    columns.map((col, index) => {
        let columnElement = document.createElement('td');
        col.links.map(link => {
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.innerHTML = link.name;
            columnElement.appendChild(linkElement);
            columnElement.appendChild(document.createElement('br'));
        });
        let headerElement = document.createElement('th');
        headerElement.align = 'center';
        if (col.icon) {
            headerElement.innerHTML = `<div><img src="${col.icon}" style="height: auto; width: 50px"><br>${col.name}</div>`;
        } else {
            headerElement.innerHTML = col.name;
        }
        headerElement.style.textAlign = 'center';
        headerElement.style.verticalAlign = 'bottom';
        if (col.mainLink) {
            let mainLink = document.createElement('a');
            mainLink.href = col.mainLink;
            mainLink.style.textDecoration = 'none';
            mainLink.appendChild(headerElement);     
            headers.appendChild(mainLink);     
        } else {
            headers.appendChild(headerElement);     
        }
        row.appendChild(columnElement);
    });
}