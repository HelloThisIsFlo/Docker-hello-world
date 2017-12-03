# Simple Hello-World application
Used to debug network related operations.

### Customizable via Env Variable.

To customize the information displayed, simply set the `WORLD` environment variable.

### Example `docker-compose.yml` file

```
version: '3'
services:
    bonjour:
        build: .
        image: shockn745/hello-world
        ports:
            - "1111:80"
        environment:
            - WORLD=bonjour
```
