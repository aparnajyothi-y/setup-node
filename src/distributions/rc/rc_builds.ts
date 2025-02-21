import BaseDistribution from '../base-distribution';
import {NodeInputs} from '../base-models';

export default class RcBuild extends BaseDistribution {
  constructor(nodeInfo: NodeInputs) {
    super(nodeInfo);
  }
  protected getDistributionUrl(): string {
    if (this.nodeInfo.mirrorURL) {
      if (this.nodeInfo.mirrorURL != '') {
        return this.nodeInfo.mirrorURL;
      } else {
        if (this.nodeInfo.mirrorURL === '') {
          throw new Error(
            'Mirror URL is empty. Please provide a valid mirror URL.'
          );
        } else {
          throw new Error('Mirror URL is not a valid');
        }
      }
    } else {
      return 'https://nodejs.org/download/rc';
    }
  }
}
