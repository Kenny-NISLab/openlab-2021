const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

// 管理者用のメールテンプレート
const adminContents = data => {
return `${data.name} さん

NISLAB 佐藤研究室です。

以下の内容でお問い合わせを受けました。
追って回答させていただきますのでお待ちください。


お名前：
${data.name}

学籍番号：
${data.studentId}

メールアドレス：
${data.email}

内容：
${data.message}


以上、今後ともよろしくお願いいたします。

*** このメールは学生が管理しています ***
------------------------------------------------------
同志社大学大学院 理工学研究科 情報工学専攻
同志社大学 理工学部 情報システムデザイン学科
ネットワーク情報システム研究室(NISLAB) 佐藤研究室
Email: nislab.sato@gmail.com
Address: 恵喜館101号室 (KE-101)
------------------------------------------------------
`;
};

exports.sendContact = functions.https.onCall(async (data, context) => {
    let email = {
        from: gmailEmail,
        to: data.email,
        cc: gmailEmail,
        bcc: adminEmail,
        subject: '【NISLAB】お問い合わせを受け付けました',
        text: adminContents(data),
    }
    await mailTransport.sendMail(email, (err, info) => {
        if (err) {
            return console.log(err)
        }
        return console.log('success')
    })
})
