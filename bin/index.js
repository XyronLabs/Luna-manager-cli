#!/usr/bin/env node

const LunaManager = require('luna-manager');

switch(process.argv[2]) {
    case '--update': case '-u':
        LunaManager.checkForUpdates(process.cwd(), console.log)
        break
    
    case '--update-force': case '-uf':
        LunaManager.checkForUpdates(process.cwd(), console.log, true)
        break

    case '--new': case '-n':
        LunaManager.newProject(process.cwd(), console.log)
        break

    case '--extensions-install': case '-ei':
        LunaManager.updateExtension(process.cwd(), console.log, process.argv[3])
        break

    case '--extensions-update': case '-eu':
        LunaManager.checkInstalledExtensions(process.cwd(), console.log)
        break

    case '--extensions-update-force': case '-euf':
        LunaManager.checkInstalledExtensions(process.cwd(), console.log, true)
        break
    case '--extensions-remove': case '-er':
        let extensions = LunaManager.checkFolderForExtensions(process.cwd());
        let extensionsData = [];
        extensions.forEach(e => {
            extensionsData.push(require(LunaManager.getExtensionData(process.cwd(), e)));
        });
        LunaManager.removeExtension(process.cwd(), console.log, process.argv[3], extensionsData, err => console.error(err))
        break
    
    case '--check-latest': case '-cl':
        LunaManager.checkRemoteBinariesVersion(version => console.log(version))
        break

    default:
        console.log("Usage: lm [option]")
        console.log("Optins avaliable:\n--update(-u)\n--update-force(-uf)\n--new(-n)\n--extensions-install(-ei) [packageName]\n--extensions-update(-eu)\n--extensions-update-force(-euf)\n--extensions-remove(-er)\n--check-latest(-cl)")
}