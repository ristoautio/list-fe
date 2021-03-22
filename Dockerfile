FROM nginx:1.19.8-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/list-app /usr/share/nginx/html
