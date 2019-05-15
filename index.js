let Matomo = require('react-native').NativeModules.Matomo;
module.exports = {
  initTracker: Matomo.initTracker,
  setUserId (userId) {
    if (userId !== null && userId !== userId !== undefined) {
      Matomo.setUserId(`${userId}`);
    }
  },
  setCustomDimension (id, value) {
    Matomo.setCustomDimension(id, value ? (`${value}`) : null);
  },
  trackAppDownload: Matomo.trackAppDownload,
  trackScreen (path, title) {
    Matomo.trackScreen(path, title);
  },
  trackGoal (goalId, revenue) {
    Matomo.trackGoal(goalId, { revenue });
  },
  trackEvent (category, action, name, value, url) {
    Matomo.trackEvent(category, action, {
      name,
      value,
      url,
    });
  },
  trackCampaign (name, keyword) {
    Matomo.trackCampaign(name, keyword);
  },
  trackContentImpression (name, piece, target) {
    Matomo.trackContentImpression(name, {
      piece,
      target,
    });
  },
  trackContentInteraction (name, interaction, piece, target) {
    Matomo.trackContentInteraction(name, {
      interaction,
      piece,
      target,
    });
  },
  trackSearch (query, category, resultCount, url) {
    Matomo.trackSearch(query, {
      category,
      resultCount,
      url,
    });
  },
};
