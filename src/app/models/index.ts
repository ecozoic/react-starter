import { Prefixes, QuerySegmentTypes } from '../constants';

export interface QuerySegment {
  id: string;
  value: string;
  type: QuerySegmentTypes;
  prefix?: Prefixes;
}
