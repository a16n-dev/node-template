import { Command } from 'commander';
import env from 'util/env';

const main = async (program: Command) => {
  if (env.isDev) {
    console.log('running in development');
  }
  console.log('something');
};

export default main;
