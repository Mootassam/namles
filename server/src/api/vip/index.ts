export default (app) => {
  app.post(
    `/tenant/:tenantId/vip`,
    require('./vipCreate').default,
  );
  app.put(
    `/tenant/:tenantId/vip/:id`,
    require('./vipUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/vip/import`,
    require('./vipImport').default,
  );
  app.delete(
    `/tenant/:tenantId/vip`,
    require('./vipDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/vip/autocomplete`,
    require('./vipAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/vip`,
    require('./vipList').default,
  );
  app.get(
    `/tenant/:tenantId/vip/:id`,
    require('./vipFind').default,
  );
};
