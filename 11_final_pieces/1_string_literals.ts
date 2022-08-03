type World = "world" | "BBC" | "Sky";
type Hello = "Hello";
type Goodbye = "Goodbye";
type Greeting = Hello | Goodbye;
type Saluation = `${Greeting} ${World}`;

type domains = "bbc" | "iplayer";
type allowed_url = `https://www.${domains}.co.uk`;
