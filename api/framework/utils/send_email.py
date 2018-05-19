def send_email(template, context, title, fr, to):
    templ = get_template(template)
    html = templ.render(Context(context))
    send_mail(title, '', fr, to, html_message=html)
