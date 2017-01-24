
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        // Licenses are platform-specific, need to check the platform before registering
        // Using device plugin to achieve that. To install the plugin enter:
        // cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-devic‌​e.git

        if (device.platform == "Android") {
            console.log("Device is Droid")
            var license = "XTUN3Q0ZFN21YNnp3bzRicUs4VFVFYWhZMzl4VEphNTFBaFFBZzk5bGc2V3V4RE5MaW1xTTJpZW9NeXhZUXc9PQoKYXBwVG9rZW49NTJiYTQxNWYtNDM3My00NjdjLWJiMjYtMjA3YzI2NzIwZmIxCnBhY2thZ2VOYW1lPWNvbS5jYXJ0by5zZGsuY29yZG92YQpvbmxpbmVMaWNlbnNlPTEKcHJvZHVjdHM9c2RrLWFuZHJvaWQtNC4qCndhdGVybWFyaz1jdXN0b20K";
        } else {
            var license = "XTUMwQ0ZBVVI0VFlhM2ZkaDVtUUVLN0RVMHpzeEFGd1lBaFVBdWtiTXAvMzAwOUJJb1BnMFlaekUvSmJkK3VrPQoKYXBwVG9rZW49OWEzNDAzZDAtODE1My00NzU0LTgwYWEtNDE4MDIxYjhlYTk0CmJ1bmRsZUlkZW50aWZpZXI9Y29tLmNhcnRvLnNkay5jb3Jkb3ZhCm9ubGluZUxpY2Vuc2U9MQpwcm9kdWN0cz1zZGstaW9zLTQuKgp3YXRlcm1hcms9Y3VzdG9tCg==";
            console.log("Device is iOS");
            // Set top margin to account for the status bar
            $(".navigation_bar").css("margin-top", "20px");
        }
        
        // License registration. This should be the first step
        MapView.registerLicense(license);
        
        // Passing html element is required for location and size
        // (standard <div> tag, size and location is set in index.css)
        var mapView = $(".mapView");
 
        // Initialize map with default base layer
        MapView.initialize(mapView);
        
        // Set click listener
        MapView.setClickListener(onMapClicked);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();

function onMapClicked(clickInfo) {

    if (device.platform == "iOS") {
        // Android is already Json, iOS returns clickInfo as a string
        clickInfo = $.parseJSON(clickInfo);
    }
    
    var latitude = clickInfo["latitude"];
    var longitude = clickInfo["longitude"];
    
    console.log("?????+++");
    // Click type can be "SINGLE", "DOUBLE", "DUAL" or "LONG"
    var clickType = clickInfo["click_type"];

    // alert("Clicked coordinates: " + x + ", " + y + " (type: " + clickType + ")");
    var title = "Clicked (" + clickType + ")";
    var description = "Coordinates: " + latitude + ", " + longitude;

    MapView.showPopup(longitude, latitude, title, description);
}




