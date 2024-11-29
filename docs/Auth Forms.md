# Auth Forms

All Authentication pages can be found in [here](/src/views/pages/authentication/). All pages use the corresponding form from [auth-forms](/src/views/pages/authentication/auth-forms/) Wrapped in [AuthCardWrapper](/src/views/pages/authentication/AuthCardWrapper.jsx).

[AuthLogin](/src/views/pages/authentication/auth-forms/AuthLogin.jsx) and [AuthRegister](/src/views/pages/authentication/auth-forms/AuthRegister.jsx) make use of the [JWTContext](/src/contexts/JWTContext.jsx) to send api calls to the backend for auth. 

The following pages are implemented:

1. [Login](/src/views/pages/authentication/Login.jsx): Viewable at [base url]/login 
1. [Register](/src/views/pages/authentication/Register.jsx): Viewable at [base url]/register
1. [Forgot Password](/src/views/pages/authentication/ForgotPassword.jsx): Viewable at [base url]/forgot
1. [Check Email](/src/views/pages/authentication/CheckMail.jsx): Viewable at [base url]/check-email   
1. [Password Reset](/src/views/pages/authentication/ResetPassword.jsx): Viewable at [base url]/password-reset


