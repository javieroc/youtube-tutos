FROM php:7.4-fpm-alpine

# Install packages
RUN apk --no-cache add php7-pdo php7-pdo_pgsql php7-pgsql \
    nginx supervisor curl vim bash

# Add composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Configure supervisord
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Add application
WORKDIR /var/www/html

# Expose the port nginx is reachable on
EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
