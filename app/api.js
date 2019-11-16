import { remote } from 'electron';

const getVersion = () => {
  const appVersion = remote.app.getVersion();
  console.log(appVersion);

  return appVersion;
};

export default getVersion;
