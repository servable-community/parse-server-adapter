

import createApp from './express/index.js'
import createHttpServer from './httpServer/index.js'
import launchWithNoMigration from './launchWithNoMigration/index.js'
import launchWithMigration from './launchWithMigration/index.js'
import doLaunch from './doLaunch/index.js'
import launchLiveServer from './liveServer/index.js'
// import adaptConfigurationStaging from './adaptConfig/_setConfigurations/staging/index.js'
import setConfigurations from './adaptConfig/setConfigurations/index.js'


export default {
  createApp,
  createHttpServer,
  launchWithNoMigration,
  launchWithMigration,
  doLaunch,
  launchLiveServer,
  setConfigurations
  // adaptConfigurationStaging,
  // adaptConfigurationProduction
}
