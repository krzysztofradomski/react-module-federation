# Multi-stage
# 1) Node image for building frontend assets. Based on current nodejs image, slim version.
# 2) nginx stage to serve frontend assets. Based on latest nginx image, slim version.

# NGINX stage for serving content
FROM nginx:1.23.1-alpine AS server


# Set working directory to nginx asset directory
WORKDIR /etc/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf


# Copy static assets from builder stage
COPY index.js .

# Expose port 80
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]