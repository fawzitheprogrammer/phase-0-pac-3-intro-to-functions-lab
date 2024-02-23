// 1) Shout function
function shout(string) {
    return string.toUpperCase();
}

// 2) Whisper function
function whisper(string) {
    return string.toLowerCase();
}

// 3) logShout function
function logShout(string) {
    console.log(string.toUpperCase());
}

// 4) logWhisper function
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// 5) sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// Example usage
console.log(shout("hello")); // HELLO
console.log(whisper("HELLO")); // hello
logShout("hello"); // Logs: HELLO
logWhisper("HELLO"); // Logs: hello
console.log(sayHiToHeadphonedRoommate("hello")); // I can't hear you!
console.log(sayHiToHeadphonedRoommate("HELLO")); // YES INDEED!
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // I would love to!