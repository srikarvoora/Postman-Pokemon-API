
 # Postman API Requests Tutorial

This tutorial covers the steps to perform GET and POST requests using the Postman desktop application, along with an additional GET request to the **PokéAPI**.

## Step 1: Install Postman

1. Visit the official [Postman download page](https://www.postman.com/downloads/).
2. Choose the correct version for your operating system (Windows, macOS, or Linux).
3. Download and install the Postman desktop application.

## Step 2: Perform a GET Request

1. Open Postman.
2. Create a new GET request by selecting **"New"** → **"HTTP Request"**.
3. Enter the following URL in the request field:  
   `https://jsonplaceholder.typicode.com/users/1`
4. Click **"Send"** to execute the GET request.

```
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
```
## Step 3: Perform a POST Request

1. In Postman, create a new POST request by selecting **"New"** → **"HTTP Request"**.
2. Enter the following URL in the request field:  
   `https://jsonplaceholder.typicode.com/users`
3. Go to the **Body** tab, select **raw**, and set the format to **JSON**.
4. Add the following JSON data to the request body:

    ```json
    [
    {
        "id": 11,
        "name": "Krishna Rungta",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    ] 

5. Click **"Send"** to execute the POST request.


## Step 4: Perform a GET Request to the PokéAPI

1. In Postman, create a new GET request by selecting **"New"** → **"HTTP Request"**.
2. Enter the following URL in the request field:  
   `https://pokeapi.co/api/v2/pokemon/25`
   (You can replace `25` with any Pokémon ID under 1025.)
3. Click **"Send"** to execute the GET request.

```
{
    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 112,
    "cries": {
        "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
        "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg"
    },
    "forms": [
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
        }
    ]
}
.......
```

