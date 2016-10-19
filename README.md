# Author
![@extwiii](https://avatars1.githubusercontent.com/u/2933560?v=3&s=120)

Created by Bilal Cagiran

[E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 

### DEMO :  https://extwiii-timestamp.herokuapp.com/

# Timestamp Microservice API
### User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: 15 July, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:

```url
https://extwiii-timestamp.herokuapp.com/15 July 2016/
https://extwiii-timestamp.herokuapp.com/1468540800000
```

## Example output:

```json
{"unix":1468540800000,"natural":"July 15, 2016"}
```

