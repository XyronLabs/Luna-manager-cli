#!/usr/bin/env node

const LunaManager = require('luna-manager').LunaManager;

switch(process.argv[2]) {
    case '--update':
        LunaManager.checkForUpdates(process.cwd(), console.log)
        break
    
    case '--force-update':
        LunaManager.checkForUpdates(process.cwd(), console.log, true)
        break

    case '--new':
        LunaManager.newProject(process.cwd(), console.log)
        break

    case '--extensions-install':
        LunaManager.Extensions.updateExtension(process.cwd(), console.log, process.argv[3])
        break

    case '--extensions-update':
        LunaManager.Extensions.checkInstalledExtensions(process.cwd(), console.log)
        break

    case '--extensions-update-force':
        LunaManager.Extensions.checkInstalledExtensions(process.cwd(), console.log, true)
        break
    
    case '--check-latest':
        LunaManager.checkRemoteBinariesVersion(version => console.log(version))
        break

    default:
        console.log("Usage: lm [option]")
        console.log("Optins avaliable:\n--update\n--force-update\n--new\n--extensions-install [packageName]\n--extensions-update\n--extensions-update-force\n--check-latest")
}