module.exports = {
  name: 'swapi',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/swapi',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
