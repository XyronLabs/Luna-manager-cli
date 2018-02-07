#!/usr/bin/env node

const LunaManager = require('luna-manager');

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
        LunaManager.updateExtension(process.cwd(), console.log, process.argv[3])
        break

    case '--extensions-update':
        LunaManager.checkInstalledExtensions(process.cwd(), console.log)
        break

    case '--extensions-update-force':
        LunaManager.checkInstalledExtensions(process.cwd(), console.log, true)
        break
    case '--extensions-remove':
        let extensions = LunaManager.checkFolderForExtensions(process.cwd());
        let extensionsData = [];
        extensions.forEach(e => {
            extensionsData.push(require(LunaManager.getExtensionData(process.cwd(), e)));
        });
        LunaManager.removeExtension(process.cwd(), console.log, process.argv[3], extensionsData, err => console.error(err))
        break
    
    case '--check-latest':
        LunaManager.checkRemoteBinariesVersion(version => console.log(version))
        break

    default:
        console.log("Usage: lm [option]")
        console.log("Optins avaliable:\n--update\n--force-update\n--new\n--extensions-install [packageName]\n--extensions-update\n--extensions-update-force\n--check-latest")
}