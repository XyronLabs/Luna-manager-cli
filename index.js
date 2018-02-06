const LunaManager = require('luna-manager').LunaManager;

switch(process.argv[2]) {
    case '--update':
        LunaManager.checkForUpdates(process.cwd())
        break
    
    case '--force-update':
        LunaManager.checkForUpdates(process.cwd(), true)
        break

    case '--new':
        LunaManager.newProject(process.cwd())
        break

    case '--extensions-install':
        LunaManager.Extensions.updateExtension(process.cwd(), process.argv[3])
        break

    case '--extensions-update':
        LunaManager.Extensions.checkInstalledExtensions(process.cwd())
        break

    case '--extensions-update-force':
        LunaManager.Extensions.checkInstalledExtensions(process.cwd(), true)
        break
    
    case '--check-latest':
        LunaManager.checkRemoteBinariesVersion(version => console.log(version))
        break

    default:
        console.log("No valid arguments!")
}