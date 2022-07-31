const config = {
    settings: {
      // Name of your community.
      name: "Test",
      // This is your community ID, it will be located at {Owner -> Fivem -> read the popup and agree -> click "GENERATE NEW" -> Copy the code and paste it where it says "YOUR COMMUNITY ID" below.}.
      CommunityID: "YOUR COMMUNITY ID",
      // This is your patrol server ID, it will be located at {Owner -> CAD Settings & Data -> Create new server (or use on that is already created) -> click "Copy AUTHY Code" -> Copy the code and paste it where it says "YOUR SERVER ID" below.}.
      ServerID: "YOUR SERVER ID",
      // The State The Server.
      state: "Los Santos",
      // The 911/999 Number.
      callNum: "911",
    },
  
    // This will allow whitelisting of vehicles for the auto location, please make sure the module name is not conflicting with any other models.
    Vehicles: [ "PRIMO", "HellcatRed" ],
    
    alert: {
      // Text to be displayed for Emergency Traffic Only Alert [not in use ]
      alert1: "Emergency Traffic Only",
      // Text to be displayed for Broadcast Alert [not in use ]
      alert2: "Stop Transmitting"
    },
}
