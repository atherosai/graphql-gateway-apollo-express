import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@server': __dirname,
  '@lib': `${__dirname}/lib`,
  '@logging': `${__dirname}/logging`,
  '@gateway': `${__dirname}/gateway`,
  '@db': `${__dirname}/db`,
  '@users': `${__dirname}/gateway/users`,
  '@tasks': `${__dirname}/gateway/tasks`,
  '@config': `${__dirname}/config`,
});
