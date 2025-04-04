export function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
        connect(){
            console.log('Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect(){
            console.log('Dissconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}