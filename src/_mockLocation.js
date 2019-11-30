import * as Location from "expo-location";

const tenMetersWithDegrees = 0.001;

const getlocation = increment =>{
    return{
        timestamp:10000000,
        coords:{
            latitude:23.794367 + increment * tenMetersWithDegrees,
            longitude:90.429756 + increment * tenMetersWithDegrees,
            altitude:5,
            altitudeAccuracy:5,
            accuracy:5,
            heading:0,
            speed:0
        }
    };
};
let counter = 0;

setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location:getlocation(counter)
    });
    counter++;
}, 1000);