export default {
  "schemas-to-ts": {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      commonInterfacesFolderName: 'schemas-to-ts',
      alwaysAddEnumSuffix: false,
      alwaysAddComponentSuffix: false,
      usePrettierIfAvailable: true,
      logLevel: 2,
      destinationFolder: 'src/common/schemas-to-ts',
    }
  },
};
