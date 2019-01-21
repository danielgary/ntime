# ntimer

Time the execution of a command

```
Usage: ntimer -s <command to time>

Options:
  --help                              Show help                        [boolean]
  --version                           Show version number              [boolean]
  -s, --Suppress output from command                  [boolean] [default: false]
  -u, --Units of time
      [choices: "milliseconds", "seconds", "minutes", "hours", "days"] [default:
                                                                      "seconds"]
```

## Installation:
```
npm install -g @gatewayapps/ntimer
```

## Example
```
> ntimer -s -u milliseconds curl www.google.com
curl www.google.com  completed in 186 milliseconds

> ntimer -s -u seconds curl www.github.com
curl www.github.com  completed in 0.251 seconds

```

