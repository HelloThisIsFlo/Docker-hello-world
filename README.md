# Simple Hello-World application
Used to debug network related operations.

### Customizable via Env Variable.

To customize the information displayed, simply set the `WORLD` environment variable.

### Example `docker-compose.yml` file

```yaml
version: '3'
services:
    bonjour:
        image: floriankempenich/hello-world
        ports:
            - "1111:80"
        environment:
            - WORLD=bonjour
```

### Example `cli`

```shell
docker run --rm \
    --name=hello-world \
    -e WORLD=monde \
    -p "1111:80" \
    floriankempenich/hello-world
```
