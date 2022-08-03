
// Take a look at below code. Write an utility type Transform which will take a 
// generic type argument, and if it is a Promise it will evaluate to the type 
// inside it.

// Source: https://dev.to/macsikora/series/4717

type X = Promise<string>
type Y = Promise<{ field: number }>

type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }

type Transform<A> = /** here your answer **/