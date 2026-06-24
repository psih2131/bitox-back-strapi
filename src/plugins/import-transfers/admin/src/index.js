import PluginIcon from './components/PluginIcon';
import { PLUGIN_ID } from './pluginId';

export default {
  register(app) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: 'Import Transfers',
      },
      Component: () => import('./pages/HomePage'),
      permissions: [],
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: false,
      isReady: true,
      name: PLUGIN_ID,
    });
  },
};
