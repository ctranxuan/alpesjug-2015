# Compile

`mvn clean install`

# Run

Use your IDE with the VM arguments: `-Xbootclasspath/p:target/alpn.jar`

or in a terminal
`java -Xbootclasspath/p:target/alpn.jar -jar target/http2-push-alpesjug-1.0-SNAPSHOT.jar`


Open a browser

`https://localhost:8443`

and go to the `public` folder of this project

To see the push feature,
* open Chrome with the url `chrome://net-internals/`
* go to the HTTP/2 tab
* click on the `https://localhost:8443` to see the HTTP2_SESSION
* relaunch a connection `https://localhost:8443/<YOUR_PATH>/http2-push-alpesjug/public/`
* search in the log of the HTTP2_SESSION of `chrome://net-internals/` for `HTTP2_SESSION_RECV_PUSH_PROMISE`

Another demo can be also found at https://http2-push.appspot.com/

# Report

If you wish to get a report:

* `npm install chrome-http2-log-parser`
* copy / paste the log of the HTTP2_SESSION into a file `session.txt`
* `node index.js > report.html`
