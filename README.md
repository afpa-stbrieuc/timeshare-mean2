[![Build Status](https://travis-ci.org/afpa-stbrieuc/timeshare-mean2.svg?branch=gruntify)](https://travis-ci.org/afpa-stbrieuc/timeshare-mean2)

- Project temporarily in pause but it will be continued.
- Projet temporairement en pause, mais il sera poursuivi.

##prerequisite
install softwares
- nodejs server 4.2.5 lts
- mongodb 3.2+
- python (for grunt dependancy)
- npm (Node Packet Manager)

configuration for `grunt serve` usage

- `npm -g install grunt-cli`
 
 ##install
 - go to project dir
 
- `npm install app/api/ --prefix app/api/` ( load node app dependencies in app/api )
- `bower install` ( load all web libs required by the client in app/public )
- `npm install --dev` ( will load all dependencies required by grunt )

##run
`grunt serve`

##build
`grunt`
