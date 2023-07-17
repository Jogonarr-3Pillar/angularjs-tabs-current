import { HelloWorldController } from './hello-world/hello-world.controller';
import { TabsController } from './tabs/tabs.controller';

export function Components(app) {
    HelloWorldController(app);
    TabsController(app);
}
