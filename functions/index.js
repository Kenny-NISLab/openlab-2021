// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
// const mailTransport = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: gmailEmail,
//         pass: gmailPassword
//     }
// });

// 管理者用のメールテンプレート
// const adminContents = data => {
//     return `以下内容でお問い合わせを受けました。

//     お名前：
//     ${data.name}

//     学籍番号：
//     ${data.studentId}

//     メールアドレス：
//     ${data.email}

//     内容：
//     ${data.message}
//     `;
// };

// exports.sendMail = functions.https.onCall((data, context) => {
//     // メール設定
//     let adminMail = {
//         from: gmailEmail,
//         to: adminEmail,
//         subject: "【NISLAB Openlab】お問い合わせ",
//         text: adminContents(data),
//     };

//     // 管理者へのメール送信
//     mailTransport.sendMail(adminMail, (err, info) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('success');
//         }
//     }
// });
