FROM alpine

RUN apk add bash
RUN apk add nodejs
RUN apk add npm

ADD start.sh /start.sh
RUN chmod u+x /start.sh

WORKDIR /var/www/project_be

CMD ["/start.sh"]
