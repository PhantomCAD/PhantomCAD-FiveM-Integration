const config = {
    settings: {
      // Name of the Community.
      name: "Test",
      // Name of the Community ID.
      CommunityID: "Community-ID",
      // Server ID.
      ServerID: "Server-ID",
      // The State The Server.
      state: "Los Santos",
      // The 911/999 Number.
      callNum: "911",
      // This is only for the version test of the cad.
      debug: true,
      // Sets time for the autolocation to send the data to the cad. DO NOT SET ANYTHING UNDER 30000 OR WE WILL KILL YOU!!!!!! this is in ms
      waitTime: 60000,
    },
  
    // make sure this is the model name and it is not conflickting with anyother models
    Vehicles: [ "PRIMO", "PRIMO" ],
    
    alert: {
      // Text to be displayed for Emergency Traffic Only Alert
      alert1: "Emergency Traffic Only",
      // Text to be displayed for Broadcast Alert
      alert2: "Stop Transmitting"
    },
}