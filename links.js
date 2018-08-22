
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    start();
});

const start = () => {
    let columns = [
        {
            name: 'Walmart',
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
                }
            ]
        },
        {
            name: 'Github',
            links: [
                {
                    name: 'gec.github',
                    url: 'https://gecgithub01.walmart.com/eden'
                },
                {
                    name: 'Eden Docs',
                    url: 'http://eden.dev.walmart.com/'
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
            name: 'Eden',
            links: [
                {
                    name: 'Almanac API',
                    url: 'http://almanac-api.eden.dev.walmart.com/'
                },
                {
                    name: 'Eden Jira',
                    url: 'https://tracker.wal-mart.com/secure/RapidBoard.jspa?rapidView=1682&projectKey=EDEN&view=planning.nodetail'
                },
                {
                    name: 'Looper: Almanac',
                    url: 'https://ci.walmart.com/job/Eden/job/almanac-ui/'
                }
            ]
        },
        {
            name: 'Dev',
            links: [
                {
                    name: 'localhost:8080',
                    url: 'http://localhost:8080/'
                },
                {
                    name: 'localhost:3030',
                    url: 'http://localhost:3000/'
                },
                {
                    name: 'LLDB',
                    url: 'https://lldb.llvm.org/lldb-gdb.html'
                },
                {
                    name: 'GNU Make',
                    url: 'https://www.gnu.org/software/make/'
                },
                {
                    name: 'CMake',
                    url: 'https://cmake.org/install/'
                }
            ]
        },
        {
            name: 'Misc',
            links: [
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
            links: [
                {
                    name: 'Client Repo',
                    url: 'https://gecgithub01.walmart.com/eden/almanac'
                },
                {
                    name: 'API Repo',
                    url: 'https://gecgithub01.walmart.com/eden/almanac-api'
                },
                {
                    name: 'JIRA Board',
                    url: 'https://tracker.wal-mart.com/secure/RapidBoard.jspa?rapidView=6159&view=detail&selectedIssue=EDEN-549&quickFilter=22776'
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
    let tableColumns = [];
    columns.map((col, index) => {
        const columnElement = document.createElement('td');
        col.links.map(link => {
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.innerHTML = link.name;
            columnElement.appendChild(linkElement);
            columnElement.appendChild(document.createElement('br'));
        });
        const headerElement = document.createElement('th');
        headerElement.innerHTML = col.name;
        headers.appendChild(headerElement);     
        row.appendChild(columnElement);
    });
}