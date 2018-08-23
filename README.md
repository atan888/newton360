To build Newton 360:
1.       Install the latest node.js
2.       Clone the repository: git clone https://github.com/atan888/newton360
3.       Cd to the novaseekadmin directory:  npm install
4.       To run locally: npm start   -  browse to http://localhost:4200

5.       To build and distribute:
a.           npm run build
b.           copy dist directory to webserver

Note: The config.js specifies the location of the API, CDNR and lab urls,
        change the baseUrl, baseCDNRUrl and the baseLabUrl appropriately.

        Edit: src\app\@core\model\config.ts TODO
