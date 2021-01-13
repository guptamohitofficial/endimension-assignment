Site configuration is with Nginx, as a production deployment, please use endi.easify.xyz to visit
to run on local linux machine --
for react:
apt/yum install node
run... `npm install` inside site folder
run... `npm start` or `serve -s build`

for django:
create virtual environment and activate it.
intall packages from apiEndi/requirements.txt by `pip install -r requirements.txt` from apiEndi/ folder
run a redis server instance,,, easiest way is using docker... run sudo docker run -p 6379:6379 -d redis:5 (for websockets/django-channels)
then, run `./manage.py runserver`


Site will be running with this. !!