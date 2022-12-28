export const environment = {
  production: true,
  contextPath: '/lab-xtool-dxtagcoutlimitation',
  keycloak: {
    config: {
      url: '/auth',
      clientId: 'lab-xtool-dxtagcoutlimitation-frontend',
      resourceId: 'lab-xtool-dxtagcoutlimitation-backend',
      realm: 'TRE-PA'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: true,
      enableLogging: false
    }
  }
};
