![Logo][]
> AWS Dynamo emulation.

# Dyanamito Memory

Library to simulate DynamoDb in memory. Useful to develop using Dynamo.

- __Lead Maintainer:__ [Diego Laucsen][Lead]
- __Sponsor:__ [Par Mais][Sponsor]
- __Node:__ 6.x

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

## TODO

1. Remove Winston from core library.

## Contributing
The [Par Mais Tecnologia][ParMaisTech] encourages participation. If you feel you can help in any way, be
it with bug reporting, documentation, examples, extra testing, or new features feel free
to [create an issue][Issue], or better yet, [submit a [Pull Request][Pull]. For more
information on contribution please see our [Contributing][Contrib] guide.

## License
Copyright (c) 2017 Par 6 Tecnologia LTDA;
Licensed under __[Apache 2.0][Lic]__.

[Lead]: https://github.com/laucsen
[Lic]: ./LICENSE
[Logo]: ./par-mais-rect.png
[Sponsor]: http://parmais.com.br
[ParMaisTech]: http://parmais.com.br
[Contrib]: ./CONTRIBUTE
[Issue]: https://github.com/par-mais-tecnologia/parmais-project-template/issues/new
[Pull]: https://github.com/par-mai
