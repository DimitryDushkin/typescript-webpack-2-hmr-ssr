import config from './config';

const isDevelopment = config.isDevelopment;

export default function(content: String) {
    return `
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>RAY</title>
        <link rel="shortcut icon" href="/favicon.png">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    </head>

    <body class='body'>
        <div class='app-container'>${content}</div>
    </body>

    </html>`;
};
