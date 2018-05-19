from tutorials import views


app_routes = (
    (r'^api/home$', views.home.HomeView),  # done
    (r'^api/init$', views.home.InitView),  # done
    (r'^api/notify$', views.home.NotifyView),  # done
    (r'^api/search$', views.home.SearchView),
    (r'^api/administration/dashboard$', views.administration.DashboardView),  # done
    (r'^api/administration/invoice$', views.administration.InvoiceView),  # done
    (r'^api/administration/payments$', views.administration.PaymentsView),  # done
    (r'^api/administration/users$', views.administration.UsersView),
    (r'^api/about/contact$', views.about.ContactView),  # done
    (r'^api/about/info$', views.about.InfoView),  # done
    (r'^api/authorization/confirm-mail$', views.authorization.ConfirmMailView),  # done
    (r'^api/authorization/confirm-recover$', views.authorization.ConfirmRecoverView),  # done
    (r'^api/authorization/login$', views.authorization.LoginView),  # done
    (r'^api/authorization/logout$', views.authorization.LogoutView),  # done
    (r'^api/authorization/recover$', views.authorization.RecoverView),  # done
    (r'^api/authorization/register$', views.authorization.RegisterView),  # done
    (r'^api/courses/certificate$', views.courses.CertificateView),  # done
    (r'^api/courses/details$', views.courses.DetailsView),
    (r'^api/courses/exam$', views.courses.ExamView),
    (r'^api/courses/free$', views.courses.FreeView),  # done
    (r'^api/courses/premium$', views.courses.PremiumView),  # done
    (r'^api/courses/register$', views.courses.RegisterView),
    (r'^api/courses/topic$', views.courses.TopicView),
    (r'^api/user/courses$', views.user.CoursesView),  # done
    (r'^api/user/profile$', views.user.ProfileView),

    (r'^.*$', views.home.MainView),
)
