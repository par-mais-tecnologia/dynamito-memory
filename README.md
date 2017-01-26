# Dyanamito Memory

Library to simulate DynamoDb in memory. Useful to develop using Dynamo.

## Configuring Your Dynamito

```
    import Dynamito from 'dynamito';
    import DynamitoMemory from 'dynamito-memory';

    var dynamitoConfig = {
        accessKeyId: config.aws.awsKey,
        secretAccessKey: config.aws.awsSecret,
        
        region: config.dynamo.region,
        endpoint: config.dynamo.uri,
        
        // Override default core function to a memory strategy.
        core: DynamitoMemory
    };
    Dynamito.configure(dynamitoConfig);
```

After this, your Dynamito will be saving data in memory.

# TODO

1. Remove winston from core library.
