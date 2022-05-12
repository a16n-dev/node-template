import env from './util/env';

const main = async () => {
  if (env.isDev) {
    console.log('running in development');
  }
  console.log('something');
};

main();
