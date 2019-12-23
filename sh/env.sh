# Config database environment variable
export DB_URI='mongodb+srv://minhpt:ptMinh93@bravo-server-f7avs.gcp.mongodb.net/chat-app?retryWrites=true&w=majority'

# Config app environment variable
export APP_HOST=localhost
export APP_PORT=8017

# Config admin email account
export MAIL_USER=minh.excellent@gmail.com
export MAIL_PASSWORD=ptMinh1993
export MAIL_HOST=smtp.gmail.com
export MAIL_PORT=587

# Config Facebook login app
export FB_APP_ID=490940298383867
export FB_APP_SECRET=a2dba7bd3662f27f11e87eeda7d6b925
export FB_CALLBACK_URL=https://localhost:8017/auth/facebook/callback

# Config Google login app
export GG_APP_ID=419668106151-l5p6ni5bh6tdk5k5ebclc9b1hsjjk0p5.apps.googleusercontent.com
export GG_APP_SECRET=EYTKbvLKUlkPUDqjsD0hGcM9
export GG_CALLBACK_URL=https://localhost:8017/auth/google/callback