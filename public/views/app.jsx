var React = require('react');

var Swarm = require('swarm');

var Index = require('./index');
var Document = require('./document');

var App = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charSet='UTF-8'/>
                    <title>Онлайн.Код</title>
                    <link rel='shortcut icon' href='images/favicon.ico'/>
                    <link rel='stylesheet' href='css/main.css'/>
                </head>
                <body>
                    {this.props.id ? <Document key={'/Doc#' + this.props.id} /> : <Index />}
                    <script src='js/libs.js'/>
                    <script src='js/app.js'/>
                </body>
            </html>
        );
    }
});

module.exports = App;

