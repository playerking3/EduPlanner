import smtplib
import email.message

class Email:
    def ConfirmaTrocaSenha(self, Email, code):
        # enviar email
        corpo_email = f"<p>Olá, esse é seu código de verificação é <b>{code}</b>, ele vai expirar em 5 minutos</p>"

        msg = email.message.Message()
        print(msg)
        msg['Subject'] = "Código EduPlanner"
        msg['From'] = 'eduplannergestao@gmail.com'
        msg['To'] = f'{Email}'
        password = 'jqks zqhr wcaz aqvi'
        msg.add_header('Content-Type', 'text/html')
        msg.set_payload(corpo_email)

        s = smtplib.SMTP('smtp.gmail.com: 587')
        s.starttls()
        # entrando com as credenciais
        s.login(msg['From'], password)
        s.sendmail(msg['From'], [msg['To']], msg.as_string().encode('utf-8'))