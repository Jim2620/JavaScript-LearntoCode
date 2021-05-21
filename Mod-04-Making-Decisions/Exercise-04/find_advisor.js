"use strict";

let studentName = "John";
let major = "BIOL";
let degreeTrack = "U";

let advisingLocation;

if (major == "BIOL" && degreeTrack == "U") {
    advisingLocation = "Science Bldg, Room 310";
}
else if (major == "BIOL" && degreeTrack == "G") {
    advisingLocation = "Science Bldg, Room 334";
}
else if (major == "CSCI" && degreeTrack == "U") {
    advisingLocation = "Sheppard Hall, Room 314";
}
else if (major == "CSCI" && degreeTrack == "G") {
    advisingLocation = "Sheppard Hall, Room 401";
}
else if (major == "ENG" && degreeTrack == "U") {
    advisingLocation = "Kerr Hall, Room 201";
}
else if (major == "ENG" && degreeTrack == "G") {
    advisingLocation = "Kerr Hall, Room 202";
}
else if (major == "HIST" && degreeTrack == "U") {
    advisingLocation = "Alva Hall, Room 114";
}
else if (major == "HIST" && degreeTrack == "G") {
    advisingLocation = "Alva Hall, Room 115";
}
else if (major == "MKT" && degreeTrack == "U") {
    advisingLocation = "Westly Hall, Room 314";
}
else if (major == "MKT" && degreeTrack == "G") {
    advisingLocation = "Westly Hall, Room 401";
} 
else {
    major = "<unknown>";
    advisingLocation = "";
}


console.log(studentName);
console.log(major);
console.log(degreeTrack);
console.log(advisingLocation);