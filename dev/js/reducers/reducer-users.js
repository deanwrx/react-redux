/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Fred",
            last: "Flintstone",
            age: 41,
            description: "Fred is the man of the house.",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Barney",
            last: "Rubble",
            age: 38,
            description: "Barney doesnt do much of anything. Hes finding his way.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Frank",
            last: "Enstein",
            age: 19,
            description: "Frank has a headache.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]
}
