fx_version 'bodacious'
game "gta5"
version "1.0.7"
name "Phantom-CAD-Script"

ui_page 'html/index.html'

server_script {
    "./server/*.js",
    "config.js",
}

client_script {
    "./client/client.js",
    "config.js",
}

files {
	'html/*.*'
}

dependency {
    "yarn",
}

export 'Alert'