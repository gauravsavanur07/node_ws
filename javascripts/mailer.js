var nodemailer = require('nodemailer');
var events  = require('events');
var check = -1;
var events = new events.EventEmitter();
var mailOptions = {
    
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        },
        {   // binary buffer as an attachment
            filename: 'text2.txt',
            content: new Buffer('hello world!','utf-8')
        },
        {   // file on disk as an attachment
            filename: 'text3.txt',
            path: '/path/to/file.txt' // stream this file
        },
        {   // filename and content type is derived from path
            path: '/path/to/file.txt'
        },
        {   // stream as an attachment
            filename: 'text4.txt',
            content: fs.createReadStream('file.txt')
        },
        {   // define custom content type for the attachment
            filename: 'text.bin',
            content: 'hello world!',
            contentType: 'text/plain'
        },
        {   // use URL as an attachment
            filename: 'license.txt',
            path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
        },
        {   // encoded string as an attachment
            filename: 'text1.txt',
            content: 'aGVsbG8gd29ybGQh',
            encoding: 'base64'
        },
        {   // data uri as an attachment
            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        }
    ]
}

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "gmail",
    auth: { 
        user: "gaurav@gmail.com",
        pass: "pass"
    }
});

function inputmail(){
    const from = 'example<example@gmail.com>';
    const to  = 'example@yahoo.com';
    const subject  = 'example';
    const text = 'example email';
    const html = '<b>example email</b>';
    var mailOption = {
        from: from,
        to:  to,
        subject: subject,
        text: text,
        html: html
    }
    return mailOption;
}
function send(){
    smtpTransport.sendMail(inputmail(), function(err){
        if(err){
            events.EventEmitter('error', err);

        }
        if(success){
            events.emit('success', success);
        }
    });
}
send();
events.on("error", function(err){
    console.log("Mail not send");
    if(check<10)
        send();
    check++;
});
events.on("success", function(success){
    console.log("Mail send");
});

